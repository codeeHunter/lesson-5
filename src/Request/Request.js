import axios from "axios";
import {
  getLoginStorage,
  saveLoginLocalStorage,
  saveRegistrationLocalStorage,
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
        saveRegistrationLocalStorage(
          name,
          email,
          password,
          password_confirmation
        );
        return response.data;
      } else {
        alert(response.data.errors);
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
        saveLoginLocalStorage(
          email,
          password,
          response.data.data.access_token,
          response.data.status
        );
        return response.data;
      } else {
        alert(response.data.errors);
      }
    });
};

export const Play = async (type_hard) => {
  axios.defaults.headers.common = {
    Authorization: `Bearer ${getLoginStorage().access_token}`,
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
    Authorization: `Bearer ${getLoginStorage().access_token}`,
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
