import  { combineReducers } from 'redux';

import blogsReducer from "./blogs"
import authReducer from "./auth"
import verifyReducer from "./verify"

const rootReducer = combineReducers({
    blogsReducer,
    authReducer,
    verifyReducer
})

export default rootReducer;