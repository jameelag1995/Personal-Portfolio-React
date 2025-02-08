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
                <TabButton target="#hero">Hero</TabButton>
                <TabButton target="#projects">Projects</TabButton>
                <TabButton target="#about">About</TabButton>
                <TabButton target="#social">Social Media</TabButton>
                <TabButton target="#contact">Contact Me</TabButton>
                <TabButton target="https://docs.google.com/document/d/13v9c4mmQ_ICvU8DKz9TAiTr9K60C8ui7/edit?usp=sharing&ouid=101416131232533157937&rtpof=true&sd=true" >Resume</TabButton>
            </menu>
            <HamburgerMenu />
        </nav>
    );
}
