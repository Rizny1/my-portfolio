import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download } from 'lucide-react';

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="w-full min-h-screen flex items-center justify-center relative py-20 px-4 md:px-8">
      {/* Container */}
      <motion.div 
        className="z-10 w-full max-w-5xl glass rounded-3xl p-8 md:p-12 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-black text-white/90 mb-8 border-b-2 border-white/10 pb-4 inline-block">
          About Me
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Column: Text & Skills */}
          <div className="w-full lg:w-2/3 flex flex-col items-start gap-6">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-300">
              Front End Developer <span className="text-white/40 px-2">|</span> UI and UX designer
            </h3>

            {/* Expandable Text Area */}
            <div className="relative w-full">
              <motion.div 
                className="text-gray-300 leading-relaxed text-lg"
                animate={{ height: isExpanded ? 'auto' : '100px' }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ overflow: 'hidden' }}
              >
                <p className="mb-4">
                  I am a final-year Information and Communication Technology (Hons) undergraduate at the Rajarata University of Sri Lanka, maintaining a strong academic standing with a GPA of 3.56/4.00.
                </p>
                <p>
                  My journey involves a deep passion for transforming complex datasets into actionable insights using tools like Python, SQL, and Power BI. As a developer, I blend my analytical mindset with modern web technologies to forge unique, impactful digital experiences.
                </p>
              </motion.div>
              
              {/* Fade out effect when collapsed */}
              <AnimatePresence>
                {!isExpanded && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[rgba(255,255,255,0.05)] to-transparent" 
                    style={{ backdropFilter: 'blur(2px)' }}
                  />
                )}
              </AnimatePresence>
            </div>

            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-6 py-2 rounded-full glass hover:bg-white/10 transition-colors text-sm font-semibold tracking-wider uppercase"
            >
              {isExpanded ? 'Show Less' : 'Read More'}
            </button>

            {/* Stack Tags */}
            <div className="mt-6 w-full">
              <h4 className="flex items-center gap-2 text-xl font-medium text-white/80 mb-4">
                <span className="text-2xl">{"</>"}</span> Technology Stack
              </h4>
              <div className="flex flex-wrap gap-3">
                {['Python', 'Pandas', 'NumPy', 'SQL', 'Power BI', 'Matplotlib', 'Excel', 'Git', 'No SQL'].map((tech) => (
                  <span key={tech} className="px-4 py-2 rounded-md glass bg-white/5 text-sm font-medium hover:bg-white/10 transition-colors cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Download Resume Button */}
            <a 
              href="/resume.pdf" 
              download 
              className="mt-8 flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all group"
            >
              <span className="text-sm font-semibold tracking-wider uppercase group-hover:text-white text-gray-300">Download Resume</span>
              <Download size={18} className="text-gray-300 group-hover:text-white" />
            </a>
          </div>

          {/* Right Column: Profile Image & Stats Cards */}
          <div className="w-full lg:w-1/3 flex flex-col items-center gap-8 md:-translate-y-12">
            
            {/* Profile Picture */}
            <motion.div 
              className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.1)] flex-shrink-0 relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-0 bg-white/5 group-hover:bg-transparent transition-colors z-10" />
              {/* Fallback color/icon if image fails to load. User will upload profile.png to public via instructions. */}
              <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                 <img src="/profile.png" alt="R. Rizny Profile" className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
                 <User className="text-white/20 hidden" size={64} />
              </div>
            </motion.div>

            {/* Stats Cards Row */}
            <div className="flex gap-4 w-full">
              <div className="flex-1 glass rounded-2xl p-6 flex flex-col items-center justify-center hover:bg-white/10 transition-colors">
                <span className="text-gray-400 text-sm mb-2">Projects</span>
                <span className="text-3xl font-bold text-white">5+</span>
              </div>
              <div className="flex-1 glass rounded-2xl p-6 flex flex-col items-center justify-center hover:bg-white/10 transition-colors">
                <span className="text-gray-400 text-sm mb-2">Certifications</span>
                <span className="text-3xl font-bold text-white">5+</span>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
