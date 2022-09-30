import React from "react";
import { Ctx } from "../../../App"
import  posts from "../../data/posts.json"
// import './stlye.css';

export default ({data}) => {
    return (
      <div className="container-post">
        {data.map(post => 
          <div className="post" key={post.name}>
            <div className="post-info">
              <label className="txt-info">{post.author}</label>
              <label className="txt-info">{post.name}</label>
              <span className="txt-info">
                {post.description[i]}
              </span>
              <div className="image-info" style={{
                backgroundImage: post.image && `url(${post.image})`}}>
              </div>
            </div>
          </div>)}
      </div>
    )
}