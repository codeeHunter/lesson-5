import { getAuthStorage } from "../../LocalStorage/Localstorage";

const defaultState = {
  access_token: getAuthStorage()?.token,
};

export const Login = (state = defaultState, action) => {
  switch (action.type) {
    case "Login":
      return {
        ...state,
        access_token: action.access_token,
      };
    default:
      return state;
  }
};
