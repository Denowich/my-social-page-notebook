import React from 'react';
import { Posts } from '../Posts/Posts';
import style from './MyPosts.module.css';

export const MyPosts = (props) => {
      let postsElements = props.posts.map((p) => (
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
