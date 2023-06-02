import Link from 'next/link';

export function Services() {
  const services = [
    {
      title: "Transporte marítimo de mercancía.",
      url: "/",
    },
    {
      title: "Transporte aéreo de mercancía.",
      url: "/",
    },
    {
      title: "Almacenamiento en Zona Franca.",
      url: "/",
    },
    {
      title: "Intermediación Aduanera.",
      url: "/",
    },
    {
      title: "Asesoramiento Comercial.",
      url: "/",
    },
    {
      title: "Asesoramiento Internacional.",
      url: "/",
    },
    {
      title: "Búsqueda de hospedaje.",
      url: "/",
    },
    {
      title: "Traductor.",
      url: "/",
    },
  ];

  return (
    <article className="
    p-5
      ">
      <div className="
        text-2xl
        2xl:text-6xl
        py-8
        ">Conoce todos los servicios que tenemos para ti.</div>
      <div className="
        grid 
        grid-cols-2 
        gap-3
        text-center
        ">
        {services.map((src, index) => {
          return(
            <Link className="
              text-sm
              2xl:text-[22px]
              px-2
              py-5
              text-white
              bg-red-duyou-primary
              rounded-xl
              "
              href={src.url}>{src.title}</Link>
          );
        })}
      </div>
    </article>
  );
}
