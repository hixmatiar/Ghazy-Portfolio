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
import SplitText from "@/components/SplitText/SplitText";
import AnimatedContent from "@/components/AnimatedContent/AnimatedContent";
import ScrollFloat from "@/components/ScrollFloat/ScrollFloat";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";

// const zain = Zain({
//   subsets: ["latin"],
//   weight: ["700"],
// });

export default function Undangan() {
  return (
    <section className="w-full h-fit bg-[#f8f4e1] text-black">
      <header>
        <div
          className={` ${zain.className} w-full pt-12 lg:pt-24 bg-gradient-to-b from-sky-300 to-[#f8f4e1] flex justify-center items-center text-5xl lg:text-9xl text-[#1c3c63]`}
        >
          <SplitText
            text="Undangan Digital"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
          />
        </div>
      </header>

      <main className="px-[2em] xl:px-[12em] w-full h-fit">
        <AnimatedContent
          distance={50}
          direction="vertical"
          reverse={false}
          duration={1.2}
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.3}
        >
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
        </AnimatedContent>

        {/* overview */}
        <div
          className={`${zain.className} text-[2em] md:text-[3.5em] xl:text-[5.5em] pt-2 md:pt-4 md:text-center text-[#1c3c63]`}
        >
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
          >
            Overview
          </ScrollFloat>
        </div>
        <div className="w-full h-fit flex flex-wrap justify-center mt-[-32px]">
          <div className="w-full max-w-[500px] md:max-w-[800px] h-fit text-justify text-sm/6 lg:text-lg/8">
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={15}
            >
              I understand that the wedding moment is one of the most special in
              your life. everything should be perfect and reflect your love
              story. I will change the way you invite guests, making it more
              than just information, but an unforgettable experience. by using
              digital wedding invitations, you don't have to worry about the
              cost of expensive invitation cards, digital invitations are much
              cheaper and there are no restrictions on guests invited.
              attractive and interactive features make a different experience on
              your special day.
            </ScrollReveal>
          </div>
          <div className="w-full max-w-[500px] md:max-w-[800px] h-fit text-justify text-sm/6 lg:text-lg/8 mt-[-16px]">
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={15}
            >
              Realize your dream wedding with invitations that reflect
              seriousness, professionalism, and efficiency. I will make sure
              your happy moments are conveyed in the most effective and
              memorable way for all your special guests.
            </ScrollReveal>
          </div>
        </div>

        <div
          className={`${zain.className} text-[2em] md:text-[3.5em] xl:text-[5.5em] pt-6 md:pt-12 md:text-center text-[#1c3c63]`}
        >
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
          >
            What do you need
          </ScrollFloat>
        </div>

        <AnimatedContent
          distance={50}
          direction="vertical"
          reverse={false}
          duration={1.2}
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.3}
        >
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
          </Swiper>
        </AnimatedContent>

        <Back />
      </main>

      <Scroll />
      <footer>
        <Footer />
      </footer>
    </section>
  );
}
