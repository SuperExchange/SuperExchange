import React, { Component } from 'react';

class Forex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fromCurrency : 0,
            toCurrency: 0
        }
    }
    render() {
        return (
            <div className="forex">
                <h2>Forex</h2>
                <p>Want to kow how much is your money in other currenciest?</p>
                <div>
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </div>
            </div>
        );
    }
}

export default Forex;