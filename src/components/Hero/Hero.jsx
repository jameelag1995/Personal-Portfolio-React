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
                            `Hello World!\nI'm Jameel.\n I'm A Software Engineer.`,
                            3000,
                            "",
                        ]}
                        speed={60}
                        className="type-animation"
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
                {/* <div className="img-container">
                    <img
                        src={heroImg}
                        alt="Code"
                        className="animate__animated animate__backInRight"
                    />
                </div> */}
            </section>
            {/* <MyCarousel /> */}
        </>
    );
}
