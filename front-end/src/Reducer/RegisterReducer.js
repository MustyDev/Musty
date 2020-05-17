import { MUSISI_REGISTER } from '../Action/RegisterAction'

const initialState = {
    data: [],
    registerData: [],
}

const musisi = (state = initialState, action) => {
    console.log("test")
    switch(action.type){
        case MUSISI_REGISTER:
            return{
                registerData: action.payload,
            }
        default:
            return state
    }
}

export default musisi