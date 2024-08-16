import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';

export const Navbar = () => {
      return (
            <div className={style.nav}>
                  <div className={style.item}>
                        <NavLink to='./profile'>Profile</NavLink>
                  </div>
                  <div className={`${style.item} ${style.active}`}>
                        <NavLink to='./dialogs'>Messages</NavLink>
                  </div>
                  <div className={style.item}>
                        <NavLink to='./news'>News</NavLink>
                  </div>
                  <div className={style.item}>
                        <NavLink to='./music'>Music</NavLink>
                  </div>
                  <div className={style.item}>
                        <NavLink to='./settings'>Settings</NavLink>
                  </div>
            </div>
      );
};
