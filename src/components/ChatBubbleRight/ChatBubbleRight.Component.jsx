import React from 'react';
import './ChatBubbleRight.css';

/**
 * ChatBubbleRight Component
 *
 * Displays a single chat message aligned to the right side of the chat window.
 * Typically used for outgoing messages sent by the user.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.chat - The chat message object.
 * @param {string} props.chat.message - The text content of the message.
 * @returns {JSX.Element} The rendered right-aligned chat bubble.
 */
const ChatBubbleRight = ({ chat }) => {
    return (
        <div className='chatBubbleRight'>
            <div className='chat-right'>{chat.message}</div>
            <div className='clear'></div>
        </div>
    )
};

export default ChatBubbleRight;