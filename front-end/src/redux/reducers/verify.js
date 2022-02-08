import { EMAIL_OTP, EMAIL_OTP_VERIFY, PHONE_OTP, PHONE_OTP_VERIFY } from "../constants";

export default (state = {verifyData: null},action)=>{

    switch(action.type){
        case EMAIL_OTP:
            console.log(action?.data);
            return {
                ...state,
                verifyData: action?.data
            }
         case EMAIL_OTP_VERIFY:
            console.log(action?.data);
             return {
                  ...state,
                 verifyData: action?.data
             }
         case PHONE_OTP:
             console.log(action?.data);
             return {
                ...state,
                 verifyData: action?.data
              }
         case PHONE_OTP_VERIFY:
             console.log(action?.data);
             return {
                 ...state,
                 verifyData: action?.data
             }
         default:
            return {
                 ...state
             }
    }
};