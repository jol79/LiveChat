import React, { useEffect, useState } from 'react';
import Header from '../header/Header';
import MessageList from '../message/MessageList';
import MessageInput from '../message/MessageInput';
import './Chat.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetch_messages } from '../store/messages/actions';
import { Navigate } from 'react-router-dom';

export const MessagesContext = React.createContext();

const Chat = () => {
    /**
     * Get the data from the link and render it on the page
     * using components specified in the reqs
    */

    const userAuthorized = useSelector(state => state.logged);
    const dispatch = useDispatch();
    dispatch(fetch_messages());

    // useEffect(() => {
    //     const fetchMessages = async () => {
    //         const response = await fetch(url)
    //         const data = await response.json();
    //         setMessages(data);
    //         setIsLoading(false);
    //     };
    //     fetchMessages();
    // }, []);

    // if (isLoading){
    //     return <>Loading...</>;
    // }

    if (userAuthorized === false){
        return (
            <Navigate to="/login"/>
        )
    }

    return (
        <div className='chat'>
            <Header/>
            <MessageList/>
            {/* <MessageInput/> */}
        </div>
    )
}

export default Chat;
