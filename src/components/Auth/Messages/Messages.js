import React from 'react';
import './Messages.css';

const Messages = (props) => {
    return (
        <div className="Messages">
            {Object.keys(props.errors).map((o, k) => <div key={k}>{o} : {props.errors[o].type}</div>)}
        </div>
    );
};

export default Messages;