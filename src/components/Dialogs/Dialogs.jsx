import React from 'react';
import style from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

export const DialogItem = (props) => {
      let path = '/dialogs/' + props.id;

      return (
            <div className={`${style.dialog} ${style.active}`}>
                  <NavLink to={path}>{props.name}</NavLink>
            </div>
      );
};

export const Message = (props) => {
      return <div className={style.dialog}>{props.message}</div>;
};

export const Dialogs = () => {
      return (
            <div className={style.dialogs}>
                  <div className={style.dialogsItems}>
                        <DialogItem name='Den' id='1' />
                        <DialogItem name='Rex' id='2' />
                        <DialogItem name='Danya' id='3' />
                        <DialogItem name='Vika' id='4' />
                        <DialogItem name='Sanya' id='5' />
                  </div>

                  <div className={style.messagesItems}>
                        <Message message='Hi!' />
                        <Message message='How are you?' />
                        <Message message='Yoooo!!!' />
                  </div>
            </div>
      );
};
