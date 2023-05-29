import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <article className="
      rounded-b-xl
      text-white
      px-5
      pt-8
      pb-16
      flex 
      flex-col
      md:flex-row
      md:justify-between
      justify-center
      bg-blue-dark-duyou
      ">
      <h1 className="
        basis-1/2
        font-avenir-light
        text-[40px]
        leading-10
        pb-4
        ">Acelera tu negocio de manera eficiente <span className="
                                                  font-avenir-heavy">con logística de China a México</span></h1>
      <div className="
        basis-1/2
        flex 
        justify-center
        ">
        <div className="
          max-w-[612px]
          max-h-[313px]
          w-[358px]
          h-[200px]
          lg:w-[612px]
          lg:h-[313px]
          block
          relative
          ">
          <Image
            src="https://placehold.co/358x200.png"
            // width={358}
            // height={200}
            fill
            alt="Duyou Logo"

          />
        </div>
      </div>
      <h2 className="
        md:hidden
        font-avenir-light
        text-lg
        text-center
        pt-4
        ">Tenemos soluciones personalizadas para tu negocio.</h2>

      <div className="
        md:hidden
        mt-4
        text-lg
        font-avenir-light
        text-center
        underline
        decoration-1">
        <Link href="test">Ver video</Link>
      </div>
      <div className="
        md:hidden
        mt-8
        text-center">
        <Link href="test" className="
          rounded-lg
          py-3
          px-20
          bg-red-duyou-primary
          text-lg
          ">Cotizar envío</Link>
      </div>
    </article>
  );
}
