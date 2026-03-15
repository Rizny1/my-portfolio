import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skillsData = [
  {
    id: 'js',
    name: 'JavaScript',
    color: '#F7DF1E',
    icon: 'JS',
    description: 'Proficient in ES6+ syntax, asynchronous programming, and DOM manipulation to build interactive and dynamic user interfaces.'
  },
  {
    id: 'react',
    name: 'React',
    color: '#61DAFB',
    icon: '⚛️',
    description: 'Experienced in building component-based architectures, managing state with Hooks/Redux, and optimizing performance in single-page applications.'
  },
  {
    id: 'python',
    name: 'Python',
    color: '#3776AB',
    icon: 'Py',
    description: 'Skilled in data analysis using Python, Pandas, and NumPy to clean, process, and analyze complex datasets.'
  },
  {
    id: 'sql',
    name: 'SQL',
    color: '#4479A1',
    icon: 'SQL',
    description: 'Proficient in writing complex queries, optimizing database performance, and managing relational databases for data-driven applications.'
  },
  {
    id: 'powerbi',
    name: 'Power BI',
    color: '#F2C811',
    icon: '📊',
    description: 'Experienced in creating insightful dashboards and interactive visualizations to transform raw data into meaningful business insights.'
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    color: '#339933',
    icon: 'Node',
    description: 'Capable of building scalable RESTful APIs, handling server-side logic, and connecting front-end applications to backend databases.'
  }
];

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState(skillsData[0]);

  // Handle circular positioning
  const radius = 180; // Distance from center
  const totalSkills = skillsData.length;

  return (
    <section id="skills" className="w-full min-h-screen flex items-center justify-center relative py-20 px-4">
      {/* Background Container */}
      <motion.div 
        className="z-10 w-full max-w-5xl glass rounded-3xl p-8 md:p-12 relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-black text-white/90 mb-4 border-b-2 border-white/10 pb-4 inline-block">
          Skills
        </h2>

        {/* Global Skill Summary based on design */}
        <p className="text-gray-300 max-w-3xl mb-16 text-lg">
          Skilled in data analysis using Python, Pandas, and NumPy to clean, process, and analyze datasets. 
          Experienced in creating insightful dashboards and visualizations using Power BI, Tableau, Matplotlib, and Seaborn. 
          Proficient in SQL and database management. Able to transform raw data into meaningful insights that support data-driven decision making.
        </p>

        {/* Circular Skills Visualization */}
        <div className="relative w-full max-w-2xl mx-auto h-[400px] md:h-[500px] flex items-center justify-center mt-12 mb-12">
          
          {/* Animated SVG connecting lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.2))' }}>
             <motion.circle 
                cx="50%" cy="50%" r={radius} 
                fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="5,5"
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
             />
          </svg>

          {/* Center Content Data */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSkill.id}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="absolute z-20 flex flex-col items-center justify-center text-center p-6 max-w-[280px]"
            >
              <motion.div 
                className="w-24 h-24 rounded-2xl flex items-center justify-center text-4xl mb-4 shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/20"
                style={{ 
                  backgroundColor: `${activeSkill.color}20`,
                  boxShadow: `0 0 40px ${activeSkill.color}40`,
                  color: activeSkill.color
                }}
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                {activeSkill.icon}
              </motion.div>
              <h3 className="text-3xl font-bold mb-2" style={{ color: activeSkill.color }}>
                {activeSkill.name}
              </h3>
              <p className="text-gray-300 text-sm">
                {activeSkill.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Circling Skill Nodes */}
          {skillsData.map((skill, index) => {
            // Calculate position on the circle (start from top: -90deg)
            const angle = (index / totalSkills) * Math.PI * 2 - Math.PI / 2;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const isActive = activeSkill.id === skill.id;

            return (
              <motion.button
                key={skill.id}
                onClick={() => setActiveSkill(skill)}
                className={`absolute w-16 h-16 rounded-full glass flex items-center justify-center text-xl font-bold transition-all duration-300 z-30
                  ${isActive ? 'scale-125 border-4' : 'hover:scale-110 border-2 border-white/10'}`}
                style={{
                   borderColor: isActive ? skill.color : 'rgba(255,255,255,0.1)',
                   backgroundColor: isActive ? `${skill.color}20` : 'rgba(255,255,255,0.05)'
                }}
                initial={{ opacity: 0, x: 0, y: 0 }}
                animate={{ opacity: 1, x, y }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1, 
                  type: "spring", 
                  stiffness: 100 
                }}
                whileHover={{ scale: isActive ? 1.25 : 1.15 }}
              >
                <span style={{ color: isActive ? skill.color : 'rgba(255,255,255,0.7)' }}>
                  {skill.icon}
                </span>
                
                {/* Node Label Tooltip */}
                {!isActive && (
                  <motion.div 
                    className="absolute -bottom-8 px-2 py-1 bg-black/80 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: skill.color }}
                  >
                    {skill.name}
                  </motion.div>
                )}
              </motion.button>
            );
          })}
        </div>

      </motion.div>
    </section>
  );
}
