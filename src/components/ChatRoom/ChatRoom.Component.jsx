import React from 'react';
import Chats from '../Chats/Chats.Component'
import Inputs from '../Inputs/Inputs.Component'
import './ChatRoom.css'
import chats from '../../chats/chats.json'

/**
 * ChatRoom Component
 *
 * A class-based component that manages the main chat interface.
 * It handles the state of chat messages, input field, and interactions
 * such as sending messages and receiving responses.
 *
 * @extends React.Component
 */
class ChatRoom extends React.Component {
    /**
     * Creates an instance of ChatRoom.
     * Initializes state with chat history and an empty message string.
     */
    constructor(){
        super()
        /**
         * State object for the component.
         * @property {Array<Object>} chats - Array of chat message objects.
         * @property {string} msg - The current value of the message input.
         */
        this.state = {
            chats: [...chats],
            msg: ''
        };
        this.chatsElem = null;
    }
    
    /**
     * Adjusts the scroll position of the chat container to show the latest message.
     *
     * @param {HTMLElement} el - The DOM element of the chats container.
     */
    getHeight = (el) => {
        if(!el){
            return;
        }
        // el.scrollInT oView({behaviour:'smooth'});
        el.scrollTop=el.scrollHeight;
        console.log(el);
    }

    /**
     * Handles changes in the input field.
     * Updates the component state with the new input value.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} e - The change event object.
     */
    handleChange = (e) => {
        this.setState({msg:e.target.value});
    }

    /**
     * Handles the response logic from the backend (mocked).
     * Fetches a response and adds it to the chat list.
     *
     * @param {string} msg - The message sent by the user.
     */
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


    /**
     * Handles the form submission for sending a message.
     * Adds the user's message to the chat list and triggers the response handler.
     *
     * @param {React.FormEvent<HTMLFormElement>} e - The form submission event.
     */
    handleSubmit = (e) => {
        e.preventDefault();
        let lastId = chats.length;
        // console.log(lastId);
        this.setState({chats:chats.push({
            "id": lastId+1,
            "side":"right",
            "time":"12:10:10",
            "date":"12-10-2001",
            "message":this.state.msg
        })});
        // this.setState({ "msg": "" });
        this.handleResponse(this.state.msg);
        this.setState({msg: ''});
        // this.getHeight
    }

    /**
     * Renders the ChatRoom component.
     * Includes the list of chats and the input area.
     *
     * @returns {JSX.Element} The rendered ChatRoom interface.
     */
    render(){
        return (
            <div className='chatRoom'>
                <Chats chats={chats} getHeight={this.getHeight} />
                <Inputs msgValue={this.state.msg} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
            </div>
        )
    }
};
export default ChatRoom;