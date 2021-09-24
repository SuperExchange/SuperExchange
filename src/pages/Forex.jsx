import React from 'react';

class Forex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currency: null,
            rate: 0,
            currencyFrom: "",
            currencyTo: "",
            exchange: 0,
            isLoading: true
        }
    }
    async componentDidMount() {
        //const url = 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=EUR&apikey=9RW257WPI2WCJBBF';
        const url = '../data/currencies/usdToEur.json'
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ currency: data });

        // this is the offline version
        /* 
        "1. From_Currency Code": "USD",
        "3. To_Currency Code": "EUR",
        "5. Exchange Rate": "0.85140000", */

        let element = this.state.currency["Realtime Currency Exchange Rate"];
        this.setState({ currencyFrom: element["From_Currency Code"] });
        this.setState({ currencyTo: element["To_Currency Code"] });
        this.setState({ exchange: element["Exchange Rate"] });
        this.setState({ isloading: false });
    }
    handleChangeFromCurrency() {
        
    }
    handleChangeToCurrency() {

    }
    render() {
        return (
            <div>
                {!this.isLoading && <div className="forex">
                    <h2>Forex</h2>
                    <p>Want to kow how much is your money in other currenciest?</p>
                    <div className="forex_container">
                        <div>
                            <p>Amount</p>
                            <input
                                type="text"
                                value={this.state.fromCurrency}
                                onChange={this.handleChangeFromCurrency}
                            />
                        </div>
                        <div>
                            <p>from</p>
                            <img className="currencyFlag" src="../img/flags/us.svg" alt="" />
                            <p>Currency From</p>
                        </div>
                        <div>
                            <img className="currencyIcon" src="../img/icons/arrow-combined.svg" alt="" />
                        </div>
                        <div>
                            <p>in</p>
                            <img className="currencyFlag" src="../img/flags/eu.svg" alt="" />
                            <p>Currency To</p>
                        </div>
                        <div>
                            <p>Amount</p>
                            <input
                                type="text"
                                value={this.state.toCurrency}
                                onChange={this.handleChangeToCurrency}
                            />
                        </div>
                    </div>
                    <p>The Exchange Rate is {this.state.exchange}</p>
                </div>}
            </div>
        );
    }
}

export default Forex;