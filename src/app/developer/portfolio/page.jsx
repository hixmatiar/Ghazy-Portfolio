"use client";
// import { Zain } from "next/font/google";
import {
  ArrowClockwise,
  ArrowLeft,
  ArrowRight,
  DotsThreeVertical,
  PuzzlePiece,
  Star,
  UserCircle,
  WarningCircle,
  X,
} from "@phosphor-icons/react/dist/ssr";
import Footer from "@/components/footer";

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

export default function Portfolio() {
  return (
    <section className="w-full h-fit bg-[#f8f4e1] text-black">
      <header>
        <div
          className={`  w-full pt-12 lg:pt-24 bg-gradient-to-b from-sky-300 to-[#f8f4e1] flex justify-center items-center text-5xl lg:text-9xl text-[#1c3c63]`}
        >
          <SplitText
            text="Portfolio"
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
              <div className="w-full h-10 bg-gray-300 flex">
                <div className="flex w-fit h-full items-center gap-4 px-4">
                  <ArrowLeft size={16} />
                  <ArrowRight size={16} />
                  <ArrowClockwise size={16} />
                </div>
                <div className="w-full h-full flex items-center">
                  <div className="w-full h-6 bg-gray-200 rounded-full flex justify-between px-2 items-center">
                    <div className="flex gap-2 items-center">
                      <WarningCircle size={14} />
                      <p className={` mt-1 text-xs`}>Ghazy Portfolio's</p>
                    </div>
                    <Star size={14} />
                  </div>
                </div>
                <div className="flex w-fit h-full items-center gap-4 px-4 justify-items-end">
                  <PuzzlePiece size={16} className="hidden lg:block" />
                  <UserCircle size={16} />
                  <DotsThreeVertical size={16} className="hidden lg:block" />
                </div>
              </div>
              <div className="w-full h-auto aspect-[4/2] md:aspect-[6/2]"></div>
            </div>
          </div>
        </AnimatedContent>

        {/* overview */}
        <div
          className={` text-[2em] md:text-[3.5em] xl:text-[5.5em] pt-12 md:pt-24 md:text-center text-[#1c3c63]`}
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
              I understand how important first impressions are in the
              competitive and professional world of careers. i am here to help
              you reflect your skills, experience, and creativity in a website
              portfolio. with a website portfolio, you can show the world
              visually and interactively that you are the best in your field. a
              professional website will instantly increase your credibility. you
              not only show your work, but also your commitment to quality,
              detail, and innovation.
            </ScrollReveal>
          </div>
          <div className="w-full max-w-[500px] md:max-w-[800px] h-fit text-justify text-sm/6 lg:text-lg/8 mt-[-16px]">
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={15}
            >
              By investing in a portfolio website that I build, you will get a
              powerful personalized marketing tool working 24/7 for you. It is a
              strategic move to enhance your image in your professional career,
              attract better opportunities, and unequivocally show the world
              that you are the best.
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
