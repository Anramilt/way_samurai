import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {


    let dialogsElement = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>)
    let messagesElement = props.state.messages.map(m => <Message message={m.message} isUser={m.isUser}/>)

    return (
        <div >
            <div className={classes.dialogs}>
                <div className={classes.dialogsItem}>
                    {dialogsElement}
                </div>
                <div className={classes.messages}>
                    <div className={classes.messagesItem}>
                        {messagesElement}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Dialogs;