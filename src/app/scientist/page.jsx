import Link from "next/link";
import { zainLocal } from "next/font/local";
import { ArrowLeft, Code } from "@phosphor-icons/react/dist/ssr";
import Footer from "@/components/footer";
import Image from "next/image";

const zain = zainLocal({
  src: "../fonts/Alata,Geist,Geist_Mono,JetBrains_Mono/Zain/Zain-Bold.ttf",
});

export default async function Scientist() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("intenional delay");
    }, 1000);
  });
  return (
    <section className="w-full h-fit bg-[#f8f4e1] text-black">
      <header>
        <div
          className={` ${zain.className} w-full h-48 lg:h-64 bg-gradient-to-b from-sky-300 to-[#f8f4e1] flex justify-center items-center text-5xl lg:text-9xl`}
        >
          Data Scientist
        </div>
      </header>

      <main className="px-[2em] xl:px-[12em] w-full h-fit">
        {/* image hero */}
        <div className="w-full h-auto">
          <div className="w-full h-auto bg-white mt-6 overflow-hidden rounded-2xl">
            <div className="flex justify-start items-center overflow-hidden w-full h-10 md:h-12 gap-3 md:gap-5 px-4 bg-orange-200">
              <div className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] relative">
                <Image src="/jupyter.png" fill alt="ghazy" className="" />
              </div>
              <span className="text-xs md:text-lg">Jupyter</span>
              <span className="w-[7em] h-3 rounded-full bg-gray-100"></span>
              <span className="w-[5em] h-3 rounded-full bg-gray-100"></span>
              <span className="w-[2em] h-3 rounded-full bg-gray-100"></span>
            </div>
            <div className="pl-10 pt-4 w-full h-auto aspect-[4/2] md:aspect-[6/2]">
              <p className="text-xs md:text-sm">
                <code>{">"} import numpy as np</code>
              </p>
              <div className="w-3/4 h-3 rounded-full bg-gray-200 mt-3"></div>
              <div className="w-5/6 h-3 rounded-full bg-gray-200 mt-3"></div>
              <div className="w-7/12 h-3 rounded-full bg-gray-200 mt-3"></div>
            </div>
          </div>
        </div>

        {/* overview */}
        <h1
          className={`${zain.className} text-[2em] md:text-[3.5em] xl:text-[5.5em] pt-12 md:pt-24 md:text-center`}
        >
          Overview
        </h1>
        <div className="w-full h-fit flex flex-wrap justify-center">
          <p className="w-full max-w-[500px] md:max-w-[800px] h-fit text-justify text-sm/6 lg:text-lg/8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            quae est, eveniet rerum non, illo numquam ducimus ipsam quisquam
            nesciunt quo at quibusdam nemo exercitationem fugit! Nobis
            similique, facilis aliquam soluta quidem magni dolorum aliquid?
            Dolore maxime consectetur saepe amet consequatur, totam deleniti
            iure. Aperiam veniam eaque autem, laborum dignissimos ipsa
            repudiandae quam iusto reprehenderit rerum molestias, dolorum iste
            necessitatibus sequi, culpa provident tempora corporis fugit natus
            harum tenetur a! Vel rerum explicabo vero nisi.
          </p>
          <p className="w-full max-w-[500px] md:max-w-[800px] h-fit text-justify text-sm/6 lg:text-lg/8 pt-8 md:pt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            minus sed possimus, reprehenderit dolore ratione explicabo natus
            omnis soluta qui id, consequuntur necessitatibus nesciunt magnam
            veritatis distinctio eligendi deleniti corrupti aperiam, doloribus
            hic quidem aliquid!
          </p>
        </div>

        {/* image */}
        <div className="w-full h-auto aspect-[5/3] md:aspect-[7/3] bg-pink-400 mt-12 md:mt-24 relative overflow-hidden rounded-3xl">
          <Image src="/jupy1.png" fill alt="ghazy" className="relative" />
        </div>
        <div className="w-full h-auto aspect-[5/3] md:aspect-[7/3] bg-pink-400 mt-6 md:mt-12 relative overflow-hidden rounded-3xl">
          <Image src="/jupy2.jpg" fill alt="ghazy" className="relative" />
        </div>

        {/* back */}
        <div className="w-full h-fit flex justify-center mt-8">
          <Link href="/">
            <button
              className={`${zain.className} flex items-center gap-2 border px-4 py-2 rounded-full text-xs md:text-lg cursor-pointer`}
            >
              <span>
                <ArrowLeft className="w-4 h-4 md:w-6 md:h-6" />
              </span>
              Back to home?
            </button>
          </Link>
        </div>

        <footer>
          <Footer />
        </footer>
      </main>
    </section>
  );
}
