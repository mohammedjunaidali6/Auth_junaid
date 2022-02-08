import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { emailOtpVerify } from '../../../../redux/actions/verify';

function Signup(){

    const initialState = { emailOtp : ""}
    const [formData, setFormData] = useState(initialState)

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(emailOtpVerify(formData.emailOtp,history))
    }
    return(
        <>
            <div className="card">
                <h4>Please enter the email OTP!</h4>
               <form onSubmit={handleSubmit}>
                   <div>
                        <input 
                            name="emailOtp"
                            type="text" 
                            placeholder="Enter the 6 digit OTP"
                            className="input-group"
                            value={formData.emailOtp}
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

export default Signup;