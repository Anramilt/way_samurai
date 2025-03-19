import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {


    let dialogsElement = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar} />)
    let messagesElement = props.state.messages.map(m => <Message message={m.message} isUser={m.isUser} />)
    
    let NewMessageElement = React.createRef();

    let AddMessage =() => {
        let text = NewMessageElement.current.value;
        alert(text)
    }

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
                    <div className={classes.textareaContainer}>
                        <textarea  ref = {NewMessageElement}   placeholder="Введите сообщение..."></textarea>
                        <button onClick={AddMessage}>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Dialogs;