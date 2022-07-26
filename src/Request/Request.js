import axios from "axios";
import {getLocalStorage, saveLocalStorage} from "../LocalStorage/Localstorage";


export const Registration_request = async (name, email, password, password_confirmation) => {
    return await axios.post("https://internsapi.public.osora.ru/api/auth/signup", {
        name: name, email: email, password: password, password_confirmation: password_confirmation
    })
        .then(response => {
            if (response.data.status) {
                saveLocalStorage(name, email, password, password_confirmation)
            }
        })
}


export const Auth_request = async (email, password) => {
    return await axios.post("https://internsapi.public.osora.ru/api/auth/login",
        {
            password: password, email: email,
        })
        .then(response => {
            if (response.data.status) {
                saveLocalStorage(email, password, response.data.data.access_token)
            } else {
                console.error(response)
            }
        })
}

export const Play = async (type_hard) => {
    axios.defaults.headers.common = {'Authorization': `Bearer ${getLocalStorage().access_token}`}
    return await axios.post("https://internsapi.public.osora.ru/api/game/play",
        {
            type_hard: type_hard, type: 1
        })
        .then(response => {
            if (response.data.status) {
                return response.data
            } else {
                console.log(response)
            }
        })
}