import React from 'react';
import Navbar from './components/Navbar';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="content">
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}

export default App;
