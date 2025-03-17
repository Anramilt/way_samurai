import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Irina'},
        {id: 2, name: 'Aleksey'},
        {id: 3, name: 'Maria'}
    ]
    let messages = [
        {id: 1, message: 'Hello world'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'Hello'}
    ]

    let dialogsElement = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElement = messages.map(m => <Message message={m.message}/>)

    return (
        <div >
            <div className={classes.dialogs}>
                <div className={classes.dialogsItem}>
                    {dialogsElement}
                </div>
                <div className={classes.messages}>
                    {messagesElement}
                </div>
            </div>
        </div>
    );
}
export default Dialogs;