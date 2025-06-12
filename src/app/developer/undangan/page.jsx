"use client";
import Link from "next/link";
import { Zain } from "next/font/google";
import { X, CellSignalHigh, BatteryHigh } from "@phosphor-icons/react/dist/ssr";
import Footer from "@/components/footer";
import Image from "next/image";
import Navbar from "@/components/navbar";
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
            <div className="w-full h-full relative">
              <Image fill alt="ghazy" src="/undangan.jpg" />
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
          spaceBetween={10}
          className="w-full h-[16em] md:h-[24em] text-black"
        >
          <SwiperSlide className="bg-gradient-to-b from-rose-400 to-rose-300 rounded-3xl pt-6">
            <div className="w-full h-full px-6 pt-1 text-white">
              <div className="w-full h-fit flex justify-between items-center">
                <h1 className="text-2xl md:text-4xl">Sunda</h1>
                <span className="text-xs border-2 rounded-full px-4 py-1">
                  Website
                </span>
              </div>
              <p className={`text-sm md:text-2xl md:mt-1 ${zain.className}`}>
                Natural Disaster Mitigation Application
              </p>
              <div className="flex justify-center w-full h-full">
                <div className="w-full h-full bg-white mt-4 md:mt-12 max-w-[380px] border-black rounded-[64px] overflow-hidden border-6 z-">
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
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-gradient-to-b from-orange-300 to-orange-200 rounded-3xl pt-6">
            <div className="w-full h-full px-6 pt-1 text-white">
              <div className="w-full h-fit flex justify-between items-center">
                <h1 className="text-2xl md:text-4xl">Jawa</h1>
                <span className="text-xs border-2 rounded-full px-4 py-1">
                  Mobile App
                </span>
              </div>
              <p className={`text-sm md:text-2xl md:mt-1 ${zain.className}`}>
                Traffic Awareness Raising Application
              </p>
              <div className="flex justify-center w-full h-full">
                <div className="w-full h-full bg-white mt-4 md:mt-12 max-w-[380px] border-black rounded-[64px] overflow-hidden border-6 z-">
                  <div className="text-black w-full h-12 flex mb-2">
                    <div className="h-full w-[32.5%]  flex items-end px-6 pb-0.5">
                      <p className="text-lg">18.05</p>
                    </div>
                    <div className="h-full w-[35%]  flex items-end ">
                      <div className="w-full h-8 bg-black rounded-full"></div>
                    </div>
                    <div className="h-full w-[32.5%]  flex justify-end items-end px-6 gap-1 pb-0.5">
                      <CellSignalHigh size={32} weight="bold" />
                      <BatteryHigh size={32} weight="fill" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-gradient-to-b from-teal-300 to-teal-200 rounded-3xl pt-6">
            <div className="w-full h-full px-6 pt-1 text-white">
              <div className="w-full h-fit flex justify-between items-center">
                <h1 className="text-2xl md:text-4xl">Minang</h1>
                <span className="text-xs border-2 rounded-full px-4 py-1">
                  Mobile App
                </span>
              </div>
              <p className={`text-sm md:text-2xl md:mt-1 ${zain.className}`}>
                Traffic Awareness Raising Application
              </p>
              <div className="flex justify-center w-full h-full">
                <div className="w-full h-full bg-white mt-4 md:mt-12 max-w-[380px] border-black rounded-[64px] overflow-hidden border-6 z-">
                  <div className="text-black w-full h-12 flex mb-2">
                    <div className="h-full w-[32.5%]  flex items-end px-6 pb-0.5">
                      <p className="text-lg">18.05</p>
                    </div>
                    <div className="h-full w-[35%]  flex items-end ">
                      <div className="w-full h-8 bg-black rounded-full"></div>
                    </div>
                    <div className="h-full w-[32.5%]  flex justify-end items-end px-6 gap-1 pb-0.5">
                      <CellSignalHigh size={32} weight="bold" />
                      <BatteryHigh size={32} weight="fill" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
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
