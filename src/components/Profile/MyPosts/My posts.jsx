import React from 'react';
import { Posts } from '../Posts/Posts';
import style from './MyPosts.module.css';

export const MyPosts = () => {
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
                  <Posts />
            </div>
      );
};
