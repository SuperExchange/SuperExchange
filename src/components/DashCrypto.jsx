import React, { Component } from 'react';
import DashCryptoItem from './DashCryptoItem'

class DashCrypto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currency: [],

        }
    }
    async componentDidMount() {
        let arr = ["btc", "shiba", "ethereum", "litecoin", "bitcoin_cash"]

        await Promise.all(arr.map(async (e) => {
            //const url = 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=EUR&apikey=9RW257WPI2WCJBBF';
            const url = "../data/crypto/" + e + "/stock.json";
            const response = await fetch(url);
            const data = await response.json();

            let element = data["Realtime Currency Exchange Rate"];

            this.setState({ currency: [...this.state.currency, { name: element["2. From_Currency Name"], exchange: element["5. Exchange Rate"] }] });
            //this.setState({ currency : [element["2. From_Currency Name"],element["5. Exchange Rate"]] })
        }))
    }
    render() {
        return (
            <div className="DashStock">
                {/* display as grid */}
                <div className="DashStockGrid DashStockGridHeader">
                    <p>Name</p>
                    <p>Price</p>
                    <p></p>
                </div>
                {this.state.currency.map(e => {
                    return <DashCryptoItem key={e.name}
                        name={e.name}
                        exchange={e.exchange}
                    />
                })}
            </div>
        );
    }
}

export default DashCrypto;