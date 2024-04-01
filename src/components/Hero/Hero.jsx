import React from "react";
import "./Hero.css";
import heroImg from "../../assets/images/hero-img.png";
import { TypeAnimation } from "react-type-animation";
// import MyCarousel from "../Carousel/Carousel";
export default function Hero() {
    return (
        <>
            <section className="hero" id="hero">
                <div className="text-container">
                    <TypeAnimation
                        sequence={[
                            `Hello World!\nI'm Jameel.\nA Full Stack\n Web Developer.`,
                            1000,
                            "",
                        ]}
                        speed={50}
                        style={{
                            whiteSpace: "pre-line",
                            fontSize: "6em",
                            textAlign: "center",
                        }}
                        repeat={Infinity}
                    />
                    {/* <p className="animate__animated animate__backInDown">
                    Hello World!
                </p>
                <p className="animate__animated animate__backInLeft">
                    I'm Jameel,
                </p>
                <p className="animate__animated animate__backInUp">
                    A FullStack Web Developer();
                </p> */}
                </div>
                <div className="img-container">
                    <img
                        src={heroImg}
                        alt="Code"
                        className="animate__animated animate__backInRight"
                    />
                </div>
            </section>
            {/* <MyCarousel /> */}
        </>
    );
}
