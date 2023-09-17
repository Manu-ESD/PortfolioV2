import React from "react";
import "./ProjectCard.css";
import { AiOutlineArrowRight } from "react-icons/ai";

const ProjectCard = (props) => {
  const colorvalue = props.color;
  return (
    <div>
      <div className="main h-[380px] w-[270px] border-2 rounded-2xl  bg-[#111117] border-[#0c0c10] flex flex-col justify-around items-left p-3 my-4 relative overflow-hidden z-20">
        <div
          className="h-[45%] w-[95%] flex justify-center items-center mx-auto rounded-2xl"
          style={{ backgroundColor: colorvalue }}
        >
          <img
            className="webimg relative w-[70%] h-[60%] shadow-2xl"
            src={props.spath}
            alt="Project"
          ></img>
        </div>
        <div className="translate-y-[-20px] ml-2">
          <hr className="text-yellow h-[3px] w-[30%] mb-[20px]"></hr>
          <h1 className="text-[1rem] text-[#fff] text-left font-bold">
            {props.name}
          </h1>
        </div>
        <button className="text-[#fff] flex flex-row justify-between items-center font-bold w-[55%] text-[0.8rem] ml-2">
          See project
          <AiOutlineArrowRight className="ml-[50px] arrow text-yellow"></AiOutlineArrowRight>
        </button>
        <div className="h-[15vh] w-[15vh]  flex justify-center items-center  bottom-[-10%] right-[-25px] z-0 absolute">
          <div className="h-[25vh] w-[25vh] rounded-[50%] bg-[#ffffff00] border-[1px] border-[#ffffff30] absolute  opacity-[1]"></div>
          <div className="h-[20vh] w-[20vh] rounded-[50%] bg-[#ff00]  border-[1px] border-[#ffffff30] absolute opacity-[1]"></div>
          <div className="h-[15vh] w-[15vh] rounded-[50%] bg-[#00f0]  border-[1px] border-[#ffffff30] absolute opacity-[1]"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

{
  /* <ProjectCard spath="" name="" discription="" gitL=""></ProjectCard> */
}
