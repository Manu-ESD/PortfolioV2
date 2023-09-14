import React from "react";
import SkillCard from "./SkillCard";

const Experience = () => {
  return (
    <div className="h-screen w-full" id="experience">
      <div className="w-[90%] mx-auto">
        {/* Skills */}
        <h3 className="text-[1.5rem] text-black font-bold my-3">Skills:</h3>
        <div className="h-[50vh] w-full flex flex-wrap gap-3">
          <SkillCard></SkillCard>
          <SkillCard></SkillCard>
          <SkillCard></SkillCard>
        </div>
      </div>
    </div>
  );
};

export default Experience;
