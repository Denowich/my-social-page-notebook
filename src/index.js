import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
      { id: 1, message: 'Hi! My name is Den !', likesCount: '5' },
      { id: 2, message: "It's my first post !", likesCount: '10' },
      { id: 3, message: "I'm learning  JS !", likesCount: '6' },
      { id: 4, message: 'Thanks !', likesCount: '3' },
];

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <React.StrictMode>
            <App
                  posts={posts}
                  dialogsData={dialogsData}
                  messagesData={messagesData}
            />
      </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
