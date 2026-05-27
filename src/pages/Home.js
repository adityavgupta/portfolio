import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import ProfilePic from '../img/aditya.png';
import Social from './Social';

class Home extends Component {
    render() {
        return (
            <section id="home" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
                <div className="hero-wrapper">
                    <div className="hero-content">
                        <span className="hero-tagline">Welcome to my space</span>
                        <h1 className="hero-name">Aditya V. Gupta</h1>
                        
                        <div className="hero-typed">
                            <ReactTypingEffect 
                                text={[
                                    "Software Engineer @ KLA",
                                    "Machine Learning Specialist",
                                    "Computer Vision Enthusiast",
                                    "Systems Developer"
                                ]}  
                                speed={80} 
                                eraseSpeed={50}
                                eraseDelay={2000}
                                typingDelay={500}
                            />
                        </div>
                        
                        <p className="hero-description">
                            I am a Software Engineer based in Silicon Valley, building high-performance machine control pipelines, 
                            embedded systems, and deep learning algorithms. UMich and UIUC alumnus.
                        </p>
                        
                        <div className="hero-cta">
                            <a href="#projects" className="btn btn-primary">
                                View Projects <i className="fas fa-arrow-right"></i>
                            </a>
                            <a href="#resume" className="btn btn-secondary">
                                View Resume
                            </a>
                        </div>
                        
                        <div className="hero-contacts">
                            <ul className="contact-info-list">
                                <li className="contact-info-item">
                                    <i className="fas fa-envelope"></i> gupta.adityav@gmail.com
                                </li>
                                <li className="contact-info-item">
                                    <i className="fas fa-phone-alt"></i> +1 (217) 904-9045
                                </li>
                                <li className="contact-info-item">
                                    <i className="fas fa-map-marker-alt"></i> Mountain View, CA
                                </li>
                            </ul>
                            <Social />
                        </div>
                    </div>
                    
                    <div className="hero-image-wrapper">
                        <div className="hero-image-container">
                            <img src={ProfilePic} className="hero-image" alt="Aditya Vikram Gupta"></img>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Home;