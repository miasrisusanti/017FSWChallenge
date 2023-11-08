import React, { useState } from 'react';
import '../App.css'
import { Navbar, Nav, Container, Button, Offcanvas } from 'react-bootstrap';

const Menu = () => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const handleOffcanvas = () => {
        setShowOffcanvas(!showOffcanvas);
    };

    return (
        <section id="menu" className="main-bg pt-lg-3">
            <Container>
                <Navbar expand="lg">
                    <Navbar.Brand className="text-dark fw-bold fst-italic" href="/">
                        Binar Car Rental
                    </Navbar.Brand>
                    <Button 
                    className="navbar-toggler"
                    onClick={handleOffcanvas} >
                        <span className="navbar-toggler-icon"/>
                    </Button>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="navbar-nav gap-lg-4">
                            <Nav.Item>
                                <Nav.Link className="text-dark" href="#our-services">
                                    Our Services
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="text-dark" href="#why-us">
                                    Why Us
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="text-dark" href="#testimonial">
                                    Testimonial
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="text-dark" href="#faq">
                                    FAQ
                                </Nav.Link>
                            </Nav.Item>
                            <Button
                            type="button"
                            className="btn me-auto text-light"
                            style={{ backgroundColor: "#5CB85F", border: "none" }} >
                                Register
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Offcanvas
                show={showOffcanvas}
                onHide={handleOffcanvas}
                placement="end" >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title className="text-dark fw-bold fst-italic">
                        Binar Car Rental
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className="justify-content-end">
                        <Nav className="navbar-nav gap-lg-4">
                            <Nav.Item>
                                <Nav.Link className="text-dark" href="#our-services">
                                    Our Services
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="text-dark" href="#why-us">
                                    Why Us
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="text-dark" href="#testimonial">
                                    Testimonial
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="text-dark" href="#faq">
                                    FAQ
                                </Nav.Link>
                            </Nav.Item>
                            <Button
                            type="button"
                            className="btn me-auto text-light"
                            style={{ backgroundColor: "#5CB85F", border: "none" }} >
                                Register
                            </Button>
                        </Nav>
                    </Offcanvas.Body>
                </Offcanvas>
            </Container>
        </section>
    )
}

export default Menu;