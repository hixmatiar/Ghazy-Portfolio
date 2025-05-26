"use client";

import Navbar from "@/components/navbar";
import zainLocal from "next/font/local";
import Link from "next/link";
import {
  Browsers,
  ChartBar,
  Code,
  Database,
  Table,
  X,
} from "@phosphor-icons/react/dist/ssr";
import Footer from "@/components/footer";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "./styke.css";

const zain = zainLocal({
  src: "../fonts/Alata,Geist,Geist_Mono,JetBrains_Mono/Zain/Zain-Bold.ttf",
});

export default function Product() {
  return (
    <section className="bg-[#F8F4E1] w-full h-full">
      <header className="flex w-full h-fit justify-center">
        <Navbar />
      </header>

      {/* title display */}
      <h1
        className={`${zain.className} text-[2em] md:text-[3.5em] xl:text-[5.5em] pt-36 lg:pt-42 px-[1em] md:px-[0.5em] xl:px-[2.1em] text-black pb-3 bg-gradient-to-b from-sky-300 to-[#F8F4E1]`}
      >
        Let's develop your ideas
      </h1>

      {/* main display */}
      <main className="grid grid-cols-1 lg:grid-cols-6 gap-6 w-full h-fit justify-center bg-[#F8F4E1] px-[2em] xl:px-[12em] text-black">
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
                Applications and Web to develop your ideas
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
                Applications and Web to develop your ideas
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

      {/* title tools */}
      <h1
        className={`${zain.className} text-[2em] md:text-[3.5em] xl:text-[5.5em] py-12 md:pt-24 px-[1em] md:px-[0.5em] xl:px-[2.1em] text-black pb-3 bg--[#F8F4E1]`}
      >
        Tools in developing your ideas
      </h1>

      {/* main tools */}
      <main className="w-full h-fit px-[2em] xl:px-[12em] grid grid-cols-4 lg:grid-cols-6 gap-4 justify-center">
        <a
          href="https://www.microsoft.com/id-id/microsoft-365/excel"
          className="w-full h-[5em] md:h-[7em] rounded-3xl col-span-2"
        >
          <div className="w-full h-[5em] md:h-[7em] rounded-3xl col-span-2 bg-gradient-to-bl from-sky-300 to-sky-100  hover:translate-1.5 transition delay-150 ease-in-out duration-100 cursor-pointer flex items-center gap-8 px-4 md:px-8 shadow-xl">
            <div className="w-12 h-12 md:w-16 md:h-16 relative">
              <Image src="/excel.png" fill alt="ghazy" className="" />
            </div>
            <div className="text-black">
              <h1 className="text-lg md:text-2xl">Excel</h1>
              <p className="hidden xl:block">Application for </p>
            </div>
          </div>
        </a>
        <a
          href="https://jupyter.org/"
          className="w-full h-[5em] md:h-[7em] rounded-3xl col-span-2"
        >
          <div className="w-full h-[5em] md:h-[7em] rounded-3xl col-span-2 bg-gradient-to-bl from-fuchsia-300 to-fuchsia-100 hover:translate-1.5 transition delay-150 ease-in-out duration-100 cursor-pointer flex items-center gap-8 px-4 md:px-8 shadow-xl">
            <div className="w-12 h-12 md:w-16 md:h-16 relative">
              <Image src="/jupyter.png" fill alt="ghazy" className="" />
            </div>
            <div className="text-black">
              <h1 className="text-lg md:text-2xl">Jupyter</h1>
              <p className="hidden xl:block">Application for </p>
            </div>
          </div>
        </a>
        <a
          href="https://www.tensorflow.org/"
          className="w-full h-[5em] md:h-[7em] rounded-3xl col-span-2"
        >
          <div className="w-full h-[5em] md:h-[7em] rounded-3xl col-span-2 bg-gradient-to-bl from-teal-300 to-teal-100 hover:translate-1.5 transition delay-150 ease-in-out duration-100 cursor-pointer flex items-center gap-8 px-4 md:px-8 shadow-xl">
            <div className="w-12 h-12 md:w-16 md:h-16 relative">
              <Image src="/tensor.png" fill alt="ghazy" className="" />
            </div>
            <div className="text-black">
              <h1 className="text-lg md:text-2xl">TensorFlow</h1>
              <p className="hidden xl:block">Application for </p>
            </div>
          </div>
        </a>
        <a
          href="https://code.visualstudio.com/"
          className="w-full h-[5em] md:h-[7em] rounded-3xl col-span-2"
        >
          <div className="w-full h-[5em] md:h-[7em] rounded-3xl col-span-2 bg-gradient-to-bl from-sky-300 to-sky-100 hover:translate-1.5 transition delay-150 ease-in-out duration-100 cursor-pointer flex items-center gap-8 px-4 md:px-8 shadow-xl">
            <div className="w-12 h-12 md:w-16 md:h-16 relative">
              <Image src="/vscode.png" fill alt="ghazy" className="" />
            </div>
            <div className="text-black">
              <h1 className="text-lg md:text-2xl">VS Code</h1>
              <p className="hidden xl:block">Application for </p>
            </div>
          </div>
        </a>
        <a
          href="https://www.tableau.com/"
          className="w-full h-[5em] md:h-[7em] rounded-3xl col-span-2"
        >
          <div className="w-full h-[5em] md:h-[7em] rounded-3xl col-span-2 bg-gradient-to-bl from-fuchsia-300 to-fuchsia-100 hover:translate-1.5 transition delay-150 ease-in-out duration-100 cursor-pointer flex items-center gap-8 px-4 md:px-8 shadow-xl">
            <div className="w-12 h-12 md:w-16 md:h-16 relative">
              <Image src="/tableau.png" fill alt="ghazy" className="" />
            </div>
            <div className="text-black">
              <h1 className="text-lg md:text-2xl">Tableau</h1>
              <p className="hidden xl:block">Application for </p>
            </div>
          </div>
        </a>
        <a
          href="https://nextjs.org/"
          className="w-full h-[5em] md:h-[7em] rounded-3xl col-span-2"
        >
          <div className="w-full h-[5em] md:h-[7em] rounded-3xl col-span-2 bg-gradient-to-bl from-teal-300 to-teal-100 hover:translate-1.5 transition delay-150 ease-in-out duration-100 cursor-pointer flex items-center gap-8 px-4 md:px-8 shadow-xl">
            <div className="w-12 h-12 md:w-16 md:h-16 relative">
              <Image src="/next.svg" fill alt="ghazy" className="" />
            </div>
            <div className="text-black">
              <h1 className="text-lg md:text-2xl">Next JS</h1>
              <p className="hidden xl:block">Application for </p>
            </div>
          </div>
        </a>
      </main>

      {/* title latest */}
      <h1
        className={`${zain.className} text-[2em] md:text-[3.5em] xl:text-[5.5em] py-12 md:pt-24 px-[1em] md:px-[0.5em] xl:px-[2.1em] text-black pb-3 bg--[#F8F4E1]`}
      >
        My latest project's
      </h1>

      {/* main latest */}
      <main className="w-full h-fit px-[2em] xl:px-[12em]">
        <Swiper
          loop="true"
          slidesPerView="1"
          breakpoints={{
            1280: {
              slidesPerView: 2,
            },
          }}
          spaceBetween={10}
          className="w-full h-[16em] md:h-[24em] text-black"
        >
          <SwiperSlide className="bg-teal-200 rounded-3xl mockup-window">
            Siana
          </SwiperSlide>
          <SwiperSlide className="bg-amber-200 rounded-3xl mockup-window">
            Sabuk
          </SwiperSlide>
        </Swiper>
      </main>

      <footer className="w-full h-fit px-[2em] xl:px-[12em]">
        <Footer />
      </footer>
    </section>
  );
}
