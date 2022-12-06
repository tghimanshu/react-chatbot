import React from 'react';
import './ChatBubbleRight.css';

const ChatBubbleRight = ({ chat }) => {
    return (
        <div className='chatBubbleRight'>
            <div className='chat-right'>{chat.message}</div>
            <div className='clear'></div>
        </div>
    )
};

export default ChatBubbleRight;