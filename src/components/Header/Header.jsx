import React from "react";
import "./Header.css";
import TabButton from "./TabButton";
export default function Header() {
    return <nav className="header-container">
        <div className="logo"></div>
        <menu>
            <TabButton>Hero</TabButton>
            <TabButton>Projects</TabButton>
            <TabButton>Extra Links</TabButton>
            <TabButton>About</TabButton>
            <TabButton>Social Media</TabButton>
            <TabButton>Contact Us</TabButton>
        </menu>
    </nav>;
}
