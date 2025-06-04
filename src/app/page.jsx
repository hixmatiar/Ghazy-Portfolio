"use client";
import { alataLocal, zainLocal } from "next/font/local";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Latest from "@/components/latest";
import Content from "@/components/content";

const zain = zainLocal({
  src: "./fonts/Alata,Geist,Geist_Mono,JetBrains_Mono/Zain/Zain-Bold.ttf",
});

const alata = alataLocal({
  src: "./fonts/Alata,Geist,Geist_Mono,JetBrains_Mono/Alata/Alata-Regular.ttf",
});

export default function Home() {
  return (
    <section className="bg-[#F8F4E1] w-full h-full">
      {/* header */}
      <header className="flex w-full h-fit justify-center bg-pink-200">
        <Navbar />
      </header>

      {/* main hero */}
      <main className="flex w-full h-fit  justify-center items-center bg-gradient-to-b from-sky-300 to-[#F8F4E1] pt-24">
        <div
          className={`${zain.className} text-center h-fit w-fit py-6 text-[#1c3c63]`}
        >
          <h1 className="text-[4em] xl:text-[12em] md:text-[7em]">
            Hello. I'm Ghazy
          </h1>
          <h1 className="text-[2.3em] md:text-[4em] xl:text-[7em] mt-[-0.7em]">
            Big Data & Front-end Dev
          </h1>
          <p
            className={` ${alata.className} text-[0.8em]/5 lg:text-[1.5em] px-8 md:text-[1.1em]/7 md:px-28 text-center mt-[3em] mb-6`}
          >
            I process big data and visualize it to determine the best decision
            for the solution to your problem
          </p>
        </div>
      </main>

      <Content />
      <Latest />

      {/* footer */}
      <footer>
        <Footer />
      </footer>
    </section>
  );
}
