import React from 'react';

export default class DidMount extends React.Component<{}, {meldung: string}> {
    constructor(props: {}) {
        super(props);
        this.state = {
            meldung: 'message from constructor'
        }
        console.log('this.state.meldung :>> ', this.state.meldung);        
    }
    
    componentDidMount() {
        this.setState({
            meldung: 'message from DidMount'
        })
        console.log('this.state.meldung :>> ', this.state.meldung);        
    }

    render() {
        return (
        <p>this.state.meldung: {this.state.meldung}</p>
        )
    }
}