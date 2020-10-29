import React from 'react';
// import './App.css';

export default function Greeter() {
  let datum = new Date();
  let datumString = datum.toDateString();
  return (
    <div>
      <h1>Hello React</h1>
      <p>Heute ist: {datumString}</p>
    </div>
  );
}
