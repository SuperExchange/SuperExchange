import "../css/DashStock.css";

import React from "react";
import DashStockElement from "./DashStockElement";

// const ApiKey = "ZCTSJTWC75K141H9";
// const Search = "tesla";

class DashStock extends React.Component {
    state = {
        watchList: [
            {
                name: "Apple Inc",
                symbol: "AAPL",
                count: Math.floor(Math.random() * 100) + 1,
            },
            {
                name: "Blackrock Inc",
                symbol: "BLK",
                count: Math.floor(Math.random() * 100) + 1,
            },
            {
                name: "Cisco Systems",
                symbol: "CSCO",
                count: Math.floor(Math.random() * 100) + 1,
            },
            {
                name: "IBM International",
                symbol: "IBM",
                count: Math.floor(Math.random() * 100) + 1,
            },
            {
                name: "Microsoft Corp",
                symbol: "MSFT",
                count: Math.floor(Math.random() * 100) + 1,
            },
            {
                name: "MSCI Inc.",
                symbol: "MSCI",
                count: Math.floor(Math.random() * 100) + 1,
            },
            {
                name: "Tesla",
                symbol: "TSLA",
                count: Math.floor(Math.random() * 100) + 1,
            },
        ],
    };

    // componentDidMount() {
    //     fetch(
    //         // `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${this.state.searchFor}&apikey=${ApiKey}`
    //         `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${Search}&apikey=${ApiKey}`
    //     )
    //         .then((response) => response.json())
    //         .then((json) => this.setState({ search: json }));
    // }

    render() {
        return (
            <div className="DashStock">
                {/* display as grid */}
                <div className="DashStockGrid DashStockGridHeader">
                    <p>Name</p>
                    <p>Watchlist</p>
                    <p>Symbol</p>
                </div>

                {this.state.watchList.map((element) => (
                    <DashStockElement
                        key={element.symbol}
                        name={element.name}
                        symbol={element.symbol}
                        count={element.count}
                    />
                ))}
            </div>
        );
    }
}

export default DashStock;
