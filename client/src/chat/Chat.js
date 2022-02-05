import React, { useEffect, useState } from 'react';
import Header from '../header/Header';
import MessageList from '../message/MessageList';
import MessageInput from '../message/MessageInput';
import './Chat.css';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const MessagesContext = React.createContext();

const Chat = () => {
    /**
     * Get the data from the link and render it on the page
     * using components specified in the reqs
    */

    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const url = "https://edikdolynskyi.github.io/react_sources/messages.json";
    const userAuthorized = useSelector(state => state.logged);

    useEffect(() => {
        const fetchMessages = async () => {
            const response = await fetch(url)
            const data = await response.json();
            setMessages(data);
            setIsLoading(false);
        };
        fetchMessages();
    }, []);

    if (isLoading){
        return <>Loading...</>;
    }

    console.log("ON THE CHAT PAGE, userAuth=", userAuthorized);
    if (userAuthorized === false){
        return (
            <Navigate to="/login"/>
        )
    }
    return (
        <MessagesContext.Provider value={[messages, setMessages]}>
            <div className='chat'>
                <Header chatName={url} />
                <MessageList />
                <MessageInput />
            </div>
        </MessagesContext.Provider>
    )
}

export default Chat;
