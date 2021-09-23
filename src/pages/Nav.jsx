import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="navBar">
            <h1>
                <span>Super</span>Exchange
            </h1>
            <div>
                <div>
                    <Link to="/" className="NavLink">
                        <img
                            src="../img/icons/dashboard.svg"
                            alt="Dashboard"
                            className="NavLinkImage"
                        />
                        <span className="NavLinkText">Dashboard</span>
                    </Link>
                </div>
                <div>
                    <Link to="/stock" className="NavLink">
                        <img
                            src="../img/icons/stock.svg"
                            alt="Stock"
                            className="NavLinkImage"
                        />
                        <span className="NavLinkText">Stock</span>
                    </Link>
                </div>
                <div>
                    <Link to="/forex" className="NavLink">
                        <img
                            src="../img/icons/forex.svg"
                            alt="Forex"
                            className="NavLinkImage"
                        />
                        <span className="NavLinkText">Forex</span>
                    </Link>
                </div>
                <div>
                    <Link to="/crypto" className="NavLink">
                        <img
                            src="../img/icons/crypto.svg"
                            alt="Crypto"
                            className="NavLinkImage"
                        />
                        <span className="NavLinkText">Crypto</span>
                    </Link>
                </div>
                <div>
                    <Link to="/news" className="NavLink">
                        <img
                            src="../img/icons/news.svg"
                            alt="Dashboard"
                            className="NavLinkImage"
                        />
                        News
                    </Link>
                </div>
            </div>
            <img src="../img/icons/arrows-left.svg" alt="" />
        </div>
    );
};

export default Nav;
