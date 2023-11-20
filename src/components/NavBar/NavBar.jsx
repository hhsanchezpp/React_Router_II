import { NavLink, Link } from "react-router-dom"
import poke_logo from "../../assets/imgs/poke_logo.png"
import "./Navbar.css"

const NavBar = () => {
    return (
        <nav className="nav_container">
            <div className="logo_container">
                <Link to="/"><img src={poke_logo} alt="" /></Link>
            </div>
            <ul className="links_container">
                <li>
                    <NavLink to="/Home" >Home</NavLink>
                </li>
                <li>
                    <NavLink to="/pokemones" >Pokemones</NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar