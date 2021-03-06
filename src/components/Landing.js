import React from 'react';

const Landing = ()=> (
    <div className="landing" id="home">
    <div className="content-container landing__container">
        <div className="landing__title">
            <span >June 8 - June 10, 2019</span>
            <img className="landing__logo" src="/images/autozone-color.svg" />
            <h1>Drive for Innovation</h1>
        </div>                                       
        <div className="landing__content">
            <button className="button">Register your idea</button>
        </div>                    
    </div>
    </div> 
);

export default Landing;