import React from 'react';

export default class WillUnmount extends React.Component<{}, {meldung: string}> {
    constructor(props: {}) {
        super(props);
        this.state = {
            meldung: 'message from constructor'
        }
        console.log('this.state.meldung :>> ', this.state.meldung);        
    }
    componentWillUnmount() {
        this.setState({
            meldung: 'message from WillUnmount'
        })
        console.log('this.state.meldung :>> ', this.state.meldung);
    }
    
    render() {
        return (
        <p>this.state.meldung: {this.state.meldung}</p>
        )
    }
}