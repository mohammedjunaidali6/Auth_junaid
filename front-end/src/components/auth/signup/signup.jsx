import React,{ useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signup } from '../../../redux/actions/auth';
import { emailOtp } from '../../../redux/actions/verify';
import './signup.css'

function Signup(){

    const initialState = { email : "" ,  password : "", phone: "", fullName: ""}
    const [formData, setFormData] = useState(initialState)

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signup(formData, history))
        .then(res=>{
            console.log(res);
            localStorage.setItem("email", formData.email);
            localStorage.setItem("phone", formData.phone);
            dispatch(emailOtp());
        })
    }
    return(
        <>
            <div className="card">
                <h4>Welcome to my first Signup!</h4>
               <form onSubmit={handleSubmit}>
                   <div>
                        <input 
                            name="email"
                            type="email" 
                            placeholder="Enter your e-mail"
                            className="input-group"
                            value={formData.email}
                            onChange={(e)=>{
                                setFormData({
                                    ...formData,
                                    [e.target.name] : e.target.value
                                })
                            }}
                        />
                   </div>
                   <div>
                        <input 
                            name="phone"
                            type="phone" 
                            placeholder="Enter your Phone Number (with country code)"
                            className="input-group"
                            value={formData.phone}
                            onChange={(e)=>{
                                setFormData({
                                    ...formData,
                                    [e.target.name] : e.target.value
                                })
                            }}
                        />
                   </div>
                   <div>
                        <input 
                            name="fullName"
                            type="text" 
                            placeholder="Enter your fullName"
                            className="input-group"
                            value={formData.fullName}
                            onChange={(e)=>{
                                setFormData({
                                    ...formData,
                                    [e.target.name] : e.target.value
                                })
                            }}
                        />
                   </div>
                   <div>
                        <input 
                            name="password"
                            type="password" 
                            placeholder="Enter your password"
                            className="input-group"
                            value={formData.password}
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
                           Signup
                        </button>
                   </div>
                </form> 
            </div>
        </>
    )
}

export default Signup;