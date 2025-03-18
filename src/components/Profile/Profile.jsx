import React from 'react';
import MyPost from './MyPost/MyPost';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {


    return (
        <div>
            <ProfileInfo />
            <MyPost state = {props.state} />
        </div>
    );
}
export default Profile;