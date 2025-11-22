import { useEffect, useRef } from "react";
import "./Cards.css";
import Card from "./Card";
import minecraft from "../../assets/images/minecraftproj.png";
import flight from "../../assets/images/flightsproj.png";
import rolldice from "../../assets/images/rolldiceproj.png";
import adaptiveMusic from "../../assets/images/AdaptiveMusic.png";
import bank from "../../assets/images/Bank.png";
import BarterNest from "../../assets/images/BarterNest.png";

export default function Cards() {
    const cardsContainerRef = useRef(null);
    const scrollIntervalRef = useRef(null);
    const scrollDirectionRef = useRef(1); // 1 for right, -1 for left

    useEffect(() => {
        const container = cardsContainerRef.current;
        if (!container) return;

        const scroll = () => {
            const isAtEnd = container.scrollLeft >= (container.scrollWidth - container.offsetWidth);
            const isAtStart = container.scrollLeft <= 0;

            if (isAtEnd) {
                scrollDirectionRef.current = -1; // Change direction to left
            } else if (isAtStart) {
                scrollDirectionRef.current = 1; // Change direction to right
            }

            container.scrollLeft += scrollDirectionRef.current;
        };

        const startScrolling = () => {
            scrollIntervalRef.current = setInterval(scroll, 30);
        };

        const stopScrolling = () => {
            if (scrollIntervalRef.current) {
                clearInterval(scrollIntervalRef.current);
                scrollIntervalRef.current = null;
            }
        };

        container.addEventListener('mouseenter', stopScrolling);
        container.addEventListener('mouseleave', startScrolling);
        
        // Start initial scrolling
        startScrolling();

        // Cleanup
        return () => {
            stopScrolling();
            container.removeEventListener('mouseenter', stopScrolling);
            container.removeEventListener('mouseleave', startScrolling);
        };
    }, []);

    const cardElements = [
        {
            title: "Barter Nest",
            imgsrc: BarterNest,
            desc: "Barter Nest is a full-stack web application built with the MERN (MongoDB, Express.js, React.js, Node.js) stack. The project facilitates the bartering of products between users, allowing them to register, login, upload products, and engage in one-on-one or group offers. The application integrates Material-UI (MUI) for a sleek and responsive user interface and utilizes Cloudinary for efficient image uploads.",
            link1: "https://barternest.netlify.app/",
            link2: "https://github.com/jameelag1995/Exchange-Frontend"
        },
        {
            title: "Bank Management",
            imgsrc: bank,
            desc: "Welcome to My Bank Management Application! This full-stack web application is built with React, React Router DOM, Axios, Material UI, MUI Icons, Express, Mongoose, and MongoDB.",
            link1: "https://radiant-moxie-80f7c1.netlify.app/",
            link2: "https://github.com/jameelag1995/Bank-Application-Frontend"
        },
        {
            title: "Adaptive Music",
            imgsrc: adaptiveMusic,
            desc: "Adaptive Music is a feature-rich React web application that leverages Firebase authentication, Firestore, the Spotify Web API, Tone.js library, and Material UI to provide a seamless music streaming experience. The application focuses on adaptability, allowing users to customize their music playback with various effects. Additionally, it includes an events page where artists can showcase upcoming events, creating a dynamic and engaging platform.",
            link1: "https://adaptive-music.netlify.app/",
            link2: "https://github.com/jameelag1995/Adptive-Music"
        },
        {
            title: "MineCraft 2D",
            imgsrc: minecraft,
            desc: "MineCraft Game in 2D - the game is played with mouse only you can choose a tool from 3 options each meant to be used on different world element (gold,dirt,wood)",
            link1: "https://minecraft2d-appleseeds.netlify.app/",
            link2: "https://github.com/jameelag1995/2D-MineCraft"
        },
        {
            title: "SkyBase",
            imgsrc: flight,
            desc: "Website for Buying Flight Tickets, you can search flights, add to cart and calculate total, admins can also add new flights and change price of flight",
            link1: "https://jade-cajeta-0cea3e.netlify.app/",
            link2: "https://github.com/jameelag1995/Skybase"
        },
        {
            title: "Roll The Dice",
            imgsrc: rolldice,
            desc: "Roll The Dice multiplayer game first player to achieve target score wins",
            link1: "https://vermillion-paletas-4d1620.netlify.app/",
            link2: "https://github.com/jameelag1995/DiceRoll"
        }
    ];

    return (
        <main id="projects" className="projects-container">
            <h1 id="title">Latest Projects</h1>
            <section className="cards-container" ref={cardsContainerRef}>
                {cardElements.map((card, index) => (
                    <Card
                        key={`${card.title}-${index}`}
                        title={card.title}
                        imgsrc={card.imgsrc}
                        desc={card.desc}
                        link1={card.link1}
                        link2={card.link2}
                    />
                ))}
                {cardElements.map((card, index) => (
                    <Card
                        key={`${card.title}-duplicate-${index}`}
                        title={card.title}
                        imgsrc={card.imgsrc}
                        desc={card.desc}
                        link1={card.link1}
                        link2={card.link2}
                    />
                ))}
            </section>
        </main>
    );
}
