import React, { Component } from 'react';

class Social extends Component {
    render() {
        return (
            <div className="social-icons-wrapper">
                <a href="https://linkedin.com/in/guptaadityav" rel="noreferrer" target="_blank" className="social-link" title="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/adityavgupta" rel="noreferrer" target="_blank" className="social-link" title="GitHub">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.instagram.com/adityag112/" rel="noreferrer" target="_blank" className="social-link" title="Instagram">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com/gupta.adityav/" rel="noreferrer" target="_blank" className="social-link" title="Facebook">
                    <i className="fab fa-facebook-f"></i>
                </a>
            </div>
        )
    }
}

export default Social;