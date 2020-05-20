import React from 'react';
import Chats from '../Chats/Chats.Component'
import Inputs from '../Inputs/Inputs.Component'
import './ChatRoom.css'

const ChatRoom = () => {
    return (
        <div className='chatRoom'>
            <Chats></Chats>
            <Inputs></Inputs>
        </div>
    )
};
export default ChatRoom;