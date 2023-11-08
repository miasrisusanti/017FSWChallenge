import React from 'react';
import '../App.css'
import Navigation from './Button/navBtn';
import { Container, Button } from 'react-bootstrap';

const Promotion = () => {
    return (
    <Container>
        <div className="container rounded blue-bg text-center promo-gap">
            <h1 className="text-light mb-3">
                Sewa Mobil di Tangerang Selatan Sekarang
            </h1>
            <p className="col-lg-6 text-light fw-light mx-auto mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Navigation to="/cars" buttonText="Mulai Sewa Mobil"/>
        </div>
    </Container>
    );
}

export default Promotion;

