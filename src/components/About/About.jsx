import React from "react";
import "./About.css";
import SkillsBar from "./SkillsBar";
import profilepic from "../../assets/images/profilepic.jpg";
export default function About() {
    return (
        <main className="about-container" id="about">
            <h1 id="title">About Me</h1>
            <section className="about" >
                <div className="about-me">
                    <img
                        className="profile-pic"
                        src={profilepic}
                        alt="profile picture"
                    />
                    
                    <p>
                    Mathematics & Computer Science graduate with a passion for software development and building scalable web solutions. 
                    Experienced in modern front-end and back-end technologies with a track record of implementing real-time systems and AI-driven workflows.
                    Freelancing at a startup honed my technical expertise and problem-solving skills, while my leadership role at Makes Software strengthened my ability to drive team innovation and deliver impactful results. 
                    Eager to contribute to dynamic teams, tackle complex challenges, and grow in the tech industry.
                    </p>
                </div>
                <div className="skills-container">
                    <SkillsBar />
                </div>
            </section>
        </main>
    );
}
