import {
  ArrowClockwise,
  ArrowLeft,
  ArrowRight,
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
    <div className="w-full h-fit bg-gray-200 rounded-t-3xl text-black overflow-hidden mt-[8em]">
      <div className="flex justify-start items-center overflow-hidden w-full h-10 gap-2 px-4 bg-gray-200">
        <span className="w-3 h-3 bg-rose-400 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
        <span className="w-3 h-3 bg-green-400 rounded-full"></span>
        <span className="bg-gray-300 w-[7em] h-10 ml-2 flex items-center px-3 gap-2 rounded-t-xl">
          <span className="w-full h-3 rounded-full bg-gray-100"></span>
          <span>
            <X size={16} color="white" weight="bold" />
          </span>
        </span>
      </div>
      <div className="w-full h-10 bg-gray-300 rounded-t-lg flex items-center gap-4 px-4">
        <ArrowLeft size={20} />
        <ArrowRight size={20} />
        <ArrowClockwise size={20} />
        <span className="w-full h-6 bg-gray-200 rounded-full px-4 text-xs flex items-center">
          Ghazy Portfolio's
        </span>
        <span className="w-fit px-1.5 h-6 rounded-full bg-gray-200 flex justify-center items-center">
          <User className="w-[12px] h-[12px]" />
        </span>
        <DotsThreeVertical size={20} />
      </div>
      <div className="w-full h-fit bg-white px-3 md:px-5">
        {/* bagian 1 */}
        <h1
          className={` ${zain.className} text-2xl text-center md:text-6xl xl:text-7xl pt-6 md:pt-12`}
        >
          Let's make your idea come true
        </h1>
        <div className="flex justify-center items-center w-full h-fit pt-2 md:pt-4 pb-0 md:pb-4">
          <a href="https://wa.me/628170050337">
            <button
              className={`${zain.className} w-fit h-fit px-6 py-2 rounded-full bg-[#F8F4E1] text-md md:text-2xl cursor-pointer`}
            >
              Let's Talk
            </button>
          </a>
        </div>

        <div className="flex justify-center  items-start pt-6 md:pt-12 pb-2">
          <div className="flex gap-3 items-center">
            <a href="https://www.linkedin.com/in/m-ghazy-hikmatiar-ba51bb349?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <span className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F8F4E1] flex items-center justify-center">
                <LinkedinLogo className="w-[24px] h-[24px]" />
              </span>
            </a>
            <a href="https://www.instagram.com/ghazyhix_/">
              <span className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F8F4E1] flex items-center justify-center">
                <InstagramLogo className="w-[24px] h-[24px]" />
              </span>
            </a>
            <a href="...">
              <span className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F8F4E1] flex items-center justify-center">
                <YoutubeLogo className="w-[24px] h-[24px]" />
              </span>
            </a>
            <a href="https://github.com/hixmatiar">
              <span className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F8F4E1] flex items-center justify-center">
                <GithubLogo className="w-[24px] h-[24px]" />
              </span>
            </a>
          </div>
        </div>
        <div className="w-full h-[2px] bg-gray-200 mt-2"></div>
        {/* bagian 2 */}
        <div
          className={`${zain.className} flex justify-between items-center gap-2 pt-1 md:pt-2 pb-4`}
        >
          <div className="flex gap-2">
            <h1 className="text-xs md:text-lg">Muhammad Ghazy Hikmatiar</h1>
            <h1 className="hidden md:block">|</h1>
            <h1 className="md:text-lg hidden md:block">Surakarta, Indonesia</h1>
          </div>
          <h1 className={`text-xs md:text-lg`}> hikmatiarghazy@gmail.com</h1>
        </div>
      </div>
    </div>
  );
}
