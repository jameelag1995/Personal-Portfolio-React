import React from "react";

export default function Skill({skillName,skillPercentage}) {
    return (
        <div className="skill-box">
            <span className="title">{skillName}</span>
            <div className="skill-bar">
                <span className={`skill-per ${skillName.toLowerCase()}`} style={{width:`${skillPercentage}%`}}>
                    <span className="tooltip">{`${skillPercentage}%`}</span>
                </span>
            </div>
        </div>
    );
}
