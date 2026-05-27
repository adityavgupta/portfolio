import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Resume from './pages/Resume';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Resume />
      </main>
      <footer style={{ 
        textAlign: 'center', 
        padding: '2.5rem 0', 
        borderTop: '1px solid rgba(255, 255, 255, 0.05)', 
        background: '#090d16',
        fontSize: '0.9rem', 
        color: 'var(--text-muted)' 
      }}>
        <p>&copy; {new Date().getFullYear()} Aditya Vikram Gupta. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
