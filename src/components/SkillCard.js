import React from "react";
import SkillList from "../Utility/Objects/SkillList";
import { AiOutlineHtml5 } from "react-icons/ai";

const SkillCard = (props) => {
  return (
    <div>
      <div className="h-[50px] w-[50px] border-2 rounded-md border-yellow flex justify-center items-center">
        <AiOutlineHtml5 className="h-[80%] w-[80%]  text-[#1B355A]"></AiOutlineHtml5>
      </div>
      <p className="text-[0.75rem] text-center">HTML</p>
    </div>
  );
};

export default SkillCard;
