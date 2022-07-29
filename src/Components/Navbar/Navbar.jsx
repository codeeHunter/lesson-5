import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const isAuth = useSelector((state) => state.Login.isAuth);
  const isReg = useSelector((state) => state.Registration);

  return (
    <div className={"Navbar"}>
      <NavLink to={"/"} className={isReg.name !== undefined ? "disabled" : ""}>
        Регистрация
      </NavLink>
      <NavLink to={"login"} className={!isAuth ? "" : "disabled"}>
        Логин
      </NavLink>
      <NavLink to={"game"} className={isAuth ? "" : "disabled"}>
        Игра
      </NavLink>
      <NavLink to={"profile"} className={isAuth ? "" : "disabled"}>
        Профиль
      </NavLink>
    </div>
  );
};

export default Navbar;
