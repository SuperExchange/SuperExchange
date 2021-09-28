import DashForex from "../components/DashForex";
import DashStock from "../components/DashStock";
import DashCrypto from "../components/DashCrypto";
import DashNews from "../components/DashNews";
import "../css/DashBoard.css"


const DashBoard = () => {
    return (
        <div className="dashboard">
            <header>
                <h2>DashBoard</h2>
                <p id="text">
                    With all of the styling tool options available in today’s
                    market
                </p>
            </header>
            <section>
                <div className="DashboardElement">
                    <DashStock />
                </div>
                <div className="DashboardElement">
                    <DashForex />
                </div>
                <div className="DashboardElement">
                    <DashCrypto />
                </div>
                <div className="DashboardElement">
                    <DashNews />
                </div>
            </section>
        </div>
    );
};

export default DashBoard;
