import React, { useState } from 'react';
import dukegraden from '../img/Duke_gardens.jpg';
import cherry_blossoms from '../img/Cherryblossoms.jpg';
import whale from '../img/Whale.jpg';
import tiger from '../img/Tiger.jpg';

const About = () => {
    const [lightbox, setLightbox] = useState({ src: null, alt: '' });

    const openLightbox = (src, alt) => {
        setLightbox({ src, alt });
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightbox({ src: null, alt: '' });
        document.body.style.overflow = '';
    };

    const photos = [
        { src: dukegraden, alt: 'Sarah P. Duke Gardens', caption: 'Duke Gardens, Durham, NC' },
        { src: cherry_blossoms, alt: 'Cherry Blossoms', caption: 'Cherry Blossoms in Bloom' },
        { src: whale, alt: 'Humpback Whale', caption: 'Humpback Whale, Monterey Bay' },
        { src: tiger, alt: 'Tiger in Bandhavgarh National Park', caption: 'Tiger Cub, Bandhavgarh, India'}
    ];

    return (
        <section id="about" className="section">
            <h1 className="section-title">About Me</h1>
            <p className="section-subtitle">Here is a little background on who I am, what drives me, and what I do outside of work.</p>

            <div className="about-wrapper">
                <div className="about-bio">
                    <div className="glass-card" style={{ marginBottom: '2rem' }}>
                        <h3 style={{ marginBottom: '1rem', color: 'var(--accent-secondary)' }}>My Background</h3>
                        <p>
                            I completed my Master of Science in Computer Engineering at the <strong>University of Michigan, Ann Arbor</strong>,
                            specializing in Signal &amp; Image Processing and Machine Learning. Before that, I earned my Bachelor of Science
                            in Computer Engineering from the <strong>University of Illinois at Urbana-Champaign (UIUC)</strong>.
                        </p>
                        <p>
                            Currently, I work as a Software Engineer at <strong>KLA Corporation</strong> in Silicon Valley. I am a member of the Machine Control
                            Team, where I build high-performance controls, image processing tools, and calibration systems for wafer inspection machines.
                        </p>
                    </div>

                    <div className="glass-card" style={{ marginBottom: '2rem' }}>
                        <h3 style={{ marginBottom: '1rem', color: 'var(--accent-primary)' }}>What Motivates Me?</h3>
                        <p>
                            I am fascinated by emerging technologies and how they shape the world. I thrive on translating theoretical machine
                            learning, reinforcement learning, and computer vision concepts into robust software solutions. Reading, listening,
                            and learning about new technology is what fuels my professional drive.
                        </p>
                    </div>

                    <div className="glass-card">
                        <h3 style={{ marginBottom: '1rem', color: 'var(--accent-tertiary)' }}>Interests &amp; Hobbies</h3>
                        <p>
                            When I'm not tinkering around machines, writing code or other academic pursuits, I enjoy outdoors and creative pursuits!
                            I am a passionate rock climber, photographer and badminton player. I am a part of a band with my co-workers where I
                            play guitar, drums, and sing!
                        </p>
                        <p>
                            My other hobbies include traveling, origami, swimming, golfing, and gaming.
                        </p>
                    </div>
                </div>

                <div className="about-gallery">
                    <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Photography Showcase</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>A couple of my favorite shots. Find more on my social accounts!</p>

                    {photos.map((photo, idx) => (
                        <div
                            key={idx}
                            className="about-image-card"
                            onClick={() => openLightbox(photo.src, photo.alt)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === 'Enter' && openLightbox(photo.src, photo.alt)}
                            title="Click to enlarge"
                        >
                            <img src={photo.src} alt={photo.alt} />
                            <div className="about-image-overlay">
                                <p className="about-image-title">{photo.caption}</p>
                                <span className="about-image-hint"><i className="fas fa-expand-alt"></i> Click to enlarge</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {lightbox.src && (
                <div className="lightbox-backdrop" onClick={closeLightbox}>
                    <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
                        <i className="fas fa-times"></i>
                    </button>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <img src={lightbox.src} alt={lightbox.alt} className="lightbox-img" />
                    </div>
                </div>
            )}
        </section>
    );
};

export default About;