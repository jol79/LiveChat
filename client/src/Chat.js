import React, { Component, useEffect, useState } from 'react';
import Header from './header/Header';
import MessageList from './message/MessageList';
import MessageInput from './message/MessageInput';
import './Chat.css';

export const MessagesContext = React.createContext();

const Chat = (props) => {
    /**
     * Get the data from the link and render it on the page
     * using components specified in the reqs
    */

    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
                <MessageList />
                <MessageInput />
            </div>
        </MessagesContext.Provider>
    )
}

export default Chat;
