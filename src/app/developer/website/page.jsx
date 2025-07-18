"use client";
import { Zain } from "next/font/google";
import { X } from "@phosphor-icons/react/dist/ssr";
import Footer from "@/components/footer";
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

const zain = Zain({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Website() {
  return (
    <section className="w-full h-fit bg-[#f8f4e1] text-black">
      <header>
        <div
          className={` ${zain.className} w-full pt-12 lg:pt-24 bg-gradient-to-b from-sky-300 to-[#f8f4e1] flex justify-center items-center text-5xl lg:text-9xl text-[#1c3c63]`}
        >
          <SplitText
            text="Website"
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
              <div className="flex justify-center items-start pt-20 w-full h-auto aspect-[4/2] md:aspect-[6/2]"></div>
            </div>
          </div>
        </AnimatedContent>

        {/* overview */}
        <div
          className={`${zain.className} text-[2em] md:text-[3.5em] xl:text-[5.5em] pt-12 md:pt-24 md:text-center text-[#1c3c63]`}
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
              Website is a collection of pages containing various information
              about your company, products, or services, which can be accessed
              anytime and anywhere. With a website, you can show that your
              business is serious, modern, and can build a positive image for
              your clients. A website is also an effective marketing and
              promotion platform because it is cost-effective and flexible. With
              a website, the communication process becomes easier and more
              efficient, thus increasing customer satisfaction.
            </ScrollReveal>
          </div>
          <div className="w-full max-w-[500px] md:max-w-[800px] h-fit text-justify text-sm/6 lg:text-lg/8 mt-[-16px]">
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={15}
            >
              In this digital era, a website is not just a trend, but a crucial
              investment that will take your business to the next level,
              increasing visibility, and credibility.
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
            <SwiperSlide className="bg-gradient-to-b from-rose-400 to-rose-300 rounded-3xl pt-6">
              <div className="w-full h-full px-6 pt-1 text-white">
                <div className="w-full h-fit flex justify-between items-center">
                  <h1 className="text-2xl md:text-4xl">Landing Page</h1>
                  <span className="text-xs border-2 rounded-full px-4 py-1">
                    Website
                  </span>
                </div>
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
            </SwiperSlide>
            <SwiperSlide className="bg-gradient-to-b from-orange-300 to-orange-200 rounded-3xl pt-6">
              <div className="w-full h-full px-6 pt-1 text-white">
                <div className="w-full h-fit flex justify-between items-center">
                  <h1 className="text-2xl md:text-4xl">Website Product's</h1>
                  <span className="text-xs border-2 rounded-full px-4 py-1">
                    Mobile App
                  </span>
                </div>
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
