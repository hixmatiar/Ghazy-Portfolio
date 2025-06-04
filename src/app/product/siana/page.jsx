import Link from "next/link";
import { Zain } from "next/font/google";
import Image from "next/image";
import {
  BatteryHigh,
  CellSignalHigh,
  GithubLogo,
} from "@phosphor-icons/react/dist/ssr";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const zain = Zain({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Siana() {
  return (
    <section className="w-full h-fit bg-[#f8f4e1] text-black">
      <header className="bg-gradient-to-b from-sky-300 to-[#f8f4e1]">
        <Navbar />
        <h1
          className={` ${zain.className} w-full pt-42 flex justify-center items-center text-7xl lg:text-9xl text-[#1c3c63]`}
        >
          Siana
        </h1>
        <div className={`${zain.className} text-center mt-6`}>
          <h1 className="text-xl lg:text-3xl text-[#1c3c63]">Timeline</h1>
          <h1 className="text-black text-md lg:text-xl">2024</h1>
        </div>

        <div className={`${zain.className} text-center mt-4 md:mt-8`}>
          <h1 className="text-xl lg:text-3xl text-[#1c3c63]">Creator</h1>
          <div
            className="tooltip tooltip-bottom tooltip-accent-navy"
            data-tip="Rafi Sakya Aji"
          >
            {/* <div className="flex justify-center mt-1"> */}
            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gray-300 rounded-full relative overflow-hidden avatar border-[#f8f4e1] border-3">
              <Image src="/create2.png" fill alt="ghazy" />
            </div>
          </div>
          <div
            className="tooltip tooltip-bottom tooltip-accent-navy"
            data-tip="Muhammad Ghazy Hikmatiar"
          >
            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-amber-500 rounded-full relative overflow-hidden avatar ml-[-16px] border-[#f8f4e1] border-3">
              <Image src="/profil.jpg" fill alt="ghazy" />
            </div>
          </div>
        </div>
        {/* </div> */}
      </header>

      <main className="px-[2em] xl:px-[12em]">
        <div className="flex justify-center w-full h-full my-12 md:mt-18">
          {/* <div className="w-5/12 h-full bg-pink-400 hidden lg:block">
            <div>hai</div>
            <div></div>
            <div></div>
          </div> */}
          <div className="w-full h-auto aspect-[9/16] bg-white max-w-[380px] border-black rounded-[64px] overflow-hidden border-6 shadow-2xl">
            <div className="text-black w-full h-12 flex mb-2">
              <div className="h-full w-[32.5%]  flex items-end px-6 pb-0.5">
                <p className="text-lg">20.31</p>
              </div>
              <div className="h-full w-[35%]  flex items-end ">
                <div className="w-full h-8 bg-black rounded-full"></div>
              </div>
              <div className="h-full w-[32.5%]  flex justify-end items-end px-6 gap-1 pb-0.5">
                <CellSignalHigh size={32} weight="bold" />
                <BatteryHigh size={32} weight="fill" />
              </div>
            </div>
            <div className="w-full h-full relative">
              <Image fill alt="ghazy" src="/sianahome.jpg" />
            </div>
          </div>
          {/* <div className="w-5/12 h-full bg-pink-400 hidden lg:block">
            <div>hai</div>
            <div></div>
            <div></div>
          </div> */}
        </div>

        <h1
          className={`${zain.className} text-[2em] md:text-[3.5em] xl:text-[5.5em] pt-6 md:pt-8 md:text-center text-[#1c3c63]`}
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

        {/* image 1 */}
        <div className="flex-wrap justify-center w-full h-full mt-12 md:mt-24 gap-16 flex">
          <div className="w-full h-auto aspect-[9/16] bg-white max-w-[380px] border-black rounded-[64px] overflow-hidden border-6 shadow-2xl">
            <div className="text-black w-full h-12 flex mb-2">
              <div className="h-full w-[32.5%]  flex items-end px-6 pb-0.5">
                <p className="text-lg">20.31</p>
              </div>
              <div className="h-full w-[35%]  flex items-end ">
                <div className="w-full h-8 bg-black rounded-full"></div>
              </div>
              <div className="h-full w-[32.5%]  flex justify-end items-end px-6 gap-1 pb-0.5">
                <CellSignalHigh size={32} weight="bold" />
                <BatteryHigh size={32} weight="fill" />
              </div>
            </div>
            <div className="w-full h-full relative">
              <Image fill alt="ghazy" src="/sianamitigasi.jpg" />
            </div>
          </div>

          <div className="w-full h-auto aspect-[9/16] bg-white max-w-[380px] border-black rounded-[64px] overflow-hidden border-6 shadow-2xl">
            <div className="text-black w-full h-12 flex mb-2">
              <div className="h-full w-[32.5%]  flex items-end px-6 pb-0.5">
                <p className="text-lg">20.31</p>
              </div>
              <div className="h-full w-[35%]  flex items-end ">
                <div className="w-full h-8 bg-black rounded-full"></div>
              </div>
              <div className="h-full w-[32.5%]  flex justify-end items-end px-6 gap-1 pb-0.5">
                <CellSignalHigh size={32} weight="bold" />
                <BatteryHigh size={32} weight="fill" />
              </div>
            </div>
            <div className="w-full h-full relative">
              <Image fill alt="ghazy" src="/sianapeta.jpg" />
            </div>
          </div>

          <div className="w-full h-auto aspect-[9/16] bg-white max-w-[380px] border-black rounded-[64px] overflow-hidden border-6 shadow-2xl">
            <div className="text-black w-full h-12 flex mb-2">
              <div className="h-full w-[32.5%]  flex items-end px-6 pb-0.5">
                <p className="text-lg">20.31</p>
              </div>
              <div className="h-full w-[35%]  flex items-end ">
                <div className="w-full h-8 bg-black rounded-full"></div>
              </div>
              <div className="h-full w-[32.5%]  flex justify-end items-end px-6 gap-1 pb-0.5">
                <CellSignalHigh size={32} weight="bold" />
                <BatteryHigh size={32} weight="fill" />
              </div>
            </div>
            <div className="w-full h-full relative">
              <Image fill alt="ghazy" src="/sianainfo.jpg" />
            </div>
          </div>
        </div>

        <div className="flex justify-center w-full h-full mt-16">
          <div className="w-full h-auto max-w-[380px] lg:max-w-[720px] bg-pink-200 flex justify-center relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <Image src="/story.png" fill alt="ghazy" />
          </div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </section>
  );
}
