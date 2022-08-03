import axios from "axios";
import {
  getAuthStorage,
  saveAuthLocalStorage,
} from "../LocalStorage/Localstorage";

export const Registration_req = async (
  name,
  email,
  password,
  password_confirmation
) => {
  return await axios
    .post("https://internsapi.public.osora.ru/api/auth/signup", {
      name: name,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
    })
    .then((response) => {
      if (response.data.status) {
        return response.data;
      } else {
        return response.data;
      }
    });
};

export const Auth = async (email, password) => {
  return await axios
    .post("https://internsapi.public.osora.ru/api/auth/login", {
      email: email,
      password: password,
    })
    .then((response) => {
      if (response.data.status) {
        saveAuthLocalStorage(response.data.data.access_token);
        return response.data;
      } else {
        alert(response.data.errors);
      }
    });
};

export const Play = async (type_hard) => {
  axios.defaults.headers.common = {
    Authorization: `Bearer ${getAuthStorage().token}`,
  };
  return await axios
    .post("https://internsapi.public.osora.ru/api/game/play", {
      type_hard: type_hard,
      type: 1,
    })
    .then((response) => {
      if (response.data.status) {
        return response.data;
      } else {
        alert(response.data.errors);
      }
    });
};

export const Answer = async (answer, type_hard) => {
  axios.defaults.headers.common = {
    Authorization: `Bearer ${getAuthStorage().token}`,
  };
  return await axios
    .post("https://internsapi.public.osora.ru/api/game/play", {
      answer: answer,
      type_hard: type_hard,
      type: 2,
    })
    .then((response) => {
      if (response.data.status) {
        return response.data;
      } else {
        alert(response.data.errors);
      }
    });
};
