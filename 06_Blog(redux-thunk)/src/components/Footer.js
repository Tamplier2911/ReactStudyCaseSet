import './Footer.scss';
import React from 'react';

const Footer = () => {
    return(
        <footer className="footer">
            <button className="footer__review">
                Review
            </button>
            <button className="footer__save">
                Save
            </button>
            <button className="footer__publish">
                Publish
            </button>
        </footer>
    );
}

export default Footer;