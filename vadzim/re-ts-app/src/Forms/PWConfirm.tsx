import React from 'react';

export default class PWConfirm extends React.Component<{}, { inp1Val: string, inp2Val: string, message: string }> {

    constructor(props: {}) {
        super(props);
        this.state = {
            inp1Val: '',
            inp2Val: '',
            message: 'leer'
        }
    }
    handleChange(ev: any) {
        if (ev.target.id === 'inp1') {
            this.setState({
                inp1Val: ev.target.value
            });
        } else {
            this.setState({
                inp2Val: ev.target.value
            });
        }
    }
    handleClick() {
        this.setState({
            message: 'Eingaben stimmen überein'
        })
    }
    render() {
        return (
            <div>
                <input
                    type="password"
                    id='inp1'
                    value={this.state.inp1Val}
                    onChange={event => { this.handleChange(event) }}
                />
                <input
                    type="password"
                    id='inp2'
                    value={this.state.inp2Val}
                    onChange={event => { this.handleChange(event) }}
                />
                <button
                    disabled={this.state.inp1Val !== this.state.inp2Val || this.state.inp1Val === ''}
                    onClick={() => this.handleClick()}
                >
                    CONFIRM
                    </button>
                <p>{this.state.message}</p>
            </div>
        )
    }
}