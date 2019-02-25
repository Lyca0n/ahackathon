import React from 'react';
import Landing from './Landing';
import FAQList from './FAQList';
import Schedule from './Schedule';


const HomePage = ()=>(
    <div className="page-container">              
    <Landing/>
    <FAQList/>
    <Schedule/>
    </div>
);

export default HomePage;