import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="
      rounded-t-xl
      p-10
      bg-blue-dark-duyou 
      text-white">
      
      <div id="logo desktop" className="
        hidden
        md:block
        w-[149px]
        h-[29.71px]
        2xl:w-[260px]
        2xl:h-[51.85px]
        relative
        ">
        <Image
          src="https://s3.us-west-2.amazonaws.com/www.duyou.com.mx/assets/logo_footer.svg"
          fill={true}
          alt="Duyou Logo"
        />
      </div>

      <div className="
        pt-10
        flex
        md:flex-row
        flex-col
        justify-between
        ">
        <div id="siguenos mobile" className="
          text-center
          block
          md:hidden">
          <div className="
            pb-6
            flex 
            justify-center">
            <Image
              src="https://s3.us-west-2.amazonaws.com/www.duyou.com.mx/assets/logo_footer.svg"
              width={149}
              height={29.71}
              alt="Duyou Logo"
            />
          </div>
          <div className="
            text-2xl
            font-avenir-book
            pb-6">Síguenos</div>
          <div className="
            flex 
            flex-row 
            justify-between
            px-8
            pb-6
            ">
            <Image
              src="https://s3.us-west-2.amazonaws.com/www.duyou.com.mx/assets/facebook.svg"
              width={34.77}
              height={34.66}
              alt="Duyou facebook"
            />
            <Image
              src="https://s3.us-west-2.amazonaws.com/www.duyou.com.mx/assets/linkedin.svg"
              width={34.77}
              height={34.66}
              alt="Duyou linkedin"
            />
            <Image
              src="https://s3.us-west-2.amazonaws.com/www.duyou.com.mx/assets/youtube.svg"
              width={34.77}
              height={34.66}
              alt="Duyou youtube"
            />
            <Image
              src="https://s3.us-west-2.amazonaws.com/www.duyou.com.mx/assets/tiktok.svg"
              width={34.77}
              height={34.66}
              alt="Duyou tiktok"
            />
          </div>
          <div className="
            text-base
            pb-6">
            <div>Duyou international logistics S.A. de C.V.</div>
            <div>Cerrada La Patiña No.101</div>
            <div>Col. Futurama Monterrey</div>
            <div>C.P. 37180 León, Guanajuato.</div>
            <div>Horario de trabajo:</div>
            <div>Lunes a Sábado de 14:00 a 21:00.</div>
          </div>
          <div className="
            text-base 
            flex
            flex-row
            justify-between
            pb-6">
            <div>
              <div>Tel oficina</div>
              <div className="underline decoration-1">
                <Link href="tel: 4772432171">4772432171</Link>
              </div>
            </div>  
            <div>
              <div>Escribanos a</div>
              <div className="underline decoration-1">
                <Link href="mailto: contacto@duyou.com.mx">contacto@duyou.com.mx</Link>
              </div>
            </div>  
          </div>
        </div>

        <div id="siguenos desktop" className="
          hidden
          md:block
          pr-8
          ">
          <div className="
            font-avenir-black
            text-2xl
            2xl:text-4xl
            pb-1">Duyou International logistics S.A. de C.V.</div>
          <div className="
            text-base
            2xl:text-[22px]
            2xl:leading-7
            pb-6">
            <div>Cerrada La Patiña No.101</div>
            <div>Col. Futurama Monterrey</div>
            <div>C.P. 37180 León, Guanajuato.</div>
            <div>Horario de trabajo:</div>
            <div>Lunes a Sábado de 14:00 a 21:00.</div>
            <div>Tel oficina: 4772432171</div>
            <div>Escribanos a: contacto@duyou.com.mx</div>
          </div>
          <div className="
            flex 
            flex-row 
            justify-start
            pb-6
            gap-x-10
            ">
            <div className="
              w-[34.77px]
              h-[34.66px]
              2xl:w-[47.57px]
              2xl:h-[47.57px]
              relative
              ">
              <Image
                src="https://s3.us-west-2.amazonaws.com/www.duyou.com.mx/assets/facebook.svg"
                fill={true}
                alt="Duyou facebook"
              />
            </div>
            <div className="
              w-[34.77px]
              h-[34.66px]
              2xl:w-[47.57px]
              2xl:h-[47.57px]
              relative
              ">
              <Image
                src="https://s3.us-west-2.amazonaws.com/www.duyou.com.mx/assets/linkedin.svg"
                fill={true}
                alt="Duyou linkedin"
              />
            </div>
            <div className="
              w-[34.77px]
              h-[34.66px]
              2xl:w-[47.57px]
              2xl:h-[47.57px]
              relative
              ">
              <Image
                src="https://s3.us-west-2.amazonaws.com/www.duyou.com.mx/assets/youtube.svg"
                fill={true}
                alt="Duyou youtube"
              />
            </div>
            <div className="
              w-[34.77px]
              h-[34.66px]
              2xl:w-[47.57px]
              2xl:h-[47.57px]
              relative
              ">
              <Image
                src="https://s3.us-west-2.amazonaws.com/www.duyou.com.mx/assets/tiktok.svg"
                fill={true}
                alt="Duyou tiktok"
              />
            </div>
          </div>
        </div>

        <div id="servicios" className="
            pb-6">
          <div className="
            text-2xl
            2xl:text-4xl
            pb-3
            md:font-avenir-black
            ">Servicios</div>
          <div className="
            underline
            decoration-1
            text-sm
            2xl:text-[22px] 
            2xl:leading-7
            text-underline
            flex 
            flex-row
            md:flex-col
            justify-between">
            <div className="
              pr-14
              ">
              <div className="pb-3">
                <Link href="/">Transporte Maritimo de mercancias</Link>
              </div>
              <div className="pb-3">
                <Link href="/">Transporte Aéreo de mercancías</Link>
              </div>
              <div className="pb-3">
                <Link href="/">Almacenamiento en zona franca</Link>
              </div>
            </div>
            <div className="
              pr-5
              ">
              <div className="pb-3">
                <Link href="/">Intermediación Aduanera</Link></div>
              <div className="pb-3">
                <Link href="/">Asesoramiento Comercial</Link></div>
              <div className="pb-3">
                <Link href="/">Hospedaje</Link></div>
              <div className="pb-3">
                <Link href="/">Traductor</Link></div>
            </div>
          </div>
        </div>

        <div id="Más de logistica internacional" className="pb-6">
          <div className="
            text-2xl
            2xl:text-4xl
            pb-3
            text-center
            sm:text-left
            md:font-avenir-black
            ">Más de logística internacional</div>
          <div className="
            underline
            decoration-1
            text-sm
            2xl:text-[22px] 
            2xl:leading-7
            flex 
            flex-row
            md:flex-col
            justify-between">
            <div className="
              pr-20
              ">
              <div className="pb-3">
                <Link href="/">Link</Link></div>
              <div className="pb-3">
                <Link href="/">Link</Link></div>
              <div className="pb-3">
                <Link href="/">Link</Link></div>
            </div>
            <div className="
              pr-5
              ">
              <div className="pb-3">
                <Link href="/">Link</Link></div>
              <div className="pb-3">
                <Link href="/">Link</Link></div>
              <div className="pb-3">
                <Link href="/">Link</Link></div>
            </div>
          </div>
        </div>

        <div id="Contacto China" className="pb-6">
          <div className="
            text-xl
            md:text-2xl
            md:font-avenir-black
            2xl:text-4xl
            pb-3">Contacto China</div>
          <div className="
              flex 
              flex-row
              justify-between">
            <div className="
              text-sm
              2xl:text-[22px] 
              2xl:leading-7
              ">
              <div className="pb-0">地址: 广州市荔湾区滨滨电子城3楼C007-008</div>
              <div className="pb-0">联系人: NICOLE 电话:</div>
              <div className="
                pb-0
                underline
                decoration-1
                ">
                <Link href="tel: 18148710486 020-80502034">Tel: 18148710486 020-80502034</Link>
              </div>
              <div className="pb-0">入仓时需在外箱上写上唛头并携带装箱单(没有装箱单的一律拒收!)</div>
              <div className="pb-0">工作时间: 周一到周六14时至 21时。送货前请先致电</div>
              <div className="pb-0">工作人员确认</div>
              <div className="pb-0">联系人：阿熙</div>
              <div className="
                pb-0
                underline
                decoration-1
                ">
                <Link href="tel: 18148710486">Tel: 18148710486</Link>
              </div>
              <div className="pb-0">联系人: Carlos Pumar</div>
              <div className="
                underline
                decoration-1
                pb-0
                ">
                <Link href="tel: 02080502034">Tel: 02080502034</Link>
              </div>
              <div className="pb-0">联系人: Armando Jiménez</div>
              <div className="
                pb-0
                underline
                decoration-1
                ">
                <Link href="tel: 15622261927">Tel: 15622261927</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="
        text-red-duyou-primary 
        text-center
        text-sm
        2xl:text-[22px] 
        2xl:leading-7
        ">
        Copyright © 2023 Duyou international logistics S.A. de C.V.
      </div>

    </footer>
  );
}




      