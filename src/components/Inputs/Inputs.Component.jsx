import React from 'react';
import './Inputs.css';

const Inputs = () => {
    return (
        <div className='inputs'>
            <input type="text" id="message" placeholder="Type A Message" />
            <button type='submit' id='sendMsg'><span role='img' aria-label='sendMsg'>🏹</span></button>
            <div className="clear"></div>
        </div>
    )
};

export default Inputs;