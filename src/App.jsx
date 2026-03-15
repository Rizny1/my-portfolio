import React from 'react';
import Navigation from './components/Navigation';
import Background3D from './components/Background3D';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="relative w-full bg-[#030014] text-white selection:bg-white/30 selection:text-white">
      {/* 3D Global Background */}
      <Background3D />
      
      {/* Floating Left Navigation */}
      <Navigation />

      {/* Main Content Area - Scrollable */}
      <main className="w-full relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
