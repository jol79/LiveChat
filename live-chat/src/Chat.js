import React, { Component, useEffect, useState } from 'react';
import './Chat.css';

const Chat = (props) => {
    /**
     * Get the data from the link and render it on the page
     * using components specified in the reqs
    */

    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const messagesList = [];

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

    messages.forEach(message => {
        messagesList.push(
            <div key={message.id}>
                <p> <strong>Username: </strong>{message.user}<br/><strong>Text: </strong>{message.text}</p>
            </div>
        )
    })
    return (
        <div>
            <h1>Messages</h1>
            <div className="container-messages">
                {messagesList}
            </div>
        </div>
    )
}

export default Chat;
