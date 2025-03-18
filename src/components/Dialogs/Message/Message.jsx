import React from 'react';
import classes from './Message.module.css';


const Message = ({message, isUser}) => {
    return (
        <div className={`${classes.message} ${isUser ? classes.user : classes.friend}`}>
            {message}
        </div>
        /*<div className={classes.message}>{props.message}</div>*/
    );
}

export default Message;