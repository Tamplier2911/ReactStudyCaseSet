import React from 'react';
import './ApprovalCard.css';

const ApprovalCard = () => {
    return(
        <div className="approval">
            <a href="/" 
            className="approval__button approval__button--1">
                Confirm
            </a>
            <a href="/" 
            className="approval__button approval__button--2">
                Reject
            </a>
        </div>
    );
};

export default ApprovalCard;