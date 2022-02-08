import React from "react";
import { useHistory } from "react-router-dom";

function Home() {
    const history = useHistory();
    const token = localStorage.getItem("token");
    return (
        <>
            <div className="card d-flex flex-row justify-content-between">
                {token ? (
                    <button
                        type="button"
                        className="btn btn-secondary col-5"
                        onClick={() => {
                        localStorage.clear();
                        alert("Your logged out now");
                         history.push('/login');
                        }}>
                         Logout
                    </button>
                ) : (
                    <button
                        type="button"
                        className="btn btn-secondary col-5"
                        onClick={() => {
                        history.push('/login');
                        }}>
                         Login
                    </button>  
                )}
                {token ? (
                    <button
                        type="button"
                        className="btn btn-secondary col-5"
                        onClick={() => {
                        history.push('/blogs');
                        }}>
                         Blogs
                    </button>
                ) : (
                    <button
                        type="button"
                        className="btn btn-secondary col-5"
                        onClick={() => {
                        history.push('/signup');
                        }}>
                         Signup
                    </button>  
                )}               
        </div>
        </>
    )
}

export default Home;



