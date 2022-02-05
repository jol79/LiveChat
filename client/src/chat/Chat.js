import React, { Component, useEffect, useState } from 'react';
import Header from '../header/Header';
import MessageList from '../message/MessageList';
import MessageInput from '../message/MessageInput';
import './Chat.css';
import { useSelector } from 'react-redux';

export const MessagesContext = React.createContext();

const Chat = (props) => {
    /**
     * Get the data from the link and render it on the page
     * using components specified in the reqs
    */

    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const isLogged = useSelector(state => state.logged);
    console.log(isLogged);

    useEffect(() => {
        const fetchMessages = async () => {
            const response = await fetch(props.url)
            const data = await response.json();
            setMessages(data);
            setIsLoading(false);
        };
        fetchMessages();
    }, []);

    if (isLoading){
        return <>Loading...</>;
    }


    return (
        <MessagesContext.Provider value={[messages, setMessages]}>
            <div className='chat'>
                <Header chatName={props.url} />
                <h1>User: { isLogged }</h1>
                <MessageList />
                <MessageInput />
            </div>
        </MessagesContext.Provider>
    )
}

export default Chat;
