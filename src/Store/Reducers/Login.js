const defaultState = {
    email: "",
    password: "",
    access_token: "",
    auth: false,
}

export const Login = (state = defaultState, action) => {
    switch(action.type) {
        case "Login":
            return {
                ...state,
                email: action.email,
                password: action.password,
                access_token: action.access_token,
                auth: action.auth
            }
        default:
            return state
    }
}