import React from "react";
import { Circular, CircularText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div
      className=" fixed left bottom-1
    flex items-center justify-center overflow-hidden"
    >
      <div className="w-48 h-auto flex items-center justify-center relative">
        <Circular className={"fill-dark animate-spin-slow"} />
        <Link
          href="mailto:hpenmulato@gmail.com"
          className="flex items-center justify-center absolute
        left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-mdb
        border-solid w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark
        hover:border-dark border-2"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
