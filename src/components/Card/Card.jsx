export default function Card({ title, imgsrc, desc, link1, link2 }) {
    return (
        <div id="card" className="animate__animated animate__zoomInDown">
            <img src={imgsrc} alt={title} />
            <h1 id="project-title">{title}</h1>
            <p>{desc}</p>
            <div className="links">
                <a className="website-link" href={link1} target="_blank" rel="noopener noreferrer">
                    <p className="visit">Visit Website</p>
                </a>
                <a className="github-link" href={link2} target="_blank" rel="noopener noreferrer">
                    <p className="visit">Source Code</p>
                </a>
            </div>
        </div>
    );
}

Card.propTypes = {
    title: function() {},
    imgsrc: function() {},
    desc: function() {},
    link1: function() {},
    link2: function() {},
};
