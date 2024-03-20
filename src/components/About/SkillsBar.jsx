import React from "react";
import Skill from "./Skill";

export default function SkillsBar() {
    return (
        <div className="container">
            <h1 className="title-text">Skills Progress Bar</h1>
            <Skill skillName="HTML" skillPercentage={100} />
            <Skill skillName="CSS" skillPercentage={100} />
            <Skill skillName="JavaScript" skillPercentage={100} />
            <Skill skillName="NodeJS" skillPercentage={98} />
            <Skill skillName="ReactJS" skillPercentage={97} />
            <Skill skillName="ExpressJS" skillPercentage={99} />
            <Skill skillName="MongoDB" skillPercentage={96} />
            <Skill skillName="Github" skillPercentage={100} />
        </div>
    );
}
