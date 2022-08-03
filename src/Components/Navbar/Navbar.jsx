import React from "react";
import { NavLink } from "react-router-dom";
import { getAuthStorage } from "../../LocalStorage/Localstorage";

const Navbar = () => {
  const isAuth = getAuthStorage()?.token;

  return (
    <div className={"Navbar"}>
      <NavLink to={"/"}>Регистрация</NavLink>
      <NavLink to={"login"}>Логин</NavLink>
      <NavLink className={isAuth !== undefined ? "" : "disabled"} to={"game"}>
        Игра
      </NavLink>
      <NavLink
        className={isAuth !== undefined ? "" : "disabled"}
        to={"profile"}
      >
        Профиль
      </NavLink>
    </div>
  );
};

export default Navbar;
