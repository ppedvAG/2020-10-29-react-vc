import React from 'react';
import Card from './Child';
import './Cards.css';

export default function CardParent() {
    return (
        <div>
            <Card color='red'>
                <h1 className='Card-title'>
                    Card 1 Titel 
            </h1>
                <p className='Card-content'>
                    Card 1 Inhalt
            </p>
            </Card>
            <Card color='blue'>
                <h1 className='Card-title'>
                    Card 2 Titel
                </h1>
                <p className='Card-content'>
                    Card 2 Inhalt
                </p>
            </Card>
        </div>
    )
}