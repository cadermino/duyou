import Image from 'next/image';
import { Hero } from "../components/home/hero";
import { Process } from "../components/home/process";

export default function Page() {
  return (
    <>
      <main>
        <Hero/>
        <Process/>
        <article className="
          ">
          {/* <h2>sub heading of the document</h2>
          <figure>
            <figcaption>about the image here</figcaption>
          </figure>
          your content will appear here here
          <mark> To highlight a line or paragraph</mark> */}
        </article>
      </main>
      </>);
}
