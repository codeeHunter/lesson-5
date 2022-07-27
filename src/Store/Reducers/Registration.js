import {getRegistrationStorage} from "../../LocalStorage/Localstorage";

const defaultState = {
    name: getRegistrationStorage()?.name,
    email: getRegistrationStorage()?.email,
    password: getRegistrationStorage()?.password,
    password_confirmation: getRegistrationStorage()?.password_confirmation,
}

export const Registration = (state = defaultState, action) => {
    switch(action.type) {
        case "Registration":
            return {
                ...state,
                name: action.name,
                email: action.email,
                password: action.password,
                password_confirmation: action.password_confirmation
            }
        default:
            return state
    }
}