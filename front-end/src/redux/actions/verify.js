import * as api from "../api";
import { EMAIL_OTP, EMAIL_OTP_VERIFY, PHONE_OTP, PHONE_OTP_VERIFY } from "../constants";

export const emailOtp = () => async (dispatch)=>{
    try {
        const email = localStorage.getItem('email')
        console.log(email)
        const { data } = await api.emailOtp(email);
        dispatch({type: EMAIL_OTP, data});
    } catch (e){
        alert(e?.response?.data?.msg);
      }
}

export const emailOtpVerify = (otp, history) => async (dispatch)=>{
    try {
        const email = localStorage.getItem('email')
        const { data } = await api.emailOtpVerify(email, otp);
        dispatch({type: EMAIL_OTP_VERIFY, data});
        const phone = localStorage.getItem('phone')
         await api.phoneOtp(phone);
        history.push('/verify/phone')
        return data;
    } catch (e){
        alert(e?.response?.data?.msg);
      }
}

export const phoneOtp = () => async (dispatch)=>{
    try {
        const phone = localStorage.getItem('phone')
        const { data } = await api.phoneOtp(phone);
        dispatch({type: PHONE_OTP, data});
        return data;
    } catch (e){
        alert(e?.response?.data?.msg);
      }
}

export const phoneOtpVerify = (otp) => async (dispatch)=>{
    try {
        const phone = localStorage.getItem('phone')
        const email = localStorage.getItem('email')
        const formData = {
            verificationCode: otp
        }
        const { data } = await api.phoneOtpVerify(formData, email, phone);
        dispatch({type: PHONE_OTP_VERIFY, data});
        return data;
    } catch (e){
        alert(e?.response?.data?.msg);
      }
}