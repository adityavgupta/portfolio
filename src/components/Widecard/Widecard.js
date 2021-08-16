import React, { Component } from 'react';
import './Widecard.css';
class Widecard extends Component {
    render() {
        return (
            <div className="widecard">
                <div className={this.props.name ? "widecard "+this.props.name : "none"}>
                    <h3>{this.props.title}</h3>
                    <h4 className="secondtext">{this.props.where}</h4>
                    <h4 className="secondtext">{this.props.from} - {this.props.to}</h4>
                </div>
            </div>
        )
    }
}

export default Widecard;