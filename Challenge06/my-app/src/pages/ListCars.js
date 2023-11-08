import React from 'react';
import '../App.css'
import CarDisplay from '../components/CarDisplay';
import Header from '../components/Header';
import Menu from '../components/Menu';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';

function ListCars() {
    return (
        <div className='App'>
            <Menu />
            <Header />
            <SearchBar />
            <div className="container">
                <CarDisplay />
            </div>
            <Footer />
        </div>
    );
}
        
export default ListCars;