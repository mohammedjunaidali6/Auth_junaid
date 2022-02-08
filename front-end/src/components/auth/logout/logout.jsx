import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../../../redux/actions/auth'

function Logout(){
    
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(logout(history))
    }
    return(
        <>
            <div className="card">
                   <div>
                       <button
                         type="submit" 
                         className="signup-button" onClick={handleSubmit}
                        >
                          Logout
                        </button>
                   </div>
            </div>
        </>
    )
}

export default Logout;