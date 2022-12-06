import React from 'react';
import './Inputs.css';

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