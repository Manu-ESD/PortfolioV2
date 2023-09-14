import React from "react";
import styled from "styled-components";

const sICon = (SkillIcon) => styled(SkillIcon)`
  color: #1b355a;
  width: 80%;
  height: 80%;
`;

const SkillCard = ({ SkillIcon, skillName }) => {
  const StyledICON = sICon(SkillIcon);

  return (
    <div>
      <div className="h-[50px] w-[50px] border-2 rounded-md border-yellow flex justify-center items-center">
        <StyledICON></StyledICON>
      </div>
      <p className="text-[0.75rem] text-center">{skillName}</p>
    </div>
  );
};

export default SkillCard;
