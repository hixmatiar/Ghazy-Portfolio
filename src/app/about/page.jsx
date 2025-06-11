import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { zainLocal, alataLocal } from "next/font/local";
import Image from "next/image";

const zain = zainLocal({
  src: "../fonts/Alata,Geist,Geist_Mono,JetBrains_Mono/Zain/Zain-Bold.ttf",
});

const alata = alataLocal({
  src: "../fonts/Alata,Geist,Geist_Mono,JetBrains_Mono/Alata/Alata-Regular.ttf",
});

export default function About() {
  return (
    <section className="bg-[#F8F4E1] w-full h-full text-black">
      {/* header */}
      <header className="flex w-full h-fit justify-center">
        <Navbar />
      </header>

      {/* main hero */}
      <main className="w-full h-fit flex justify-end pt-36 lg:pt-52 px-[2em] xl:px-[12em] bg-gradient-to-b from-sky-300 to-vanilla">
        <div className="w-6/16 h-fit flex justify-center">
          <div className="w-[384px] h-auto rounded-full overflow-hidden aspect-square relative">
            <Image src="/profil1.png" fill alt="ghazy" />
          </div>
        </div>
        <div className={`${zain.className} w-10/16 h-[384px] text-accent-navy`}>
          <h1 className="text-9xl">I'm Ghazy Hikmatiar</h1>
          <h2 className="text-7xl mt-[-12px]">Big Data & Front-end Dev</h2>
          <p
            className={`${alata.className} text-black mt-6 w-full max-w-[640px]`}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
            exercitationem aliquid deserunt ad iste quos repudiandae ullam quia
            libero possimus?
          </p>
        </div>
      </main>

      {/* main experience */}
      <main className="my-[2.5em]">
        <h1 className={`${zain.className} text-center text-black text-[3em]`}>
          My Experience
        </h1>
        <div className="flex justify-center mt-[1.5em]">
          <ul className="steps steps-vertical px-[2em] xl:px-[12em]">
            <li className="step"></li>
            <li className="step"></li>
            <li className="step"></li>
          </ul>
        </div>
      </main>

      {/* <footer className="w-full h-fit px-[2em] xl:px-[12em]">
        <Footer />
      </footer> */}
    </section>
  );
}
