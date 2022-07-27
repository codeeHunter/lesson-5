import {getLoginStorage} from "../../LocalStorage/Localstorage";

const defaultState = {
    email: getLoginStorage()?.email,
    password: getLoginStorage()?.password,
    access_token: getLoginStorage()?.access_token,
    isAuth: getLoginStorage()?.isAuth,
}

export const Login = (state = defaultState, action) => {
    switch(action.type) {
        case "Login":
            return {
                ...state,
                email: action.email,
                password: action.password,
                access_token: action.access_token,
                isAuth: action.isAuth
            }
        default:
            return state
    }
}