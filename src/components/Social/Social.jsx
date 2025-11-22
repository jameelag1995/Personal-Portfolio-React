import "./Social.css";
import { SiGithub } from "react-icons/si";
import { GrLinkedin } from "react-icons/gr";

export default function Social() {
    return (
        <section className="social" id="social">
            <h1 id="title">Social</h1>
            <div className="icons-container">
                <a href="https://github.com/jameelag1995/" target="_blank" rel="noopener noreferrer">
                    <SiGithub className="icon" />
                </a>
                <a
                    href="https://www.linkedin.com/in/jameel-agbaria-0a8593159/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GrLinkedin className="icon" />
                </a>
            </div>
        </section>
    );
}
