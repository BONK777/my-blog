import React from "react";
import './style.css'

export default () => {
    return (
        <footer>
            <span className="footer__copy">
            &copy;{new Date().getFullYear()}
            </span>
            <span className="footer_made"> Made by&nbsp;
                <a href="https://bonk777.github.io/portfolio/" className="footer__author" target="_blank">Pavel</a>
            </span>
        </footer>
    )
}