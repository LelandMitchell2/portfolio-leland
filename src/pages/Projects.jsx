import { Card, Button, Container, Row, Col } from 'react-bootstrap';

function Project({ title, liveLink, repoLink, className }) {
    return (
        <Card className={`project-card ${className} shadow-sm mb-4`}>
            <Card.Body className="text-center">
                <Button variant="primary" onClick={() => window.open(liveLink, "_blank")}>
                    {title}
                </Button>
                <Button variant="link" onClick={() => window.open(repoLink, "_blank")}>
                    <img
                        className="rounded-circle"
                        style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                        src="./images/github-image.jpg"
                        alt="GitHub"
                    />
                </Button>
            </Card.Body>
        </Card>
    );
}

export default function Portfolio() {
    const projects = [
        { title: "Recipe Finder", liveLink: "https://recipe-finder-777.netlify.app/", repoLink: "https://github.com/LelandMitchell2/recipe-finder-app", className: "card-1" },
        { title: "Traveling Weather", liveLink: "https://traveling-weather.onrender.com", repoLink: "https://github.com/LelandMitchell2/traveling-weather", className: "card-2" },
        { title: "README Generator", liveLink: "https://github.com/LelandMitchell2/Readme-Gen", repoLink: "https://github.com/LelandMitchell2/Readme-Gen", className: "card-3" },
        { title: "Employee Tracker", liveLink: "https://github.com/n6dd/Employee-Tracker", repoLink: "https://github.com/n6dd/Employee-Tracker", className: "card-4" },
        { title: "Vehicle Builder", liveLink: "https://github.com/n6dd/Vehicle-Builder", repoLink: "https://github.com/n6dd/Vehicle-Builder", className: "card-5" },
        { title: "Aqua Buddy", liveLink: "https://bans-07.github.io/Aqua-Buddy/", repoLink: "https://github.com/bans-07/Aqua-Buddy", className: "card-6" }
    ];

    return (
        <Container>
            <h2 className="text-center my-4">Portfolio</h2>
            <Row>
                {projects.map((project, index) => (
                    <Col key={index} md={4} className="d-flex justify-content-center">
                        <Project {...project} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}