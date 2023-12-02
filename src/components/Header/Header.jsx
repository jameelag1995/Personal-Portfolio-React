import React from "react";
import "./Header.css";
import TabButton from "./TabButton";
import HamburgerMenu from "./HamburgerMenu";
export default function Header() {
    function reloadPage() {
        window.location.href = "index.html";
    }
    return (
        <nav className="header-container">
            <div className="logo" onClick={reloadPage}></div>
            <menu>
                <TabButton id="hero">Hero</TabButton>
                <TabButton id="projects">Projects</TabButton>
                <TabButton id="about">About</TabButton>
                <TabButton id="social">Social Media</TabButton>
                <TabButton id="contact">Contact Me</TabButton>
            </menu>
            <HamburgerMenu />
        </nav>
    );
}
