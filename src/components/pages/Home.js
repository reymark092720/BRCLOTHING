import React from 'react';
import Section1 from './HomePages/Section1';
import HeroSection from './HomePages/HeroSection';
import Slick from './Slick';
import Footer from './Footer';
const Home = () => {
    return (
    <div>
    <HeroSection />
    <Slick />
    <Section1 />
    <Footer />
    </div>
    );
  };
  
  export default Home;