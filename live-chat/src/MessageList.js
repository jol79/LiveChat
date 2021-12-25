import './MessageList.css';
import Message from './Message';
import { useContext } from 'react';
import { MessagesContext } from './Chat';

const MessageList = () => {
    /**
     * Takes list of the messages andr returns container with generated
     * messages structure
    */     
   
    const [messages, setMessages] = useContext(MessagesContext);

    const messagesList = [];

    if (messages){
        messages.forEach(message => {
            messagesList.push(
                <Message messageObject={message} key={message.id}/>
            )
        });
    }

    return (
        <div className='message-list'>
            {messagesList}
        </div>
    )
}

export default MessageList;
