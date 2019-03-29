import React from 'react';
import Landing from './Landing';
import FAQList from './FAQList';
import Schedule from './Schedule';
import About from './About';
import Ideas from './Ideas';
import Footer from './Footer';

const HomePage = ()=>(
    <div className="page-container">              
    <Landing/>
    <About/>
    <Ideas/>
    <Schedule/>
    <FAQList/>   
    <Footer/>
    </div>
);

export default HomePage;