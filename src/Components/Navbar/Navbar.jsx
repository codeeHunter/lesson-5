import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {


    return (
        <div className={"Navbar"}>
            <NavLink to={"/"}>Регистрация</NavLink>
            <NavLink to={"login"}>Логин</NavLink>
            <NavLink to={"profile"}>Профиль</NavLink>
            <NavLink to={"game"}>Игра</NavLink>
        </div>
    );
};

export default Navbar;