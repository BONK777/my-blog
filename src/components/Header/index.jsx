import React, {useState, useContext} from 'react';
import './style.css'
import {Link} from 'react-router-dom';
import Modal from '../Modal';
import { Ctx } from '../../App';

export default () => {
    const [modalView, setModal] = useState(false);
    const [modalAuth, setModalAuth] = useState(true);
    const {userId, userName, updUId, updUName} = useContext(Ctx);

    const logOut = (e) => {
        e.preventDefault();
        updUId("");
        updUName("");
        localStorage.removeItem("userId"); 
        localStorage.removeItem("author"); 
    }


    return (
        <header>
            <Link to="/" className="header__logo">DevsBlog</Link>
            <h1 className="welcome">Very good blog</h1>
            <nav className="header__menu">
                <Link to="/createPost" className="header__btn">Create post</Link>
                    {!userId && <a href="/" 
                    className="header__btn" 
                    onClick={(e) => {
                        e.preventDefault();
                        setModal(!modalView);
                        setModalAuth(true);
                    }}
                >Sign in</a>}
                {!userId && <a href="/" 
                    className="header__btn" 
                    onClick={(e) => {
                        e.preventDefault();
                        setModal(!modalView);
                        setModalAuth(false);
                    }}
                >Sign up</a>}
                {userId && <Link className='header__btn' to="/user">{userName}</Link>}
                {userId && <a className='header__btn' href="/" onClick={logOut}>Log Out</a>}
            </nav>
            {<Modal state={modalView} auth={modalAuth} updState={setModal}/>}       
        </header>
    )
}