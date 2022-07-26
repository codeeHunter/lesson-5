import React, {useState} from 'react';
import {Registration_request} from "../../Request/Request";

const Registration = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm_password, setConfirm_password] = useState('')

    const request = () => {
        Registration_request(name, email, password, confirm_password)
    }

    return (
        <div className={"Registrtion"}>
            <h1>Регистрация</h1>
            <div className={"Authorization"}>
                <input onChange={(e) => setName(e.target.value)} type="text" placeholder={"Name"} />
                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder={"Email"}/>
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder={"Password"}/>
                <input onChange={(e) => setConfirm_password(e.target.value)} type="password" placeholder={"Confirm password"}/>
                <button onClick={request}>Зарегистрироваться</button>
            </div>
        </div>
    );
};

export default Registration;