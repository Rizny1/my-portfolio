import React from 'react';
import { motion } from 'framer-motion';
import { Fingerprint, User, RefreshCw, Database, Send } from 'lucide-react';

const NodeGraph = () => (
  <div className="hidden md:block absolute bottom-10 inset-x-0 w-full max-w-4xl mx-auto h-40 pointer-events-none">
    <svg className="absolute w-full h-full" viewBox="0 0 800 150" fill="none" preserveAspectRatio="none">
      <motion.path
        d="M 150 100 Q 200 100, 250 50 T 400 120 T 550 80 T 650 100"
        stroke="rgba(255, 255, 255, 0.5)"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
      />
    </svg>
    <div className="absolute inset-0 flex justify-between items-center px-24">
      {/* Node items */}
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.2 }} className="w-16 h-16 rounded-full glass flex items-center justify-center transform translate-y-8"><Fingerprint className="text-white/70" size={32} /></motion.div>
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.4 }} className="w-16 h-16 rounded-full glass flex items-center justify-center transform -translate-y-8"><User className="text-white/70" size={32} /></motion.div>
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.6 }} className="w-16 h-16 rounded-full glass flex items-center justify-center transform translate-y-12"><RefreshCw className="text-white/70" size={32} /></motion.div>
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.8 }} className="w-16 h-16 rounded-full glass flex items-center justify-center transform -translate-y-4"><Database className="text-white/70" size={32} /></motion.div>
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.0 }} className="w-16 h-16 rounded-full glass flex items-center justify-center transform translate-y-6"><Send className="text-white/70" size={32} /></motion.div>
    </div>
  </div>
);

export default function Hero() {
  return (
    <section id="hero" className="w-full min-h-screen flex items-center relative overflow-hidden px-8 md:px-24">
      <div className="z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Side: Text Content */}
        <motion.div 
          className="w-full md:w-1/2 flex flex-col items-start justify-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <p className="text-2xl text-gray-300 font-medium mb-2">Hey I'm ,</p>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-widest mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            R.RIZNY
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-400 mb-6">
            Data Analyst & ICT Undergraduate
          </h2>
          
          <div className="max-w-lg">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Hello,<br/>
              A BICT Undergraduate specializing in Data Analytics and business intelligence. 
              I transform complex datasets into actionable insights using Python, SQL, and Power BI 
              with a focus on accuracy and data-driven storytelling.
            </p>
          </div>
        </motion.div>
        
        {/* Right Side: Spacer for the 3D Moon to be visible */}
        <div className="w-full md:w-1/2 h-full flex items-center justify-center min-h-[50vh]">
          {/* Moon is behind this in Background3D, but we leave space so it's visible */}
        </div>
      </div>

      <NodeGraph />
    </section>
  );
}
