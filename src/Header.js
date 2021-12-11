import CartWidget from "./CartWidget";
import Nav from "./Nav"
import { NavLink } from "react-router-dom";

const Header = ({ saludo }) => {
    return (
        <header id="main-header">
            
            <NavLink to="/">
                <h1>{saludo}</h1>
            </NavLink>

            <Nav />
            <CartWidget />
        </header>
    )
}

export default Header;