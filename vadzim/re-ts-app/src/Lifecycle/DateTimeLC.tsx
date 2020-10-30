import React from 'react';

export default class DateTimeClass extends React.Component<{}, { date: Date, timerID: number }> {
    constructor(props: {}) {
        super(props);
        this.state = {
            date: new Date(),
            timerID: 0
        }
    }
    componentDidMount() {
        this.setState({
            timerID: window.setInterval(() => this.tick(), 1000)
        })
    }
    componentWillUnmount() {
        window.clearInterval(this.state.timerID);
        console.log('DateTime ist weg');
    }
    tick() {
        // let date = new Date();
        // let datumString: string = this.state.dateTime;
        // this.setState({
        //     dateTimeString: date.toTimeString()
        // })
        this.setState({
            date: new Date()
        })
    }

    render() {
        // setInterval(() => {this.tick()}, 1000);
        // setInterval(this.tick.bind(this), 1000);
        return (
            <span>{this.state.date.toTimeString()}</span>
        )
    };

}