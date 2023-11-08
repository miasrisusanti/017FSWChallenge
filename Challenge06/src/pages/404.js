import '../App.css';
import React from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

function NoMatch() {
  return (
    <div className='App'>
    <Menu />
    <Header />
    <p style={{textAlign: 'center', margin: '100px'}}>404 Not Found.</p>
    <Footer />
  </div>
  );
}

export default NoMatch;
