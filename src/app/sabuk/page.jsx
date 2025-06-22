import Link from "next/link";
import { Zain } from "next/font/google";
import Image from "next/image";
import {
  AndroidLogo,
  BatteryHigh,
  CellSignalHigh,
  GithubLogo,
} from "@phosphor-icons/react/dist/ssr";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Back from "@/components/back";
import Scroll from "@/components/scroll";

const zain = Zain({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Sabuk() {
  return (
    <section className="w-full h-fit bg-vanilla text-black">
      <header className="bg-gradient-to-b from-sky-300 to-vanilla">
        <h1
          className={` ${zain.className} w-full pt-12 lg:pt-24 flex justify-center items-center text-7xl lg:text-9xl text-[#1c3c63]`}
        >
          Sabuk
        </h1>

        <div className={`${zain.className} text-center mt-6`}>
          <h1 className="text-xl lg:text-3xl text-[#1c3c63]">Timeline</h1>
          <h1 className="text-black text-md lg:text-xl">2024</h1>
        </div>

        <div className={`${zain.className} text-center mt-4 md:mt-8`}>
          <h1 className="text-xl lg:text-3xl text-accent-navy">Creator</h1>
          <div
            className="tooltip tooltip-bottom tooltip-accent-navy"
            data-tip="Muhammad Ghazy Hikmatiar"
          >
            <div className="flex justify-center mt-1 avatar-group">
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gray-300 rounded-full relative overflow-hidden flex justify-center items-center avatar border-[#f8f4e1]">
                <Image src="/profil1.png" fill alt="ghazy" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="px-[2em] xl:px-[12em]">
        <div className="flex justify-center w-full h-full my-12 md:mt-18">
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
              <Image fill alt="ghazy" src="/sabukhome.jpg" />
            </div>
          </div>
        </div>

        <h1
          className={`${zain.className} text-[2em] md:text-[3.5em] xl:text-[5.5em] pt-6 md:pt-8 md:text-center text-[#1c3c63]`}
        >
          Overview
        </h1>
        <div className="w-full h-fit flex flex-wrap justify-center">
          <p className="w-full max-w-[500px] md:max-w-[800px] h-fit text-justify text-sm/6 lg:text-lg/8">
            Traffic accident cases in indonesia are increasing every year. there
            are three main factors that cause traffic accidents, namely humans,
            the environment, and vehicles. accident factors in indonesia are
            dominated by humans, this is supported by data from the Indonesian
            police, they say that accidents are based on a lack of public
            awareness of traffic safety. many humans are less concerned about
            traffic safety by not obeying traffic rules.
          </p>
          <p className="w-full max-w-[500px] md:max-w-[800px] h-fit text-justify text-sm/6 lg:text-lg/8 pt-8 md:pt-12">
            SABUK is a mobile application as a medium to increase knowledge,
            understanding and awareness related to integrated traffic safety and
            fundamentally change the lifestyle of reliable and sustainable
            traffic safety to reduce the occurrence of traffic accidents.
          </p>

          <p className="w-full h-fit text-sm/6 lg:text-lg/8 pt-12 md:pt-16 flex justify-center gap-2">
            Now you can only use the app on Android{" "}
            <span className="mt-1">
              <AndroidLogo size={24} color="black" />
            </span>
          </p>
        </div>
        <div className="w-full h-fit flex justify-center mt-4">
          <a href="https://bit.ly/3YQ1yBZ?r=qr">
            <button
              className={`w-fit h-fit px-6 py-1 border-2 rounded-full cursor-pointer`}
            >
              SABUK
            </button>
          </a>
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
              <Image fill alt="ghazy" src="/sabukjalan.jpg" />
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
              <Image fill alt="ghazy" src="/sabuklapor.jpg" />
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
              <Image fill alt="ghazy" src="/sabuk info.jpg" />
            </div>
          </div>
        </div>
        <Back />
      </main>

      <Scroll />

      <footer>
        <Footer />
      </footer>
    </section>
  );
}
