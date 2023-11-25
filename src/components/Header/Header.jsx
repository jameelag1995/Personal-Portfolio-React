import React from "react";
import "./Header.css";
import TabButton from "./TabButton";
export default function Header() {
    function reloadPage(){
        window.location.reload();
    }
    return <nav className="header-container">
        <div className="logo" onClick={reloadPage}></div>
        <menu>
            <TabButton id='projects'>Projects</TabButton>
            <TabButton id='about'>About</TabButton>
            <TabButton id='social'>Social Media</TabButton>
            <TabButton id='contact'>Contact Us</TabButton>
        </menu>
    </nav>;
}
