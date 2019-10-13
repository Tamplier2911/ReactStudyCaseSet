import './App.scss';
import React from 'react';

import PostList from './PostList';
import NavBar from './NavBar';
import Footer from './Footer';
import Header from './Header';

const App = () => {
    return(
        <div className="container">
            <NavBar/>
            <main className="main">
                <Header/>
                <PostList/>
                <Footer/>
            </main>
        </div>
    );
}

export default App;