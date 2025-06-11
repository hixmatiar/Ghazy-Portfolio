"use client";

import { CaretLineUp } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import { useEffect, useState } from "react";

export default function Scroll() {
  const [Back, setBack] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1000) {
        setBack(true);
      } else {
        setBack(false);
      }
    });
  });

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="w-full h-fit justify-center fixed z-10 bottom-5 lg:bottom-4 flex opacity-90 cursor-pointer">
      {Back && (
        <div
          className="w-fit h-fit p-3 rounded-full bg-accent-navy"
          onClick={scrollUp}
        >
          <CaretLineUp
            className="text-vanilla w-4 h-4 lg:w-6 lg:h-6"
            weight="bold"
          />
        </div>
      )}
    </div>
  );
}
