import React from "react";
import './style.css';
import {Link,
    Routes,
    Route,} from 'react-router-dom';
import User from "../pages/User";
import CreatePost from "../pages/CreatePost";
import Favourite from "../pages/Favourites";
import AllPosts from "../pages/AllPosts"
import MainPage from "../pages/MainPage";
import posts from "../data/posts.json";

export default () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/user" element={<User/>}/>
                <Route path="/createPost" element={<CreatePost/>}/>
                <Route path="/favourite" element={<Favourite/>}/>
                <Route path="/allPosts" element={<AllPosts data={posts}/>}/>
            </Routes>
        </main>
    )
}