import React from 'react';
import Landing from './Landing';
import FAQList from './FAQList';
import Schedule from './Schedule';
import About from './About';
import Ideas from './Ideas';


const HomePage = ()=>(
    <div className="page-container">              
    <Landing/>
    <About/>
    <Ideas/>
    <Schedule/>
    <FAQList/>   
    </div>
);

export default HomePage;