import React from "react";
import "./Cards.css";
import Card from "./Card";
import minecraft from "../../assets/images/minecraftproj.png";
import flight from "../../assets/images/flightsproj.png";
import rolldice from "../../assets/images/rolldiceproj.png";
export default function Cards() {
    return (
        <main id="projects">
            <h1>Latest Projects</h1>
            <section className="cards-container">
                <Card
                    title="MineCraft 2D"
                    imgsrc={minecraft}
                    desc="MineCraft Game in 2D - built using HTML CSS JS"
                    link1="https://minecraft2d-appleseeds.netlify.app/"
                />
                <Card
                    title="SkyBase"
                    imgsrc={flight}
                    desc="Website for Buying Flight Tickets, you can search flights, add to cart and calculate total, admins can also add new flights and change price of flight"
                    link1="https://jade-cajeta-0cea3e.netlify.app/"
                />
                <Card
                    title="Roll The Dice"
                    imgsrc={rolldice}
                    desc="Roll The Dice multiplayer game first player to achieve target score wins"
                    link1="https://vermillion-paletas-4d1620.netlify.app/"
                />
            </section>
        </main>
    );
}
