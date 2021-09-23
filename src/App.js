import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from './pages/Nav';
import DashBoard from './pages/DashBoard';
import Stock from './pages/Stock';

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
          <Route to="/" exact component={DashBoard} />
          <Route to="/stock" exact component={Stock} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
