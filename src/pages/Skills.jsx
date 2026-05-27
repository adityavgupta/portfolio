import React, { Component } from 'react';

class Skills extends Component {
    render() {
        const skillCategories = [
            {
                title: "Programming Languages",
                icon: "fas fa-code",
                skills: ["Python", "C/C++", "Java", "Verilog", "SystemVerilog", "Matlab"]
            },
            {
                title: "Libraries, Tools & Frameworks",
                icon: "fas fa-cubes",
                skills: ["Scikit-learn", "OpenCV", "PyTorch", "gRPC", "Galil motion control SDKs", "Matrox Imaging Library", "Andor Camera SDKs", "Flask", "Netron", "FPGA SDKs"]
            },
            {
                title: "Systems & Platforms",
                icon: "fas fa-laptop-code",
                skills: ["GNU/Linux", "Windows", "MacOS", "FPGA boards (Xilinx, Altera)", "IBM Engineering Workflow Management", "GCP", "Docker", "Jenkins"]
            },
            {
                title: "Systems Design",
                icon: "fas fa-project-diagram",
                skills: ["Software architecture design", "System architecture design", "Real-time control systems", "Image processing pipelines", "Calibration systems", "Machine learning model deployment"]
            }
        ];

        return (
            <section id="skills" className="section">
                <h1 className="section-title">My Skills</h1>
                <p className="section-subtitle">A collection of tools, technologies, and interests that I work with and enjoy on a regular basis.</p>
                
                <div className="skills-wrapper">
                    {skillCategories.map((category, idx) => (
                        <div key={idx} className="glass-card skills-category">
                            <h3 className="skills-category-title">
                                <i className={category.icon}></i> {category.title}
                            </h3>
                            <div className="skills-list">
                                {category.skills.map((skill, sIdx) => (
                                    <span key={sIdx} className="skill-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }
}

export default Skills;
