import React from "react";

export default function ({title,imgsrc,desc,link1}) {
    return (
        <div className="card">
            <img src={imgsrc} alt={title} />
            <h2>{title}</h2>
            <p>{desc}</p>
            <a href={link1} target="_blank"><p className="visit">Visit Website</p></a>
        </div>
    );
}