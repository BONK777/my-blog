import React from "react";
import './style.css'
export default () => {
    return (
        <header>
            <a href="/" className="header__logo">DevsBlog</a>
            <h1 className="welcome">Very good blog</h1>
            <nav className="header__menu">
                <a href="/" className="header__btn">Create post</a>
            </nav>
        </header>
    )
}