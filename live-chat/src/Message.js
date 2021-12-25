import './Message.css';

const Message = (props) => {
    /**
     * Get the list of received meessages and return the representing 
     * structure with the messages 
    */

    const messagesList = [];

    try{
        props.messages.forEach(message => {
            messagesList.push(
                <div className='message' id={message.id} key={message.id}>
                    <img className='message-user-avatar' src={message.avatar}/>

                    <div className='message-container'>
                        <div className='message-user-name'>
                            <p>{message.user}</p>
                        </div>
                        <div className='message-text'>
                            <p>{message.text}</p>
                        </div>
                        <div className='message-time'>
                            <p>{`${new Date(message.createdAt).getHours()}:${new Date(message.createdAt).getMinutes()}`}</p>
                        </div>
                        <div className='message-like'></div>
                    </div>
                </div>
            )
        });
    }catch{
        console.error("Unable to load the messages");
    }

    return (
        <div className='messages'>
            {messagesList}
        </div>
    )
}

export default Message;
