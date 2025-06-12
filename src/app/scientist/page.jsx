import Link from "next/link";
import { zainLocal } from "next/font/local";
import { ArrowLeft, Code } from "@phosphor-icons/react/dist/ssr";
import Footer from "@/components/footer";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Scroll from "@/components/scroll";
import Back from "@/components/back";

const zain = zainLocal({
  src: "../fonts/Alata,Geist,Geist_Mono,JetBrains_Mono/Zain/Zain-Bold.ttf",
});

export default function Scientist() {
  return (
    <section className="w-full h-fit bg-[#f8f4e1] text-black">
      <header>
        <div
          className={` ${zain.className} w-full pt-12 lg:pt-24 bg-gradient-to-b from-sky-300 to-[#f8f4e1] flex justify-center items-center text-5xl lg:text-9xl text-[#1c3c63]`}
        >
          Data Scientist
        </div>
      </header>

      <Scroll />

      <main className="px-[2em] xl:px-[12em] w-full h-fit">
        {/* image hero */}
        <div className="w-full h-auto">
          <div className="w-full h-auto bg-white mt-6 overflow-hidden rounded-2xl">
            <div className="flex justify-start items-center overflow-hidden w-full h-10 md:h-12 gap-3 md:gap-5 px-4 bg-orange-200">
              <div className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] relative">
                <Image src="/jupyter.png" fill alt="ghazy" className="" />
              </div>
              <span className="text-xs md:text-lg">Jupyter</span>
              <span className="w-[7em] h-3 rounded-full bg-gray-100"></span>
              <span className="w-[5em] h-3 rounded-full bg-gray-100"></span>
              <span className="w-[2em] h-3 rounded-full bg-gray-100"></span>
            </div>
            <div className="pl-10 pt-4 w-full h-auto aspect-[4/2] md:aspect-[6/2]">
              <p className="text-xs md:text-sm">
                <code>{">"} import numpy as np</code>
              </p>
              <div className="w-3/4 h-3 rounded-full bg-gray-200 mt-3"></div>
              <div className="w-5/6 h-3 rounded-full bg-gray-200 mt-3"></div>
              <div className="w-7/12 h-3 rounded-full bg-gray-200 mt-3"></div>
            </div>
          </div>
        </div>

        {/* overview */}
        <h1
          className={`${zain.className} text-[2em] md:text-[3.5em] xl:text-[5.5em] pt-12 md:pt-24 md:text-center text-[#1c3c63]`}
        >
          Overview
        </h1>
        <div className="w-full h-fit flex flex-wrap justify-center">
          <p className="w-full max-w-[500px] md:max-w-[800px] h-fit text-justify text-sm/6 lg:text-lg/8">
            Data Science is a multidisciplinary field that combines scientific
            methods, processes, algorithms, and systems to extract knowledge and
            insights from data in various forms, simply put, data science is a
            method for making better decisions based on data. with data science
            we can create predictive models that can predict future outcomes
            based on data, in addition with data science we can develop systems
            that can learn from data and make decisions automatically such as
            machine learning and deep learning. in the process there are several
            stages, namely data collection, data cleaning, data exploration,
            data modeling, and data visualization.
          </p>
          <p className="w-full max-w-[500px] md:max-w-[800px] h-fit text-justify text-sm/6 lg:text-lg/8 pt-8 md:pt-12">
            The application of data science brings many benefits in various
            fields, including economics, health, technology, government, and
            manufacturing. with the many benefits of data science in various
            fields, I am here to help you make the best decisions for your ideas
            efficiently and structured. let's collaborate together.
          </p>
        </div>

        {/* image */}
        <div className="w-full h-fit md:flex gap-4 mt-12 md:mt-24">
          <div className="w-full h-auto aspect-video relative overflow-hidden rounded-3xl">
            <Image src="/jupy1.png" fill alt="ghazy" className="relative" />
          </div>
          <div className="w-full h-auto aspect-video relative overflow-hidden rounded-3xl mt-6 md:mt-0">
            <Image src="/jupy2.jpg" fill alt="ghazy" className="relative" />
          </div>
        </div>

        <Back />
      </main>

      <footer>
        <Footer />
      </footer>
    </section>
  );
}
