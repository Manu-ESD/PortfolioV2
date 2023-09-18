import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      console.log("true in view");
      mainControls.start("visible");
    }
    console.log(isInView);
  }, [isInView]);
  return (
    <div
      ref={ref}
      className="h-[135vh] sm:h-screen w-full bg-gradient-to-b -translate-y-3 from-[#1c1e26] relative overflow-hidden"
      id="experience"
    >
      <div className="w-[90%] mx-auto">
        {/* Skills */}
        <motion.h3
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="text-[1.5rem] text-[#fff] font-[MainFont] font-bold my-3 mb-10"
        >
          Skills:
        </motion.h3>
        <div className="h-[60vh] sm:h-[20vh] w-full flex flex-wrap gap-3 mb-10">
          <motion.div
            variants={{
              visible: { opacity: 1, x: 0 },
            }}
            animate={mainControls}
            initial={{ opacity: 0, x: "-50%" }}
            transition={{ duration: 0.7, ease: "easeIn", delay: 0 }}
          >
            <SkillCard
              key={0}
              SkillIcon={AiOutlineHtml5}
              skillName="HTML5"
            ></SkillCard>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            variants={{
              visible: { opacity: 1, x: 0 },
            }}
            animate={mainControls}
            transition={{ duration: 0.7, ease: "easeIn", delay: 0.5 }}
          >
            <SkillCard
              key={0}
              SkillIcon={TbBrandCss3}
              skillName="CSS3"
            ></SkillCard>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "-150%" }}
            variants={{
              visible: { opacity: 1, x: 0 },
            }}
            animate={mainControls}
            transition={{ duration: 0.7, ease: "easeIn", delay: 1 }}
          >
            <SkillCard
              key={0}
              SkillIcon={TbBrandTailwind}
              skillName="Tailwind"
            ></SkillCard>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "-200%" }}
            variants={{
              visible: { opacity: 1, x: 0 },
            }}
            animate={mainControls}
            transition={{ duration: 0.7, ease: "easeIn", delay: 1.5 }}
          >
            <SkillCard
              key={0}
              SkillIcon={TbBrandBootstrap}
              skillName="Bootstrap"
            ></SkillCard>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "-250%" }}
            variants={{
              visible: { opacity: 1, x: 0 },
            }}
            animate={mainControls}
            transition={{ duration: 0.7, ease: "easeIn", delay: 2 }}
          >
            <SkillCard
              key={0}
              SkillIcon={BiLogoJavascript}
              skillName="Javascript"
            ></SkillCard>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "-300%" }}
            variants={{
              visible: { opacity: 1, x: 0 },
            }}
            animate={mainControls}
            transition={{ duration: 0.7, ease: "easeIn", delay: 2.5 }}
          >
            <SkillCard
              key={0}
              SkillIcon={BiLogoReact}
              skillName="React"
            ></SkillCard>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "-350%" }}
            variants={{
              visible: { opacity: 1, x: 0 },
            }}
            animate={mainControls}
            transition={{ duration: 0.7, ease: "easeIn", delay: 3 }}
          >
            <SkillCard
              key={0}
              SkillIcon={TbBrandRedux}
              skillName="Redux"
            ></SkillCard>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "-400%" }}
            variants={{
              visible: { opacity: 1, x: 0 },
            }}
            animate={mainControls}
            transition={{ duration: 0.7, ease: "easeIn", delay: 3.5 }}
          >
            <SkillCard
              key={0}
              SkillIcon={BiLogoJava}
              skillName="Java"
            ></SkillCard>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "-450%" }}
            variants={{
              visible: { opacity: 1, x: 0 },
            }}
            animate={mainControls}
            transition={{ duration: 0.7, ease: "easeIn", delay: 4 }}
          >
            <SkillCard
              key={0}
              SkillIcon={AiOutlineGithub}
              skillName="Git"
            ></SkillCard>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "-500%" }}
            variants={{
              visible: { opacity: 1, x: 0 },
            }}
            animate={mainControls}
            transition={{ duration: 0.7, ease: "easeIn", delay: 4.5 }}
          >
            <SkillCard
              key={0}
              SkillIcon={BiLogoMongodb}
              skillName="MongoDB"
            ></SkillCard>
          </motion.div>
        </div>
        {/* Experience */}
        <motion.h3
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="text-[1.5rem] text-[#fff] font-[MainFont] font-bold my-3 mb-10"
        >
          Work Experience:
        </motion.h3>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="h-[80vh] w-full flex flex-wrap gap-3"
        >
          <ExperienceCard></ExperienceCard>
        </motion.div>
      </div>

      <div className="h-[50vh] w-[100vh]  flex justify-center items-center absolute bottom-[-12vh] sm:bottom-[0%] right-[-150px] sm:right-[-200px] scale-50 sm:scale-100">
        <div className="h-[50vh] w-[50vh] rounded-[50%] bg-[#ffffff00] border-[1px] border-[#ffffff30] absolute  opacity-[1]"></div>
        <div className="h-[40vh] w-[40vh] rounded-[50%] bg-[#ff00]  border-[1px] border-[#ffffff30] absolute opacity-[1]"></div>
        <div className="h-[30vh] w-[30vh] rounded-[50%] bg-[#00f0]  border-[1px] border-[#ffffff30] absolute opacity-[1]"></div>
      </div>
      <div className="h-[80px] w-[300px] border-2 rounded-md  bg-[#111117] border-[#0c0c10] flex flex-col justify-around items-left p-3 my-4 absolute bottom-8 sm:bottom-[100px] right-0  sm:right-20 overflow-hidden">
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
