import { createStore } from 'redux';
import React from 'react';

export default function SimpleDemo() {

    const myReducer = (state = 1, action: { type: string }) => {
        switch (action.type) {
            case 'mal3':
                return state * 3;
            case 'minus7':
                return state - 7;
            case 'plus2':
                return state + 2;
            default:
                return state;
        }
    }

    const myStore = createStore(myReducer);

    myStore.dispatch({ type: 'plus2' });
    console.log('myStore.getState() :>> ', myStore.getState());
    myStore.dispatch({ type: 'minus7' });
    console.log('myStore.getState() :>> ', myStore.getState());

    return(
        <div>{myStore.getState()}</div>
    )
}

// export class SimpleDemo extends React.Component<any, any> {
//     constructor(props: any) {
//         super(props);
//         this.myReducer = this.myReducer.bind(this);  
//     }  

//     const myReducer = (state = 1, action: { type: string }) => {
//         switch (action.type) {
//             case 'mal3':
//                 return state * 3;
//             case 'minus7':
//                 return state - 7;
//             case 'plus2':
//                 return state + 2;
//             default:
//                 return state;
//         }
//     }

//     const myStore = createStore(this.myReducer);

//     // this.myStore.dispatch({ type: 'minus7' });

//     // bei einem Event z.B.:
//     // let handleClick = () => {
//     //     myStore.dispatch({ type: 'plus2' });
//     // }
//     let actState: number = myStore.getState();
//     handleClick (){
//         myStore.dispatch({ type: 'plus2' });
//         console.log('myStore.getState() :>> ', myStore.getState());
//         actState = myStore.getState();
//         this.forceUpdate();
//     }

//     render() {
//         return (
//             // <><button onClick={handleClick}>+2</button>
//             <><button onClick={() => handleClick()}>+2</button>
//             {/* wird nur beim Anfang ausgegeben: */}
//                 {/* <div>{myStore.getState()}</div></> */}
//                 <div>{actState}</div></>
//         )
//     }

// }