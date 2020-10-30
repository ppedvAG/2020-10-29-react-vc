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
import DidMount from './Lifecycle/DidMount';
import WillUnmount from './Lifecycle/WillUnmount';
import DateTimeLC from './Lifecycle/DateTimeLC';
import UseState from './Hooks/UseState';
import UseEffect from './Hooks/UseEffect';
import PWConfirm from './Forms/PWConfirm';

//#region Component Users
let users = Array<User>(
  { id: 1, name: "nn", username: "nn", website: "nnexample.org" },
  { id: 2, name: "mm", username: "mm", website: "mmexample.org" },
  { id: 3, name: "tt", username: "tt", website: "ttexample.org" }
);
//#endregion Component Users

//#region WillUnmount
// let root = document.getElementById('root');
// ReactDOM.render(
// <React.StrictMode>
//   {/* <WillUnmount /> */}
//   {/* <DateTimeLC /> */}
//   <UseEffect />
//   </React.StrictMode>, root);
//   function unmount() {
//     ReactDOM.unmountComponentAtNode(root as Element);
//   }
//  setTimeout(unmount, 2000);
//#endregion WillUnmount

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */} 
    {/* <Greeter /> */}
    {/* <RenderArray /> */}
    {/* <Users users={users}/> */}
    {/* <DateTimeClass /> */}
    {/* <UsersClass /> */}
    {/* <DidMount /> */}
    {/* <UseState /> */}
    {/* <UseEffect /> */}
    <PWConfirm />
  </React.StrictMode>,
  document.getElementById('root')
); 


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
