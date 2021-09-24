import { useParams, useHistory } from "react-router-dom";

import PlotlyParams from "../components/PlotlyParams";

import watchList from "../data/watchList.json";
import stockDay from "../data/stockDayList.json";

import convertTimeSeries2Array from "../modules/convertTimeSeries2Array";
import buildPlotlyDataFromTimeSeries from "../modules/buildPlotlyDataFromTimeSeries";

const Stock = () => {
    let symbol = useParams().symbol;

    let index = Math.max(
        watchList.findIndex((elt) => elt.symbol === symbol),
        0
    );
    let watchListEntry = watchList[index];
    let stock = stockDay[index];
    let timeSeries = convertTimeSeries2Array(stock);
    let plotlyData = buildPlotlyDataFromTimeSeries(timeSeries);

    return (
        <div>
            <h1>Stock</h1>
            <p>
                With all of the styling tool options available in today’s market
            </p>
            <h2>
                {watchListEntry.name} ({watchListEntry.symbol})
            </h2>
            {/* <Plotly /> */}
            <PlotlyParams
                lastRefreshed={timeSeries.metaData["3. Last Refreshed"]}
                data={plotlyData}
            />
        </div>
    );
};

export default Stock;
