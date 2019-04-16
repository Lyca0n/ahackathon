import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Nav =()=>(
    <div className="nav">
        <ul className="nav__list">
        <li className="nav__link nav__link--active">
            <Link to="#home">Home</Link>

        </li>
        <li className="nav__link">
            <Link to="#about">About</Link>
        </li>
        <li className="nav__link">
        <Link to="#ideas">Ideas</Link>

        </li>
        <li className="nav__link">
        <Link to="#schedule">Schedule</Link>

        </li>
        <li className="nav__link">
            <Link to="#faq">FAQs</Link>
        </li>
        </ul>
    </div>
);

export default Nav;