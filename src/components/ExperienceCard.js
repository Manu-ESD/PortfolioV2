import React from "react";

const ExperienceCard = () => {
  return (
    <div>
      <div className="h-[210px] w-[450px] border-2 rounded-md border-yellow flex flex-col justify-around items-left p-3 my-4">
        <h1 className="text-[1.5rem] text-[#1b355a]">
          Programmer Analyst - Developer
        </h1>
        <p className="text-[1rem] text-left text-[#1b355a]">
          From: 03/2021 -- Present
        </p>
        <p className="text-[0.75rem] text-justify text-[#1b355a]">
          Designing and implementing the website using React JS, creating
          responsive landing pages, utilizing various React components to
          enhance the user interface and functionality of the website,
          collaborating with a team of eight members following the agile
          methodology and documenting progress and challenges.
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
