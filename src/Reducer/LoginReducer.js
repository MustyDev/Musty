import { LOGIN } from '../Action/LoginAction'

const token = localStorage.getItem("token")

const initialState = token
    ? {
        isLogged: true,
        data: [],
      }
    : {
        isLogged: false,
        data:[],
        registerData: [],
    }

const loginState = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                isLogged: true,
            }
        default:
            return state
    }
}

export default loginState