import React from "react";
import ProjectCard from "./ProjectCard";
import event from "@/assets/event.png";
import reddit from "@/assets/reddit-clone.png";

type Props = {};

const ProjectSection = (props: Props) => {
  return (
    <div className="w-full h-full   mb-5 flex flex-col  gap-3" id="project">
      <ProjectCard
        value="md:flex-row"
        textAlign="md:text-right"
        justifyValue="justify-end"
        image={reddit}
        details="A fully stack reddit clone, the funcanlity I applied in this app is create community , create Post, delete post , join community , leave community and many more"
        link="https://reddit-clone-app-eight.vercel.app/"
        name="Reddit clone "
        stack={["Tailwind", "NextJs", "Firebase", "Chakra Ui", "Recoil"]}
        githubLink="https://github.com/Noobie-21/redditcloneapp"
      />
      <ProjectCard
        value="md:flex-row-reverse"
        textAlign="md:text-left"
        justifyValue="start"
        image={event}
        details=" A place to find, join, and host events with a clean and easy to
        use user interface. Loaded with features and filters to find the
        best meetups you want without wasting time and many more."
        link="https://event-hub-3fv5.vercel.app/"
        name="EventHub"
        stack={["Tailwind", "NextJs", "Firebase", "Chakra Ui", "Recoil"]}
        githubLink="https://github.com/Noobie-21/event-hub"
      />
    </div>
  );
};

export default ProjectSection;
