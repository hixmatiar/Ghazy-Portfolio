"use client";
import { Zain } from "next/font/google";
import { CellSignalHigh, BatteryHigh, X } from "@phosphor-icons/react/dist/ssr";
import Footer from "@/components/footer";
import Latest from "@/components/latest";
import Content from "@/components/content";
import Scroll from "@/components/scroll";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SplitText from "@/components/SplitText/SplitText";
import BlurText from "@/components/BlurText/BlurText";
import ScrollFloat from "@/components/ScrollFloat/ScrollFloat";
import AnimatedContent from "@/components/AnimatedContent/AnimatedContent";

const zain = Zain({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Home() {
  return (
    <section className="bg-[#F8F4E1] w-full h-fit">
      <Scroll />

      <main className="w-full h-fit flex justify-end pt-16 lg:pt-32 px-[2em] xl:px-[12em] bg-gradient-to-b from-sky-300 to-vanilla mb-32 flex-wrap">
        <div className="w-full 2xl:w-4/14 h-fit flex justify-center">
          <div className="w-[288px] md:w-[352px] h-auto rounded-full overflow-hidden aspect-square relative shadow-2xl">
            <Image src="/profil1.png" fill alt="ghazy" />
          </div>
        </div>
        <div
          className={`${zain.className} w-full 2xl:w-10/14 h-fit text-accent-navy px-6 text-center 2xl:text-left pt-12 2xl:pt-0`}
        >
          <h1 className="text-[3em] md:text-[6em] lg:text-[8em] xl:text-[9em] 2xl:text-[11.5em] mt-[-42px] xl:ml-[-10px]">
            <SplitText
              text="Hello, I'm Ghazy"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
            />
          </h1>
          <h1 className="text-[1.2em] md:text-[2em] lg:text-[2.5em] xl:text-[3em] 2xl:text-6xl mt-[-40px] md:mt-[-78px] lg:mt-[-106px] xl:mt-[-130px] 2xl:mt-[-160px]">
            <SplitText
              text="Big Data & Front-end Developer"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
            />
          </h1>
          <div className="flex justify-center 2xl:justify-start">
            <h1
              className={`text-black mt-6 w-full text-xs md:text-sm 2xl:text-md md:max-w-[448px] lg:max-w-[512px] xl:max-w-[768px] max-w-[320px] text-center lg:text-left`}
            >
              <BlurText
                text="I'am a programmer focusing on big data and front-end developer. I process and visualize it to get the best solution and decision for your idea. I can help you create a website and mobile application to show your idea to the world."
                delay={50}
                animateBy="words"
                direction="top"
                threshold={0.1}
                className="flex justify-center 2xl:justify-start"
              />
            </h1>
          </div>
        </div>
      </main>

      <main className="w-full h-fit px-[2em] xl:px-[12em]">
        <Content />

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
            Let's develop your ideas
          </ScrollFloat>
        </div>

        <main className="w-full h-fit cursor-pointer">
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
                delay: 3000,
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
                      <span className="text-[8px] md:text-xs border-2 rounded-full px-4 py-1">
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
                      <h1 className="text-2xl md:text-4xl">
                        Mobile Application
                      </h1>
                      <span className="text-[8px] md:text-xs border-2 rounded-full px-4 py-1">
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
                            <p className="text-lg">16.04</p>
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
                      <span className="text-[8px] md:text-xs border-2 rounded-full px-4 py-1">
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
              <SwiperSlide className="bg-gradient-to-b from-teal-400 to-teal-300 rounded-3xl pt-6">
                <Link href="/scientist">
                  <div className="w-full h-full px-6 pt-1 text-white">
                    <div className="w-full h-fit flex justify-between items-center">
                      <h1 className="text-2xl md:text-4xl">Data Scientist</h1>
                      <span className="text-[8px] md:text-xs border-2 rounded-full px-4 py-1">
                        Visualization
                      </span>
                    </div>
                    <p
                      className={`text-sm md:text-2xl md:mt-1 ${zain.className}`}
                    >
                      Find the best solution for your problem
                    </p>
                    <div className="w-full h-full bg-white mt-4 md:mt-12 overflow-hidden rounded-t-2xl z-20">
                      <div className="flex justify-start items-center overflow-hidden w-full h-10 gap-3 px-4 bg-orange-200">
                        <div className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] relative">
                          <Image
                            src="/jupyter.png"
                            fill
                            alt="ghazy"
                            className=""
                          />
                        </div>
                        <span className="text-xs">Jupyter</span>
                        <span className="w-[7em] h-3 rounded-full bg-gray-100"></span>
                        <span className="w-[5em] h-3 rounded-full bg-gray-100"></span>
                        <span className="w-[2em] h-3 rounded-full bg-gray-100"></span>
                      </div>
                      <div className="pl-10 pt-4">
                        <p className="text-xs text-black">
                          <code>{">"} import numpy as np</code>
                        </p>
                        <div className="w-3/4 h-3 rounded-full bg-gray-200 mt-2"></div>
                        <div className="w-5/6 h-3 rounded-full bg-gray-200 mt-2"></div>
                        <div className="w-7/12 h-3 rounded-full bg-gray-200 mt-2"></div>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide className="bg-gradient-to-b from-sky-400 to-sky-300 rounded-3xl pt-6">
                <Link href="/analyst">
                  <div className="w-full h-full px-6 pt-1 text-white">
                    <div className="w-full h-fit flex justify-between items-center">
                      <h1 className="text-2xl md:text-4xl">Data Analyst</h1>
                      <span className="text-[8px] md:text-xs border-2 rounded-full px-4 py-1">
                        Visualization
                      </span>
                    </div>
                    <p
                      className={`text-sm md:text-2xl md:mt-1 ${zain.className}`}
                    >
                      Build the best decision for your ideas
                    </p>
                    <div className="w-full h-full bg-white mt-4 md:mt-12 overflow-hidden rounded-t-2xl">
                      <div className="flex justify-start items-center overflow-hidden w-full h-10 gap-3 px-4 bg-amber-200">
                        <div className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] relative">
                          <Image
                            src="/tableau.png"
                            fill
                            alt="ghazy"
                            className=""
                          />
                        </div>
                        <span className="text-xs">Tableau</span>
                        <span className="w-[4em] h-3 rounded-full bg-gray-100"></span>
                        <span className="w-[2em] h-3 rounded-full bg-gray-100"></span>
                        <span className="w-[6em] h-3 rounded-full bg-gray-100"></span>
                      </div>
                      <div className="w-full h-full flex">
                        <span className="w-fit px-2 bg-amber-100 h-full">
                          <div className="w-[7em] h-3 rounded-full bg-white mt-3"></div>
                          <div className="w-3/4 h-3 rounded-full bg-white mt-6"></div>
                          <div className="w-7/12 h-3 rounded-full bg-white mt-2"></div>
                          <div className="w-10/12 h-3 rounded-full bg-white mt-2"></div>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
              {/* <SwiperSlide className="bg-gradient-to-b from-fuchsia-300 to-fuchsia-200 rounded-3xl pt-6">
                <Link href="/developer/undangan">
                  <div className="w-full h-full px-6 pt-1 text-white">
                    <div className="w-full h-fit flex justify-between items-center">
                      <h1 className="text-2xl md:text-4xl">Undangan Digital</h1>
                      <span className="text-[8px] md:text-xs border-2 rounded-full px-4 py-1">
                        Website
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
              </SwiperSlide> */}
            </Swiper>
          </AnimatedContent>
        </main>

        <Latest />

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
            My tools
          </ScrollFloat>
        </div>

        <main className="w-full h-fit">
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
            className=""
          >
            <div className="w-full h-fit grid grid-cols-4 lg:grid-cols-6 gap-4 justify-center">
              <a
                href="https://www.microsoft.com/id-id/microsoft-365/excel"
                className="w-full h-[5em] md:h-[7em] rounded-3xl col-span-2"
              >
                <div className="w-full h-[5em] md:h-[7em] rounded-3xl col-span-2 bg-gradient-to-bl from-sky-300 to-sky-100  hover:translate-1.5 transition delay-150 ease-in-out duration-100 cursor-pointer flex items-center gap-3 md:gap-8 px-4 md:px-8 shadow-lg">
                  <div className="w-12 h-12 md:w-16 md:h-16 relative">
                    <Image src="/excel.png" fill alt="ghazy" className="" />
                  </div>
                  <div className="text-black">
                    <h1 className="text-md md:text-2xl">Excel</h1>
                    <p className="hidden xl:block">
                      Application for analyze data
                    </p>
                  </div>
                </div>
              </a>
              <a
                href="https://jupyter.org/"
                className="w-full h-[5em] md:h-[7em] rounded-3xl col-span-2"
              >
                <div className="w-full h-[5em] md:h-[7em] rounded-3xl col-span-2 bg-gradient-to-bl from-sky-300 to-sky-100 hover:translate-1.5 transition delay-150 ease-in-out duration-100 cursor-pointer flex items-center gap-3 md:gap-8 px-4 md:px-8 shadow-lg">
                  <div className="w-12 h-12 md:w-16 md:h-16 relative">
                    <Image src="/jupyter.png" fill alt="ghazy" className="" />
                  </div>
                  <div className="text-black">
                    <h1 className="text-md md:text-2xl">Jupyter</h1>
                    <p className="hidden xl:block">
                      Application for data visualization
                    </p>
                  </div>
                </div>
              </a>
              <a
                href="https://www.tensorflow.org/"
                className="w-full h-[5em] md:h-[7em] rounded-3xl col-span-2"
              >
                <div className="w-full h-[5em] md:h-[7em] rounded-3xl col-span-2 bg-gradient-to-bl from-sky-300 to-sky-100 hover:translate-1.5 transition delay-150 ease-in-out duration-100 cursor-pointer flex items-center gap-3 md:gap-8 px-4 md:px-8 shadow-lg">
                  <div className="w-12 h-12 md:w-16 md:h-16 relative">
                    <Image src="/tensor.png" fill alt="ghazy" />
                  </div>
                  <div className="text-black">
                    <h1 className="text-md md:text-2xl">TensorFlow</h1>
                    <p className="hidden xl:block">
                      Application for machine learning
                    </p>
                  </div>
                </div>
              </a>
              <a
                href="https://code.visualstudio.com/"
                className="w-full h-[5em] md:h-[7em] rounded-3xl col-span-2"
              >
                <div className="w-full h-[5em] md:h-[7em] rounded-3xl col-span-2 bg-gradient-to-bl from-sky-300 to-sky-100 hover:translate-1.5 transition delay-150 ease-in-out duration-100 cursor-pointer flex items-center gap-3 md:gap-8 px-4 md:px-8 shadow-lg">
                  <div className="w-12 h-12 md:w-16 md:h-16 relative">
                    <Image src="/vscode.png" fill alt="ghazy" className="" />
                  </div>
                  <div className="text-black">
                    <h1 className="text-md md:text-2xl">VS Code</h1>
                    <p className="hidden xl:block">Code editor application</p>
                  </div>
                </div>
              </a>
              <a
                href="https://www.tableau.com/"
                className="w-full h-[5em] md:h-[7em] rounded-3xl col-span-2"
              >
                <div className="w-full h-[5em] md:h-[7em] rounded-3xl col-span-2 bg-gradient-to-bl from-sky-300 to-sky-100 hover:translate-1.5 transition delay-150 ease-in-out duration-100 cursor-pointer flex items-center gap-3 md:gap-8 px-4 md:px-8 shadow-lg">
                  <div className="w-12 h-12 md:w-16 md:h-16 relative">
                    <Image src="/tableau.png" fill alt="ghazy" className="" />
                  </div>
                  <div className="text-black">
                    <h1 className="text-md md:text-2xl">Tableau</h1>
                    <p className="hidden xl:block">
                      Application for data visualization
                    </p>
                  </div>
                </div>
              </a>
              <a
                href="https://nextjs.org/"
                className="w-full h-[5em] md:h-[7em] rounded-3xl col-span-2"
              >
                <div className="w-full h-[5em] md:h-[7em] rounded-3xl col-span-2 bg-gradient-to-bl from-sky-300 to-sky-100 hover:translate-1.5 transition delay-150 ease-in-out duration-100 cursor-pointer flex items-center gap-3 md:gap-8 px-4 md:px-8 shadow-lg">
                  <div className="w-12 h-12 md:w-16 md:h-16 relative">
                    <Image src="/next.svg" fill alt="ghazy" className="" />
                  </div>
                  <div className="text-black">
                    <h1 className="text-md md:text-2xl">Next JS</h1>
                    <p className="hidden xl:block">
                      Application for build websites
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </AnimatedContent>
        </main>
      </main>

      {/* footer */}
      <footer>
        <Footer />
      </footer>
    </section>
  );
}
