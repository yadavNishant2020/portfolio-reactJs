import React from "react";
import "./Skills.scss";
const SkillCard = ({ skillName, skillUrl }) => {
  return (
    <div className="skill">
      <img src={skillUrl} alt="skill" />
      <p>{skillName}</p>
    </div>
  );
};

export default SkillCard;
