import './Header.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

import logo from '../images/twitch-logo.png';
import user from '../images/vellany.jpg';

const Header = () => {
    return(
        <header className="header">
            <img className="header__logo" src={logo} alt="logo"></img>
            <Link className="header__link" to="/">Streamer</Link>
            <Link className="header__link" to="/">Streams</Link>
            <figure className="header__user">
                <div className="header__user--info">
                    <div className="header__user--name">Triss Merigold</div>
                    {/* <a className="header__user--log" href="/">Log Out</a> */}
                    <GoogleAuth/>
                </div>
                <img className="header__user--image" src={user} alt="smile"></img>
            </figure>
        </header>
    );
};

export default Header;