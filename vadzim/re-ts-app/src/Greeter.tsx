import React from 'react';
import DateTime from './DateTime';
import Rating from './Rating';
// import './App.css';

export default function Greeter() {
  let datum = new Date();
  const paragraph = <p>inhalt</p>;
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
      <p>Heute ist: <DateTime datum={datum}/></p>
      {/* {paragraph as HTMLParagraphElement['textContent']} */}
      <div>Rating: <Rating stars={4}/></div>
    </div>
  );
}

export function shorten(s: string, maxlength: number) {
  if (s.length > maxlength) {
    s = s.slice(0, maxlength - 3) + '...';
  }
  return s;
}
