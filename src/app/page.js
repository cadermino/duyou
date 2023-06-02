import Image from 'next/image';
import { Hero } from "../components/home/hero";
import { Process } from "../components/home/process";
import { RequestBanner } from "../components/home/request-banner";
import { Tracking } from "../components/home/tracking";
import { Services } from "../components/home/services";
import { FAQ } from "../components/home/faq";

export default function Page() {
  return (
    <>
      <main>
        <Hero/>
        <Process/>
        <RequestBanner/>
        <Tracking/>
        <div className="
          flex
          flex-col
          md:flex-row
          md:px-20
          ">
            <div className="basis-1/2">
              <Services/>
            </div>
            <div className="basis-1/2">
              <FAQ/>
            </div>
        </div>
      </main>
      </>);
}
