import React from "react";
import { Registration_req } from "../../Request/Request";
import { useInput } from "../../Hooks/useInput";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const name = useInput("", { isEmpty: true, minLength: 1 });
  const email = useInput("", { isEmpty: true, isEmail: true });
  const password = useInput("", { isEmpty: true, minLength: 8 });
  const confirm_password = useInput("", { isEmpty: true, minLength: 8 });

  const navigate = useNavigate();

  const request = () => {
    Registration_req(
      name.value,
      email.value,
      password.value,
      confirm_password.value
    ).then((response) => {
      if (response?.status) {
        return navigate("/login");
      } else {
        alert(response.errors.email);
        return navigate("/login");
      }
    });
  };

  return (
    <div className={"Registrtion"}>
      <h1>Регистрация</h1>
      <div className={"Authorization"}>
        {name.isDirty && name.isEmpty && (
          <span className="Valid">Имя не может быть пустым</span>
        )}
        <input
          value={name.value}
          onBlur={(e) => name.onBlur(e)}
          name="name"
          onChange={(e) => name.onChange(e)}
          type="text"
          placeholder={"Name"}
        />
        {email.isDirty && email.isEmpty && (
          <span className="Valid">Email не может быть пустым</span>
        )}
        {email.isDirty && email.emailError && (
          <span className="Valid">Неправильно введен email</span>
        )}
        <input
          value={email.value}
          name="email"
          onBlur={(e) => email.onBlur(e)}
          onChange={(e) => email.onChange(e)}
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
          name="password"
          onBlur={(e) => password.onBlur(e)}
          onChange={(e) => password.onChange(e)}
          type="password"
          placeholder={"Password"}
        />
        {password.value !== confirm_password.value && (
          <span className="Valid">Пароли неодинаковые</span>
        )}
        <input
          value={confirm_password.value}
          name="pass_conf"
          onBlur={(e) => confirm_password.onBlur(e)}
          onChange={(e) => confirm_password.onChange(e)}
          type="password"
          placeholder={"Confirm password"}
        />
        <button
          disabled={
            !password.input ||
            !name.input ||
            password.value !== confirm_password.value ||
            email.isEmpty ||
            email.emailError
          }
          onClick={request}
        >
          Зарегистрироваться
        </button>
      </div>
    </div>
  );
};

export default Registration;
