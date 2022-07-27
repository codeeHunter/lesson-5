import React, {useState} from 'react';
import {Registration_request} from "../../Request/Request";
import {useDispatch, useSelector} from "react-redux";
import {getRegistrationStorage} from "../../LocalStorage/Localstorage";
import {Navigate} from "react-router-dom";


const Registration = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm_password, setConfirm_password] = useState('')
    const dispatch = useDispatch()
    const isName = useSelector(state => state.Registration.name)


    const request = () => {
        Registration_request(name, email, password, confirm_password).then(response => {
            if (response.status) {
                dispatch({
                    type: "Registration",
                    name: getRegistrationStorage().name,
                    email: getRegistrationStorage().email,
                    password: getRegistrationStorage().password,
                    password_confirmation: getRegistrationStorage().password_confirmation,
                })
            }
        })
    }

    if (isName?.length > 0) {
        alert("Вы зарегистрированы, авторизуйтесь...")
        return <Navigate to={"/login"}/>
    }

        return (
            <div className={"Registrtion"}>
                <h1>Регистрация</h1>
                <div className={"Authorization"}>
                    <input onChange={(e) => setName(e.target.value)} type="text" placeholder={"Name"}/>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder={"Email"}/>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder={"Password"}/>
                    <input onChange={(e) => setConfirm_password(e.target.value)} type="password"
                           placeholder={"Confirm password"}/>
                    <button onClick={request}>Зарегистрироваться</button>
                </div>
            </div>
        );
};

export default Registration;