import React from 'react';
import style from './Posts.module.css';

export const Posts = () => {
      return (
            <div className={style.posts}>
                  <div className={style.item}>
                        <div>
                              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcTlHOIDT1fFfYhabUc7o-Pc08bqihLYc5XDKW-xRGFlUQJDs-rDs-IDKKxB1tl_m1wPY&usqp=CAU' />
                              Hi! My name is Den!
                        </div>
                        <span>likes</span>
                  </div>
                  <div className={style.item}>
                        <div>
                              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcTlHOIDT1fFfYhabUc7o-Pc08bqihLYc5XDKW-xRGFlUQJDs-rDs-IDKKxB1tl_m1wPY&usqp=CAU' />
                              Thi is my first post!
                        </div>
                        <span>likes</span>
                  </div>
            </div>
      );
};
