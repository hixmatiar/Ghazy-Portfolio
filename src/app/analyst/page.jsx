import { zainLocal } from "next/font/local";
import Footer from "@/components/footer";
import Image from "next/image";
import Scroll from "@/components/scroll";
import Back from "@/components/back";
import SplitText from "@/components/SplitText/SplitText";
import AnimatedContent from "@/components/AnimatedContent/AnimatedContent";
import ScrollFloat from "@/components/ScrollFloat/ScrollFloat";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";

const zain = zainLocal({
  src: "../fonts/Alata,Geist,Geist_Mono,JetBrains_Mono/Zain/Zain-Bold.ttf",
});

export default function Analyst() {
  return (
    <section className="w-full h-fit bg-[#f8f4e1] text-black">
      <header>
        <div
          className={` ${zain.className} w-full pt-12 lg:pt-24 bg-gradient-to-b from-sky-300 to-[#f8f4e1] flex justify-center items-center text-5xl lg:text-9xl text-[#1c3c63]`}
        >
          <SplitText
            text="Data Analyst"
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

      <Scroll />

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
              <div className="flex justify-start items-center overflow-hidden w-full h-10 md:h-12 gap-3 md:gap-5 px-4 bg-orange-200">
                <div className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] relative">
                  <Image src="/tableau.png" fill alt="ghazy" className="" />
                </div>
                <span className="text-xs md:text-lg">Tableau</span>
                <span className="w-[4em] h-3 rounded-full bg-gray-100"></span>
                <span className="w-[2em] h-3 rounded-full bg-gray-100"></span>
                <span className="w-[6em] h-3 rounded-full bg-gray-100"></span>
              </div>
              <div className="w-full h-full flex aspect-[4/2] md:aspect-[6/2]">
                <span className="w-fit px-2 bg-amber-100 h-full">
                  <div className="w-[7em] lg:w-[14em] h-3 rounded-full bg-white mt-3"></div>
                  <div className="w-3/4 h-3 rounded-full bg-white mt-6"></div>
                  <div className="w-7/12 h-3 rounded-full bg-white mt-2"></div>
                  <div className="w-10/12 h-3 rounded-full bg-white mt-2"></div>
                </span>
              </div>
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
              Data Analysis is a broad and interdisciplinary discipline that
              focuses on the process of inspecting, cleaning, transforming, and
              modeling data with the aim of finding the right solution in
              solving a problem. data analysis provides methodological
              frameworks and principles that are needed effectively. with data
              analysis we can turn raw data into meaningful insights, reveal
              hidden patterns to find the best solution, therefore we can better
              manage risks in the future.
            </ScrollReveal>
          </div>
          <div className="w-full max-w-[500px] md:max-w-[800px] h-fit text-justify text-sm/6 lg:text-lg/8 mt-[-16px]">
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={15}
            >
              The application of data analytics brings many benefits in various
              fields, namely business, health, education, manufacturing,
              government, and public policy. with the existence of data analysts
              can solve solutions more quickly and efficiently so that it can
              improve your business performance for the better. let's
              collaborate together.
            </ScrollReveal>
          </div>
        </div>

        {/* image */}
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
          <div className="w-full h-fit md:flex gap-4 mt-12 md:mt-24">
            <div className="w-full h-auto aspect-video relative overflow-hidden rounded-3xl">
              <Image src="/xcel.png" fill alt="ghazy" className="relative" />
            </div>
            <div className="w-full h-auto aspect-video relative overflow-hidden rounded-3xl mt-6 md:mt-0">
              <Image src="/tab.png" fill alt="ghazy" className="relative" />
            </div>
          </div>
        </AnimatedContent>

        <Back />
      </main>

      <footer>
        <Footer />
      </footer>
    </section>
  );
}
