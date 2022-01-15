import React from "react";
import "./Skills.scss";
import { skillList } from "./skillData";
import SkillCard from "./skillCard";

function Skills() {
  return (
    <div className="skills">
      <h1 className="heading">My Skills</h1>
      <h2 className="para">
        {" "}
        I have the following Skills in my Coat, which are the latest and in
        demand skills for any Web Designer Or Web Developer.
      </h2>
      <div className="skillsCard">
        {skillList.map(({ skillName, skillUrl }) => (
          <SkillCard skillName={skillName} skillUrl={skillUrl} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
