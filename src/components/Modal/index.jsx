import React, {useState, useContext} from "react";
import {Ctx} from "../../App";
import "./style.css";
import Api from "../../api";
export default ({state, auth, updState}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [pwd2, setPwd2] = useState("");
    const [authType, setAuthType] = useState(auth);
    const {db, updDb, updUName, updUId, api} = useContext(Ctx);

    const handler = e => {
        e.preventDefault();
        if (authType) {
            api.logIn({email: email, password: pwd})
                .then(res => res.json())
                .then(data => {
                    console.log(data.message);
                    console.log(data);
                    if (data.message === "ok") {
                        updUId(data.data._id);
                        updUName(data.data.name);
                        localStorage.setItem("author", data.data.name);
                        localStorage.setItem("userId", data.data._id);
                    }
                    setEmail("");
                    setName("");
                    setPwd("");
                    setPwd2("");
                    updState(false);
                    setAuthType(auth);
                });
            // let user = db.filter(rec => rec.email === email && rec.pwd === pwd)[0];
            // if (user) {
                // updUName(user.name);
                // updUId(db.findIndex(rec => rec.email === email && rec.pwd === pwd));
            // } else {
            //     alert("Неверные данные пользователя");
            // }
        } else {
            api.signUp({
                name: name,
                password: pwd,
                email: email
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.message === "ok") {
                        updUId(data.data._id);
                        updUName(data.data.name);
                        localStorage.setItem("author", data.data.name);
                        localStorage.setItem("userId", data.data._id);
                    }
                    setEmail("");
                    setName("");
                    setPwd("");
                    setPwd2("");
                    updState(false);
                    setAuthType(auth);
                })
        }        
    }

    const changeAuthType = e => setAuthType(!authType); 

    return <div className="modal__container" style={{
        display: state ? "flex" : "none"
    }}>
        <div className="modal">
            <h2 className="log">{authType ? "Войти" : "Зарегистрироваться"}</h2>
            <form className="forma" onSubmit={handler}>
                {/* 
                    Почта - уникальный логин
                    Имя (регистрация)
                    Пароль
                    Повторить пароль (регистрация)
                */}
                <div className="mb8">
                <input
                    className="input__info"
                    type="email"
                    name="email"
                    placeholder="Электронный адрес"
                    value={email}
                    onChange={(e) => {setEmail(e.target.value)}}
                />
                </div>
                <div className="mb8">
                {!authType && <input 
                    className="input__info"
                    type="text"
                    name="name"
                    value={name}
                    placeholder="Имя пользователя"
                    onChange={(e) => {setName(e.target.value)}}
                />}
                </div>
                <div className="mb8">
                <input
                    className="input__info"
                    type="password"
                    name="pwd"
                    placeholder="Пароль"
                    value={pwd}
                    onChange={(e) => {setPwd(e.target.value)}}
                />
                </div>
                <div className="mb8">
                {!authType && <input 
                    className="input__info"
                    type="password"
                    placeholder="Повторить пароль"
                    value={pwd2}
                    onChange={(e) => {setPwd2(e.target.value)}}
                />}
                </div>
                <div className="mb8">
                    <a className="already" onClick={changeAuthType}>{authType ? "Зарегистрироваться" : "Войти"}</a>
                </div>
                <div className="mb10">
                    <button
                        className="button__submit"
                        type="submit"
                        disabled={!authType && (!pwd || !pwd2 || pwd !== pwd2)}>
                        {authType ? "Войти" : "Зарегистрироваться"}
                    </button>
                </div>
                <div className="mb10">
                    <button className="button__submit" type="button" onClick={() =>{
                    updState(!state)
                    setEmail("");
                    setName("");
                    setPwd("");
                    setPwd2("");
                    setAuthType(auth);
                }}>Закрыть</button>
                </div>
            </form>
        </div>
    </div>
}