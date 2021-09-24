import React from "react";
import watchListData from "../data/watchList.json";

// const ApiKey = "ZCTSJTWC75K141H9";
// const Search = "tesla";

class DashStockElement extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            name: props.name,
            symbol: props.symbol,
            count: props.count,
            price: 0,
            change: 0,
            stockData: {},
        };
    }

    /*
    {
        "Global Quote": {
            "01. symbol": "BLK",
            "02. open": "856.4500",
            "03. high": "858.9789",
            "04. low": "847.8100",
            "05. price": "851.0500",
            "06. volume": "544222",
            "07. latest trading day": "2021-09-22",
            "08. previous close": "845.2400",
            "09. change": "5.8100",
            "10. change percent": "0.6874%"
        }
    },
     */

    componentDidMount() {
        // fetch(
        //     // `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${this.state.searchFor}&apikey=${ApiKey}`
        //     `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${Search}&apikey=${ApiKey}`
        // )
        //     .then((response) => response.json())
        //     .then((json) => this.setState({ element: json }));

        // this is the offline version
        let index = watchListData.findIndex(
            (element) =>
                element["Global Quote"]["01. symbol"] === this.state.symbol
        );
        if (index < 0) return;

        let element = watchListData[index][["Global Quote"]];
        this.setState({ price: element["05. price"] });
        this.setState({ change: element["10. change percent"].split("%")[0] });
        this.setState({ loaded: true });
    }

    render() {
        return (
            <div className="DashStockElement">
                {this.state.loaded && (
                    <div className="DashStockGrid">
                        <p>{this.state.name}</p>
                        <p>
                            {Math.floor(
                                this.state.price * this.state.count
                            ).toLocaleString()}
                        </p>
                        <p
                            style={
                                this.state.change > 0
                                    ? { color: "#78CBBB" }
                                    : this.state.change < 0
                                    ? { color: "#FF3165" }
                                    : { color: "#333" }
                            }
                        >
                            {Number(this.state.change)
                                .toFixed(2)
                                .toLocaleString()}{" "}
                            &nbsp;%
                        </p>
                    </div>
                )}
            </div>
        );
    }
}

export default DashStockElement;
