import React, {createContext, useState} from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import posts from "./components/data/posts.json";
import Api from './api';

export const Ctx = createContext({});
export const App = () => {

    const [namePost, setNamePost] = useState(localStorage.getItem(namePost) || "");
    const [describePost, setDescribePost] = useState(localStorage.getItem(describePost) || "");
    const [imagePost, setImagePost] = useState(localStorage.getItem(imagePost) || "");
    /*
        users = [{name: "", pwd: "", email: ""}] => db
    */
    const [db, updDb] = useState(JSON.parse(localStorage.getItem("db") || "[]"));
    const [userId, setUserId] = useState(localStorage.getItem("userId") || "");
    const [userName, setUserName] = useState(localStorage.getItem("userName") || "");

    return <Ctx.Provider value={{
        db: db,
        userId: userId,
        userName: userName,
        api: new Api(),
        updDb: updDb,
        updUId: setUserId,
        updUName: setUserName,
        namePost: setNamePost,
        describePost: setDescribePost,
        imagePost: setImagePost,
        updNamePost: setNamePost,
        updDescribePost: setDescribePost,
        updImagePost: setImagePost

    }}>
        <Header/>
        <Main data={posts}/>
        <Footer/>
    </Ctx.Provider>
}