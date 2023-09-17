import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { AiOutlineHtml5, AiOutlineGithub, AiOutlinePlus } from "react-icons/ai";
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
    <div
      className="h-screen w-full bg-gradient-to-b -translate-y-3 from-[#1c1e26] relative overflow-hidden"
      id="experience"
    >
      <div className="w-[90%] mx-auto">
        {/* Skills */}
        <h3 className="text-[1.5rem] text-[#fff] font-[MainFont] font-bold my-3 mb-10">
          Skills:
        </h3>
        <div className="h-[20vh] w-full flex flex-wrap gap-3 mb-10">
          <motion.div
            initial={{ opacity: 0, x: "-50%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeIn", delay: 0 }}
          >
            <SkillCard
              key={0}
              SkillIcon={AiOutlineHtml5}
              skillName="HTML5"
            ></SkillCard>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "-50%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeIn", delay: 0 }}
          >
            <SkillCard
              key={0}
              SkillIcon={TbBrandCss3}
              skillName="CSS3"
            ></SkillCard>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "-50%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeIn", delay: 0 }}
          >
            <SkillCard
              key={0}
              SkillIcon={TbBrandTailwind}
              skillName="Tailwind"
            ></SkillCard>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "-50%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeIn", delay: 0 }}
          >
            <SkillCard
              key={0}
              SkillIcon={TbBrandBootstrap}
              skillName="Bootstrap"
            ></SkillCard>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "-50%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeIn", delay: 0 }}
          >
            <SkillCard
              key={0}
              SkillIcon={BiLogoJavascript}
              skillName="Javascript"
            ></SkillCard>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "-50%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeIn", delay: 0 }}
          >
            <SkillCard
              key={0}
              SkillIcon={BiLogoReact}
              skillName="React"
            ></SkillCard>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "-50%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeIn", delay: 0 }}
          >
            <SkillCard
              key={0}
              SkillIcon={TbBrandRedux}
              skillName="Redux"
            ></SkillCard>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "-50%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeIn", delay: 0 }}
          >
            <SkillCard
              key={0}
              SkillIcon={BiLogoJava}
              skillName="Java"
            ></SkillCard>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "-50%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeIn", delay: 0 }}
          >
            <SkillCard
              key={0}
              SkillIcon={AiOutlineGithub}
              skillName="Git"
            ></SkillCard>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "-50%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeIn", delay: 0 }}
          >
            <SkillCard
              key={0}
              SkillIcon={BiLogoMongodb}
              skillName="MongoDB"
            ></SkillCard>
          </motion.div>
        </div>
        {/* Experience */}
        <h3 className="text-[1.5rem] text-[#fff] font-[MainFont] font-bold my-3 mb-10">
          Work Experience:
        </h3>
        <div className="h-[80vh] w-full flex flex-wrap gap-3">
          <ExperienceCard></ExperienceCard>
        </div>
      </div>

      <div className="h-[50vh] w-[100vh]  flex justify-center items-center absolute bottom-[0%] right-[-200px]">
        <div className="h-[50vh] w-[50vh] rounded-[50%] bg-[#ffffff00] border-[1px] border-[#ffffff30] absolute  opacity-[1]"></div>
        <div className="h-[40vh] w-[40vh] rounded-[50%] bg-[#ff00]  border-[1px] border-[#ffffff30] absolute opacity-[1]"></div>
        <div className="h-[30vh] w-[30vh] rounded-[50%] bg-[#00f0]  border-[1px] border-[#ffffff30] absolute opacity-[1]"></div>
      </div>
      <div className="h-[80px] w-[300px] border-2 rounded-md  bg-[#111117] border-[#0c0c10] flex flex-col justify-around items-left p-3 my-4 absolute bottom-[100px] right-20 overflow-hidden">
        <h1 className="text-[#fff]">
          LeetCode: <span className="text-[2rem] text-yellow">80</span>
          <span className="text-[1.5rem] text-yellow">+</span>
          <span>Problems solved</span>
        </h1>
      </div>
    </div>
  );
};

export default Experience;
