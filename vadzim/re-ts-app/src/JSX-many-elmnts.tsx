import React from 'react';

export default function RenderArray() {
    let liArr = [<li>1</li>, <li>2</li>]
    console.log('liArr :>> ', liArr);
    let indizes = [0, 1, 2];
    let i = 1;
    let i2 = 2;
    // [...]
    return (
        <ul>
            {/* {liArr.map(item => <li key={item.props.children.toString()}>{item.props.children} key: {item.key}</li>)} */}
            {liArr.map(item => <li key={indizes[item.props.children].toString()}>{item.props.children} key: {item.key}</li>)}
            {/* key = null ??? */}
            {/* todo #2 */}
        </ul>
    )
}
/* 
index.js:1 Warning: Encountered two children with the same key, `0`. 
Keys should be unique so that components maintain their identity across updates. 
Non-unique keys may cause children to be duplicated and/or omitted — 
the behavior is unsupported and could change in a future version.
 */