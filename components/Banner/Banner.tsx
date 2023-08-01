import Image from "next/image";
import React from "react";

import Noob from "@/assets/noob.png";
import Bubble from "@/assets/bubble.png";
import animeboy from "@/assets/animeboy.png";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="text-white w-full h-full  p-2 relative ">
      <div className="flex md:mx-12  items-center justify-between relative  ">
        <div className="md:w-1/2 md:p-10 p-4  ">
          <h1 className=" w-full ">
            <span className="text-5xl  w-full  text-slate-300 opacity-30 bg-clip-text font-bold ">
              Aman Gupta
            </span>
          </h1>
          <h2 className="   ">
            <span className="gradient-text font-bold md:text-8xl text-6xl font-roboto  ">
              React Developer
            </span>{" "}
            and{" "}
            <span className=" gradient-text text-6xl font-bold font-mono">
              Passionate Coder
            </span>
          </h2>
          <Link
            href="#project"
            className="ml-2 mt-4 text-2xl hover:tracking-wider transition-all  "
          >
            Project
          </Link>
        </div>
        <div className="  ">
          <div className="absolute  -top-28 -right-10 opacity-25 -z-40">
            <Image
              alt="Image"
              src={Noob}
              width={500}
              height={500}
              className="opacity-25 "
            />
          </div>

          <div className="md:flex hidden">
            <Image
              alt="banner Image"
              className=" "
              src={animeboy}
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
