import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <article className="
      text-white
      px-5
      py-8
      flex 
      flex-col
      md:flex-row
      md:justify-between
      justify-center
      bg-blue-dark-duyou
      ">
      <h1 className="
        font-avenir-light
        text-[40px]
        leading-10
        pb-4
        ">Acelera tu negocio de manera eficiente <span className="
                                                  font-avenir-heavy">con logística de China a México</span></h1>
      <div className="
        flex justify-center
        ">
        <div className="
          max-w-[358px]
          max-h-[200px]
          block
          w-auto
          h-auto
          relative
          ">
          <Image
            src="https://placehold.co/358x200.png"
            width={358}
            height={200}
            alt="Duyou Logo"

          />
        </div>
      </div>
      <h2 className="
        font-avenir-light
        text-lg
        text-center
        pt-4
        ">Tenemos soluciones personalizadas para tu negocio.</h2>
    </article>
  );
}
