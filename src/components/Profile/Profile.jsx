import React from 'react';
import { MyPosts } from './MyPosts/My posts';
import style from './Profile.module.css';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

export const Profile = (props) => {
      return (
            <div className={style.profile}>
                  <ProfileInfo />
                  <MyPosts posts={props.state.posts} addPost={props.addPost} />
            </div>
      );
};
