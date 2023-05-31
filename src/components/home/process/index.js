import Image from 'next/image';
import Link from 'next/link';
import processList from "./process-list.json";

export function Process() {
  return (
    <article className="
    p-5
      ">
      <div className="
        text-center
        text-xl
        py-8
        ">Impulsa tu negocio con <span className="text-red-duyou-secondary">nuestro proceso de logística.</span></div>
      <div className="flex
        flex-row
        justify-between
        md:grid 
        md:grid-cols-3
        md:overflow-auto
        md:px-20
        overflow-scroll
        ">
        {processList.map((src, i) => {
          return(
            <div className="
              bg-[#EEEEEE]
              md:bg-[#FFF]
              p-4
              mr-4
              rounded-3xl
              min-w-[266px]
              min-h-[334px]
              ">
              <div className="
                pt-8
                flex
                justify-center
                md:justify-start
                ">  
                <div className="
                  relative
                  w-[106px]
                  h-[81px]
                  mb-5
                  ">  
                  <Image 
                    src={src.image}
                    fill
                    alt="process"/>
                </div>
              </div>  
              <div className="
                text-gray-dark-secondary-duyou
                text-[15px]
                mb-2
                font-avenir-black 
                ">{src.title}</div>
              <div className="
                text-[12px]
                ">{src.text}</div>
              <div className="
                mt-14
                text-right
                text-[15px]
                underline
                decoration-1
                text-red-duyou-secondary
                "><Link href={src.url}>Ver más</Link></div>
            </div>
          );
          })}
      </div>
    </article>
  );
}
