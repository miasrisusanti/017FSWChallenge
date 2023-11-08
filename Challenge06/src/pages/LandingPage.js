import React from 'react';
import '../App.css'
import HeaderWithBtn from '../components/HeaderWithBtn';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import Testimonial from '../components/Testimonial';
import Promotion from '../components/Promotion';
import Faq from '../components/Faq';

function LandingPage() {
  return (
    <div className='App'>
      <Menu />
      <HeaderWithBtn />
      <section id="our-services" className="gap-each">
        <Services />
      </section>
      <section id="why-us" className="gap-each">
        <WhyUs />
      </section>
      <section id="testimonial" className="gap-each">
        <Testimonial />
      </section>
      <section id="promo" className="gap-each">
        <Promotion />
      </section>
      <section id="faq" className="gap-each">
        <Faq />
      </section>
    <Footer />
    </div>
    );
  }
  
  export default LandingPage;
  