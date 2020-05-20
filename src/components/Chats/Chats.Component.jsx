import React from 'react';
import ChatBubbleLeft from '../ChatBubbleLeft/ChatBubbleLeft.Component'
import ChatBubbleRight from '../ChatBubbleRight/ChatBubbleRight.Component'
import './Chats.css';
const Chats = () => {
    return (
        <div className='chats'>
            <ChatBubbleRight />
            <ChatBubbleLeft />
            <ChatBubbleRight />
            <ChatBubbleLeft />
            <ChatBubbleRight />
            <ChatBubbleRight />
            <ChatBubbleLeft />
            <ChatBubbleRight />
            <ChatBubbleLeft />
            <ChatBubbleRight />
            <ChatBubbleRight />
            <ChatBubbleLeft />
            <ChatBubbleRight />
            <ChatBubbleLeft />
            <ChatBubbleRight />
            <ChatBubbleRight />
            <ChatBubbleLeft />
        </div>
    )
};
export default Chats;