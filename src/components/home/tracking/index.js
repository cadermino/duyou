import Image from 'next/image';
import Link from 'next/link';

export function Tracking() {
  return (
    <article 
      style={{backgroundPosition: 'right 39% bottom 2%'}}
      className="
      p-5
      pb-40
      bg-[url('https://s3.us-west-2.amazonaws.com/www.duyou.com.mx/assets/ship_home.svg')]
      bg-no-repeat
      ">
      <div className="
        text-center
        text-2xl
        2xl:text-6xl
        py-8
        ">Sigue día a día el traslado de tu mercancía.<span className="
          text-red-duyou-secondary
          font-avenir-black 
          "> Puerta a puerta.</span>
      </div>
      <div className="
        mt-1
        text-center">
        <Link href="test" className="
          text-white
          rounded-lg
          py-3
          px-20
          bg-red-duyou-primary
          text-lg
          ">Rastrear pedido</Link>
      </div>
      <div className="
        text-blue-dark-duyou
        flex
        justify-start
        pt-10
        ">
        <div className="
          pr-10
          md:pr-24
          md:pl-20
          ">
          <div className="
            text-red-duyou-primary
            text-[55px]
            2xl:text-[80px]
            ">10+</div>
          <div className="
            text-[17px]
            2xl:text-5xl
            ">Más de 10 años de experiencia.</div>
        </div>
        <div className="
          ">
          <div className="
            text-red-duyou-primary
            text-[55px]
            2xl:text-[80px]
            ">2,500+</div>
          <div className="
            text-[17px]
            2xl:text-5xl
            ">Clientes emprendiendo con nosotros.</div>
        </div>
      </div>
      <div className="
        text-blue-dark-duyou
        pr-10
        md:pl-20
        ">
        <div className="
          text-red-duyou-primary
          text-[55px]
          2xl:text-[80px]
          ">5,300+</div>
        <div className="
          text-[17px]
          2xl:text-5xl
          max-w-[200px]
          md:max-w-sm
          ">Envíos puerta a puerta en los 32 estados de la República Mexicana.</div>
      </div>
    </article>
  );
}
