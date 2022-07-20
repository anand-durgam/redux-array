import {SET_USER_DATA} from './Action'

const initialState ={
    userData : [],
}



const Reducer = (state = initialState, action) => {
    
        switch (action.type) {
            case SET_USER_DATA:
                return {...state, userData: [...state.userData , action.payload]};
            default:
                return state;
        }
}

export default Reducer;