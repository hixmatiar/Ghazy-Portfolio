import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { BatteryHigh, CellSignalHigh } from "@phosphor-icons/react/dist/ssr";
import ScrollFloat from "./ScrollFloat/ScrollFloat";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { Zain } from "next/font/google";
import AnimatedContent from "./AnimatedContent/AnimatedContent";

const zain = Zain({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Latest() {
  return (
    <section>
      <div
        className={`${zain.className} text-[2em] md:text-[3.5em] xl:text-[5.5em] pt-20 lg:pt-32 xl:px-[2.1em] text-[#1c3c63] md:text-center`}
      >
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
        >
          My latest project's
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
        <main className="w-full h-fit cursor-pointer">
          <Swiper
            loop="true"
            slidesPerView="1"
            centeredSlides="true"
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
              <Link href="/sabuk">
                <div className="w-full h-full px-6 pt-1 text-white">
                  <div className="w-full h-fit flex justify-between items-center">
                    <h1 className="text-2xl md:text-4xl">Sabuk</h1>
                    <span className="text-xs border-2 rounded-full px-4 py-1">
                      Mobile App
                    </span>
                  </div>
                  <p
                    className={`text-sm md:text-2xl md:mt-1 ${zain.className}`}
                  >
                    Traffic Awareness Raising Application
                  </p>
                  <div className="flex justify-center w-full h-full">
                    <div className="w-full h-full bg-white mt-4 md:mt-12 max-w-[380px] border-black rounded-[64px] overflow-hidden border-6 z-">
                      <div className="text-black w-full h-12 flex mb-2">
                        <span className="h-full w-[32.5%]  flex items-end px-6 pb-1">
                          <p className="text-md">16.04</p>
                        </span>
                        <span className="h-full w-[35%]  flex items-end ">
                          <div className="w-full h-8 bg-black rounded-full"></div>
                        </span>
                        <span className="h-full w-[32.5%]  flex justify-end items-end px-6 gap-1 pb-0.5">
                          <CellSignalHigh size={32} weight="bold" />
                          <BatteryHigh size={32} weight="fill" />
                        </span>
                      </div>
                      <Image
                        src="/sabukhome.jpg"
                        width={380}
                        height={600}
                        className="z-20"
                        alt="ghazy
                      "
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </main>
      </AnimatedContent>
    </section>
  );
}
