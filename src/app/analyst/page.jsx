import Link from "next/link";
import { zainLocal } from "next/font/local";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Footer from "@/components/footer";
import Image from "next/image";
import Navbar from "@/components/navbar";

const zain = zainLocal({
  src: "../fonts/Alata,Geist,Geist_Mono,JetBrains_Mono/Zain/Zain-Bold.ttf",
});

export default function Analyst() {
  return (
    <section className="w-full h-fit bg-[#f8f4e1] text-black">
      <header>
        <Navbar />
        <div
          className={` ${zain.className} w-full pt-42 bg-gradient-to-b from-sky-300 to-[#f8f4e1] flex justify-center items-center text-5xl lg:text-9xl text-[#1c3c63]`}
        >
          Data Analyst
        </div>
      </header>

      <main className="px-[2em] xl:px-[12em] w-full h-fit">
        {/* image hero */}
        <div className="w-full h-auto">
          <div className="w-full h-auto bg-white mt-6 overflow-hidden rounded-2xl">
            <div className="flex justify-start items-center overflow-hidden w-full h-10 md:h-12 gap-3 md:gap-5 px-4 bg-orange-200">
              <div className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] relative">
                <Image src="/tableau.png" fill alt="ghazy" className="" />
              </div>
              <span className="text-xs md:text-lg">Tableau</span>
              <span className="w-[4em] h-3 rounded-full bg-gray-100"></span>
              <span className="w-[2em] h-3 rounded-full bg-gray-100"></span>
              <span className="w-[6em] h-3 rounded-full bg-gray-100"></span>
            </div>
            <div className="w-full h-full flex aspect-[4/2] md:aspect-[6/2]">
              <span className="w-fit px-2 bg-amber-100 h-full">
                <div className="w-[7em] lg:w-[14em] h-3 rounded-full bg-white mt-3"></div>
                <div className="w-3/4 h-3 rounded-full bg-white mt-6"></div>
                <div className="w-7/12 h-3 rounded-full bg-white mt-2"></div>
                <div className="w-10/12 h-3 rounded-full bg-white mt-2"></div>
              </span>
            </div>
          </div>
        </div>

        {/* overview */}
        <h1
          className={`${zain.className} text-[2em] md:text-[3.5em] xl:text-[5.5em] pt-12 md:pt-24 md:text-center text-[#1c3c63]`}
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
        <div className="w-full h-fit md:flex gap-4 mt-12 md:mt-24">
          <div className="w-full h-auto aspect-video relative overflow-hidden rounded-3xl">
            <Image src="/xcel.png" fill alt="ghazy" className="relative" />
          </div>
          <div className="w-full h-auto aspect-video relative overflow-hidden rounded-3xl mt-6 md:mt-0">
            <Image src="/tab.png" fill alt="ghazy" className="relative" />
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </section>
  );
}
