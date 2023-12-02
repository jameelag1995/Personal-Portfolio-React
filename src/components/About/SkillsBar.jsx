import React from "react";
import Skill from "./Skill";

export default function SkillsBar() {
    return (
        <div className="container">
            <h1 className="title-text">Skills Progress Bar</h1>
            <Skill skillName="HTML" skillPercentage={99} />
            <Skill skillName="CSS" skillPercentage={90} />
            <Skill skillName="JavaScript" skillPercentage={96} />
            <Skill skillName="NodeJS" skillPercentage={70} />
            <Skill skillName="ReactJS" skillPercentage={50} />
            <Skill skillName="Github" skillPercentage={98} />
        </div>
    );
}
