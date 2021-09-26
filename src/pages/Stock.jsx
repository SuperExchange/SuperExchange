import "../css/Stock.css";

import React, { Component } from "react";

import { useParams } from "react-router-dom";
// import { useHistory } from "react-router-dom";

import PlotlyParams from "../components/PlotlyParams";

import watchList from "../data/watchList.json";
import stockDay from "../data/stockDayList.json";

import convertTimeSeries2Array from "../modules/convertTimeSeries2Array";
import buildPlotlyDataFromTimeSeries from "../modules/buildPlotlyDataFromTimeSeries";

class Stock extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        console.log(this.props.match.params.symbol);

        this.state = {
            symbol: this.props.match.params.symbol,
            timeSeries: {},
            plotlyData: [],
            watchListEntry: {},
            loaded: false,
        };
    }

    handleOnChange = () => {
        console.log(document.getElementById("txtSearch").value);
    };

    handleOnClick = () => {
        console.log(document.getElementById("txtSearch").value);
    };

    componentDidMount() {
        let index = watchList.findIndex(
            (elt) => elt.symbol === this.state.symbol
        );

        //  if we are offline
        index = Math.max(index, 0);

        if (index > -1) {
            this.setState({ watchListEntry: watchList[index] });
        } else {
            // make an api call to get the data...
        }

        let timeSeries = convertTimeSeries2Array(stockDay[index]);
        let plotlyData = buildPlotlyDataFromTimeSeries(timeSeries);
        console.log(timeSeries);
        console.log(plotlyData);

        this.setState({ timeSeries: timeSeries });
        this.setState({ plotlyData: plotlyData });
        this.setState({ loaded: true });
    }

    render() {
        // console.log(this.state.watchListEntry);
        return (
            <div>
                <h1>Stock</h1>
                <p>
                    With all of the styling tool options available in today’s
                    market
                </p>
                <div className="StockHeader">
                    <h2>
                        {this.state.loaded &&
                            `${this.state.watchListEntry.name} (${this.state.watchListEntry.symbol})`}
                        {!this.state.loaded && "No data available"}
                    </h2>

                    <div className="StockHeaderSearch">
                        <input
                            type="text"
                            // value={watchListEntry.name}
                            placeholder="Search..."
                            onChange={this.handleOnChange}
                            id="txtSearch"
                        />
                        <button onClick={this.handleOnClick}>
                            <img src="/img/search.svg" alt="Search" />
                        </button>
                    </div>
                </div>

                {this.state.loaded && (
                    <PlotlyParams
                        lastRefreshed={
                            this.state.loaded
                                ? this.state.timeSeries.metaData[
                                      "3. Last Refreshed"
                                  ]
                                : ""
                        }
                        data={this.state.plotlyData}
                    />
                )}
            </div>
        );
    }
}

export default Stock;
