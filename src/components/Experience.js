import React, { useEffect, useState } from "react";
import SkillCard from "./SkillCard";
import SkillList from "../Utility/Objects/SkillList";

const Experience = () => {
  //const [other, setother] = useState(null);

  //Imporing icons
  const [skillListwithimportedIcons, setSkillListwithimportedIcons] = useState(
    []
  );

  async function importModule() {
    try {
      const updatedSkillList = await Promise.all(
        SkillList.map(async (skill) => {
          const { default: IconComponent } = await import(
            `react-icons/${skill.path}`
          );

          return {
            ...skill,
            Icon: () => {
              `IconComponent.${skill.Icon}`;
            },
          };
        })
      );
      return updatedSkillList;
    } catch (error) {
      console.error("Error imporing", error);
      return null;
    }
  }

  useEffect(() => {
    importModule().then((importedICON) => {
      console.log("TEST", importedICON);
      console.log("IconComponent", importedICON);
      setSkillListwithimportedIcons(importedICON);
    });
  }, []);

  return skillListwithimportedIcons === [] ? (
    <p className="text-center">Loading...</p>
  ) : (
    <div className="h-screen w-full" id="experience">
      <div className="w-[90%] mx-auto">
        {/* Skills */}
        <h3 className="text-[1.5rem] text-black font-bold my-3">Skills:</h3>
        <div className="h-[50vh] w-full flex flex-wrap gap-3">
          {skillListwithimportedIcons.map((skill, index) => (
            <SkillCard
              SkillIcon={skill.Icon}
              skillName={skill.Name}
            ></SkillCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
