import { Card, Button } from 'react-bootstrap';

function Project({ title, liveLink, repoLink, className }) {
    return (
        <Card className={`project-card ${className}`}>
            <Card.Body>
                <div className="button-container">
                    {liveLink ? (
                        <Button className="text-button" onClick={() => window.open(liveLink, "_blank")}>
                            {title}
                        </Button>
                    ) : (
                        <span className="non-click">{title}</span>
                    )}
                    <Button
                        variant="link"
                        className="no-bg-hover"
                        onClick={() => window.open(repoLink, "_blank")}
                    >
                        <img
                            style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }}
                            src="src\assets\github-image.jpg"
                            alt="GitHub"
                        />
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default function Portfolio() {
    const projects = [
      { title: "Recipe Finder", liveLink: "https://recipe-finder-777.netlify.app/", repoLink: "https://github.com/LelandMitchell2/recipe-finder-app", className: "card-1" },
      { title: "Traveling Weather", liveLink: "https://traveling-weather.onrender.com", repoLink: "https://github.com/LelandMitchell2/traveling-weather", className: "card-2" },
      { title: "README Generator", liveLink: "", repoLink: "https://github.com/LelandMitchell2/Readme-Gen", className: "card-3" },
      { title: "Employee Tracker", liveLink: "", repoLink: "https://github.com/n6dd/Employee-Tracker", className: "card-4" },
      { title: "Vehicle Builder", liveLink: "", repoLink: "https://github.com/n6dd/Vehicle-Builder", className: "card-5" },
      { title: "Aqua Buddy", liveLink: "https://bans-07.github.io/Aqua-Buddy/", repoLink: "https://github.com/bans-07/Aqua-Buddy", className: "card-6" }
    ];

    return (
        <section>
            <header>Portfolio</header>
            <div className="portfolio-content">
                {projects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </div>
        </section>
    );
}