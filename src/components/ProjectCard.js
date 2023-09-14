import React from "react";
import "./ProjectCard.css";

const ProjectCard = (props) => {
  return (
    <div>
      <div className="main h-[300px] w-[260px] border-2 rounded-md border-yellow flex flex-col justify-around items-left p-3 my-4">
        <img className="relative" src={props.spath} alt="Project"></img>
        <h1 className="text-[1.5rem] text-[#1b355a] text-justify">
          {props.name}
        </h1>
        <button className="hidden Bclick relative w-[150px] rounded-lg  text-textcolor mx-auto px-5 border border-[2px] border-yellow  flex flex-row items-center justify-around bg-yellow hover:bg-[#ffffff00] duration-1000">
          Git link
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;

{
  /* <ProjectCard spath="" name="" discription="" gitL=""></ProjectCard> */
}
