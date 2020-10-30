import React, { useState } from 'react';

export default function UseState() {
    const [coinSide, tossCoin] = useState('coinSide');
    function tryAgain(side: string) {
        side = Math.random() > 0.5 ? 'head' : 'tail';
        return side;
    }
    return (
        <div>
            <p>result: {coinSide}</p>

            {/* tossCoin(newState) */}
            <button onClick={() => tossCoin(Math.random() > 0.5 ? 'head' : 'tail')}>
                toss the coin
            </button>

            {/* tossCoin((prevState) => newState) */}
            <button onClick={() => tossCoin(pS => tryAgain(pS))}>
                try again
            </button>
        </div>
    )
}