// Generate images with Kie's GPT Image 2 API.
// Usage: node scripts/kie-image.mjs <out.png> <aspect> <1K|2K|4K> <prompt-file> [transparent] [ref-image...]
import fs from 'node:fs';
import path from 'node:path';

const KEY = process.env.KIE_API_KEY;
if (!KEY) throw new Error('KIE_API_KEY is not set');
const API = 'https://api.kie.ai';
const H = { Authorization: `Bearer ${KEY}`, 'Content-Type': 'application/json' };

const [out, aspect, resolution, promptFile, bg, ...refs] = process.argv.slice(2);
const prompt = fs.readFileSync(promptFile, 'utf8').trim();

async function upload(file) {
  const ext = path.extname(file).slice(1).replace('jpg', 'jpeg');
  const b64 = fs.readFileSync(file).toString('base64');
  const r = await fetch(`https://kieai.redpandaai.co/api/file-base64-upload`, {
    method: 'POST', headers: H,
    body: JSON.stringify({ base64Data: `data:image/${ext};base64,${b64}`, uploadPath: 'images/purgatorio', fileName: path.basename(file) }),
  }).then(r => r.json());
  if (!r.data?.downloadUrl) throw new Error('upload failed: ' + JSON.stringify(r));
  return r.data.downloadUrl;
}

const input = { prompt, aspect_ratio: aspect, resolution };
if (bg === 'transparent') input.background = 'transparent';
const model = refs.length ? 'gpt-image-2-image-to-image' : 'gpt-image-2-text-to-image';
if (refs.length) input.input_urls = await Promise.all(refs.map(upload));

const created = await fetch(`${API}/api/v1/jobs/createTask`, { method: 'POST', headers: H, body: JSON.stringify({ model, input }) }).then(r => r.json());
if (created.code !== 200) throw new Error('createTask failed: ' + JSON.stringify(created));
const taskId = created.data.taskId;
console.log('task', taskId);

for (let i = 0; i < 120; i++) {
  await new Promise(r => setTimeout(r, 5000));
  const info = await fetch(`${API}/api/v1/jobs/recordInfo?taskId=${taskId}`, { headers: H }).then(r => r.json());
  const st = info.data?.state;
  if (st === 'success') {
    const url = JSON.parse(info.data.resultJson).resultUrls[0];
    const buf = Buffer.from(await fetch(url).then(r => r.arrayBuffer()));
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, buf);
    fs.writeFileSync(out + '.json', JSON.stringify({ model, input: { ...input, input_urls: refs.length ? refs : undefined }, prompt }, null, 2));
    console.log('saved', out, buf.length);
    process.exit(0);
  }
  if (st === 'fail') throw new Error('task failed: ' + JSON.stringify(info.data));
}
throw new Error('timeout');
