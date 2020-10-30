import React, { useState, useEffect } from 'react';

export default function UseEffect() {
    const [date, changeDate] = useState(new Date());
    const [timerID, changeTID] = useState(0);

    function doWhenMountingDone() {
        changeTID(window.setInterval(() => tick(), 1000))
    }
    function tick() {
        changeDate(new Date())
    }
    function doBeforeUnmounting() {
        window.clearInterval(timerID);
        console.log('DateTime ist weg');
    }
    /* 
    index.js:1 Warning: Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render. */
    /* todo #3 */
    
    // Variante mit nur DidMount
    // useEffect(() => {
    //     doWhenMountingDone();       
    // })

    // Variante mit DidMount & WillUnmount
    useEffect(() => {
        doWhenMountingDone();
        return () => {
            doBeforeUnmounting();
        }
    })

    return (
        <div>
            <p>{date.toTimeString()}</p>
            <p>{timerID}</p>
        </div>
    )
}