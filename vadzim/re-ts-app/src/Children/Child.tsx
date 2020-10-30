import React from 'react';
import './Cards.css';

export default function Card(props: any) {
    return (
        <div className={'Card Card-'+ props.color}>
            {props.children}
        </div>
    )
}