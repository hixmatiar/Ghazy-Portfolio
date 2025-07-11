import {
  Browsers,
  ChartBar,
  Database,
  X,
} from "@phosphor-icons/react/dist/ssr";
import { Zain } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import AnimatedContent from "./AnimatedContent/AnimatedContent";

const zain = Zain({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Content() {
  return (
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
      <main className="grid grid-cols-1 lg:grid-cols-6 gap-10 w-full h-fit justify-center bg-[#F8F4E1] lg:mt-[8em] mt-[-64px] text-black">
        {/* content 1 */}
        <Link
          href="/scientist"
          className={`w-full h-[16em] md:h-[24em] rounded-3xl lg:col-span-3 overflow-hidden hover:translate-1.5 transition delay-150 ease-in-out duration-100 cursor-pointer`}
        >
          <div
            className={`w-full h-[16em] md:h-[24em] rounded-3xl lg:col-span-3 overflow-hidden`}
          >
            {/* header */}
            <div className="w-full flex justify-start items-center h-12 bg-sky-300">
              <div className="w-fit h-full bg-vanilla flex gap-4 md:gap-2 px-4 justify-start items-center flex-nowrap rounded-br-3xl text-nowrap">
                <Database className="md:w-8 md:h-8 w-6 h-6" />
                <span className="text-[1.2em] md:text-[2em] mb-1">
                  Data Scientist
                </span>
              </div>
              <div className="w-full h-full bg-vanilla">
                <div className="w-full h-full rounded-tl-3xl bg-sky-300"></div>
              </div>
            </div>

            {/* content */}
            <div className="w-full h-full pl-14 pt-3 bg-sky-300 rounded-tl-3xl">
              <h1 className={`${zain.className} md:text-[1.8em]`}>
                Build the best decision for your ideas
              </h1>
              <div className="w-full h-full bg-white mt-6 overflow-hidden rounded-tl-2xl">
                <div className="flex justify-start items-center overflow-hidden w-full h-10 gap-3 px-4 bg-orange-200">
                  <div className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] relative">
                    <Image src="/jupyter.png" fill alt="ghazy" className="" />
                  </div>
                  <span className="text-xs">Jupyter</span>
                  <span className="w-[7em] h-3 rounded-full bg-gray-100"></span>
                  <span className="w-[5em] h-3 rounded-full bg-gray-100"></span>
                  <span className="w-[2em] h-3 rounded-full bg-gray-100"></span>
                </div>
                <div className="pl-10 pt-4">
                  <p className="text-xs">
                    <code>{">"} import numpy as np</code>
                  </p>
                  <div className="w-3/4 h-3 rounded-full bg-gray-200 mt-2"></div>
                  <div className="w-5/6 h-3 rounded-full bg-gray-200 mt-2"></div>
                  <div className="w-7/12 h-3 rounded-full bg-gray-200 mt-2"></div>
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* content 2 */}
        <Link
          href="/analyst"
          className={`w-full h-[16em] md:h-[24em] rounded-3xl lg:col-span-3 overflow-hidden hover:translate-1.5 transition delay-150 ease-in-out duration-100 cursor-pointer`}
        >
          <div
            className={`w-full h-[16em] md:h-[24em] rounded-3xl lg:col-span-3 overflow-hidden`}
          >
            {/* header */}
            <div className="w-full flex justify-start items-center h-12 bg-fuchsia-300">
              <div className="w-fit h-full bg-vanilla flex gap-4 md:gap-2 px-4 justify-start items-center flex-nowrap rounded-br-3xl text-nowrap">
                <ChartBar className="md:w-8 md:h-8 w-6 h-6" />
                <span className="text-[1.2em] md:text-[2em] mb-1">
                  Data Analyst
                </span>
              </div>
              <div className="w-full h-full bg-vanilla">
                <div className="w-full h-full rounded-tl-3xl bg-fuchsia-300"></div>
              </div>
            </div>

            {/* content */}
            <div className="w-full h-full pl-14 pt-3 bg-fuchsia-300 rounded-tl-3xl">
              <h1 className={`${zain.className} md:text-[1.8em]`}>
                Find the best solution for your problem
              </h1>
              <div className="w-full h-full bg-white mt-6 overflow-hidden rounded-tl-2xl">
                <div className="flex justify-start items-center overflow-hidden w-full h-10 gap-3 px-4 bg-amber-200">
                  <div className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] relative">
                    <Image src="/tableau.png" fill alt="ghazy" className="" />
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
          </div>
        </Link>

        {/* content 3 */}
        <Link
          href="/developer"
          className={`w-full h-[16em] md:h-[24em] rounded-3xl lg:col-span-6 overflow-hidden hover:translate-1.5 transition delay-150 ease-in-out duration-100 cursor-pointer`}
        >
          <div
            className={`w-full h-[16em] md:h-[24em] rounded-3xl lg:col-span-6 overflow-hidden`}
          >
            {/* header */}
            <div className="w-full flex justify-start items-center h-12 bg-teal-300">
              <div className="w-fit h-full bg-vanilla flex gap-4 md:gap-2 px-4 justify-start items-center flex-nowrap rounded-br-3xl text-nowrap">
                <Browsers className="md:w-8 md:h-8 w-6 h-6" />
                <span className="text-[1.2em] md:text-[2em] mb-1">
                  Front-end Developer
                </span>
              </div>
              <div className="w-full h-full bg-vanilla">
                <div className="w-full h-full rounded-tl-3xl bg-teal-300"></div>
              </div>
            </div>

            {/* content */}
            <div className="w-full h-full pl-14 pt-3 bg-teal-300 rounded-tl-3xl">
              <h1 className={`${zain.className} md:text-[1.8em]`}>
                Applications and Website to develop your ideas
              </h1>
              <div className="w-full h-full bg-white mt-6 overflow-hidden rounded-tl-2xl">
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
          </div>
        </Link>
      </main>
    </AnimatedContent>
  );
}
