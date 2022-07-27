export const saveRegistrationLocalStorage = (name, email, password, password_confirmation) => {
    const registration = {
        name: name,
        email: email,
        password: password,
        password_confirmation: password_confirmation
    }

    localStorage.setItem("registration", JSON.stringify(registration))

}

export const saveLoginLocalStorage = (email, password, token, isAuth) => {
    const login = {
        email: email,
        password: password,
        access_token: token,
        isAuth: isAuth,
    }
    localStorage.setItem("login", JSON.stringify(login))
}

export const getLoginStorage = () => {
    return localStorage.getItem("login")
        ? JSON.parse(localStorage.getItem("login"))
        : [];
}

export const getRegistrationStorage = () => {
    return localStorage.getItem("registration")
        ? JSON.parse(localStorage.getItem("registration"))
        : [];
}