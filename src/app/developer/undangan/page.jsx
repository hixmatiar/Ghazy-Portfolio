"use client";
import { Zain } from "next/font/google";
import {
  X,
  CellSignalHigh,
  BatteryHigh,
  ArrowUpRight,
} from "@phosphor-icons/react/dist/ssr";
import Footer from "@/components/footer";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Back from "@/components/back";
import Scroll from "@/components/scroll";

const zain = Zain({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Undangan() {
  return (
    <section className="w-full h-fit bg-[#f8f4e1] text-black">
      <header>
        <div
          className={` ${zain.className} w-full pt-12 lg:pt-24 bg-gradient-to-b from-sky-300 to-[#f8f4e1] flex justify-center items-center text-5xl lg:text-9xl text-[#1c3c63]`}
        >
          Undangan Digital
        </div>
      </header>

      <main className="px-[2em] xl:px-[12em] w-full h-fit">
        {/* image hero */}
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
            <div className="w-full h-full flex justify-center pt-30 relative">
              <Image src="/undangan.png" fill alt="ghazy" />
              <div className="w-full h-fit aspect-square relative">
                <Image fill alt="ghazy" src="/sunda.png" />
              </div>
            </div>
          </div>
        </div>

        {/* overview */}
        <h1
          className={`${zain.className} text-[2em] md:text-[3.5em] xl:text-[5.5em] pt-6 md:pt-8 md:text-center text-[#1c3c63]`}
        >
          Overview
        </h1>
        <div className="w-full h-fit flex flex-wrap justify-center">
          <p className="w-full max-w-[500px] md:max-w-[800px] h-fit text-justify text-sm/6 lg:text-lg/8">
            I understand that the wedding moment is one of the most special in
            your life. everything should be perfect and reflect your love story.
            I will change the way you invite guests, making it more than just
            information, but an unforgettable experience. by using digital
            wedding invitations, you don't have to worry about the cost of
            expensive invitation cards, digital invitations are much cheaper and
            there are no restrictions on guests invited. attractive and
            interactive features make a different experience on your special
            day.
          </p>
          <p className="w-full max-w-[500px] md:max-w-[800px] h-fit text-justify text-sm/6 lg:text-lg/8 pt-8 md:pt-12">
            Realize your dream wedding with invitations that reflect
            seriousness, professionalism, and efficiency. I will make sure your
            happy moments are conveyed in the most effective and memorable way
            for all your special guests.
          </p>
        </div>

        <h1
          className={`${zain.className} text-[2em] md:text-[3.5em] xl:text-[5.5em] pt-12 md:pt-24 md:text-center text-[#1c3c63]`}
        >
          What do you need
        </h1>

        <Swiper
          loop="true"
          slidesPerView="1"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            1280: {
              slidesPerView: 2,
            },
          }}
          spaceBetween={20}
          className="w-full h-[16em] md:h-[24em] text-black"
        >
          <SwiperSlide className="bg-gradient-to-b from-slate-300 to-slate-200 rounded-3xl pt-4 cursor-pointer">
            <a href=""></a>
            <div className="w-full h-full px-6 pt-1 text-white">
              <div className="w-full h-fit flex justify-between items-center">
                <h1 className={`${zain.className} text-3xl md:text-5xl mt-1`}>
                  Sunda
                </h1>
                <button className="flex gap-2 px-4 py-[6px] rounded-full border-2 items-center text-xs cursor-pointer">
                  See more{" "}
                  <span>
                    <ArrowUpRight size={14} />
                  </span>
                </button>
              </div>
              <div className="flex justify-center w-full h-full mt-[-28px]">
                <div className="w-fit h-full aspect-square overflow-hidden relative flex justify-center">
                  <div className="flex justify-center w-1/2 h-auto relative aspect-square">
                    <Image
                      src="/bgsunda.webp"
                      fill
                      alt="ghazy"
                      className="mt-8 opacity-35 pb-16"
                    />
                  </div>
                  <Image src="/sunda.png" fill alt="sunda" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-gradient-to-b from-[#FFA55D] to-[#F0BB78]/70 rounded-3xl pt-4 cursor-pointer">
            <div className="w-full h-full px-6 pt-1 text-white">
              <div className="w-full h-fit flex justify-between items-center">
                <h1
                  className={` ${zain.className} text-3xl md:text-5xl text-black mt-1`}
                >
                  Jawa
                </h1>
                <button className="flex gap-2 px-4 py-[6px] rounded-full border-2 items-center text-xs border-black text-black cursor-pointer">
                  See more{" "}
                  <span>
                    <ArrowUpRight size={14} color="black" />
                  </span>
                </button>
              </div>
              <div className="flex justify-center w-full h-full mt-[-28px]">
                <div className="flex justify-center w-full h-full">
                  <div className="w-fit h-full aspect-square overflow-hidden relative">
                    <Image
                      src="/bgjawa.png"
                      fill
                      alt="ghazy"
                      className="mt-8 opacity-20 pb-14"
                    />
                    <Image src="/jawa.png" fill alt="sunda" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide className="bg-gradient-to-b from-rose-400 to-rose-300 rounded-3xl pt-6">
            <div className="w-full h-full px-6 pt-1 text-white">
              <div className="w-full h-fit flex justify-between items-center">
                <h1 className="text-2xl md:text-4xl">Minang</h1>
              </div>
              <div className="flex justify-center w-full h-full">
                <div className="flex justify-center w-full h-full">
                  <div className="w-fit h-full aspect-square overflow-hidden relative">
                    <Image src="/minang.png" fill alt="sunda" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide> */}
        </Swiper>

        <Back />
      </main>

      <Scroll />
      <footer>
        <Footer />
      </footer>
    </section>
  );
}
