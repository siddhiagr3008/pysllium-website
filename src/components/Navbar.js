import "./NavbarStyles.css";

import { Component } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";

class Navbar extends Component {
    state = {clicked: false };
    handeClick = () =>{
        this.setState({ clicked: !this.state.clicked})
     }
    render() {
        return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo">Pysllium Industry</h1>
            <div className="menu-icons" onClick={this.handeClick}>
                <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>                
            </div>
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


// class Navbar extends Component {
//     state = {clicked: false };
//     handeClick = () =>{
//         this.setState({ clicked: !this.state.clicked})
//     }
//     render() {
//         return (
//         <nav className="NavbarItems">
//             <h1 className="navbar-logo">Pysllium Industry</h1>
//             <div className="menu-icons" onClick={this.handeClick}>
//                 <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
//             </div>
//             <ul className={this.state.clicked ? ".nav-menu active" : ".nav-menu"}>
//                 {MenuItems.map((item, index) =>{
//                     return(
//                         <li key={index}>
//                             <a className={item.cName} href="/">
//                             {item.title}
//                             </a>
//                         </li>
//                     )
//                 })}
//             </ul>
//         </nav>
//         );
//     }
// }
