import React from "react";
import './style.css'
import {Link} from 'react-router-dom';

export default () => {
    return (
        <header>
            <Link to="/" className="header__logo">DevsBlog</Link>
            <h1 className="welcome">Very good blog</h1>
            <nav className="header__menu">
                <Link to="/createPost" className="header__btn">Create post</Link>
                <Link to="/favourite" className="header__btn">Избранное</Link>
                <Link to="/user" className="header__btn">Мой профиль</Link>
            </nav>
        </header>
    )
}