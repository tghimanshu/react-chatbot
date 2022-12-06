import React from 'react';
import ChatBubbleLeft from '../ChatBubbleLeft/ChatBubbleLeft.Component'
import ChatBubbleRight from '../ChatBubbleRight/ChatBubbleRight.Component'
import './Chats.css';


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