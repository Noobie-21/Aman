import Link from "next/link";
import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="w-full md:h-72 h-full p-6 flex flex-col justify-center items-center mt-6 text-slate-100">
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <h1 className="md:text-7xl text-5xl font-mulish font-bold bg-gradient-to-r from-violet-800  to-violet-600  text-transparent bg-clip-text mb-6">
          Get in Touch
        </h1>
        <h4 className="max-w-xl text-2xl font-roboto text-center mb-5 ">
          Thanks for checking out my portfolio 🎉! I hope you liked it, I would
          appreciate your feedback also, I'm constantly looking for new
          opportunities and welcome anyone to my inboxes ✉️.
        </h4>
      </div>
      <Link
        href={"mailto:amangupta807646@gmail.com"}
        className="bg-violet-700 p-3 rounded-md font-mulish px-6"
      >
        <button>Say Hello 👋</button>
      </Link>
    </div>
  );
};

export default Contact;
