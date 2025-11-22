import "./Experience.css";

export default function Experience() {
    const experiences = [
        {
            title: "Software Engineer",
            company: "B-Developers",
            period: "3/2025 - present",
            description: "B-Developers turn ideas into functional applications.",
            responsibilities: [
                "Designed and developed a complete meal ordering platform for fast-food restaurant screens and web kiosks",
                "Frontend: Built with Next.js (TypeScript) and Material UI, featuring an intuitive and responsive UI for customers to browse menus, apply discounts, and pay securely using Stripe",
                "Backend: Developed with Node.js (Express) and PostgreSQL, supporting real-time order updates via WebSockets and integrated caching with Redis",
                "Staff-facing dashboard for order management, AI-based combo recommendations (Python microservice), and analytics dashboard for sales insights",
                "Dockerized services hosted on AWS with CI/CD pipelines and Sentry monitoring"
            ],
            techStack: ["Next.js", "TypeScript", "Material UI", "Node.js", "Express", "PostgreSQL", "Redis", "WebSockets", "Docker", "AWS", "Python", "Stripe"]
        },
        {
            title: "Software Engineer",
            company: "Logicblocks",
            period: "5/2024 - 2/2025",
            description: "Startup focused on AI-driven enterprise solutions. Webservice that helps software companies resolve bugs quickly with AI Agents.",
            responsibilities: [
                "Designed and developed Python-based services using Object-Oriented Programming (OOP) to integrate Multi AI agents system, Workflows, real-time notifications, and related APIs",
                "Used LLM for compiling user requirements into software components in a novel way",
                "Built Next.js service & frontend for AI Agents and enterprise grade user interactions"
            ],
            techStack: ["Python", "FastAPI", "Pydantic", "Pytest", "OpenAI", "PostgreSQL", "Next.js", "TypeScript", "Socket.io", "SpeechToText"]
        },
        {
            title: "Full-Stack Developer Intern",
            company: "Makes Software Company",
            period: "1/2024 - 4/2024",
            description: "Contributed to Arabrew Project. A networking application for connecting people with similar hobbies and jobs, also for finding new jobs and related events.",
            responsibilities: [
                "Built Express.js service that integrated real time chat and translation with OpenAI API depending on user selected language",
                "Implemented database schemas and related RESTful APIs",
                "Built React.js frontend with OAuth, multi language support, users, chats, job listing and events"
            ],
            techStack: ["React.js", "Redux", "RTK Query", "Styled Components", "I18n", "Node.js", "Express.js", "MongoDB", "Socket.io", "OpenAI", "OAuth", "Mocha"]
        }
    ];

    return (
        <main className="experience-container" id="experience">
            <h1 id="title">Work Experience</h1>
            <section className="experience-content">
                {experiences.map((exp, index) => (
                    <div key={`${exp.company}-${index}`} className="experience-card">
                        <div className="experience-header">
                            <div className="experience-title-section">
                                <h2 className="experience-title">{exp.title}</h2>
                                <h3 className="experience-company">{exp.company}</h3>
                            </div>
                            <span className="experience-period">{exp.period}</span>
                        </div>
                        
                        <p className="experience-description">{exp.description}</p>
                        
                        <div className="experience-responsibilities">
                            <h4>Key Achievements:</h4>
                            <ul>
                                {exp.responsibilities.map((resp, idx) => (
                                    <li key={idx}>{resp}</li>
                                ))}
                            </ul>
                        </div>
                        
                        <div className="experience-tech">
                            <h4>Tech Stack:</h4>
                            <div className="tech-tags">
                                {exp.techStack.map((tech, idx) => (
                                    <span key={idx} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
}
