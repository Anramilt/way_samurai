import React from 'react';
import classes from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = ({ id, name, avatar }) => {
    let path = "/dialogs/" + id;
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path} className={navData => navData.isActive ? classes.activeLink : classes.item}>
                <img src={avatar} alt={name} className={classes.avatar} />
                <span className={classes.dialogName}> {name}</span>
            </NavLink>
        </div>
    );
}

export default DialogItem;