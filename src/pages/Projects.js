import React, { Component } from 'react';

class Projects extends Component {
    render() {
        const projectList = [
            {
                title: "Intelligent Digital Emulator Application",
                date: "August 2024",
                desc: "Developed a machine learning model to generate synthetic image patterns for simulating focus metrics and calibrations. Utilized transfer learning to enhance model adaptability across optical states, reducing on-tool developer calibration features testing time by 75% via emulator builds.",
                tags: ["Machine Learning", "Computer Vision", "Transfer Learning", "Simulator Integration", "KLA Hackathon"],
                links: {},
                icon: "fas fa-magic"
            },
            {
                title: "Contrastive Random Walk Curiosity",
                date: "Feb 2022 – Apr 2022",
                desc: "Analyzed and demonstrated the efficacy of Contrastive Random Walk (CRW) as a self-supervised intrinsic curiosity reward method for Reinforcement Learning (RL), leading to faster policy convergence and higher sample efficiency.",
                tags: ["Reinforcement Learning", "Self-Supervised", "CRW", "Python", "PyTorch"],
                links: {
                    paper: "https://arxiv.org/abs/2204.10976"
                },
                icon: "fas fa-brain"
            },
            {
                title: "Self-Supervised RL Independent Study",
                date: "Aug 2022 – Apr 2023",
                desc: "Conducted independent research under Prof. Lei Ying. Evaluated data-efficient self-supervised representation learning algorithms in RL, specifically assessing temporal impact in contrastive and state-prediction representation (SPR) losses.",
                tags: ["Deep Learning", "Representation Learning", "Reinforcement Learning", "PyTorch"],
                links: {},
                icon: "fas fa-graduation-cap"
            },
            {
                title: "Winograd Convolution Engine",
                date: "Sep 2021 – Dec 2021",
                desc: "Designed and simulated an 8-bit precision hardware convolution engine using the Winograd Fast Convolution algorithm. Validated low-precision architecture efficiency versus standard convolution for neural network inference cycles.",
                tags: ["Hardware Design", "Computer Architecture", "Verilog", "Machine Learning Accelerators"],
                links: {},
                icon: "fas fa-microchip"
            },
            {
                title: "Movie Recommender System",
                date: "April 2021",
                desc: "Developed a full-stack movie and TV show recommender application using cosine similarity vectors to predict recommendations based on user preferences and search history.",
                tags: ["Flask", "Python", "MySQL", "JavaScript", "HTML/CSS", "Collaborative Filtering"],
                links: {
                    github: "https://github.com/adityavgupta/PEAS_Movie_Recommender"
                },
                icon: "fas fa-film"
            },
            {
                title: "UNIX-based OS from Scratch",
                date: "Nov 2019",
                desc: "Designed and implemented a basic UNIX-like operating system from scratch. Implemented 4MB virtual memory paging, Ext2-style filesystem loaders, keyboard/RTC drivers, user process virtualization, and round-robin scheduling.",
                tags: ["Operating Systems", "C", "x86 Assembly", "Kernel Development", "Filesystems"],
                links: {
                    github: "https://github.com/adityavgupta/ece391os"
                },
                icon: "fas fa-terminal"
            },
            {
                title: "Street Fighter FPGA Game",
                date: "April 2020",
                desc: "Developed a hardware-accelerated rendition of the classic Street Fighter arcade game on an Intel FPGA DE2-115 development board. Programmed support for two-player controls, projectile physics, gravity, and audio systems.",
                tags: ["SystemVerilog", "FPGA", "Hardware Design", "Audio Synthesis", "Game Dev"],
                links: {},
                icon: "fas fa-gamepad"
            }
        ];

        return (
            <section id="projects" className="section">
                <h1 className="section-title">Featured Projects</h1>
                <p className="section-subtitle">A collection of academic, research, and personal coding projects across software engineering, systems, and machine learning.</p>
                
                <div className="projects-grid">
                    {projectList.map((project, idx) => (
                        <div key={idx} className="glass-card project-card">
                            <div className="project-meta">
                                <i className={`${project.icon} project-icon`}></i>
                                <div className="project-links">
                                    {project.links.github && (
                                        <a href={project.links.github} target="_blank" rel="noreferrer" title="View Source on GitHub" className="project-link-icon">
                                            <i className="fab fa-github"></i>
                                        </a>
                                    )}
                                    {project.links.paper && (
                                        <a href={project.links.paper} target="_blank" rel="noreferrer" title="Read Paper on arXiv" className="project-link-icon">
                                            <i className="fas fa-file-alt"></i>
                                        </a>
                                    )}
                                </div>
                            </div>
                            
                            <h3 className="project-title">{project.title}</h3>
                            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.8rem', fontWeight: 600 }}>{project.date}</p>
                            <p className="project-description">{project.desc}</p>
                            
                            <div className="project-tags">
                                {project.tags.map((tag, tIdx) => (
                                    <span key={tIdx} className="project-tag">
                                        {tag}
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

export default Projects;
