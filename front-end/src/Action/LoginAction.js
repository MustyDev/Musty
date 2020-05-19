import axios from 'axios'

import jwt from 'jwt-decode'
const queryString = require('query-string')

export const LOGIN = "LOGIN"

export const setLogin = (data) => {
    return {
        type: LOGIN,
        payload: data,
    }
}

export const login = (values, history, event) => (dispatch) => {
    event.preventDefault()

  

    const Email = values.Email
    const Password = values.Password

    return axios
        .post(
            "https://musty-api.herokuapp.com/masuk",
            queryString.stringify({Email, Password})
        )
        .then((response) => {
          

            if(response.data.token !== undefined){
                console.log("token ada")
                //set local
                localStorage.setItem("token", response.data.token)
                //decode token
                let decode = jwt(response.data.token)
                console.log("decode", decode)

                dispatch(setLogin(response.data))
                history.push("/")
            }
        })
        .catch((error) => {
            console.log(error)
        })
}