import Image, { StaticImageData } from "next/image";
import React from "react";
import eventHub from "@/assets/eventhub project.png";
import event from "@/assets/event.png";
import { AiFillGithub } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";
import Link from "next/link";

type Props = {
  value: string;
  textAlign: string;
  justifyValue: string;
  image: StaticImageData;
  name: string;
  link: string;
  details: string;
  stack: string[];
  githubLink: string;
};

const ProjectCard = ({
  value,
  textAlign,
  justifyValue,
  image,
  stack,
  details,
  link,
  name,
  githubLink,
}: Props) => {
  return (
    <div className={`flex h-full w-full  ${value} flex-col  p-5`}>
      <Link
        href={link}
        target="_blank"
        className="h-full  w-full p-2 border rounded-lg backdrop-blur-2xl border-slate-500"
      >
        <div className="w-full h-fit  rounded-lg p-3">
          <Image
            src={image}
            alt="EventHub Image"
            className="w-full h-full bg-cover bg-center"
          />
        </div>
      </Link>
      <div className=" flex w-full md:h-screen h-full justify-center items-center md:p-6 p-2 gap-4 ">
        <div className="flex flex-col justify-center items-center md:p-8 p-4">
          <div className="w-full ">
            <h1
              className={`text-[4rem]   w-full  text-center uppercase  ${textAlign} text-violet-500`}
            >
              {name}
            </h1>
          </div>
          <div className="w-full md:h-36 h-full rounded-md md:p-6 p-3 bg-slate-900 text-slate-400 font-roboto ">
            <h1 className="text-center">{details}</h1>
          </div>
          <div className={`w-full flex ${justifyValue} mt-4`}>
            <div className="flex justify-between font-semibold md:w-[80%] w-full text-slate-300 font-mulish uppercase md:text-sm text-[10px]">
              {stack.map((item) => {
                return <h1>{item}</h1>;
              })}
            </div>
          </div>
          <div className={`flex ${justifyValue} w-full mt-2 gap-2`}>
            <Link
              href={githubLink}
              target="_blank"
              className="hover:text-slate-600"
            >
              <AiFillGithub size="24" />
            </Link>
            <Link
              href={link}
              target="_blank"
              className="hover:text-slate-600 font-bold"
            >
              <BsBoxArrowUpRight size="20" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
