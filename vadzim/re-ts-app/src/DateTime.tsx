import React from 'react';

export default function DateTime(props: { datum: { toDateString: () => any; }; }) {
    let datumString: string = props.datum.toDateString();
    
    return (
    <span>{datumString}</span>
    )
}