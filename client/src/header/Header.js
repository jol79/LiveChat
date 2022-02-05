import './Header.css';
import { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Header = () => {
    const chatName = useSelector(state => state.chat.chatName);
    const usersNumber = useSelector(state => state.chat.participants);
    const messagesNumber = useSelector(state => state.chat.messages.length);

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
