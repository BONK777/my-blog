import React from "react";
import './style.css';
import {Link} from 'react-router-dom';

export default ({data}) => {
    return (
            <div className="cards">
                {data.map(post => <div
                 className="post"
                 key={post.name} 
                 style={{backgroundImage: `url(${post.image})`}}>
                    <div className="post__block">
                        <span>{post.author}</span>
                        <br/>
                        <span>{post.name}</span>
                    </div>
                    <div className="post__block">
                        {post.description[0].split(".").map((p, i, arr) => i !== arr.length - 1 && <p key={i}>{p + "."}</p>)}
                    </div>
                   <Link to="/post" className="edit">изменить</Link>
                   </div>)}
            </div>
    )
}