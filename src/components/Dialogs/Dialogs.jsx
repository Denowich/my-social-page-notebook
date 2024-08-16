import React from 'react';
import style from './Dialogs.module.css';

export const Dialogs = () => {
      return (
            <div className={style.dialogs}>
                  <div className={style.dialogsItems}>
                        <div className={style.dialog}>Den</div>
                        <div className={style.dialog}>Rex</div>
                        <div className={`${style.dialog} ${style.active}`}>
                              Danya
                        </div>
                        <div className={style.dialog}>Vika</div>
                        <div className={style.dialog}>Sanya</div>
                  </div>
                  <div className={style.messagesItems}>
                        <div className={style.dialog}>Hi!</div>
                        <div className={style.dialog}>How are you?</div>
                        <div className={style.dialog}>Yoooo!!!</div>
                  </div>
            </div>
      );
};
