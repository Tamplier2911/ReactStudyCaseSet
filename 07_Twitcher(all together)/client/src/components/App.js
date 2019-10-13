import './App.scss';
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import SideNav from './SideNav';

import StreamCreate from '../components/streams/StreamCreate';
import StreamDelete from '../components/streams/StreamDelete';
import StreamEdit from '../components/streams/StreamEdit';
import StreamList from '../components/streams/StreamList';
import StreamShow from '../components/streams/StreamShow';

import history from '../history';

import sl from '../images/swipe-left.png';
import sr from '../images/swipe-right.png';



const App = () => {
    return(
        <div className="container">
            <Router history={history}>
            <Header/>
            <main className="main">
                <SideNav/>
                <section className="content">
                    
                    <div className="content__main">
                        <img className="content__main--sl" alt="swipe left" src={sl}></img>
                        <div className="content__main--preview">
                            <iframe className="content__main--stream"  title="stream" src="https://www.youtube.com/embed/cm381eVxbBQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <div className="content__main--desc">
                                <figure className="content__main--desc-figure">
                                    <img className="content__main--desc-image" src="https://bit.ly/2QgVe0S" alt="users smile"></img>
                                    <div className="content__main--desc-info">
                                        <span className="content__main--desc-name">Brenda Cooper</span>
                                        <span className="content__main--desc-type">Just Chilling</span>
                                        <span className="content__main--desc-amount">1,8k watching</span>
                                    </div>
                                </figure>
                                <div className="content__main--desc-buttons">
                                    <button className="content__main--desc-button">Flashing</button>
                                    <button className="content__main--desc-button">English</button>
                                </div>
                                <div className="content__main--desc-text">
                                    Camila Cabello, Starrah, Ali Tamposi, Brian Lee, Andrew Watt, Pharrell Williams, Young Thug, Adam Feeney, Louis Bell, Kaan Gunesberk.
                                </div>
                            </div>
                        </div>
                        <img className="content__main--sr" alt="swipe right" src={sr}></img>
                    </div>

                    <div className="content__rest">
                        {/* <BrowserRouter> */}
                            {/* <div className="content__rest--routeWrapper"> */}
                            <Switch>
                                <Route path="/" exact component={StreamList}/>
                                <Route path="/streams/new" exact component={StreamCreate}/>
                                <Route path="/streams/edit/:id" exact component={StreamEdit}/>
                                <Route path="/streams/delete/:id" exact component={StreamDelete}/>
                                <Route path="/streams/:id" exact component={StreamShow}/>
                            </Switch>
                            {/* </div> */}
                        {/* </BrowserRouter> */}
                    </div>
                </section>
            </main>
            </Router>
        </div>
            
    );
}

/*
key = 307273000921-3c3vf28h5pk0alm9sdlttkrng185u4rk.apps.googleusercontent.com

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount(){};
    componentDidUpdate(){};
    componentWillUnmount(){};

    render(){
        return(
            <div className="container">

                <header className="header">
                    <img className="header__logo" src={logo} alt="logo"></img>
                    <a className="header__link" href="/">Streamer</a>
                    <a className="header__link" href="/">Streams</a>
                    <figure className="header__user">
                        <div className="header__user--info">
                            <div className="header__user--name">Triss Merigold</div>
                            <a className="header__user--log" href="/">Log Out</a>
                        </div>
                        <img className="header__user--image" src={user} alt="smile"></img>
                    </figure>
                </header>

                <main className="main">
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
                                    <img className="sidenav__channels--image" src={userlogo} alt="users smile"></img>
                                    <div className="sidenav__channels--desc">
                                        <span className="sidenav__channels--name">Thomas White</span>
                                        <span className="sidenav__channels--game">Heartstone</span>
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
                                    <img className="sidenav__channels--image" src={userlogo} alt="users smile"></img>
                                    <div className="sidenav__channels--desc">
                                        <span className="sidenav__channels--name">Thomas White</span>
                                        <span className="sidenav__channels--game">Heartstone</span>
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
                                    <img className="sidenav__channels--image" src={userlogo} alt="users smile"></img>
                                    <div className="sidenav__channels--desc">
                                        <span className="sidenav__channels--name">Thomas White</span>
                                        <span className="sidenav__channels--game">Heartstone</span>
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
                                    <img className="sidenav__channels--image" src={userlogo} alt="users smile"></img>
                                    <div className="sidenav__channels--desc">
                                        <span className="sidenav__channels--name">Thomas White</span>
                                        <span className="sidenav__channels--game">Heartstone</span>
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
                                    <img className="sidenav__channels--image" src={userlogo} alt="users smile"></img>
                                    <div className="sidenav__channels--desc">
                                        <span className="sidenav__channels--name">Thomas White</span>
                                        <span className="sidenav__channels--game">Heartstone</span>
                                    </div>
                                    <div className="sidenav__channels--watch">
                                        <span className="sidenav__channels--hot"></span>
                                        <span className="sidenav__channels--amount">
                                            13 921
                                        </span>
                                    </div>
                                </figure>
                            </li>

                        </ul>
                    </nav>

                    <section className="content">

                        <div className="content__main">
                            <img className="content__main--sl" alt="swipe left" src={sl}></img>
                            <div className="content__main--preview">
                                <iframe className="content__main--stream"  title="stream" src="https://www.youtube.com/embed/cm381eVxbBQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                <div className="content__main--desc">
                                    <figure className="content__main--desc-figure">
                                        <img className="content__main--desc-image" src="https://bit.ly/2QgVe0S" alt="users smile"></img>
                                        <div className="content__main--desc-info">
                                            <span className="content__main--desc-name">Brenda Cooper</span>
                                            <span className="content__main--desc-type">Just Chilling</span>
                                            <span className="content__main--desc-amount">1,8k watching</span>
                                        </div>
                                    </figure>
                                    <div className="content__main--desc-buttons">
                                        <button className="content__main--desc-button">Flashing</button>
                                        <button className="content__main--desc-button">English</button>
                                    </div>
                                    <div className="content__main--desc-text">
                                        Camila Cabello, Starrah, Ali Tamposi, Brian Lee, Andrew Watt, Pharrell Williams, Young Thug, Adam Feeney, Louis Bell, Kaan Gunesberk.
                                    </div>
                                </div>
                            </div>
                            <img className="content__main--sr" alt="swipe right" src={sr}></img>
                        </div>

                        <div className="content__rest">
                            <div>Dummy Content</div>
                            <div>Dummy Content</div>
                            <div>Dummy Content</div>
                            <div>Dummy Content</div>
                            <div>Dummy Content</div>
                            <div>Dummy Content</div>
                            <div>Dummy Content</div>
                            <div>Dummy Content</div>
                            <div>Dummy Content</div>
                            <div>Dummy Content</div>
                            <div>Dummy Content</div>
                            <div>Dummy Content</div>
                            <div>Dummy Content</div>
                            <div>Dummy Content</div>
                            <div>Dummy Content</div>
                            <div>Dummy Content</div>
                            <div>Dummy Content</div>
                            <div>Dummy Content</div>
                            <div>Dummy Content</div>
                            <div>Dummy Content</div>
                            <div>Dummy Content</div>
                            <div>Dummy Content</div>
                            <div>Dummy Content</div>
                            <div>Dummy Content</div>
                            <div>Dummy Content</div>
                            <div>Dummy Content</div>
                            <div>Dummy Content</div>
                            <div>Dummy Content</div>
                            <div>Dummy Content</div>
                            <div>Dummy Content</div>
                            <div>Dummy Content</div>
                            <div>Dummy Content</div>
                            <div>Dummy Content</div>
                            <div>Dummy Content</div>
                            <div>Dummy Content</div>
                            <div>Dummy Content</div>
                            <div>Dummy Content</div>
                            <div>Dummy Content</div>
                            <div>Dummy Content</div>
                            <div>Dummy Content</div>
                            <div>Dummy Content</div>
                            <div>Dummy Content</div>
                            <div>Dummy Content</div>
                            <div>Dummy Content</div>
                        </div>
                    </section>
                </main>

            </div>
        );
    };
}
*/
export default App;