import './Main.css';
import Login from '../login/Login';
import Chat from '../chat/Chat';
import { useSelector } from 'react-redux';
import React from 'react';

const Main = () => {
    const userAuthorized = useSelector(state => state.logged);
    console.log("User auth status: ", userAuthorized);

    if (userAuthorized !== false){
        return(
            <Chat url="https://edikdolynskyi.github.io/react_sources/messages.json"/>
        )
    }
    return(
        <Login />
    )
}

export default Main;
