import React, { Component } from 'react';
import samplePDF from "../pdf/resume_latest.pdf";

class Resume extends Component {
    render() {
        return (
            <section id="resume" className="section">
                <h1 className="section-title">Resume</h1>
                <p className="section-subtitle">View my full resume details below or download a copy for your records.</p>
                
                <div className="resume-wrapper">
                    <div className="resume-download-bar">
                        <a href={samplePDF} download="Aditya_Gupta_Resume.pdf" className="btn btn-primary">
                            <i className="fas fa-file-download"></i> Download Resume (PDF)
                        </a>
                        <a href="https://linkedin.com/in/guptaadityav" target="_blank" rel="noreferrer" className="btn btn-secondary">
                            <i className="fab fa-linkedin"></i> Connect on LinkedIn
                        </a>
                    </div>
                    
                    <div className="resume-preview-card">
                        <div className="resume-iframe-container">
                            <iframe 
                                title="Aditya Gupta Resume Preview" 
                                src={`${samplePDF}#view=fitH`} 
                                className="resume-iframe"
                                allow="autoplay"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Resume;