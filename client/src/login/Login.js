import './Login.css';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';

const Login = () => {
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
