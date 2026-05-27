import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import ProfilePic from '../img/aditya.png';
import Social from './Social';

const Home = () => {
    return (
        <section id="home" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
            <div className="hero-wrapper">
                <div className="hero-content">
                    <span className="hero-tagline">Welcome to my space</span>
                    <h1 className="hero-name">Aditya V. Gupta</h1>
                    
                    <div className="hero-typed">
                        <TypeAnimation
                            sequence={[
                                500, // typingDelay: Wait 0.5s before starting
                                "Software Engineer @ KLA",
                                2000, // eraseDelay: Display for 2s
                                "Machine Learning Specialist",
                                2000,
                                "Computer Vision Enthusiast",
                                2000,
                                "Systems Developer",
                                2000,
                            ]}
                            wrapper="span"
                            speed={40} // Custom speed (Note: lower values are faster, 40 is a comfortable, realistic typing cadence)
                            repeat={Infinity}
                            cursor={true}
                            style={{ display: 'inline-block' }}
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
                        <img src={ProfilePic} className="hero-image" alt="Aditya Vikram Gupta" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;