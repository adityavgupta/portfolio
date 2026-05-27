import React, { Component } from 'react';


class Navitem extends Component {
    render() {
        return (
            <li id={this.props.item} onClick={this.props.onClick}>
                <a href={this.props.tolink} className={this.props.clName}>
                    {this.props.item}
                </a>
            </li>
        )
    }
}
export default Navitem