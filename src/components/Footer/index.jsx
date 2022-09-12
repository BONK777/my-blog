import React from "react";
import './stlye.css';

export default () => {
    return (
        <footer>
            <span className="footer__copy">
            &copy;{new Date().getFullYear()}
            </span>
            <span className="footer_made"> Made by&nbsp;
                <a href="https://github.com/BONK777" className="footer__author" target="_blank">Pavel</a>
            </span>
        </footer>
    )
}