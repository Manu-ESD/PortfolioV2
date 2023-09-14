import React from "react";
import ProjectCard from "./ProjectCard";
import jarvisProject from "../Utility/Images/Jarvis-project.png";
import NetflixProject from "../Utility/Images/Netflix-Clone.png";
import Chatbot from "../Utility/Images/Chatbot.png";

const Projects = () => {
  return (
    <div className="h-screen w-[90%] m-auto" id="projects">
      <h3 className="text-[1.5rem] text-black font-bold my-3">Projects:</h3>
      <div className="flex flex-row flex-wrap gap-3">
        <ProjectCard
          spath={jarvisProject}
          name="Jarvis Voice Assistant ToDo Planner"
          discription=""
          gitL=""
        ></ProjectCard>
        <ProjectCard
          spath={NetflixProject}
          name="Netflix Clone"
          discription=""
          gitL=""
        ></ProjectCard>
        <ProjectCard
          spath={Chatbot}
          name="Responsive Chatbot Application"
          discription=""
          gitL=""
        ></ProjectCard>
        <ProjectCard spath="" name="" discription="" gitL=""></ProjectCard>
      </div>
    </div>
  );
};

export default Projects;
