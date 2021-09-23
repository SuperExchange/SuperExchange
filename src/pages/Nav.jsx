import { Link } from "react-router-dom";

const Nav = () => {
    return ( 
    <div className="navBar">
        <h1><span>Super</span>Exchange</h1>
        <div>
        <Link to="/">Dashboard</Link>
        <Link to="/stock">Stock</Link>
        <Link to="/forex">Forex</Link>
        <Link to="/crypto">Crypto</Link>
        <Link to="/news">News</Link>
        </div>
        <img src="../img/icons/arrows-left.svg" alt="" />
    </div> );
}
 
export default Nav;