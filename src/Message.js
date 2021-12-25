import './Message.css';

const Message = ({messageObject}) => {
    /**
     * Receive message object and return message component
    */

    if (messageObject){
        const {avatar, user, text, createdAt} = messageObject
        return (
            <div className='message' id={messageObject.id} key={messageObject.id}>
                <img className='message-user-avatar' src={messageObject.avatar}/>

                <div className='message-container'>
                    <div className='message-user-name'>
                        <p>{messageObject.user}</p>
                    </div>
                    <div className='message-text'>
                        <p>{messageObject.text}</p>
                    </div>
                    <div className='message-time'>
                        <p>{`${new Date(messageObject.createdAt).getHours()}:${new Date(messageObject.createdAt).getMinutes()}`}</p>
                    </div>
                    <div className='message-like'></div>
                </div>
            </div>
        )
    }
}

export default Message;
