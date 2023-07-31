import Banner from "@/components/Banner/Banner";
import "./globals.css";
import About from "@/components/about/About";
import ProjectSection from "@/components/Project/ProjectSection";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col ">
      <Banner />
      <About />
      <ProjectSection />
      <Contact />
    </div>
  );
}
