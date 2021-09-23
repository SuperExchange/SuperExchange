import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Nav from './pages/Nav';
import DashBoard from './pages/DashBoard';
import Stock from './pages/Stock';
import Forex from './pages/Forex';
import Crypto from './pages/Crypto';
import News from './pages/News';

//For Graph
//https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=15min&apikey=demo


//
//

//pk_19eb5443c7244616ab173956de5bdd34 

function App() {
    return (
        <div className="App">
            <Router>
                <Nav />
                <Switch>
                    <Route path="/" exact component={DashBoard} />
                    <Route path="/stock" component={Stock} />
                    <Route path="/forex" component={Forex} />
                    <Route path="/crypto" component={Crypto} />
                    <Route path="/news" component={News} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
