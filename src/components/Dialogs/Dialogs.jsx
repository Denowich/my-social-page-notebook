import React from 'react';
import style from './Dialogs.module.css';
import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './Message/Message';

export const Dialogs = (props) => {
      let dialogsElement = props.dialogsData.map((d) => (
            <DialogItem name={d.name} id={d.id} />
      ));

      let messagesElement = props.messagesData.map((m) => (
            <Message message={m.message} id={m.id} />
      ));

      return (
            <div className={style.dialogs}>
                  <div className={style.dialogsItems}>{dialogsElement}</div>

                  <div className={style.messagesItems}>{messagesElement}</div>
            </div>
      );
};
