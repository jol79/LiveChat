import './Header.css';

const Header = (props) => {
    /**
     * Returns the Header section with the following data:
     *  1. Chat name 
     *  2. Number of users
     *  3. Number of messages
     *  4. The date of the last message
    */

    try{
        var chatName = props.chatName;        
        var usersNumber = new Array();
        var messagesNumber = props.messages.length;
        var lastMessageDate;

        console.log(props.messages);

        props.messages.forEach(message => {
            if (!lastMessageDate){
                lastMessageDate = new Date(message.createdAt);
            }else{
                if (lastMessageDate < new Date(message.createdAt)){
                    lastMessageDate = new Date(message.createdAt)
                }
            }

            if (!usersNumber.includes(message.userId)){
                usersNumber.push(message.userId);
            }
        });
        usersNumber = usersNumber.length;

    }catch{
        console.error("Unable to process the header");
    }

    return (
        <section className='header'>
            <div className='header-title'>
                <p>
                    {chatName}
                </p>
            </div>
            <div className='header-users-count'>
                <p>
                    {usersNumber} participants
                </p>
            </div>
            <div className='header-messages-count'>
                <p>
                    {messagesNumber} messages
                </p>
            </div>
            <div className='header-last-message-date'>
                <p>
                    last message {`${lastMessageDate.toLocaleDateString("ru-RU")} ${lastMessageDate.toLocaleTimeString("ru-RU")}`}
                </p>
            </div>
        </section>
    )
}

export default Header;
