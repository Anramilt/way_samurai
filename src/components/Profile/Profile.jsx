import React from 'react';
import classes from './Profile.module.css'
import MyPost from './MyPost/MyPost';

const Profile = () => {

    return (
        <div className={classes.content}>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe_OlHEe2L-0VtexCxjIV5tc0dLor3wd57Yg&s' />
            </div>
            <div>
                ava + description
            </div>
            <MyPost />
        </div>
    );
}
export default Profile;