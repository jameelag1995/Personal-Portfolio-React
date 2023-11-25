import React from "react";
import "./Social.css";
import { SiGithub } from "react-icons/si";
import { GrLinkedin } from "react-icons/gr";
import { TiSocialTwitter } from "react-icons/ti";

export default function Social() {
    return (
        <section className="social" id="social">
            <a href="https://github.com/jameelag1995/" target="_blank">
                <SiGithub className="icon" />
            </a>
            <a
                href="https://www.linkedin.com/in/jameel-agbaria-0a8593159/"
                target="_blank"
            >
                <GrLinkedin className="icon" />
            </a>
            <a href="https://twitter.com/agbariajameel95" target="_blank">
                <TiSocialTwitter className="icon" />
            </a>
        </section>
    );
}
