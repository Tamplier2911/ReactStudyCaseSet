import './NavBar.scss';
import ReactImage from './../images/react.png';
import React from 'react';

const NavBar = () => {
    return(
        <nav className="navbar">
            <div className="navbar__logo">
                <img src={ReactImage} alt="redux logo" className="navbar__image"></img>
            </div>
            <ul className="navbar__navList">
                <li className="navbar__navItem">
                    <span className="navbar__navItem-text">Dashboard</span>
                </li>
                <li className="navbar__navItem">
                    <span className="navbar__navItem-text">Blog</span>
                </li>
                <li className="navbar__navItem">
                    <span className="navbar__navItem-text">Pages</span>
                </li>
                <li className="navbar__navItem">
                    <span className="navbar__navItem-text">Media</span>
                </li>
            </ul>
            <span className="navbar__copy">&copy; All Rights Reserved</span>
        </nav>
    );
}

export default NavBar;