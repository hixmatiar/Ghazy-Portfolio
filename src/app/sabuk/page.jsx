import zainLocal from "next/font/local";
import Image from "next/image";
import {
  AndroidLogo,
  BatteryHigh,
  CellSignalHigh,
  DownloadSimple,
  GithubLogo,
} from "@phosphor-icons/react/dist/ssr";
import Footer from "@/components/footer";
import Back from "@/components/back";
import Scroll from "@/components/scroll";
import SplitText from "@/components/SplitText/SplitText";
import AnimatedContent from "@/components/AnimatedContent/AnimatedContent";
import ScrollFloat from "@/components/ScrollFloat/ScrollFloat";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";

const zain = zainLocal({
  src: "../fonts/Alata,Geist,Geist_Mono,JetBrains_Mono/Zain/Zain-Bold.ttf",
});

export default function Sabuk() {
  return (
    <section className="w-full h-fit bg-vanilla text-black">
      <header className="bg-gradient-to-b from-sky-300 to-vanilla">
        <h1
          className={` ${zain.className} w-full pt-12 lg:pt-24 flex justify-center items-center text-7xl lg:text-9xl text-[#1c3c63]`}
        >
          <SplitText
            text="Sabuk"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
          />
        </h1>

        <div className={`${zain.className} text-center mt-6`}>
          <h1 className="text-xl lg:text-3xl text-[#1c3c63]">
            <SplitText
              text="Timeline"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
            />
          </h1>
          <h1 className="text-black text-md lg:text-xl mt-[-8px]">
            {" "}
            <SplitText
              text="2024"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
            />
          </h1>
        </div>

        <div className={`${zain.className} text-center mt-4 md:mt-8`}>
          <h1 className="text-xl lg:text-3xl text-accent-navy">
            {" "}
            <SplitText
              text="Creator"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
            />
          </h1>
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
            <div
              className="tooltip tooltip-bottom tooltip-accent-navy"
              data-tip="Muhammad Ghazy Hikmatiar"
            >
              <div className="flex justify-center avatar-group mt-[-8px]">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gray-300 rounded-full relative overflow-hidden flex justify-center items-center avatar border-[#f8f4e1]">
                  <Image src="/profil1.png" fill alt="ghazy" />
                </div>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </header>

      <main className="px-[2em] xl:px-[12em]">
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
          <div className="flex justify-center w-full h-full my-8 md:mt-12">
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
                <Image fill alt="ghazy" src="/sabukhome.jpg" />
              </div>
            </div>
          </div>
        </AnimatedContent>

        <div
          className={`${zain.className} text-[2em] md:text-[3.5em] xl:text-[5.5em] pt-6 md:pt-8 md:text-center text-[#1c3c63]`}
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
              Traffic accident cases in indonesia are increasing every year.
              there are three main factors that cause traffic accidents, namely
              humans, the environment, and vehicles. accident factors in
              indonesia are dominated by humans, this is supported by data from
              the Indonesian police, they say that accidents are based on a lack
              of public awareness of traffic safety. many humans are less
              concerned about traffic safety by not obeying traffic rules.
            </ScrollReveal>
          </div>
          <div className="w-full max-w-[500px] md:max-w-[800px] h-fit text-justify text-sm/6 lg:text-lg/8 mt-[-16px]">
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={15}
            >
              SABUK is a mobile application as a medium to increase knowledge,
              understanding and awareness related to integrated traffic safety
              and fundamentally change the lifestyle of reliable and sustainable
              traffic safety to reduce the occurrence of traffic accidents.
            </ScrollReveal>
          </div>
          <div className="w-full max-w-[500px] md:max-w-[800px] h-fit text-justify text-sm/6 lg:text-lg/8 mt-[-16px]">
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={15}
            >
              The tools i use in making the SABUK application :
            </ScrollReveal>
            <div className="w-fit h-fit flex gap-2 flex-wrap">
              <div className="w-fit h-fit px-4 py-1 border-2 border-black  rounded-full flex gap-2 items-center">
                <div className="w-3 h-3 relative">
                  <Image src="/ionic.svg" fill alt="ghazy" />
                </div>
                <p className="text-sm">Ionic</p>
              </div>
              <div className="w-fit h-fit px-4 py-1 border-2 border-black  rounded-full flex gap-2 items-center">
                <div className="w-3 h-3 relative">
                  <Image src="/angular.svg" fill alt="ghazy" />
                </div>
                <p className="text-sm">Angular</p>
              </div>
              <div className="w-fit h-fit px-4 py-1 border-2 border-black  rounded-full flex gap-2 items-center">
                <div className="w-3 h-3 relative">
                  <Image src="/firebase.svg" fill alt="ghazy" />
                </div>
                <p className="text-sm">Google Firebase</p>
              </div>
              <div className="w-fit h-fit px-4 py-1 border-2 border-black  rounded-full flex gap-2 items-center">
                <div className="w-3 h-3 relative">
                  <Image src="/figma.svg" fill alt="ghazy" />
                </div>
                <p className="text-sm">Figma</p>
              </div>
            </div>
          </div>

          <div className="w-full h-fit text-sm/6 lg:text-lg/8 mt-8 md:mt-16  flex justify-center gap-2 items-center">
            <div>
              <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={5}
                blurStrength={15}
              >
                Now you can only use the app on Android
              </ScrollReveal>
            </div>
            <span className="">
              <AndroidLogo size={24} color="black" />
            </span>
          </div>
        </div>

        <div className="w-full h-fit flex justify-center mt-[-4px] gap-2">
          <a href="https://bit.ly/3YQ1yBZ?r=qr">
            <button
              className={`w-fit h-fit px-4 py-1 bg-accent-navy text-vanilla border-2 border-accent-navy rounded-full cursor-pointer flex items-center gap-2`}
            >
              <DownloadSimple size={16} weight="bold" />
              Install
            </button>
          </a>
          <a href="https://github.com/hixmatiar/sabuk/releases/tag/1.0">
            <button
              className={`w-fit h-fit border-2 rounded-full cursor-pointer flex gap-2 items-center px-4 py-1`}
            >
              <GithubLogo size={16} weight="bold" />
              Source
            </button>
          </a>
        </div>

        {/* image 1 */}
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
          <div className="flex-wrap justify-center w-full h-full mt-8 md:mt-16 gap-16 flex">
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
                <Image fill alt="ghazy" src="/sabukjalan.jpg" />
              </div>
            </div>

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
                <Image fill alt="ghazy" src="/sabuklapor.jpg" />
              </div>
            </div>

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
                <Image fill alt="ghazy" src="/sabuk info.jpg" />
              </div>
            </div>
          </div>
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
