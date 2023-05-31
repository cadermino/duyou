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
      md:pt-20
      bg-blue-dark-duyou
      ">
      <div className="
        flex 
        flex-col
        md:flex-row
        md:justify-between
        justify-center
        ">
        <h1 className="
          basis-1/2
          font-avenir-light
          text-[40px]
          2xl:text-[80px]
          2xl:leading-[5rem]
          leading-10
          pb-4
          ">Acelera tu negocio de manera eficiente 
          <span className="
            font-avenir-heavy"> con logística de China a México</span>
          <div className="
            hidden
            md:block
            text-sm
            2xl:text-xl
            mt-5
            ">Tenemos soluciones personalizadas para tu negocio.</div>
        </h1>
        <div className="
          basis-1/2
          flex 
          justify-center
          ">
          <div className="
            max-w-[670px]
            max-h-[856px]
            w-[335px]
            h-[428px]
            lg:w-[335px]
            lg:h-[428px]
            block
            relative
            ">
            <Image
              src="https://s3.us-west-2.amazonaws.com/www.duyou.com.mx/assets/container_home%402x.png"
              fill
              alt="Duyou container"

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
      </div>
      <div className="
        2xl:text-xl
        mt-16
        text-center
        flex flex-col justify-center
        ">
        <Link href="test">
          <div>
            <div className="
              w-[110.2px]
              h-[63.35px]
              hidden
              md:inline-block
              relative
              ">
              <Image
                src="https://placehold.co/111x64.png"
                fill
                alt="youtube"

              />
            </div>
          </div>  
          <div>Ver video</div>
        </Link>
      </div>
    </article>
  );
}
