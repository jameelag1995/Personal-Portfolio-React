import React from "react";
import "./HamburgerMenu.css";
export default function HamburgerMenu() {
    return (
        <div className="menu-wrap">
            <input type="checkbox" className="toggler" />
            <div className="hamburger">
                <div></div>
            </div>
            <div className="menu">
                <div>
                    <div>
                        <ul>
                            <li>
                                <a href="#hero">
                                    Hero
                                </a>
                            </li>
                            <li>
                                <a href="#projects">
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href="#about">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#social">
                                    Social Media
                                </a>
                            </li>
                            <li>
                                <a href="#contact">
                                    Contact Me
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
