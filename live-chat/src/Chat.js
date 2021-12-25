import React, { Component, useEffect, useState } from 'react';
import Header from './Header'
import './Chat.css';

const Chat = (props) => {
    /**
     * Get the data from the link and render it on the page
     * using components specified in the reqs
    */

    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMessages = async () => {
            const data = await fetch(
                props.url
            ).then(response => response.json());
            setMessages(data);
            setIsLoading(false);
        };
        fetchMessages();
    }, []);

    if (isLoading){
        return <>Loading...</>;
    }

    return (
        <Header messages={messages} chatName={props.url}/>
    )
}

export default Chat;
