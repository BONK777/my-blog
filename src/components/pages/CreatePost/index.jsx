import React, {useState, useContext} from "react";
import './style.css'
import { Ctx } from '../../../App'; 
import Api from "../../../api";

export default () => {

    // const [radio, setRadio] = useState(false);
    
    const [namePost, setNamePost] = useState("")
    const [describePost, setDescribePost] = useState("")
    const [imagePost, setImagePost] = useState("")
    const [idPost, setIdPost] = useState("")
    const {db, updDb, updPId, api, updNamePost, updDescribePost,updImagePost} = useContext(Ctx)
    const create = e => {
      e.preventDefault();
      if (namePost && describePost) {
          api.addPost( {
              title: namePost,
              describe: describePost,
              img: imagePost
          })
          .then(res => res.json())
          .then(data => {
              console.log(data.message);
              console.log(data);
              if(data.message === "ok") {
                updNamePost(data.namePost);
                updDescribePost(data.describePost);
                updImagePost(data.imagePost);
                localStorage.setItem("namePost", data.data.namePost);
                localStorage.setItem("describePost", data.data.describePost);
                localStorage.setItem("imagePost", data.data.imagePost);
            }
              setNamePost("");
              setDescribePost("");
              setImagePost("");
          })
      }
    }

    return (
      <div className="container">
        <div className="heading">Добавить пост</div>
        <form action="" className="form" onSubmit={create}>
          <div className="card-box">
            <input className="text"
              id="name"
              type="text"
              value={namePost}
              placeholder="Название поста"
              onChange={(e) => setNamePost(e.target.value)}/>
            <input className="text"
              id="describe"
              type="text"
              value={describePost}
              placeholder="Что происходит?"
              onChange={(e) => setDescribePost(e.target.value)}/>
          </div>
          <input className="text"
              id="img"
              value={imagePost}
              placeholder="ссылка на фото поста"
              onChange={(e) => setImagePost}/>
          <div className="category">
            <span className="who__sees">Кто может смотреть ваш пост?</span>
            <input className="create__input" type="radio" name="" id="" />Только я
            <input className="create__input" type="radio" name="" id="" />Все
          </div>
          <div className="post-img" style={{backgroundImage: imagePost && `url(${imagePost})`}}></div>
          <div className="button">
            <input type="submit" onClick={create}/> Создать
          </div>
        </form>
      </div>
    )
}