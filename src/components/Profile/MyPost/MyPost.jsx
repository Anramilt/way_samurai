import React from 'react';
import classes from './MyPost.module.css'
import Post from './Post/Post';

const MyPost = () => {

    return (
        <div className={classes.content}>
            <div>
                My post
                <div>
                    New posts
                    <div>
                        <textarea></textarea>
                        <button>Post</button>
                        <button>Remove</button>
                    </div>
                </div>
                <div className={classes.post}>
                    <Post message='Hello world!'/>
                    <Post message='First post!'/>
                </div>
            </div>
        </div>
    );
}
export default MyPost;