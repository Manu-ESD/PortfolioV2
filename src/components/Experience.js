import React, { useEffect, useState } from "react";
import SkillCard from "./SkillCard";
import { AiOutlineHtml5, AiOutlineGithub } from "react-icons/ai";
import {
  TbBrandCss3,
  TbBrandTailwind,
  TbBrandBootstrap,
  TbBrandRedux,
} from "react-icons/tb";
import {
  BiLogoJavascript,
  BiLogoReact,
  BiLogoJava,
  BiLogoMongodb,
} from "react-icons/bi";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="h-screen w-full" id="experience">
      <div className="w-[90%] mx-auto">
        {/* Skills */}
        <h3 className="text-[1.5rem] text-black font-bold my-3">Skills:</h3>
        <div className="h-[20vh] w-full flex flex-wrap gap-3">
          <SkillCard
            key={0}
            SkillIcon={AiOutlineHtml5}
            skillName="HTML5"
          ></SkillCard>
          <SkillCard
            key={0}
            SkillIcon={TbBrandCss3}
            skillName="CSS3"
          ></SkillCard>
          <SkillCard
            key={0}
            SkillIcon={TbBrandTailwind}
            skillName="Tailwind"
          ></SkillCard>
          <SkillCard
            key={0}
            SkillIcon={TbBrandBootstrap}
            skillName="Bootstrap"
          ></SkillCard>
          <SkillCard
            key={0}
            SkillIcon={BiLogoJavascript}
            skillName="Javascript"
          ></SkillCard>
          <SkillCard
            key={0}
            SkillIcon={BiLogoReact}
            skillName="React"
          ></SkillCard>
          <SkillCard
            key={0}
            SkillIcon={TbBrandRedux}
            skillName="Redux"
          ></SkillCard>
          <SkillCard
            key={0}
            SkillIcon={BiLogoJava}
            skillName="Java"
          ></SkillCard>
          <SkillCard
            key={0}
            SkillIcon={AiOutlineGithub}
            skillName="Git"
          ></SkillCard>
          <SkillCard
            key={0}
            SkillIcon={BiLogoMongodb}
            skillName="MongoDB"
          ></SkillCard>
        </div>
        <h3 className="text-[1.5rem] text-black font-bold my-3">
          Work Experience:
          <div className="h-[80vh] w-full flex flex-wrap gap-3">
            <ExperienceCard></ExperienceCard>
          </div>
        </h3>
      </div>
    </div>
  );
};

export default Experience;
