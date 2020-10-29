import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Greeter from './Greeter';
// import RenderArray from './JSX-many-elmnts';
import Users from './Users';
import User from './User';
import reportWebVitals from './reportWebVitals';
import DateTimeClass from './DateTimeClass';
import UsersClass from './UsersClass';

let users = Array<User> (
  {id: 1, name: "nn", username: "nn", website: "nnexample.org"},
  {id: 2, name: "mm", username: "mm", website: "mmexample.org"},
  {id: 3, name: "tt", username: "tt", website: "ttexample.org"}
);


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Greeter /> */}
    {/* <RenderArray /> */}
    {/* <Users users={users}/> */}
    {/* <DateTimeClass /> */}
<UsersClass />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
