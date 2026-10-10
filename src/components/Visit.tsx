import { Clock, InstagramLogo, MapPin, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { instagramUrl, mapsEmbed, mapsUrl, site, whatsappUrl } from "@/data/site";

function Pending({ children }: { children: React.ReactNode }) {
  return <span className="text-blood">[{children}]</span>;
}

export function Visit() {
  const rows = [
    { icon: MapPin, label: "Dónde", value: <>{site.place}<br />{site.address}</> },
    { icon: Clock, label: "Horario", value: site.hours ?? <Pending>Horario por confirmar</Pending> },
    {
      icon: InstagramLogo,
      label: "Instagram",
      value: instagramUrl ? <a href={instagramUrl} target="_blank" rel="noreferrer" className="underline decoration-blood underline-offset-4">@{site.instagram}</a> : <Pending>Usuario por confirmar</Pending>,
    },
    {
      icon: WhatsappLogo,
      label: "WhatsApp",
      value: whatsappUrl ? <a href={whatsappUrl} target="_blank" rel="noreferrer" className="underline decoration-blood underline-offset-4">Escríbenos</a> : <Pending>Número por confirmar</Pending>,
    },
  ];

  return (
    <section id="visita" aria-labelledby="visita-title" className="paper relative">
      <div aria-hidden className="torn absolute inset-x-0 top-0 -translate-y-[calc(100%-1px)] text-paper" />
      <div className="mx-auto grid max-w-[1400px] gap-14 px-4 pb-20 pt-14 sm:px-8 sm:pb-28 sm:pt-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center">
        <div>
          <h2 id="visita-title" data-reveal className="display text-[clamp(4.6rem,11vw,10rem)]">
            Ven al
            <br />
            <span className="text-blood">castillo</span>
          </h2>
          <p data-reveal className="mt-6 max-w-[40ch] text-[1.2rem] leading-relaxed">
            Un espacio para todo público: ven con tu familia, con tus amigos o contigo misma.
          </p>
          <dl className="mt-10 grid gap-6 sm:grid-cols-2">
            {rows.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex gap-3 border-t border-ink/20 pt-4">
                <Icon size={26} weight="regular" className="mt-0.5 shrink-0 text-blood" aria-hidden />
                <div>
                  <dt className="label text-[1.05rem] tracking-[0.06em] text-ash">{label}</dt>
                  <dd className="mt-1 text-[1.15rem] leading-snug">{value}</dd>
                </div>
              </div>
            ))}
          </dl>
          <a href={mapsUrl} target="_blank" rel="noreferrer" className="btn btn-blood mt-10">
            Cómo llegar
          </a>
        </div>

        <div data-reveal className="bg-ink p-3 shadow-[0_30px_70px_#0e0b0b55]">
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink-2">
            <iframe
              title={`Mapa: ${site.place}`}
              src={mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0 [filter:grayscale(1)_contrast(1.1)]"
            />
          </div>
          <p className="label mt-3 flex justify-between text-[1.05rem] tracking-[0.04em] text-bone">
            <span>{site.place}</span>
            <span className="text-blood">Bogotá</span>
          </p>
        </div>
      </div>
    </section>
  );
}
