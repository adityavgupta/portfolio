import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import Navitem from './Navitem';
import './Navbar.css';

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    handleNavItemClick = () => {
        this.setState({ clicked: false })
    }

    render() {
        return (
            <nav className="NavbarItems">
                <a href="#home" className="navbar-logo">
                    Aditya V. Gupta
                </a>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <Navitem 
                                key={index} 
                                item={item.title} 
                                tolink={item.url} 
                                onClick={this.handleNavItemClick}
                                clName={this.state.clicked ? item.cName + ' active' : item.cName}
                            />
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar;