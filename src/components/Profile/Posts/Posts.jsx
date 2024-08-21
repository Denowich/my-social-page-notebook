import React from 'react';
import style from './Posts.module.css';

export const Posts = () => {
      return (
            <div className={style.posts}>
                  <div className={style.postItem}>
                        <div>
                              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcTlHOIDT1fFfYhabUc7o-Pc08bqihLYc5XDKW-xRGFlUQJDs-rDs-IDKKxB1tl_m1wPY&usqp=CAU' />
                              <span>Hi! My name is Den!</span>
                        </div>
                        <span>likes: 5</span>
                  </div>
                  <div className={style.postItem}>
                        <div>
                              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcTlHOIDT1fFfYhabUc7o-Pc08bqihLYc5XDKW-xRGFlUQJDs-rDs-IDKKxB1tl_m1wPY&usqp=CAU' />
                              <span>Thi is my first post!</span>
                        </div>
                        <span>likes: 10</span>
                  </div>
            </div>
      );
};
