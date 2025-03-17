import React from 'react';
import classes from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/"+ props.id;
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path} className={navData => navData.isActive ? classes.activeLink : classes.item}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;