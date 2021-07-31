import React, {Component} from "react";
import { MenuItems } from "./MenuItems";
import Navitem from './Navitem';
import { withRouter } from "react-router-dom";

import './Navbar.css'

class Navbar extends Component {
    state = {clicked: false}

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Aditya V. Gupta </h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                                <Navitem  key={index} item={item.title} tolink={item.url} 
                                clName={this.state.clicked ? item.cName+' active': item.cName}></Navitem>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default withRouter(Navbar);