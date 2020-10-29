import React from 'react';

export default function Rating(props: any) {
    //let star = <span>X</span>
    let count = props.stars;
    let allstars = new Array();
    for (var i = 0; i < count; ++i) {
        // allstars.push(star)
        allstars.push(<span key={i.toString()}>X</span>)
    }
    return (<ul>{allstars}</ul>)}

/* export default function Rating(props: any) {
    let star = <span>*</span>;
    let anzahl = props.stars;
    let starsArray = Array<JSX.Element>(anzahl);
    //
    return (
        <span>{starsArray}</span>
        //   <div className="rating">
        //     {'*'.repeat(props.numberOfStars)}
        //   </div>
    );
} */