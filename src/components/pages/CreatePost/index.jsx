import React,{useState, useContext} from "react";
import { Ctx } from "../../../App";
import { useNavigate } from "react-router-dom";
import "./style.css"
export default () => {
    const [postId,setPostsId] = useState("");
    const [postTitle, setPTitle] = useState("");
    const [postText, setPText] = useState("");
    const [postImg, setPImg] = useState("");
    const {db, updDb, updPId,updPTitle,updPText,updPImg,userId, api} = useContext(Ctx);
    const navigate = useNavigate()


const addNewPost = e => {
  e.preventDefault();
  if (postTitle && postText) {
      api.addPost( {
          title: postTitle,
          text: postText,
          image: postImg,
          author: userId
      })
          .then(res => res.json())
          .then(data => {
              console.log(data.message);
              console.log(data);
              if(data.message === "ok"){
                updPTitle(data.postTitle);
                updPText(data.postText);
                updPImg(data.postImg);
                localStorage.setItem("postTitle", data.data.postTitle);
                localStorage.setItem("postText", data.data.postText);
                localStorage.setItem("postImg", data.data.postImg);
            }
              setPImg("");
              setPTitle("");
              setPText("");
          })
          navigate("/")
}
}
return (
  <div>
    <h1>Create Post</h1>
    <form className="form-createpost" onSubmit={addNewPost} >

            <input value={postTitle} type="text" id="title" placeholder="Заголовок" onInput={e => setPTitle(e.target.value)}/>
            <br />
            <input value={postText} type="text"  className="post-text" placeholder="Пост" onInput={e => setPText(e.target.value)} />
            <br />
            <input value={postImg} id="image" placeholder="Ссылка на изображение" onInput={e => setPImg(e.target.value)}/>
            {/* <br />
            <span>Видимость</span>
            <input type="radio" /> вижу
            <input type="radio" /> не вижу */}
            <br />
            <button type="submit" onClick={addNewPost}>Создать пост</button>

        </form>
    </div>
  );
} 