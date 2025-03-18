import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useEffect } from 'react';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer'; 

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    useEffect(() => {
        document.title = "Leland's Portfolio";
    }, []);
    return (
        <>
            <div id="root">
                <Navbar>
                    <Container>
                        <Navbar.Brand>Leland</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                                
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div className="main-content">
                    <Container className="mt-4">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/contact" element={<Contact />} />
                            
                        </Routes>
                    </Container>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default App;