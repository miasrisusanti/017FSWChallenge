import React from 'react';
import '../App.css'
import { Container, Col, Image } from 'react-bootstrap';


const Services = () => {
    return (
        <Container className="d-lg-flex flex-lg-row">
        <Col lg={6} className="text-center">
            <Image src="img/pict/img_service.png" fluid alt="" />
        </Col>
        <Col lg={6} className="ms-lg-4 pt-5 pt-lg-3">
            <h2 className="fw-bold mb-4">
                Best Car Rental for any kind trip in Tangerang Selatan!
            </h2>
            <p className="mb-4">
                Sewa mobil di Tangerang Selatan bersama Binar Car Rental, jaminan
                harga lebih murah dibandingkan dengan yang lain, kondisi mobil baru,
                serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                wedding, meeting, dll.
            </p>
            <p>
                <i className="circ fa-solid fa-check" />
                Sewa Mobil dengan Supir di Tangerang Selatan 12 Jam
            </p>
            <p>
                <i className="circ fa-solid fa-check" />
                Sewa Mobil Lepas Kunci di Tangerang Selatan 24 Jam
            </p>
            <p>
                <i className="circ fa-solid fa-check" />
                Sewa Mobil Jangka Panjang Bulanan
            </p>
            <p>
                <i className="circ fa-solid fa-check" />
                Gratis Antar - Jemput Mobil di Bandara
            </p>
            <p>
                <i className="circ fa-solid fa-check" />
                Layanan Airport Transfer / Drop In Out
            </p>
        </Col>
    </Container>
    )
}

export default Services;