import './Header.css';
import { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Header = () => {
    /**
     * Returns the Header section with the following data:
     *  1. Chat name 
     *  2. Number of users
     *  3. Number of messages
     *  4. The date of the last message
    */

    const messages = useSelector(state => state.chat.messages);
    const chatName = useSelector(state => state.chat.chatName);
    const usersNumber = useSelector(state => state.chat.participantsNumber);
    const messagesNumber = useSelector(state => state.chat.messages.length);

    console.log("Received messages: ", messages);

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
        </section>
    )
}

export default Header;
