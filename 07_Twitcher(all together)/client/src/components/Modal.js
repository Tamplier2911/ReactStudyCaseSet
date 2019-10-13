import './Modal.scss';
import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
    return ReactDOM.createPortal(
        <div className="modal-body" onClick={props.onDismiss}>
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">{props.title}</div>
                <div className="modal-description">
                    {props.desc}
                    <div className="modal-stream-title">{props.streamTitle}</div>
                    <div className="modal-stream-desc">{props.StreamDesc}</div>
                </div>
                <div className="modal-navigation">
                    {props.actions}
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;

// ATENTION!|| modal-btn || modal-delete || modal-cancel ||
// All rendered in StreamDelete Component, and beeing sent as a props, attempt to make Modal Reusable
// Stoping Propagation Event Bubbling using event.stopPropagation on modal-box
// Modal-body now have onDissmiss, parent element who want to call Modal have to pass onDissmiss action

/*
{props.descStart}
<span style={{textDecoration: "underline"}}>{props.insertion}</span>
{props.descEnd}
*/