import React from "react";
import ProjectCard from "./ProjectCard";
import jarvisProject from "../Utility/Images/Jarvis-project.png";
import NetflixProject from "../Utility/Images/Netflix-Clone.png";
import Chatbot from "../Utility/Images/Chatbot.png";
import Esite from "../Utility/Images/Ecommercesite.png";

const Projects = () => {
  return (
    <div
      className="h-screen w-[100%] m-auto bg-gradient-to-t -translate-y-3 from-[#1c1e26]"
      id="projects"
    >
      <div className="w-[90%] mx-auto">
        <h3 className="text-[1.5rem] text-[#fff] font-[MainFont] font-bold my-3 mb-10">
          Projects:
        </h3>
        <div className="flex flex-row flex-wrap gap-3">
          <ProjectCard
            spath={jarvisProject}
            name="Jarvis ToDo Assistant ToDo"
            discription=""
            gitL=""
            color="#a1887f75"
          ></ProjectCard>
          <ProjectCard
            spath={NetflixProject}
            name="Netflix Clone"
            discription=""
            gitL=""
            color="#f4433675"
          ></ProjectCard>
          <ProjectCard
            spath={Chatbot}
            name="Responsive Chatbot Application"
            discription=""
            gitL=""
            color="#42a5f575"
          ></ProjectCard>
          <ProjectCard
            spath={Esite}
            name="E-Commerce Site"
            discription=""
            gitL=""
            color="#9575cd75"
          ></ProjectCard>
        </div>
        <div className="h-[100vh] w-[100vh]  flex justify-center items-center absolute bottom-[-50%] right-[-300px]">
          <div className="h-[50vh] w-[50vh] rounded-[50%] bg-[#ffffff00] border-[1px] border-[#ffffff30] absolute  opacity-[1]"></div>
          <div className="h-[40vh] w-[40vh] rounded-[50%] bg-[#ff00]  border-[1px] border-[#ffffff30] absolute opacity-[1]"></div>
          <div className="h-[30vh] w-[30vh] rounded-[50%] bg-[#00f0]  border-[1px] border-[#ffffff30] absolute opacity-[1]"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
