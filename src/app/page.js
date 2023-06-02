import Image from 'next/image';
import { Hero } from "../components/home/hero";
import { Process } from "../components/home/process";
import { RequestBanner } from "../components/home/request-banner";
import { Tracking } from "../components/home/tracking";

export default function Page() {
  return (
    <>
      <main>
        <Hero/>
        <Process/>
        <RequestBanner/>
        <Tracking/>
      </main>
      </>);
}
