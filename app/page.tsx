import Banner from "@/components/Banner/Banner";
import "./globals.css";
import About from "@/components/about/About";
import ProjectSection from "@/components/Project/ProjectSection";
import Contact from "@/components/contact/Contact";
import Image from "next/image";
import img2 from "@/assets/pngwing.com.png";

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden relative ">
      <div className="absolute  w-full h-fit   top-0 left-0 -z-20 opacity-10 ">
        <Image
          alt="bannerImage"
          src={img2}
          className="animate-pulse w-full h-full bg-cover"
          objectFit="cover"
        />
      </div>

      <Banner />
      <About />
      <ProjectSection />
      <Contact />
    </div>
  );
}
