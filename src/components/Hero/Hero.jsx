import React from "react";
import "./Hero.css";
import heroImg from '../../assets/images/hero-img.png'

export default function Hero() {
    return <section className="hero">
        <div className="text-container">
        <p>Hello World!</p>
        <p>I'm Jameel,</p>
        <p>FullStack-Web-Developer();</p>
        </div>
        <div className="img-container">
        <img src={heroImg} alt="Code" />
        </div>
    </section>;
}
