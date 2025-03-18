import React from 'react';
import classes from './MyPost.module.css'
import Post from './Post/Post';

const MyPost = (props) => {

    let postsElement = props.state.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={classes.content}>
            <div>
                <h3>My post</h3>
                <div>
                    <div>
                        <div> <textarea></textarea></div>
                        <div>
                            <button>Post</button>
                            <button>Remove</button>
                        </div>
                    </div>
                </div>
                <div className={classes.post}>
                    {postsElement}
                </div>
            </div>
        </div>
    );
}
export default MyPost;