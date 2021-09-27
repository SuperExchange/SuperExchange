import React, { Component } from 'react';

class DashCryptoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            exchange: props.exchange
        }
    }
    render() {
        return (
            <div className="DashStockElement">
                <div className="DashStockGrid">
                    <p>{this.state.name}</p>
                    <p>
                        {Number(this.state.exchange)
                            .toFixed(2)
                            .toLocaleString()}{" "}
                        &nbsp;$
                    </p>
                </div>
            </div>
        );
    }
    //name, price, change(24h)
}

export default DashCryptoItem;