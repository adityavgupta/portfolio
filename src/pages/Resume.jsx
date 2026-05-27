import React, { useState } from 'react';
import SinglePage from '../components/pdf/single_page'; 
import AllPages from '../components/pdf/all_pages';     
import samplePDF from "../pdf/resume_latest.pdf";

const Resume = () => {
    // State to toggle between your 'single' and 'all' page view components
    const [viewMode, setViewMode] = useState('single'); 

    return (
        <section id="resume" className="section">
            <h1 className="section-title">Resume</h1>
            <p className="section-subtitle">View my full professional qualifications below or download an optimized copy for your records.</p>
            
            {/* Download/Action Bar centered above the document frame */}
            <div className="resume-top-actions">
                <a href={samplePDF} download="Aditya_Gupta_Resume.pdf" className="btn btn-primary">
                    <i className="fas fa-cloud-download-alt"></i> Download PDF
                </a>
                <a href="https://linkedin.com/in/guptaadityav" target="_blank" rel="noreferrer" className="btn btn-secondary">
                    <i className="fab fa-linkedin"></i> Connect on LinkedIn
                </a>
            </div>

            {/* Centered, full-width document pane dashboard */}
            <div className="resume-single-column-container">
                <div className="resume-viewer-panel full-width-panel">
                    <div className="viewer-window-frame">
                        <div className="viewer-window-header">                            
                            {/* Toggle Switch matching your glassmorphic design */}
                            <div className="view-toggle-container">
                                <button 
                                    className={`viewer-toggle-btn ${viewMode === 'single' ? 'active' : ''}`}
                                    onClick={() => setViewMode('single')}
                                >
                                    Single Page
                                </button>
                                <button 
                                    className={`viewer-toggle-btn ${viewMode === 'all' ? 'active' : ''}`}
                                    onClick={() => setViewMode('all')}
                                >
                                    Continuous
                                </button>
                            </div>
                        </div>
                        
                        {/* Scroll containment canvas */}
                        <div className="pdf-dark-scroll-pane">
                            <div className="pdf-render-wrapper">
                                {viewMode === 'single' ? (
                                    <SinglePage pdf={samplePDF} />
                                ) : (
                                    <div className="all-page-container">
                                        <div className="all-pages-render-adjustment">
                                            <AllPages pdf={samplePDF} />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;