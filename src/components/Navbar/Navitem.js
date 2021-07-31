import { BrowserRouter, Link } from "react-router-dom";

import React, { Component } from 'react';


class Navitem extends Component {
    render() {
        return (
            <li id={this.props.item}>
                <Link to = {this.props.tolink} className={this.props.clName}>
                {this.props.item}
                </Link>
            </li>
        )
    }
}
export default Navitem