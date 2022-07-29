import React, { useState } from "react";
import { Auth } from "../../Request/Request";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getLoginStorage } from "../../LocalStorage/Localstorage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.Login.isAuth);

  const login = () => {
    Auth(email, password, "").then((response) => {
      if (response?.status) {
        dispatch({
          type: "Login",
          email: getLoginStorage().email,
          password: getLoginStorage().password,
          access_token: getLoginStorage().access_token,
          isAuth: getLoginStorage().isAuth,
        });
      } else {
        alert("Возникла какая-то ошибка");
      }
    });
  };

  if (isAuth) {
    return <Navigate to={"/game"} />;
  }

  return (
    <div className={"Login"}>
      <h1>Логин</h1>
      <div className={"Authorization"}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder={"Email"}
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder={"Password"}
        />
        <button onClick={login}>Авторизоваться</button>
      </div>
    </div>
  );
};

export default Login;
