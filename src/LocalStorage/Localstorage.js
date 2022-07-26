
export const saveLocalStorage = (name, email, password, password_confirmation) => {
    const registration = {
        name: name,
        email: email,
        password: password,
        password_confirmation: password_confirmation
    }

    const login = {
        email: name,
        password: email,
        access_token: password,
    }

    if(registration.password_confirmation != null && registration.name != null) {
        localStorage.setItem("registration", JSON.stringify(registration))
    } else {
        localStorage.setItem("login", JSON.stringify(login))
    }
}

export const getLocalStorage = () => {
    return localStorage.getItem("login")
        ? JSON.parse(localStorage.getItem("login"))
        : [];
}