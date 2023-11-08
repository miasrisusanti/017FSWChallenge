import React from 'react';
import '../App.css'
import { Container, Col, Card, Row } from 'react-bootstrap';


const WhyUs = () => {
    return (
        <Container>
            <h2 className="fw-bold mb-4 text-center text-lg-start">Why Us?</h2>
            <p className="mb-5 text-center text-lg-start">
                Mengapa harus pilih Binar Car Rental?
            </p>
            <Row className="d-lg-flex flex-lg-row">
                <Col md={6} lg={3} className="mb-3">
                    <Card className="">
                        <Card.Body>
                            <img className="my-2" src="img/icon/icon_complete.png" alt="" />
                            <p className="fw-bold mt-3">Mobil Lengkap</p>
                            <p>
                                Tersedia banyak pilihan mobil, kondisi masih baru, bersih, dan terawat.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={3} className="mb-3">
                    <Card className="">
                    <Card.Body>
                        <img className="my-2" src="img/icon/icon_price.png" alt="" />
                        <p className="fw-bold mt-3">Harga Murah</p>
                        <p>
                            Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain.
                        </p>
                    </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={3} className="mb-3">
                    <Card className="">
                        <Card.Body>
                            <img className="my-2" src="img/icon/icon_24hrs.png" alt="" />
                            <p className="fw-bold mt-3">Layanan 24 Jam</p>
                            <p>
                                Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={3} className="mb-3">
                    <Card className="">
                        <Card.Body>
                            <img className="my-2" src="img/icon/icon_professional.png" alt="" />
                            <p className="fw-bold mt-3">Supir Profesional</p>
                            <p>
                                Supir yang profesional, berpengalaman, jujur, ramah, dan selalu tepat waktu.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
    </Container>
    )
}

export default WhyUs;