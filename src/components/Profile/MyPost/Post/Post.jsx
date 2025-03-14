import React, {Component} from 'react';
import classes from './Post.module.css'

const Post = (props) => {

    return (
        <div>
            <div className={classes.post}>
                <img src='https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg' />
                { props.message }
                <div>
                    <span>like</span>
                </div>
            </div>
        </div>
    );
}
export default Post;