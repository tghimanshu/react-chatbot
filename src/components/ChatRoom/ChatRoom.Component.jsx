import React from 'react';
import Chats from '../Chats/Chats.Component'
import Inputs from '../Inputs/Inputs.Component'
import './ChatRoom.css'
import chats from '../../chats/chats.json'

class ChatRoom extends React.Component {
    constructor(){
        super()
        this.state = {
            chats: [...chats],
            msg: ''
        };
    }
    
    handleChange = (e) => {
        this.setState({msg:e.target.value}, () => console.log(this.state));
    }

    handleResponse = (msg) => {
        fetch('/response/'+msg)
        .then(res => res.text())
        .then(data => {
            let lastId = chats.length;
            this.setState({chats:chats.push({
                "id": lastId+1,
                "side":"left",
                "time":"12:10:10",
                "date":"12-10-2001",
                "message":data
            })});
        });//end of promise

    }
    /* handleResponse = (msg) => {
        fetch('/response/'+msg)
        .then(res => res.json())
        .then(data => {
            let lastId = chats.length;
            console.log(lastId);
            this.setState({chats:chats.push({
                "id": lastId+1,
                "side":"left",
                "time":"12:10:10",
                "date":"12-10-2001",
                "message":data.punchline
            })});
        });
        

    } */

    handleSubmit = (e) => {
        e.preventDefault();
        let lastId = chats.length;
        console.log(lastId);
        this.setState({chats:chats.push({
            "id": lastId+1,
            "side":"right",
            "time":"12:10:10",
            "date":"12-10-2001",
            "message":this.state.msg
        })});
        this.handleResponse(this.state.msg);
    }

    render(){
        return (
            <div className='chatRoom'>
                <Chats chats={chats} />
                <Inputs handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
            </div>
        )
    }
};
export default ChatRoom;