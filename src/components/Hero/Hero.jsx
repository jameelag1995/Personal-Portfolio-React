import "./Hero.css";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="text-container">
                <TypeAnimation
                    sequence={[
                        `Hello World!\nI'm Jameel.\n I'm A Software Engineer.`,
                        3000,
                        "",
                    ]}
                    speed={60}
                    className="type-animation"
                    repeat={Infinity}
                />
            </div>
        </section>
    );
}
