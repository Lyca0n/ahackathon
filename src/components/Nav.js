import React from 'react';


const Nav =()=>(
    <div className="nav">
        <ul className="nav__list">
        <li className="nav__link nav__link--active">
            <a>Home</a>

        </li>
        <li className="nav__link">
            <a>About</a>

        </li>
        <li className="nav__link">
            <a>Ideas</a>

        </li>
        <li className="nav__link">
            <a>Schedule</a>

        </li>
        <li className="nav__link">
            <a>FAQ</a>

        </li>
        </ul>
    </div>
);

export default Nav;