import React from "react";
import './About.css'
import SkillsBar from "./SkillsBar";
import profilepic from "../../assets/images/profilepic.jpg"
export default function About() {
    return (
        <section className="about" id="about">
            <div className="about-me">
              <img className="profile-pic" src={profilepic} alt="profile picture" />
              <h1>About Me</h1>
                <p>
                    I'm Jameel Agbaria From Umm El Fahem, living currently in Haifa with my wife Huda.
                    I am a graduate of the Hebrew University of Jerusalem,
                    holding a B.SC in Mathematics & Computer Science. I
                    am passionate about the fields of web development, machine learning and
                    artificial intelligence, and I am excited about the
                    potential these technologies have to transform the world we
                    live in. My interest in these areas led me to explore
                    various programming languages and data analysis tools, and I
                    am confident in my ability to leverage these skills to
                    develop innovative solutions that can improve people's
                    lives. As a self motivated and analytical individual, I am
                    always eager to learn new things and take on new challenges.
                    I believe that my education and skills would make me a
                    valuable addition to any team, and I look forward to the
                    opportunity to contribute to your organization's success.
                </p>
            </div>
            <div className="skills-container">
                <SkillsBar />
            </div>
        </section>
    );
}
