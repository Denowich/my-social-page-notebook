import React from 'react';
import style from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

export const Dialogs = () => {
      return (
            <div className={style.dialogs}>
                  <div className={style.dialogsItems}>
                        <div className={style.dialog}>
                              <NavLink to='/dialogs/1'>Den</NavLink>
                        </div>
                        <div className={style.dialog}>
                              <NavLink to='/dialogs/2'>Rex</NavLink>
                        </div>
                        <div className={`${style.dialog} ${style.active}`}>
                              <NavLink to='/dialogs/3'>Danya</NavLink>
                        </div>
                        <div className={style.dialog}>
                              <NavLink to='/dialogs/4'>Vika</NavLink>
                        </div>
                        <div className={style.dialog}>
                              <NavLink to='/dialogs/5'>Sanya</NavLink>
                        </div>
                  </div>
                  <div className={style.messagesItems}>
                        <div className={style.dialog}>Hi!</div>
                        <div className={style.dialog}>How are you?</div>
                        <div className={style.dialog}>Yoooo!!!</div>
                  </div>
            </div>
      );
};
