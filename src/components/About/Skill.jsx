export default function Skill({skillName,skillPercentage}) {
    // Convert skill name to lowercase and replace dots with nothing for CSS class
    const skillClass = skillName.toLowerCase().replace(/\./g, '').replace(/\s+/g, '');
    
    return (
        <div className="skill-box">
            <span className="title">{skillName}</span>
            <div className="skill-bar">
                <span className={`skill-per ${skillClass}`} style={{width:`${skillPercentage}%`}}>
                    <span className="tooltip">{`${skillPercentage}%`}</span>
                </span>
            </div>
        </div>
    );
}

Skill.propTypes = {
    skillName: function() {},
    skillPercentage: function() {},
};
