import "./NavbarStyles.css";

import { Component } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";

class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Pysllium Industry</h1>
        <ul className="nav-menu">
            {MenuItems.map((item, index) =>{
                return(
                    <li key={index}>
                        <a className={item.cName} href="/">
                        {item.title}
                        </a>
                    </li>
                )
            })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
