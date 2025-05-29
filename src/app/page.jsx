import {
  Browsers,
  ChartBar,
  Code,
  Database,
  Table,
  X,
} from "@phosphor-icons/react/dist/ssr";
import Navbar from "@/components/navbar";
import { alataLocal, zainLocal, monoLocal } from "next/font/local";
import Footer from "@/components/footer";
import Link from "next/link";
// import { CaretDown } from "@phosphor-icons/react/dist/ssr";

const zain = zainLocal({
  src: "./fonts/Alata,Geist,Geist_Mono,JetBrains_Mono/Zain/Zain-Bold.ttf",
});

const alata = alataLocal({
  src: "./fonts/Alata,Geist,Geist_Mono,JetBrains_Mono/Alata/Alata-Regular.ttf",
});

const mono = monoLocal({
  src: "./fonts/Alata,Geist,Geist_Mono,JetBrains_Mono/JetBrains_Mono/JetBrainsMono-VariableFont_wght.ttf",
});

export default function Home() {
  return (
    <section className="bg-[#F8F4E1] w-full h-full">
      {/* header */}
      <header className="flex w-full h-fit justify-center bg-pink-200">
        <Navbar />
      </header>

      {/* main hero */}
      <main className="flex w-full h-fit  justify-center items-center text-black bg-gradient-to-b from-sky-300 to-[#F8F4E1] pt-24">
        <div className={`${zain.className} text-center h-fit w-fit py-6`}>
          <h1 className="text-[4em] xl:text-[12em] md:text-[7em]">
            Hello. I'm Ghazy
          </h1>
          <h1 className="text-[2.3em] md:text-[4em] xl:text-[7em] mt-[-0.7em]">
            Big Data & Front-end Dev
          </h1>
          <p
            className={` ${alata.className} text-[0.8em]/5 lg:text-[1.5em] px-8 md:text-[1.1em]/7 md:px-28 text-center mt-[3em]`}
          >
            I process big data and visualize it to determine the best decision
            for the solution to your problem
          </p>
        </div>
      </main>

      {/* main content */}
      <main className="grid grid-cols-1 lg:grid-cols-6 gap-6 w-full h-fit justify-center bg-[#F8F4E1] px-[2em] xl:px-[12em] mt-[2.5em] xl:mt-[4.5em] text-black">
        {/* content 1 */}
        <Link
          href="/scientist"
          className={`w-full h-[16em] md:h-[24em] rounded-3xl bg-sky-300 lg:col-span-3 overflow-hidden shadow-xl hover:translate-1.5 transition delay-150 ease-in-out duration-100 cursor-pointer`}
        >
          <div
            className={`w-full h-[16em] md:h-[24em] rounded-3xl bg-sky-300 lg:col-span-3 overflow-hidden`}
          >
            {/* header */}
            <div className="w-full flex justify-start items-center h-12 bg-sky-500 px-4 gap-2">
              <Database size={32} />
              <span>Data Scientist</span>
            </div>

            {/* content */}
            <div className="w-full h-full pl-14 pt-2">
              <h1 className={`${zain.className} md:text-[2em]`}>
                Find the best solution for your problem
              </h1>
              <div className="w-full h-full bg-white mt-6 overflow-hidden rounded-tl-2xl">
                <div className="flex justify-start items-center overflow-hidden w-full h-10 gap-3 px-4 bg-orange-200">
                  <Code size={20} />
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
          className={`w-full h-[16em] md:h-[24em] rounded-3xl bg-sky-300 lg:col-span-3 overflow-hidden shadow-xl hover:translate-1.5 transition delay-150 ease-in-out duration-100 cursor-pointer`}
        >
          <div
            className={`w-full h-[16em] md:h-[24em] rounded-3xl bg-fuchsia-200 lg:col-span-3 overflow-hidden`}
          >
            {/* header */}
            <div className="w-full flex justify-start items-center h-12 bg-fuchsia-300 px-4 gap-2 rounded">
              <ChartBar size={32} />
              <span>Data Analyst</span>
            </div>

            {/* content */}
            <div className="w-full h-full pl-14 pt-2">
              <h1 className={`${zain.className} md:text-[2em]`}>
                Build the best decision for your ideas
              </h1>
              <div className="w-full h-full bg-white mt-6 overflow-hidden rounded-tl-2xl">
                <div className="flex justify-start items-center overflow-hidden w-full h-10 gap-3 px-4 bg-amber-200">
                  <Table size={20} />
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
          className={`w-full h-[16em] md:h-[24em] rounded-3xl bg-teal-300 lg:col-span-6 overflow-hidden shadow-xl hover:translate-1.5 transition delay-150 ease-in-out duration-100 cursor-pointer`}
        >
          <div
            className={`w-full h-[16em] md:h-[24em] rounded-3xl bg-teal-300 lg:col-span-6 overflow-hidden`}
          >
            {/* header */}
            <div className="w-full flex justify-start items-center h-12 bg-teal-400 px-4 gap-2 rounded">
              <Browsers size={32} />
              <span>Front-end Developer</span>
            </div>

            {/* content */}
            <div className="w-full h-full pl-14 pt-2">
              <h1 className={`${zain.className} md:text-[2em]`}>
                Applications and Web to develop your ideas
              </h1>
              <div className="w-full h-full bg-white mt-6 overflow-hidden rounded-tl-2xl">
                <div className="flex justify-start items-center overflow-hidden w-full h-10 gap-2 px-4 bg-gray-200">
                  <span className="w-3 h-3 bg-rose-400 rounded-full"></span>
                  <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                  <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                  <span className="bg-gray- 00 w-[7em] h-10 ml-2 flex items-center px-3 gap-2">
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

      {/* footer */}
      <footer className="w-full h-fit px-[2em] xl:px-[12em]">
        <Footer />
      </footer>
    </section>
  );
}
