"use client";

import { Zain } from "next/font/google";
import { CellSignalHigh, BatteryHigh } from "@phosphor-icons/react/dist/ssr";
import Footer from "@/components/footer";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import Scroll from "@/components/scroll";
import Back from "@/components/back";
import SplitText from "@/components/SplitText/SplitText";
import AnimatedContent from "@/components/AnimatedContent/AnimatedContent";
import ScrollFloat from "@/components/ScrollFloat/ScrollFloat";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";

const zain = Zain({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Application() {
  return (
    <section className="w-full h-fit bg-[#f8f4e1] text-black">
      <header>
        <div
          className={` ${zain.className} w-full pt-12 lg:pt-24 bg-gradient-to-b from-sky-300 to-[#f8f4e1] flex justify-center items-center text-5xl lg:text-9xl text-[#1c3c63]`}
        >
          <SplitText
            text="Mobile Application"
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
                <div className="h-full w-[32.5%]  flex items-end px-6 pb-1">
                  <p className="text-md">16.04</p>
                </div>
                <div className="h-full w-[35%]  flex items-end ">
                  <div className="w-full h-8 bg-black rounded-full"></div>
                </div>
                <div className="h-full w-[32.5%]  flex justify-end items-end px-6 gap-1 pb-0.5">
                  <CellSignalHigh size={32} weight="bold" />
                  <BatteryHigh size={32} weight="fill" />
                </div>
              </div>
              <div className="w-full h-full bg-white flex justify-center items-center">
                <div className="w-[256px] h-[256px] relative mt-[-64px]">
                  <Image fill alt="ghazy" src="/logos.png" />
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
              I understand that you may have brilliant ideas that have been
              tucked away in the back of your mind. I will help you formulate a
              clear concept, identify essential features, and design an
              interactive user experience and engaging interface. With a mobile
              app, your business or idea will be in the hands of millions of
              people, making you stand out from the competition with innovative
              digital solutions.
            </ScrollReveal>
          </div>
          <div className="w-full max-w-[500px] md:max-w-[800px] h-fit text-justify text-sm/6 lg:text-lg/8 mt-[-16px]">
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={15}
            >
              Don't let your brilliant ideas be just a dream. Let's collaborate
              by turning your ideas into functional, impactful, and
              internationally competitive mobile apps.
            </ScrollReveal>
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
