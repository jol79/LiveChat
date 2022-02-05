import './MessageList.css';
import Message from './Message';
import { useSelector, useDispatch } from 'react-redux';

const MessageList = () => {
    const messages = useSelector(state => state.chat.messages);
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
