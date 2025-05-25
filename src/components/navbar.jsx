"use client";
import { alataLocal } from "next/font/local";
import Link from "next/link";

const alata = alataLocal({
  src: "../app/fonts/Alata,Geist,Geist_Mono,JetBrains_Mono/Alata/Alata-Regular.ttf",
});

export default function Navbar() {
  return (
    <div className={` ${alata.className} w-full flex justify-center`}>
      <div className="px-6 gap-6 lg:gap-8 flex bg-white/40 backdrop-blur-xs md:backdrop-blur-sm z-10  w-fit h-14 lg:h-16 rounded-full justify-center items-center shadow-lg fixed mt-8">
        <Link href="/" className="text-black text-s lg:text-lg font-medium">
          Home
        </Link>
        <Link
          href="/about"
          className="text-black text-s lg:text-lg font-medium"
        >
          About
        </Link>
        <Link
          href="/product"
          className="text-black text-s lg:text-lg font-medium"
        >
          Product
        </Link>
        <a
          href="https://wa.me/628170050337"
          className="text-black text-s lg:text-lg font-medium"
        >
          Contact
        </a>
      </div>
    </div>
  );
}
