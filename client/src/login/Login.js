import './Login.css';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { sign_in } from '../store/user/actions';

const Login = () => {
    const userAuthorized = useSelector(state => state.logged);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleInput = event => {
        if (event.target.id === 'login-password'){
            setPassword(event.target.value);
        } else if (event.target.id === 'login-email'){
            setEmail(event.target.value);
        }
    };

    const authorize = event => {
        event.preventDefault();
    
        fetch('http://127.0.0.1:8000/login', {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password
            }),
        })
            .then(response => {return response.json()})
            .then(data => {
                if (data.authorized === true){              
                    dispatch(sign_in());
                    // navigate('/');
                } else if (data.authorized === false){
                    alert("Wrong credentials!");
                }
            });
    }

    if (userAuthorized === true){
        return (
            <Navigate to="/"/>
        )
    }
    return (
        <div className='login'>
            <h1>Sign in</h1>
            <form id='signInForm' onSubmit={authorize}>
                <label>Email</label>
                <input onChange={handleInput} id='login-email' placeholder='email' required/>
                <label>Password</label>
                <input onChange={handleInput} id='login-password' placeholder='password' required/>
                <button>Sign in</button>
            </form>
        </div>
    )
}

export default Login;
