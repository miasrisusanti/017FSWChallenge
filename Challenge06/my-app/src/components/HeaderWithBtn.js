import React from 'react';
import '../App.css'
import Navigation from './Button/navBtn';
import { Container, Col, Image } from 'react-bootstrap';

const HeaderWithBtn = () => {
    return (
        <header className="main-bg pt-4">
            <Container fluid className="d-lg-flex gap-lg-5 pt-2">
                <Col lg={5} className="ps-lg-5">
                    <h1 className="fw-bold mb-3">
                        Sewa & Rental Mobil Terbaik di Kawasan Tangerang Selatan
                    </h1>
                    <p className="mb-4">
                        Selamat datang di Binar Car Rental. Kami menyediakan mobil berkualitas
                        terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
                        untuk sewa mobil selama 24 jam.            
                    </p>
                    <Navigation to="/cars" buttonText="Mulai Sewa Mobil"/>
                </Col>
                <Col lg={6} className="ms-auto my-auto">
                    <Image fluid src="../../img/pict/img_car.png" alt="" />
                </Col>
            </Container>
        </header>
    );
}

export default HeaderWithBtn;