import {
  ArrowClockwise,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Copyright,
  DotsThreeVertical,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  User,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";
import zainLocal from "next/font/local";
import { X } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const zain = zainLocal({
  src: "../app/fonts/Alata,Geist,Geist_Mono,JetBrains_Mono/Zain/Zain-Bold.ttf",
});

export default function Footer() {
  return (
    <div className="w-full h-fit text-black mt-[8em] px-[2em] xl:px-[12em]">
      <div className="w-full h-fit flex justify-center">
        <div
          className={`${zain.className} w-full h-full bg-gradient-to-bl from-sky-300 to-sky-200 rounded-3xl text-[#1c3c63] lg:flex justify-between items-center p-12`}
        >
          <div className="lg:w-fit w-full h-fit">
            <h1 className="text-3xl md:text-5xl lg:text-7xl text-center lg:text-left">
              Let's make your idea come true
            </h1>
            <h2 className="text-md md:text-lg lg:text-xl lg:mt-[-0.5em] text-center lg:text-left">
              I'm ready to realize your ideas
            </h2>
          </div>
          <div className="w-full lg:w-fit h-fit gap-3 flex justify-center mt-6 lg:mt-0">
            <a href="https://wa.me/628170050337">
              <button className="w-fit h-fit px-6 py-2 border-3 border-[#1c3c63] rounded-full text-[#1c3c63] cursor-pointer text-xl">
                Let's talk
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-fit pt-12">
        <div className="text-sm lg:flex justify-between">
          <div className="flex gap-10 justify-center lg:justify-normal">
            <Link href="/" className="flex items-center gap-2">
              Home
              <span>
                <ArrowUpRight size={16} />
              </span>
            </Link>
            <Link href="/about" className="flex items-center gap-2">
              About
              <span>
                <ArrowUpRight size={16} />
              </span>
            </Link>
            <Link href="/product" className="flex items-center gap-2">
              Product
              <span>
                <ArrowUpRight size={16} />
              </span>
            </Link>
          </div>
          <div className="text-center mt-4 lg:mt-0">
            <p>hikmatiarghazy@gmail.com</p>
          </div>
        </div>
        <div className="w-full h-[2px] bg-gray-300 my-6"></div>
        <div className="lg:flex justify-between items-center">
          <div
            className={`${zain.className} text-4xl text-center text-[#1c3c63]`}
          >
            M. Ghazy Hikmatiar
          </div>
          <div className="flex gap-3 items-center justify-center lg:justify-normal mt-3 lg:mt-0">
            <a href="https://www.linkedin.com/in/m-ghazy-hikmatiar-ba51bb349?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <LinkedinLogo size={30} color="black" />
            </a>
            <a href="https://www.instagram.com/ghazyhix_?igsh=dDhmbjkxMGJsa2Jw">
              <InstagramLogo size={30} color="black" />
            </a>
            <a href="">
              <YoutubeLogo size={30} color="black" />
            </a>
            <a href="https://github.com/hixmatiar">
              <GithubLogo size={30} color="black" />
            </a>
          </div>
        </div>
        <div className="w-full h-[2px] bg-gray-300 mt-6"></div>
        <div className="flex justify-center items-center text-xs text-gray-400 py-3 gap-1">
          <span>Personal portfolio </span>
          <span>
            <Copyright size={16} />
          </span>
          <span>2025</span>
        </div>
      </div>
    </div>
  );
}
