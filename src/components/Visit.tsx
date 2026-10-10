import { asset } from "@/lib";
import { Clock, InstagramLogo, MapPin, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { instagramUrl, mapsEmbed, mapsUrl, site, whatsappUrl } from "@/data/site";
import { Plaque } from "./Plaque";

function Pending({ children }: { children: React.ReactNode }) {
  return <span className="text-[#ff8a95]">[{children}]</span>;
}

export function Visit() {
  const rows = [
    {
      icon: MapPin,
      label: "Dónde",
      value: (
        <>
          {site.place}
          <br />
          {site.address}
        </>
      ),
    },
    { icon: Clock, label: "Horario", value: site.hours ?? <Pending>Horario por confirmar</Pending> },
    {
      icon: InstagramLogo,
      label: "Instagram",
      value: instagramUrl ? (
        <a href={instagramUrl} target="_blank" rel="noreferrer" className="underline decoration-blood underline-offset-4 hover:text-white">
          @{site.instagram}
        </a>
      ) : (
        <Pending>Usuario por confirmar</Pending>
      ),
    },
    {
      icon: WhatsappLogo,
      label: "WhatsApp",
      value: whatsappUrl ? (
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="underline decoration-blood underline-offset-4 hover:text-white">
          Escríbenos
        </a>
      ) : (
        <Pending>Número por confirmar</Pending>
      ),
    },
  ];

  return (
    <section id="visita" aria-labelledby="visita-title" className="relative isolate overflow-hidden py-24 sm:py-32">
      <img src={asset("/img/fotos/fachada.webp")} alt="" aria-hidden loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#0a0607_0%,#0a0607e6_45%,#0a0607b3_100%),linear-gradient(#0a0607_0%,transparent_25%,transparent_75%,#0a0607_100%)]" />

      <div className="mx-auto grid max-w-[1400px] gap-14 px-4 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center">
        <div>
          <h2 id="visita-title" data-reveal className="neon font-gothic text-[clamp(2.8rem,6.5vw,5rem)] font-extrabold leading-[0.98]">
            Ven al castillo
          </h2>
          <p data-reveal className="mt-5 max-w-[42ch] text-[1.25rem] leading-relaxed text-bone/90">
            Un espacio para todo público: ven con tu familia, con tus amigos o contigo misma.
          </p>
          <dl className="mt-10 space-y-6">
            {rows.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex gap-4">
                <Icon size={28} weight="light" className="mt-0.5 shrink-0 text-[#ff8a95]" aria-hidden />
                <div>
                  <dt className="font-cond text-[1rem] uppercase tracking-[0.12em] text-bone-dim">{label}</dt>
                  <dd className="mt-0.5 text-[1.25rem] leading-snug text-bone">{value}</dd>
                </div>
              </div>
            ))}
          </dl>
          <div className="mt-10">
            <Plaque href={mapsUrl} target="_blank" rel="noreferrer">
              Cómo llegar
            </Plaque>
          </div>
        </div>

        <div data-reveal className="relative aspect-[4/3] w-full overflow-hidden rounded-[6px] shadow-[0_0_0_1px_#ffffff1a,0_0_0_8px_#120a0c,0_0_0_9px_#c1121f88,0_30px_80px_#000]">
          <iframe
            title={`Mapa: ${site.place}`}
            src={mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0 [filter:invert(0.92)_hue-rotate(180deg)_saturate(0.6)_contrast(0.95)]"
          />
        </div>
      </div>
    </section>
  );
}
