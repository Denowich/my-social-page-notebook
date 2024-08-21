import React from 'react';
import style from './ProfileInfo.module.css';

export const ProfileInfo = () => {
      return (
            <div className={style.content}>
                  <div>
                        <img src='https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2024/02/1200/675/poipu.jpg?ve=1&tl=1' />
                  </div>
                  <div className={style.descriptionBlock}>
                        ava + description
                  </div>
            </div>
      );
};
