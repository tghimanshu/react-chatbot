import React from 'react';
import './ChatBubbleLeft.css';

/**
 * ChatBubbleLeft Component
 *
 * Displays a single chat message aligned to the left side of the chat window.
 * Typically used for incoming messages or responses from the other party.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.chat - The chat message object.
 * @param {string} props.chat.message - The text content of the message.
 * @returns {JSX.Element} The rendered left-aligned chat bubble.
 */
const ChatBubbleLeft = ({ chat }) => {
    return (
        <div className='chatBubbleLeft'>
            <div className='chat-left'>{chat.message}</div>
            <div className='clear'></div>
        </div>
    )
};

export default ChatBubbleLeft;