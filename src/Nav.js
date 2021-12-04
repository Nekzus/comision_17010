import {NavLink} from 'react-router-dom'

const Nav = () => {
    return (
        <nav id="main-nav" className="nav">
            <NavLink to="/categoria/electronics">electronics</NavLink>
            <NavLink to="/categoria/jewelery">jewelery</NavLink>
        </nav>
    )
}

export default Nav