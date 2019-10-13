import './Header.scss';
import UserImage from './../images/user.jpg';
import React from 'react';

const Header = () => {
    return(
        <header className="header">
            <button className="header__new">
                New Post
            </button>
            <figure className="header__user">
                <div className="header__user-container">
                    <div className="header__user-name">
                        Thomas White
                    </div>
                    <div className="header__user-log">
                        Log Out
                    </div>
                </div>
                <img src={UserImage} 
                className="header__user-image" alt="user"></img>
            </figure>
        </header>
    );
}

export default Header;