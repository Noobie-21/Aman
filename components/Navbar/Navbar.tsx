import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import Noob from "@/assets/logo/noob-logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="backdrop-filter backdrop-blur-3xl   text-white m-auto my-5 border rounded-full w-1/2 p-4 border-b  border-b-white ">
      <div className="flex justify-between items-center px-2 relative ">
        <div className="">
          <div className="w-30 absolute left-2 -top-1 bg-none rounded-full z-50 invert ">
            <Image alt="Navbar" src={Noob} width={30} />
          </div>
        </div>
        <div className="right-nav px-2 gap-2 flex justify-between items-center">
          <Link
            href="https://github.com/Noobie-21"
            className="cursor-pointer text-2xl ml-2 hover:text-pink-300"
          >
            <AiOutlineGithub />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
