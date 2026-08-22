import React from 'react';
import ChatBubbleLeft from '../ChatBubbleLeft/ChatBubbleLeft.Component'
import ChatBubbleRight from '../ChatBubbleRight/ChatBubbleRight.Component'
import './Chats.css';

/**
 * Chats Component
 *
 * Renders a list of chat messages. It iterates through the provided chat data
 * and renders either a left or right chat bubble based on the message source.
 *
 * @param {Object} props - The component props.
 * @param {Array<Object>} props.chats - An array of chat objects to display.
 * @param {Function} props.getHeight - A callback function to handle scroll or height adjustments.
 * @returns {JSX.Element} The rendered list of chat bubbles.
 */
const Chats = ({ chats, getHeight }) => {
    // console.log(chats[0]);
    return (
        <div className='chats' ref={el => getHeight(el)}>
            {
                chats.map((chat, i) => {
                    switch(chat.side){
                        case 'left':
                            return <ChatBubbleLeft key={chat.id} chat={chat} />
                        case 'right':
                            return <ChatBubbleRight key={chat.id} chat={chat} />;
                        default:
                            return '';
                    }
                })
            }  
        </div>
    )
};
export default Chats;