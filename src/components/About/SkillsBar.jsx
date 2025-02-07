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
            <Skill skillName="Next.js" skillPercentage={95} />
            <Skill skillName="TypeScript" skillPercentage={90} />
            <Skill skillName="Redux" skillPercentage={85} />
            <Skill skillName="RTK Query" skillPercentage={85} />
            <Skill skillName="Socket.io" skillPercentage={80} />
            <Skill skillName="Python" skillPercentage={95} />
            <Skill skillName="FastAPI" skillPercentage={90} />
            <Skill skillName="Numpy" skillPercentage={85} />
            <Skill skillName="Keras" skillPercentage={80} />
            <Skill skillName="TensorFlow" skillPercentage={80} />
            <Skill skillName="PyTorch" skillPercentage={75} />
            <Skill skillName="Pandas" skillPercentage={85} />
            <Skill skillName="Linux" skillPercentage={90} />
            <Skill skillName="Ubuntu" skillPercentage={90} />
            <Skill skillName="CLI" skillPercentage={85} />
            <Skill skillName="Figma" skillPercentage={80} />
            <Skill skillName="Jira" skillPercentage={75} />
            <Skill skillName="Monday" skillPercentage={75} />
        </div>
    );
}
