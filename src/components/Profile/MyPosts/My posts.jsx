import React from 'react';
import { Posts } from '../Posts/Posts';
import style from './MyPosts.module.css';

export const MyPosts = () => {
      let posts = [
            { id: 1, message: 'Hi! My name is Den !', likesCount: '5' },
            { id: 2, message: "It's my first post !", likesCount: '10' },
            { id: 3, message: "I'm learning  JS", likesCount: '6' },
            { id: 4, message: 'Thanks !', likesCount: '3' },
      ];

      let postsElements = posts.map((p) => (
            <Posts message={p.message} likesCount={p.likesCount} />
      ));

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

                  {postsElements}
            </div>
      );
};
