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

export default function Website() {
  return (
    <section className="w-full h-fit bg-[#f8f4e1] text-black">
      <header>
        <Navbar />
        <div
          className={` ${zain.className} w-full pt-42 bg-gradient-to-b from-sky-300 to-[#f8f4e1] flex justify-center items-center text-5xl lg:text-9xl text-[#1c3c63]`}
        >
          Website
        </div>
      </header>

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
              {/* <div className="w-4/12 h-fit hidden lg:block">
                <h1 className="text-gray-200 text-7xl text-center">Google</h1>
                <div className="w-full h-8 rounded-full bg-gray-200 mt-12"></div>
                <div className="w-full h-fit flex justify-center gap-4 mt-6">
                  <span className="w-10 h-10 bg-gray-200 rounded-full"></span>
                  <span className="w-10 h-10 bg-gray-200 rounded-full"></span>
                  <span className="w-10 h-10 bg-gray-200 rounded-full"></span>
                </div>
              </div> */}
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
                <h1 className="text-2xl md:text-4xl">Landing Page</h1>
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
                <h1 className="text-2xl md:text-4xl">Website Product's</h1>
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

        {/* image */}
        {/* <div className="w-full h-fit md:flex gap-4 mt-12 md:mt-24">
          <div className="w-full h-auto aspect-video relative overflow-hidden rounded-3xl">
            <Image src="/xcel.png" fill alt="ghazy" className="relative" />
          </div>
          <div className="w-full h-auto aspect-video relative overflow-hidden rounded-3xl mt-6 md:mt-0">
            <Image src="/tab.png" fill alt="ghazy" className="relative" />
          </div>
        </div> */}

        <Back />
      </main>

      <Scroll />
      <footer>
        <Footer />
      </footer>
    </section>
  );
}
