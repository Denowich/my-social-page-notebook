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
      let dialogsData = [
            { id: 1, name: 'Den' },
            { id: 2, name: 'Rex' },
            { id: 3, name: 'Danya' },
            { id: 4, name: 'Vika' },
            { id: 5, name: 'Sanya' },
      ];

      let messagesData = [
            { id: 1, message: 'Hi!' },
            { id: 2, message: 'How are you?' },
            { id: 3, message: 'Yoooo!!!' },
            { id: 4, message: 'Yooo' },
            { id: 5, message: 'Yo' },
      ];

      return (
            <div className={style.dialogs}>
                  <div className={style.dialogsItems}>
                        <DialogItem
                              name={dialogsData[0].name}
                              id={dialogsData[0].id}
                        />
                        <DialogItem
                              name={dialogsData[1].name}
                              id={dialogsData[1].id}
                        />
                  </div>

                  <div className={style.messagesItems}>
                        <Message
                              message={messagesData[0].message}
                              id={messagesData[0].id}
                        />
                        <Message
                              message={messagesData[1].message}
                              id={messagesData[1].id}
                        />
                  </div>
            </div>
      );
};
