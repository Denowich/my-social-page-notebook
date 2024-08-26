import React from 'react';
import { Posts } from '../Posts/Posts';
import style from './MyPosts.module.css';

export const MyPosts = (props) => {
      let postsElements = props.posts.map((p) => (
            <Posts message={p.message} likesCount={p.likesCount} />
      ));

      let newPostElement = React.createRef();

      let addPost = () => {
            let text = newPostElement.current.value;
            alert(text);
      };

      return (
            <div className={style.myPosts}>
                  <div>
                        <h3>My posts</h3>
                  </div>
                  <div>
                        <textarea ref={newPostElement}></textarea>
                  </div>
                  <div>
                        <button onClick={addPost}>Add post</button>
                  </div>

                  {postsElements}
            </div>
      );
};
