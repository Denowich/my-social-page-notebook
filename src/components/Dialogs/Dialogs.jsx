import React from 'react';
import style from './Dialogs.module.css';
import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './Message/Message';

export const Dialogs = () => {
      let dialogsData = [
            { id: 1, name: 'Den' },
            { id: 2, name: 'Rex' },
            { id: 3, name: 'Danya' },
            { id: 4, name: 'Vika' },
            { id: 5, name: 'Sanya' },
      ];

      let dialogsElement = dialogsData.map((d) => (
            <DialogItem name={d.name} id={d.id} />
      ));

      let messagesData = [
            { id: 1, message: 'Hi!' },
            { id: 2, message: 'How are you?' },
            { id: 3, message: 'Yoooo!!!' },
            { id: 4, message: 'Yooo' },
            { id: 5, message: 'Yo' },
      ];

      let messagesElement = messagesData.map((m) => (
            <Message message={m.message} id={m.id} />
      ));

      return (
            <div className={style.dialogs}>
                  <div className={style.dialogsItems}>{dialogsElement}</div>

                  <div className={style.messagesItems}>{messagesElement}</div>
            </div>
      );
};
