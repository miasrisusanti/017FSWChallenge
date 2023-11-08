import React from 'react';
import '../App.css'
import { Container, Col, Row, Accordion } from 'react-bootstrap';

const Faq = () => {
    return (
        <Container>
            <Row className="d-lg-flex">
                <Col lg={6}>
                    <h2 className="fw-bold mb-4 text-center text-lg-start">
                    Frequently Asked Question
                    </h2>
                    <p className="mb-5 text-center text-lg-start">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                </Col>
                <Col lg={6}>
                    <Accordion id="accordionPanelsStayOpenExample">
                        <Col className="pb-3">
                            <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                Apa saja syarat yang dibutuhkan?
                            </Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </Accordion.Body>
                            </Accordion.Item>
                        </Col>

                        <Col className="pb-3 border-top-1">
                            <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                Berapa hari minimal sewa mobil lepas kunci?
                            </Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </Accordion.Body>
                            </Accordion.Item>
                        </Col>

                        <Col className="pb-3 border-top-1">
                            <Accordion.Item eventKey="2">
                            <Accordion.Header>
                                Berapa hari sebelumnya sebaiknya booking sewa mobil?
                            </Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </Accordion.Body>
                            </Accordion.Item>
                        </Col>

                        <Col className="pb-3 border-top-1">
                            <Accordion.Item eventKey="3">
                            <Accordion.Header>
                                Apakah ada biaya antar-jemput?
                            </Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </Accordion.Body>
                            </Accordion.Item>
                        </Col>

                        <Col className="pb-3 border-top-1">
                            <Accordion.Item eventKey="4">
                            <Accordion.Header>
                                Bagaimana jika terjadi kecelakaan?
                            </Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </Accordion.Body>
                            </Accordion.Item>
                            </Col>
                    </Accordion>
                </Col>
            </Row>
      </Container>
    )
}

export default Faq;