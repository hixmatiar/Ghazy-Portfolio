"use client";

import Link from "next/link";
import { zainLocal } from "next/font/local";
import { X, BatteryHigh, CellSignalHigh } from "@phosphor-icons/react/dist/ssr";
import Footer from "@/components/footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Scroll from "@/components/scroll";
import Back from "@/components/back";

const zain = zainLocal({
  src: "../fonts/Alata,Geist,Geist_Mono,JetBrains_Mono/Zain/Zain-Bold.ttf",
});

export default function Developer() {
  return (
    <section className="w-full h-fit bg-[#f8f4e1] text-black">
      <header>
        <div
          className={` ${zain.className} w-full pt-12 lg:pt-24 bg-gradient-to-b from-sky-300 to-[#f8f4e1] flex justify-center items-center text-5xl lg:text-9xl text-[#1c3c63]`}
        >
          Front-end Developer
        </div>
      </header>

      <Scroll />

      <main className="px-[2em] xl:px-[12em] w-full h-fit">
        {/* image hero */}
        <div className="w-full h-auto">
          <div className="w-full h-auto bg-white mt-6 overflow-hidden rounded-2xl">
            <div className="flex justify-start items-center overflow-hidden w-full h-10 gap-2 px-4 bg-gray-200">
              <span className="w-3 h-3 bg-rose-400 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
              <span className="w-3 h-3 bg-green-400 rounded-full"></span>
              <span className="bg-gray-300 w-[7em] h-10 ml-2 flex items-center px-3 gap-2">
                <span className="w-full h-3 rounded-full bg-gray-100"></span>
                <span>
                  <X size={16} color="white" weight="bold" />
                </span>
              </span>
            </div>
            <div className="flex justify-center items-start pt-20 w-full h-auto aspect-[4/2] md:aspect-[6/2]">
              <div className="w-4/12 h-fit hidden lg:block">
                <h1 className="text-gray-200 text-7xl text-center">Google</h1>
                <div className="w-full h-8 rounded-full bg-gray-200 mt-12"></div>
                <div className="w-full h-fit flex justify-center gap-4 mt-6">
                  <span className="w-10 h-10 bg-gray-200 rounded-full"></span>
                  <span className="w-10 h-10 bg-gray-200 rounded-full"></span>
                  <span className="w-10 h-10 bg-gray-200 rounded-full"></span>
                </div>
              </div>
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
            Front-end Developer is a professional responsible for building and
            implementing the part of an application or website that users can
            see and interact with. Front-end developers aim to create a positive
            user experience and an attractive and functional interface. The
            existence of front-end developers provides many benefits, the main
            one being branding and professional image by reflecting a positive
            image of the company or brand.
          </p>
          <p className="w-full max-w-[500px] md:max-w-[800px] h-fit text-justify text-sm/6 lg:text-lg/8 pt-8 md:pt-12">
            The application of front-end developers brings many benefits in
            various fields that involve digital interaction with users, such as
            information technology and stratups, E-commerce, finance, education,
            health. tourism, graphic design, and game development. in this
            digital era I am ready to realize, design, and build these
            experiences for you, let's collaborate together.
          </p>
        </div>

        {/* image */}
        <div className="w-full h-fit md:flex gap-4 mt-12 md:mt-24">
          <div className="w-full h-auto aspect-video relative overflow-hidden rounded-3xl">
            <Image src="/code.png" fill alt="ghazy" className="relative" />
          </div>
          <div className="w-full h-auto aspect-video relative overflow-hidden rounded-3xl mt-6 md:mt-0">
            <Image src="/terminal.png" fill alt="ghazy" className="relative" />
          </div>
        </div>

        {/* template */}
        <h1
          className={`${zain.className} text-[2em] md:text-[3.5em] xl:text-[5.5em] pt-12 md:pt-24 md:text-center text-[#1c3c63]`}
        >
          What do you need
        </h1>
        <main className="w-full h-fit cursor-pointer">
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
            <SwiperSlide className="bg-gradient-to-b from-rose-400 to-rose-300 rounded-3xl pt-6">
              <Link href="/developer/website">
                <div className="w-full h-full px-6 pt-1 text-white">
                  <div className="w-full h-fit flex justify-between items-center">
                    <h1 className="text-2xl md:text-4xl">Website</h1>
                    <span className="text-xs border-2 rounded-full px-4 py-1">
                      Website
                    </span>
                  </div>
                  <p
                    className={`text-sm md:text-2xl md:mt-1 ${zain.className}`}
                  >
                    Show your best ideas to the world
                  </p>
                  <div className="w-full h-full bg-white mt-6 md:mt-12 overflow-hidden rounded-t-2xl">
                    <div className="flex justify-start items-center overflow-hidden w-full h-10 gap-2 px-4 bg-gray-200">
                      <span className="w-3 h-3 bg-rose-400 rounded-full"></span>
                      <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                      <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                      <span className="bg-gray-300 w-[7em] h-10 ml-2 flex items-center px-3 gap-2">
                        <span className="w-full h-3 rounded-full bg-gray-100"></span>
                        <span>
                          <X size={16} color="white" weight="bold" />
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="bg-gradient-to-b from-orange-300 to-orange-200 rounded-3xl pt-6">
              <Link href="/developer/application">
                <div className="w-full h-full px-6 pt-1 text-white">
                  <div className="w-full h-fit flex justify-between items-center">
                    <h1 className="text-2xl md:text-4xl">Mobile Application</h1>
                    <span className="text-xs border-2 rounded-full px-4 py-1">
                      Mobile App
                    </span>
                  </div>
                  <p
                    className={`text-sm md:text-2xl md:mt-1 ${zain.className}`}
                  >
                    Show your best ideas to the world
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
              </Link>
            </SwiperSlide>
            <SwiperSlide className="bg-gradient-to-b from-amber-300 to-amber-200/70 rounded-3xl pt-6">
              <Link href="/developer/portfolio">
                <div className="w-full h-full px-6 pt-1 text-white">
                  <div className="w-full h-fit flex justify-between items-center">
                    <h1 className="text-2xl md:text-4xl">Portfolio</h1>
                    <span className="text-xs border-2 rounded-full px-4 py-1">
                      Website
                    </span>
                  </div>
                  <p
                    className={`text-sm md:text-2xl md:mt-1 ${zain.className}`}
                  >
                    Show the world that you are the best
                  </p>
                  <div className="w-full h-full bg-white mt-6 md:mt-12 overflow-hidden rounded-t-2xl">
                    <div className="flex justify-start items-center overflow-hidden w-full h-10 gap-2 px-4 bg-gray-200">
                      <span className="w-3 h-3 bg-rose-400 rounded-full"></span>
                      <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                      <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                      <span className="bg-gray-300 w-[7em] h-10 ml-2 flex items-center px-3 gap-2">
                        <span className="w-full h-3 rounded-full bg-gray-100"></span>
                        <span>
                          <X size={16} color="white" weight="bold" />
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="bg-gradient-to-b from-fuchsia-300 to-fuchsia-200 rounded-3xl pt-6">
              <Link href="/developer/undangan">
                <div className="w-full h-full px-6 pt-1 text-white">
                  <div className="w-full h-fit flex justify-between items-center">
                    <h1 className="text-2xl md:text-4xl">Undangan Digital</h1>
                    <span className="text-xs border-2 rounded-full px-4 py-1">
                      Mobile Website
                    </span>
                  </div>
                  <p
                    className={`text-sm md:text-2xl md:mt-1 ${zain.className}`}
                  >
                    Invite the best guests on a beautiful day
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
              </Link>
            </SwiperSlide>
          </Swiper>
        </main>

        <Back />
      </main>
      <footer>
        <Footer />
      </footer>
    </section>
  );
}
