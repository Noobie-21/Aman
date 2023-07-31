import Image from "next/image";
import React from "react";
import AnimeGirl from "@/assets/animegirl.png";
import AnimeGirl2 from "@/assets/animegirl2.png";

const About = () => {
  return (
    <div
      className="w-full h-screen flex relative px-12 justify-center items-center font-mulish"
      id="about"
    >
      <div className="p-12 flex flex-col justify-center items-center ">
        <h1 className="text-7xl mb-5 font-bold   bg-gradient-to-r from-pink-400 via-green-300 to-red-200 text-transparent bg-clip-text   text-center">
          About me
        </h1>
        <div className="md:w-[80%] w-full">
          <p className="md:text-4xl text-2xl text-slate-300  text-center  mt-3">
            I am Aman Gupta , Passionate about making website and learing new
            technology
          </p>

          <p className="text-3xl text-slate-200 text-center mt-3 ">
            Hobby - watching Anime
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
