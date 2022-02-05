import './Login.css';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { Navigate } from 'react-router-dom';

const Login = () => {
    const userAuthorized = useSelector(state => state.logged);

    if (userAuthorized === true){
        return (
            <Navigate to="/chat"/>
        )
    }
    return (
        <div className='login'>
            <h1>Sign in</h1>
            <form>
                <label>Email</label>
                <input placeholder='email' id='login-email'/>
                <label>Password</label>
                <input placeholder='password' id='login-password'/>
                <button>Sign in</button>
            </form>
        </div>
    )
}

export default Login;
