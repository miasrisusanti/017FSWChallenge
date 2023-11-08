import React from 'react';
import '../App.css'
import { Container, Col, Row, Carousel } from 'react-bootstrap';

const Testimonial = () => {
    return (
        <Container>
            <h2 className="fw-bold mb-4 text-center">Testimonial</h2>
            <p className="mb-5 text-center">Berbagai review positif dari para pelanggan kami</p>
            <Row className="justify-content-center">
                <Carousel data-bs-theme="dark" id="carouselExample" className="main-bg rounded testi-size">
                    <Carousel.Item>
                        <Row className="grid-container set-sm">
                            <Col className="item photo1">
                                <img src="img/pict/img_photo.png" alt="" />
                            </Col>
                            <Col className="item rate">
                                <img src="img/icon/Rate.png" alt="" />
                            </Col>
                            <Col className="item">
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                            </Col>
                            <Col className="item fw-bold">John Dee 32, Bromo</Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className="grid-container set-sm">
                            <Col className="item photo1">
                                <img src="img/pict/img_photo.png" alt="" />
                            </Col>
                            <Col className="item rate">
                                <img src="img/icon/Rate.png" alt="" />
                            </Col>
                            <Col className="item">
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                            </Col>
                            <Col className="item fw-bold">John Dee 32, Bromo</Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row className="grid-container set-sm">
                            <Col className="item photo1">
                                <img src="img/pict/img_photo.png" alt="" />
                            </Col>
                            <Col className="item rate">
                                <img src="img/icon/Rate.png" alt="" />
                            </Col>
                            <Col className="item">
                                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                            </Col>
                            <Col className="item fw-bold">John Dee 32, Bromo</Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </Row>
      </Container>
    )
}

export default Testimonial;