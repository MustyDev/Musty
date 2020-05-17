import axios from 'axios'
const queryString = require('query-string')

export const MUSISI_REGISTER = "MUSISI_REGISTER"

export const setRegisterMusisi = (data) => {
    return {
        type: MUSISI_REGISTER,
        payload: data,
    }
}

export const registerMusisi = (values, history, event) => (dispatch) => {
    event.preventDefault()

    console.log("test", values, history)

    const Username = values.Username
    const Email = values.Email
    const Phone = values.Phone
    const Password = values.Password
    const Role = values.Role

    return axios
        .post(
            "https://musty-api.herokuapp.com/users",
            queryString.stringify({
                Username,
                Email,
                Phone,
                Password,
                Role,
            })
        )
        .then((response) => {
            console.log(response)

            dispatch(setRegisterMusisi(response.data));
            history.push("/login");
        })
        .catch((error) => {
            console.log(error)
        })
}