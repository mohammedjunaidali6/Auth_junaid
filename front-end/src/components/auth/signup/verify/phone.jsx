import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { phoneOtpVerify } from '../../../../redux/actions/verify';

function PhoneVerify(){

    const initialState = { phoneOtp : ""}
    const [formData, setFormData] = useState(initialState)

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(phoneOtpVerify(formData.phoneOtp))
    .then((res)=>{
        if (res) {
            history.push('/');
        }
    })
    }
    return(
        <>
            <div className="card">
                <h4>Please enter the phone OTP!</h4>
               <form onSubmit={handleSubmit}>
                   <div>
                        <input 
                            name="phoneOtp"
                            type="text" 
                            placeholder="Enter the 6 digit OTP"
                            className="input-group"
                            value={formData.phoneOtp}
                            onChange={(e)=>{
                                setFormData({
                                    ...formData,
                                    [e.target.name] : e.target.value
                                })
                            }}
                        />
                   </div>
                   <div>
                       <button
                         type="submit"
                         className="signup-button"
                       >
                           Next
                        </button>
                   </div>
                </form> 
            </div>
        </>
    )
}

export default PhoneVerify;