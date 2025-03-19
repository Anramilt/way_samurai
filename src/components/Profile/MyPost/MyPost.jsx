import React from 'react';
import classes from './MyPost.module.css'
import Post from './Post/Post';

const MyPost = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
 
    return (
        <div className={classes.content}>
            <div>
                <h3>My post</h3>
                <div>
                    <div>
                        <div>
                            <textarea onChange={onPostChange} ref={newPostElement} 
                                value={props.newPostText}/>
                        </div>
                        <div>
                            <button onClick={addPost}>Post</button>
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