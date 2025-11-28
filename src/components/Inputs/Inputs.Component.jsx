import React from 'react';
import './Inputs.css';

/**
 * Inputs Component
 *
 * Renders the input area for the chat application, including a text input field
 * and a submit button. It handles user input and form submission.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.handleSubmit - Function to handle form submission.
 * @param {Function} props.handleChange - Function to handle input text changes.
 * @param {string} props.msgValue - The current value of the input field.
 * @returns {JSX.Element} The rendered input form.
 */
const Inputs = ({ handleSubmit, handleChange, msgValue }) => {
    return (
        <div className='inputs'>
            <form onSubmit={handleSubmit}>
                <input type="text" id="message" value={msgValue} placeholder="Type A Message" onChange={handleChange} required />
                <button type='submit' id='sendMsg' /* onClick={sendMsg} */><span role='img' aria-label='sendMsg'>🏹</span></button>
                <div className="clear"></div>
            </form>
        </div>
    )
};

export default Inputs;