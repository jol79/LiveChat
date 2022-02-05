import { useContext, useState } from 'react';
import { MessagesContext } from '../chat/Chat';
import './MessageInput.css';
import sendButton from '../sendButton.png';

const MessageInput = () => {
    /**
     * Renders input field and button that onClick will update the
     * context collection of the messages and new message will appear
     * on the list of messages 
    */

    const [messages2, setMessages2] = useState("");
    const [messages, setMessages] = useContext(MessagesContext);
    function handleOnChange(event){
        setMessages2(event.target.value);
    }

    return (
        <div className='message-input'>
            <input className='message-input-text' placeholder='Write a message...' onChange={handleOnChange} value={messages2}/>
            <img className='message-input-button' src={sendButton} onClick={() => setMessages(
                messages.concat(
                    [{
                        id: `${Math.random()}`,
                        userId: '1',
                        avatar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd.newsweek.com%2Fen%2Ffull%2F1501853%2Fmonkey-israel-lebanon.jpg&f=1&nofb=1",
                        user: "Master",
                        text: `${messages2}`,
                        createdAt: new Date().toISOString(),
                        editedAt: ""
                    }]
            ))}/>
        </div>
    )
}

export default MessageInput;
