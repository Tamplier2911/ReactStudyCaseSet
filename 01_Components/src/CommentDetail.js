import React from 'react';
import './CommentDetail.css';
import ApprovalCard from './ApprovalCard';

const CommentDetail = (props) => {
    return(
        <div className="component">
            <a href="/" className="component__img-link">
                <img className="component__img"
                src={props.img}
                alt="img"></img>
            </a>
            <a href="/" className="component__name">
                {props.person}
            </a>
            <p className="component__text">
                {props.text}
            </p>
            <p className="component__time">
                {props.time}
            </p>
            <ApprovalCard />
        </div>
    );
};

export default CommentDetail;