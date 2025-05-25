import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import zainLocal from "next/font/local";

const zain = zainLocal({
  src: "../fonts/Alata,Geist,Geist_Mono,JetBrains_Mono/Zain/Zain-Bold.ttf",
});

export default function About() {
  return (
    <section className="bg-[#F8F4E1] w-full h-full">
      {/* header */}
      <header className="flex w-full h-fit justify-center">
        <Navbar />
      </header>

      {/* main hero */}
      <main className="w-full h-fit flex">
        <div className=""></div>
        <div></div>
      </main>

      {/* main experience */}
      {/* <main className="my-[2.5em]">
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
      </main> */}

      {/* <footer className="w-full h-fit px-[2em] xl:px-[12em]">
        <Footer />
      </footer> */}
    </section>
  );
}
