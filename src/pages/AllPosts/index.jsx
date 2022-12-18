import React, { useState, useContext, useEffect } from "react";
import Post from "../Post";
import "./style.css";
import { Ctx } from "../../App";
import { remove } from "../../utils.js";

const Posts = () => {
    const [posts, setPosts] = useState();
    const [isLoad, setIsLoad] = useState(false);
    const [postTags, setPostTags] = useState([]);
    const [querySearch, setQuerySearch] = useState("");
    const [selectedTags, setSelectedTags] = useState([]);
    const { api } = useContext(Ctx);

    useEffect(() => {
        api.getPosts()
            .then((res) => res.json())
            .then((data) => {
                setPosts(data.data);
                setIsLoad(true);
            });
    }, [api]);

    return (
            <div>
                <div className="posts__filter">
                    <input onChange={(evt) => setQuerySearch(evt.target.value)} type="text" placeholder="Search..." />
                </div>
                <div className="cards__post">
                    {isLoad ? posts.filter(post => {
                        if (querySearch === "") {
                            return post;
                        } else if (post.title && post.title.toLowerCase().includes(querySearch.toLowerCase())) {
                            return post;
                        }
                        return false;
                    }).map((post) => {
                        return <Post key={post._id} post={post}></Post>
                    }) : <p>Загрузка...</p>}
                </div>
            </div>
    );
};

export default Posts;