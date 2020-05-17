import { INPUT_DATA_DONASI } from '../Action/DonateAction'

const initialState = {
    data: []
}

const donate = (state = initialState, action) => {
    console.log("test")
    switch(action.type){
        case INPUT_DATA_DONASI:
            return{
                donateData: action.payload
            }
        default:
            return state;
    }
}

export default donate;