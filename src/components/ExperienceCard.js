import React from "react";

const ExperienceCard = () => {
  return (
    <div>
      <div className="h-[210px] w-[450px] border-2 rounded-md  bg-[#111117] border-[#0c0c10] border-[1px] flex flex-col justify-around items-left p-3 my-4 absolute overflow-hidden hover:border-[#fff] hover:scale-[1.02]">
        <h1 className="text-[1.5rem] text-[#fff]">Frontend Developer</h1>
        <p className="text-[1rem] text-left text-[#fff]">
          From: 03/2021 -- Present
        </p>
        <p
          className="text-[0.7rem] text-justify text-[#fff] font-sans"
          style={{ fontFamily: "Manrope" }}
        >
          Designing and implementing the website using React JS, creating
          responsive landing pages, utilizing various React components to
          enhance the user interface and functionality of the website,
          collaborating with a team of eight members following the agile
          methodology and documenting progress and challenges.
        </p>
        <div className="h-[10vh] w-[10vh]  flex justify-center items-center  top-[-10%] right-[-25px] z-10 absolute">
          <div className="h-[18vh] w-[18vh] rounded-[50%] bg-[#ffffff00] border-[1px] border-[#ffffff30] absolute  opacity-[1]"></div>
          <div className="h-[14vh] w-[14vh] rounded-[50%] bg-[#ff00]  border-[1px] border-[#ffffff30] absolute opacity-[1]"></div>
          <div className="h-[10vh] w-[10vh] rounded-[50%] bg-[#00f0]  border-[1px] border-[#ffffff30] absolute opacity-[1]"></div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
