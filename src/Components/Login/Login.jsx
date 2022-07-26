import React, {useState} from 'react';
import {Auth_request} from "../../Request/Request";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    const auth = useSelector(state => state.Login.auth);
    const profile = useNavigate()


    const login = () => {
        Auth_request(email, password, '')
        dispatch({type: "Login", email: email, password: password, access_token: "", auth: true})
    }

    const ap = () => {
        profile("/profile")
    }


    return (
        <>
            {!auth ?
                <div className={"Login"}>
                    <h1>Логин</h1>
                    <div className={"Authorization"}>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder={"Email"}/>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder={"Password"}/>
                        <button onClick={login}>Авторизоваться</button>
                    </div>
                </div> : ap()
            }
        </>
    );
};

export default Login;