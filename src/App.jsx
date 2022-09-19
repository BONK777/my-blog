import React from "react";
import {
    Routes,
    Route,
} from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import User from "./components/pages/User";
import CreatePost from "./components/pages/CreatePost";
import Favourite from "./components/pages/Favourites";
import AllPosts from "./components/pages/AllPosts";
import posts from "./data/posts.json";

export default () => {
    return <>
        <Header/>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/user" element={<User/>}/>
            <Route path="/createPost" element={<CreatePost/>}/>
            <Route path="/favourite" element={<Favourite/>}/>
            <Route path="/allPosts" element={<AllPosts data={posts}/>}/>
        </Routes>
        <Footer/>   
    </>
}
