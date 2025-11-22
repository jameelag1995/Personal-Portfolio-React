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
                                <a href="#experience">
                                    Experience
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
                            <li>
                                <a href="https://docs.google.com/document/d/13v9c4mmQ_ICvU8DKz9TAiTr9K60C8ui7/edit?usp=sharing&ouid=101416131232533157937&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
