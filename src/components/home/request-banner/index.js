import Image from 'next/image';

export function RequestBanner() {
  return (
    <article className="
    p-5
      ">
      <div className="
        text-center
        text-2xl
        2xl:text-6xl
        py-8
        ">Solicita tu cotización y espera<span className="
          text-red-duyou-secondary
          font-avenir-black 
          "> tu mercancía en la puerta de tu negocio.</span></div>
      <div className="
        flex
        justify-center
        ">
        <div className="
          relative
          h-[189px]
          w-[288px]
          block
          md:hidden
          ">
          <Image src="https://s3.us-west-2.amazonaws.com/www.duyou.com.mx/assets/request_home_2x.png"
            fill
            alt="Solicita tu cotización"/>
        </div>
        <div className="
          relative
          w-full
          h-auto
          max-w-[1920px]
          max-h-[446px]
          lg:min-h-[300px]
          md:min-h-[200px]
          hidden
          md:block
          ">
          <Image src="https://s3.us-west-2.amazonaws.com/www.duyou.com.mx/assets/request-banner-lightweight.png"
            fill
            alt="Solicita tu cotización"/>
        </div>
      </div>
    </article>
  );
}
