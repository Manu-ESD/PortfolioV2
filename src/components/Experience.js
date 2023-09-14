import React, { useEffect, useState } from "react";
import SkillCard from "./SkillCard";
import { TbBrandBootstrap } from "react-icons/tb";
import { Tb24Hours } from "react-icons/tb";

const Experience = () => {
  const [IC, setIC] = useState();
  //Imporing icons
  const [skillListwithimportedIcons, setSkillListwithimportedIcons] = useState(
    []
  );
  var IIC;
  async function importModule() {
    IIC = await import("react-icons/tb");
    console.log("INDIRECT", IIC.TbBrandBootstrap);
  }

  useEffect(() => {
    importModule().then(() => {
      await setIC(IIC.TbBrandBootstrap);
      console.log("Direct", TbBrandBootstrap);
      console.log("I2", IC);
    });
  }, []);
  return (
    <div className="h-screen w-full" id="experience">
      <div className="w-[90%] mx-auto">
        {/* Skills */}
        <h3 className="text-[1.5rem] text-black font-bold my-3">Skills:</h3>
        <div className="h-[50vh] w-full flex flex-wrap gap-3">
          <SkillCard
            SkillIcon={TbBrandBootstrap}
            skillName="Bootstrap"
          ></SkillCard>
        </div>
      </div>
    </div>
  );
};

export default Experience;
