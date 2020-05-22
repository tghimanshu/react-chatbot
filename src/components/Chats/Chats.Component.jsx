import React from 'react';
import ChatBubbleLeft from '../ChatBubbleLeft/ChatBubbleLeft.Component'
import ChatBubbleRight from '../ChatBubbleRight/ChatBubbleRight.Component'
import './Chats.css';


const Chats = ({ chats }) => {
    // console.log(chats[0]);
    return (
        <div className='chats'>
            {
                chats.map((chat, i) => {
                    if(chat.side === 'left'){
                        return <ChatBubbleLeft key={chat.id} chat={chat} />
                    }
                    if(chat.side === 'right'){
                        return <ChatBubbleRight key={chat.id} chat={chat} />
                    }
                    return '';
                })
            }   
        </div>
    )
};
export default Chats;