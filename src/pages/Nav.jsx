import { Link } from "react-router-dom";

const Nav = () => {
    return ( 
    <div className="navBar">
        <h1><span>Super</span>Exchange</h1>
        <div>
        <Link path="/">Dashboard</Link>
        <Link path="/stock">Stock</Link>
        <Link path="/forex">Forex</Link>
        <Link path="/crypto">Crypto</Link>
        <Link path="/news">News</Link>
        </div>
        <img src="../img/icons/arrows-left.svg" alt="" />
    </div> );
}
 
export default Nav;