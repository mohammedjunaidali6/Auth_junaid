import { SIGNUP, LOGIN, LOGOUT } from "../constants";

export default (state = {authData: null},action)=>{
    switch(action.type){
        case SIGNUP:
            console.log(action?.data);
            return {
                ...state,
                authData: action?.data
            }
         case LOGIN:
             console.log(action?.data);
            return {
                 ...state,
                 authData: action?.data
            }
        case LOGOUT:
             localStorage.clear()
            return {
                 ...state,
             }
         default:
             return {
                   ...state,
             }
    }
};