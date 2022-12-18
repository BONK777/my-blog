import React, {useState} from "react";
import './stylee.css';
import {Link} from 'react-router-dom';
import Api from "../../../api";

export default () => {
    return (
        <div className="cards">
            <div className="main__text">
                <h1 className="text">Let's share our news and successes in life</h1>
                <p className="text">Create a post where you can share what you want, make friends and chat together!</p>
                <Link to="/allPosts" className="more">Больше постов</Link>
            </div>
        </div>
    )
}