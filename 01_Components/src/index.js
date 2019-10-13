import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="container">
            <CommentDetail 
            person="Sophia"
            img="https://bit.ly/2x3i4Ac"
            text="Hey everyone!"
            time="Today at 7:42"/>
            <CommentDetail 
            person="Charlotte"
            img="https://bit.ly/2Rn4cu3"
            text="Hey, nice to meet you!"
            time="Today at 7:45"/>
            <CommentDetail 
            person="Scarlett"
            img="https://bit.ly/31IeuK7"
            text="What are you all up to?"
            time="Today at 7:49"/>
            <CommentDetail 
            person="Evelyn"
            img="https://bit.ly/2KngIZL"
            text="Just having fun, haha!"
            time="Today at 7:51"/>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);