import React from "react";

export default function ({title,imgsrc,desc,link1}) {
    return (
        <div className="card">
            <img src={imgsrc} alt={title} />
            <h4>{title}</h4>
            <p>{desc}</p>
            <a href={link1}>Visit Website</a>
        </div>
    );
}