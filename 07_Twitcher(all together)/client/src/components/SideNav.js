import './SideNav.scss';
import React from 'react';

import navlogo from '../images/twitch-logo-nav.png';
// import userlogo from '../images/twitch-user-logo.png';

const SideNav = () => {
    return(
        <nav className="sidenav">
            <div className="sidenav__join">
                <img className="sidenav__join--image" src={navlogo} alt="twitch logo"></img>
                <div className="sidenav__join--title">
                    Join the Twitch Community!
                </div>
                <div className="sidenav__join--text">
                    Watch the best live broadcasts anywhere in the world.
                </div>
                <button className="sidenav__join--button" type="button">Join</button>
            </div>

            <div className="sidenav__channels">Popular Channels:</div>

            <ul className="sidenav__channels--list">

                <li className="sidenav__channels--item"> 
                    <figure className="sidenav__channels--user">
                        <img className="sidenav__channels--image" src="https://bit.ly/33wmgro" alt="users smile"></img>
                        <div className="sidenav__channels--desc">
                            <span className="sidenav__channels--name">Honeybun</span>
                            <span className="sidenav__channels--game">Fortnite</span>
                        </div>
                        <div className="sidenav__channels--watch">
                            <span className="sidenav__channels--hot"></span>
                            <span className="sidenav__channels--amount">
                                13 921
                            </span>
                        </div>
                    </figure>
                </li>

                <li className="sidenav__channels--item"> 
                    <figure className="sidenav__channels--user">
                        <img className="sidenav__channels--image" src="https://bit.ly/2ZKsQrI" alt="users smile"></img>
                        <div className="sidenav__channels--desc">
                            <span className="sidenav__channels--name">Tiny</span>
                            <span className="sidenav__channels--game">GTA IV</span>
                        </div>
                        <div className="sidenav__channels--watch">
                            <span className="sidenav__channels--hot"></span>
                            <span className="sidenav__channels--amount">
                                9 438
                            </span>
                        </div>
                    </figure>
                </li>

                <li className="sidenav__channels--item"> 
                    <figure className="sidenav__channels--user">
                        <img className="sidenav__channels--image" src="https://bit.ly/2yOahY6" alt="users smile"></img>
                        <div className="sidenav__channels--desc">
                            <span className="sidenav__channels--name">Psycho</span>
                            <span className="sidenav__channels--game">Minecraft</span>
                        </div>
                        <div className="sidenav__channels--watch">
                            <span className="sidenav__channels--hot"></span>
                            <span className="sidenav__channels--amount">
                                8 221
                            </span>
                        </div>
                    </figure>
                </li>

                <li className="sidenav__channels--item"> 
                    <figure className="sidenav__channels--user">
                        <img className="sidenav__channels--image" src="https://bit.ly/2YA4GUh" alt="users smile"></img>
                        <div className="sidenav__channels--desc">
                            <span className="sidenav__channels--name">Baby Maker</span>
                            <span className="sidenav__channels--game">PUBG</span>
                        </div>
                        <div className="sidenav__channels--watch">
                            <span className="sidenav__channels--hot"></span>
                            <span className="sidenav__channels--amount">
                                7 714
                            </span>
                        </div>
                    </figure>
                </li>

                <li className="sidenav__channels--item"> 
                    <figure className="sidenav__channels--user">
                        <img className="sidenav__channels--image" src="https://bit.ly/2GWx6xf" alt="users smile"></img>
                        <div className="sidenav__channels--desc">
                            <span className="sidenav__channels--name">Thunder Thighs</span>
                            <span className="sidenav__channels--game">Dota 2</span>
                        </div>
                        <div className="sidenav__channels--watch">
                            <span className="sidenav__channels--hot"></span>
                            <span className="sidenav__channels--amount">
                                6 992
                            </span>
                        </div>
                    </figure>
                </li>

            </ul>
        </nav>
    );
}

export default SideNav;