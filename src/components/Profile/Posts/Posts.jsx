import React from 'react';
import style from './Posts.module.css';

export const Posts = (props) => {
      return (
            <div className={style.posts}>
                  <div className={style.postItem}>
                        <div>
                              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcTlHOIDT1fFfYhabUc7o-Pc08bqihLYc5XDKW-xRGFlUQJDs-rDs-IDKKxB1tl_m1wPY&usqp=CAU' />
                              <span>{props.message}</span>
                        </div>

                        <span>likes </span>
                        {props.likesCount}
                  </div>
            </div>
      );
};
