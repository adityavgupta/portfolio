import React, { Component } from 'react';
import Widecard from '../components/Widecard/Widecard';

class Education extends Component {
    render() {
        return (
            <section id="education" className="section">
                <h1 className="section-title">Education</h1>
                <p className="section-subtitle">A summary of my academic background, degrees, and honors from university.</p>
                
                <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
                    <Widecard 
                        name="umich" 
                        title="M.S. Signal & Image Processing and Machine Learning (EECS)" 
                        where="University of Michigan, Ann Arbor" 
                        from="August 2021" 
                        to="April 2023" 
                    />
                    <Widecard 
                        name="uiuc" 
                        title="B.S. Computer Engineering (Honors)" 
                        where="University of Illinois at Urbana-Champaign" 
                        from="August 2017" 
                        to="May 2021" 
                    />
                </div>
            </section>
        )
    }
}

export default Education;