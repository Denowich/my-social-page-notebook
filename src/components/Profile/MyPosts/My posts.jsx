import React from 'react';
import { Posts } from '../Posts/Posts';
import style from './MyPosts.module.css';

export const MyPosts = () => {
      let postData = [
            { id: 1, message: 'Hi! My name is Den !', likesCount: '5' },
            { id: 2, message: "It's my first post !", likesCount: '10' },
      ];

      return (
            <div className={style.myPosts}>
                  <div>
                        <h3>My posts</h3>
                  </div>
                  <div>
                        <textarea name='' id=''></textarea>
                  </div>
                  <div>
                        <button>Add post</button>
                  </div>
                  <Posts
                        message={postData[0].message}
                        likesCount={postData[0].likesCount}
                  />
                  <Posts
                        message={postData[1].message}
                        likesCount={postData[1].likesCount}
                  />
            </div>
      );
};
