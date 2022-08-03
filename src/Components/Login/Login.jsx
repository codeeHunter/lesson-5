import React from "react";
import { Auth } from "../../Request/Request";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuthStorage } from "../../LocalStorage/Localstorage";
import { useInput } from "../../Hooks/useInput";

const Login = () => {
  const email = useInput("", { isEmpty: true, isEmail: true });
  const password = useInput("", { isEmpty: true, minLength: 8 });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = () => {
    Auth(email.value, password.value, "").then((response) => {
      if (response?.status) {
        dispatch({
          type: "Login",
          access_token: getAuthStorage().token,
        });
        return navigate("/game");
      } else {
        alert("Возникла какая-то ошибка");
      }
    });
  };

  return (
    <div className={"Login"}>
      <h1>Логин</h1>
      <div className={"Authorization"}>
        {email.isDirty && email.isEmpty && (
          <span className="Valid">Email не может быть пустым</span>
        )}
        {email.isDirty && email.emailError && (
          <span className="Valid">Неправильно введен email</span>
        )}
        <input
          value={email.value}
          onChange={(e) => email.onChange(e)}
          onBlur={(e) => email.onBlur(e)}
          type="email"
          placeholder={"Email"}
        />
        {password.isDirty && password.isEmpty && (
          <span className="Valid">Пароль не может быть пустым</span>
        )}
        {password.isDirty && password.minLength && (
          <span className="Valid">Минимальная длина пароля 8</span>
        )}
        <input
          value={password.value}
          onBlur={(e) => password.onBlur(e)}
          onChange={(e) => password.onChange(e)}
          type="password"
          placeholder={"Password"}
        />
        <button
          disabled={!password.input || email.isEmpty || email.emailError}
          onClick={login}
        >
          Авторизоваться
        </button>
      </div>
    </div>
  );
};

export default Login;
