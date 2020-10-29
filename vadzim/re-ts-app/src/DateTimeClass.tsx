import { render } from '@testing-library/react';
import React from 'react';

export default class DateTimeClass extends React.Component<any,any> {
    constructor(props: any) {
        super(props);
        this.state = {
            dateTimeString: ''
        }
    }
    tick() {
        let date = new Date();
        // let datumString: string = this.state.dateTime;
        this.setState({
            dateTimeString: date.toTimeString()
        })
    }

    render(){
        // setInterval(() => {this.tick()}, 1000);
        setInterval(this.tick.bind(this), 1000);
        return (
            
            <span>{this.state.dateTimeString}</span>
        )
    };

}