import React, { Component } from 'react';

class Experience extends Component {
    render() {
        const jobs = [
            {
                role: "Software Engineer",
                company: "KLA Corporation",
                location: "Milpitas, CA",
                date: "January 2023 - Present",
                bullets: [
                    "Design, develop, and maintain software that powers cutting-edge wafer inspection machines.",
                    "Develop code for machine movement and fully automated calibration sequences.",
                    "Integrate complex hardware and firmware systems to ensure seamless interaction.",
                    "Address and resolve field escalations with customers, occasionally within Class 100 cleanroom environments.",
                    "Leverage multi-threading techniques in Java, Python, and C++ to deliver scalable solutions, improving throughput for next-generation machines."
                ]
            },
            {
                role: "Software Engineering Intern",
                company: "Siemens Digital Industries Software",
                location: "Ann Arbor, MI",
                date: "January 2022 - August 2022",
                bullets: [
                    "Prototyped new releases and automated testing processes for NX CAD freeform modeling tools.",
                    "Implemented parametrization intersections, surface boundary intersections and sub-sampling with 2-D and 3-D mapping.",
                    "Enhanced system capabilities using C++, incorporating mesh modeling, reverse engineering, and geometric computation."
                ]
            },
            {
                role: "Research and Development Intern",
                company: "Shure Inc.",
                location: "Niles, IL",
                date: "June 2020 - August 2020",
                bullets: [
                    "Deployed pre-trained deep learning models on dedicated IoT embedded processors for low-latency machine learning inferences.",
                    "Conducted model graph analysis using Netron and executed graph surgery to perform optimal conversion and 8-bit quantization.",
                    "Utilized platform-specific SDK APIs to build and run local inferences across multiple embedded processor boards."
                ]
            },
            {
                role: "Undergraduate Researcher",
                company: "UIUC Power Systems Group (Prof. Richard Y. Zhang)",
                location: "Urbana, IL",
                date: "January 2020 - May 2020",
                bullets: [
                    "Researched grid system vulnerability analysis and power grid security through Reinforcement Learning (RL).",
                    "Modeled power grid grids as Bellman equations, defining reward functions around overloaded lines, and action spaces as line shutdown operations.",
                    "Applied TD-Lambda Reinforcement Learning methods to identify non-trivial, multi-level cascade failure solutions."
                ]
            },
            {
                role: "Undergraduate Researcher",
                company: "UIUC Song Research Group",
                location: "Urbana, IL",
                date: "May 2019 - November 2019",
                bullets: [
                    "Developed image processing pipelines to quantify color-strained vein loops in tumor-injected chicken embryos.",
                    "Created and labeled a vessel loop dataset, training object detection models to locate vessel clusters.",
                    "Utilized OpenCV, blob detection, and image analysis tools in Python to automatically outline loops and measure their surface area."
                ]
            }
        ];

        return (
            <section id="experience" className="section">
                <h1 className="section-title">Work Experience</h1>
                <p className="section-subtitle">My professional journey in software engineering, embedded systems, and machine learning research.</p>
                
                <div className="timeline">
                    {jobs.map((job, idx) => (
                        <div key={idx} className="timeline-item">
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <div>
                                        <h3 className="timeline-role">{job.role}</h3>
                                        <span className="timeline-company">
                                            <i className="fas fa-building"></i> {job.company}
                                        </span>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <span className="timeline-date">{job.date}</span>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                                            <i className="fas fa-map-marker-alt"></i> {job.location}
                                        </div>
                                    </div>
                                </div>
                                <ul className="timeline-bullets">
                                    {job.bullets.map((bullet, bIdx) => (
                                        <li key={bIdx}>{bullet}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }
}

export default Experience;
