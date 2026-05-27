import React, { Component } from 'react';
import './Widecard.css';

class Widecard extends Component {
    render() {
        const isUmich = this.props.name === 'umich';
        const schoolClass = isUmich ? 'school-umich' : 'school-uiuc';
        const iconClass = isUmich ? 'fas fa-graduation-cap' : 'fas fa-university';
        
        return (
            <div className={`widecard-container glass-card ${schoolClass}`}>
                <div className="widecard-icon">
                    <i className={iconClass}></i>
                </div>
                <div className="widecard-content">
                    <span className="widecard-badge">
                        {isUmich ? "Graduate School" : "Undergraduate"}
                    </span>
                    <h3 className="widecard-title">{this.props.title}</h3>
                    <h4 className="widecard-institution">{this.props.where}</h4>
                    <span className="widecard-duration">
                        <i className="far fa-calendar-alt"></i> {this.props.from} - {this.props.to}
                    </span>
                </div>
            </div>
        );
    }
}

export default Widecard;