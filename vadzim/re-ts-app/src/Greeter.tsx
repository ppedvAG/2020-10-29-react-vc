import React from 'react';
// import './App.css';

export default function Greeter() {
  let datum = new Date();
  let datumString = datum.toDateString();
  const myNewElement = React.createElement('input');
  const reactElMembers = Object.entries(myNewElement);
  console.log('reactElMembers :>> ', reactElMembers);
  /* 
  reactElMembers :>>  
Array(7)
0: (2) ["$$typeof", Symbol(react.element)]
1: (2) ["type", "input"]
2: (2) ["key", null]
3: (2) ["ref", null]
4: (2) ["props", {…}]
5: (2) ["_owner", FiberNode]
6: (2) ["_store", {…}]
length: 7 */
  return (
    <div>
      <h1>Hello React</h1>
      <p>Heute ist: {datumString}</p>
    </div>
  );
}
