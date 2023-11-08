import React from 'react';
import '../App.css'
import { Container, Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="gap-each">
            <Container className="d-lg-flex justify-content-center">
                <Row>
                    <Col lg={3} md={6} className="mb-4">
                        <p className="fw-light">Jl. Bintaro Utama 3A No.81, Pd. Karya, Kec. Pd. Aren, Kota Tangerang Selatan, Banten 15225</p>
                        <p className="fw-light">binarcarrental@gmail.com</p>
                        <p className="fw-light">081-233-334-808</p>
                    </Col>
                    <Col lg={2} md={6} className="mb-4">
                        <p>
                            <a className="nav-link text-dark" href="#our-services">
                                Our Services
                            </a>
                        </p>
                        <p>
                            <a className="nav-link text-dark" href="#why-us">
                                Why Us
                            </a>
                        </p>
                        <p>
                            <a className="nav-link text-dark" href="#testimonial">
                                Testimonial
                            </a>
                        </p>
                        <p>
                            <a className="nav-link text-dark" href="#faq">
                                FAQ
                            </a>
                        </p>
                    </Col>
                    <Col lg={3} md={6} className="mb-4">
                        <p className="fw-light">Connect With Us</p>
                        <ul className="d-flex gap-3 no-bullets p-0 m-0">
                            <li>
                                <img src="../../img/icon/icon_facebook.png" alt="" />
                            </li>
                            <li>
                                <img src="../../img/icon/icon_instagram.png" alt="" />
                            </li>
                            <li>
                                <img src="../../img/icon/icon_twitter.png" alt="" />
                            </li>
                            <li>
                                <img src="../../img/icon/icon_mail.png" alt="" />
                            </li>
                            <li>
                                <img src="../../img/icon/icon_twitch.png" alt="" />
                            </li>
                            </ul>
                    </Col>
                    <Col lg={4} md={6} className="mb-4">
                        <p className="fw-light">© Binar Academy, 2023</p>
                        <h1 className="text-dark fw-bold fst-italic">
                            Binar Car Rental
                        </h1>
                        <p className="fw-light">
                        <small>DEVELOP BY MIA SRI SUSANTI</small>
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;