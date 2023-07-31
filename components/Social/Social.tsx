import Image from "next/image";
import React from "react";
import Insta from "@/assets/insta.png";
import Twitter from "@/assets/twiter.png";
import Git from "@/assets/git.png";
import Cutie from "@/assets/cutie.png";
import Anime from "@/assets/anime.png";
import Link from "next/link";

const SocialSection = () => {
  return (
    <div className=" w-full h-screen relative ">
      {/* <div className="absolute  bottom-0 right-0 -z-20 opacity-60">
        <Image alt="social" src={Anime} width={300} height={300} />
      </div> */}
      <div className="   ">
        <h1 className=" bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400  text-transparent bg-clip-text text-center md:text-[10rem] text-[3rem]  font-mulish uppercase">
          Social <span className=" ">Media</span>{" "}
        </h1>
        <div className="cutiepie absolute opacity-70 bottom-0 -left-[4.5rem]  overflow-hidden rounded-full  ">
          <Image alt="social" src={Cutie} width={250} height={250} />
        </div>
      </div>

      <div className=" flex justify-between p-20  items-center gap-4 ">
        <div className="">
          <div className="cursor-pointer   border border-gray-600  p-3 rounded-full ">
            <Image
              alt="social"
              className="hover:-translate-y-2 transition-all duration-100"
              src={Insta}
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className=" ">
          <div className="cursor-pointer  border border-gray-600  p-3 rounded-full ">
            <Image
              alt="social"
              className=" hover:-translate-y-2 transition-all duration-100"
              src={Twitter}
              width={200}
              height={200}
            />
          </div>
        </div>
        <Link href={"https://github.com/Noobie-21"} target="_blank">
          <div className=" cursor-pointer  border border-gray-600 p-3 rounded-full ">
            <Image
              alt="social"
              className=" invert hover:-translate-y-2 transition-all duration-100"
              src={Git}
              width={200}
              height={200}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SocialSection;
