import React from 'react';
import './ChatBubbleLeft.css';

const ChatBubbleLeft = ({ chat }) => {
    return (
        <div className='chatBubbleLeft'>
            <div className='chat-left'>{chat.message}</div>
            <div className='clear'></div>
        </div>
    )
};

export default ChatBubbleLeft;