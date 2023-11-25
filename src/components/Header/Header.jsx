import React from "react";
import "./Header.css";
import TabButton from "./TabButton";
export default function Header() {
    return <nav className="header-container">
        <div className="logo"></div>
        <menu>
            <TabButton id='hero'>Hero</TabButton>
            <TabButton id='projects'>Projects</TabButton>
            <TabButton id='about'>About</TabButton>
            <TabButton id='social'>Social Media</TabButton>
            <TabButton id='contact'>Contact Us</TabButton>
        </menu>
    </nav>;
}
