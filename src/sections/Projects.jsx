import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';

// Using the project data provided by the user in chat
const projectsData = [
  {
    id: 1,
    title: 'Sales Dashboard Analysis',
    description: 'Comprehensive dashboard analyzing total sales, profit, orders, and average order value across different regions and product categories using Power BI.',
    image: '/projects/Screenshot 2026-03-15 141011.png', // We'll assume the user drops the screenshot here
    tech: ['Power BI', 'Data Analysis', 'DAX'],
    demoLink: '#',
    githubLink: '#'
  },
  {
    id: 2,
    title: 'Customer Churn Analysis',
    description: 'Detailed analysis of customer churn rate by gender, age group, payment method, and state to identify key retention factors.',
    image: '/projects/Screenshot 2026-03-15 141029.png',
    tech: ['Power BI', 'SQL', 'Data Visualization'],
    demoLink: '#',
    githubLink: '#'
  },
  {
    id: 3,
    title: 'Road Accident Dashboard',
    description: 'Interactive dashboard tracking total casualties by vehicle type, location, and monthly trends to improve road safety measures.',
    image: '/projects/Screenshot 2026-03-15 141040.png',
    tech: ['Excel', 'Data Modeling', 'Dashboards'],
    demoLink: '#',
    githubLink: '#'
  },
  {
    id: 4,
    title: 'Collaborative Text Editor',
    description: 'A real-time collaborative text editor allowing multiple users to edit documents simultaneously with seamless synchronization.',
    image: '/projects/Screenshot 2026-03-15 141051.png', // Placeholder mapping
    tech: ['React', 'Node.js', 'Socket.io'],
    demoLink: '#',
    githubLink: 'https://github.com/Rizny1'
  },
  {
    id: 5,
    title: 'Uber Food Analysis',
    description: 'In-depth exploratory data analysis of Uber food delivery data to uncover patterns in order times, popular items, and delivery efficiency.',
    image: '/projects/Screenshot 2026-03-15 141100.png', // Placeholder mapping
    tech: ['Python', 'Pandas', 'Matplotlib'],
    demoLink: '#',
    githubLink: 'https://github.com/Rizny1'
  }
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    let newIndex = currentIndex + newDirection;
    if (newIndex < 0) newIndex = projectsData.length - 1;
    if (newIndex >= projectsData.length) newIndex = 0;
    setCurrentIndex(newIndex);
  };

  const currentProject = projectsData[currentIndex];

  return (
    <section id="projects" className="w-full min-h-screen flex items-center justify-center relative py-20 px-4">
      <motion.div 
        className="z-10 w-full max-w-6xl glass rounded-3xl p-6 md:p-12 relative overflow-hidden flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-black text-white/90 mb-12 border-b-2 border-white/10 pb-4 self-start">
          Projects
        </h2>

        {/* Custom 3D-feeling Image Carousel */}
        <div className="relative w-full max-w-5xl h-[400px] md:h-[500px] flex items-center justify-center -mt-6">
          
          {/* Main Carousel Track */}
          <div className="relative w-full h-full overflow-hidden flex items-center justify-center rounded-2xl glass bg-white/5 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full h-full flex flex-col md:flex-row items-center cursor-grab active:cursor-grabbing"
              >
                {/* Project Image Container */}
                <div className="w-full md:w-3/5 h-1/2 md:h-full relative overflow-hidden border-b md:border-b-0 md:border-r border-white/10">
                  {/* The images user uploaded contain white backgrounds if not cropped. We use object-cover to try and fit them without borders. */}
                  <div className="w-full h-full bg-[#1e293b] flex items-center justify-center">
                    <img 
                      src={currentProject.image} 
                      alt={currentProject.title}
                      className="w-full h-full object-cover object-center scale-[1.02]" // scale slightly to hide edges
                      onError={(e) => {
                        // Fallback if image not found
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="hidden absolute inset-0 flex items-center justify-center flex-col text-white/50">
                      <ExternalLink size={48} className="mb-4 opacity-50" />
                      <p>Image Placeholder: {currentProject.title}</p>
                      <p className="text-sm mt-2">Place image at public/{currentProject.image}</p>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="w-full md:w-2/5 h-1/2 md:h-full p-8 flex flex-col justify-center bg-gradient-to-br from-white/5 to-transparent">
                  <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                    {currentProject.title}
                  </h3>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {currentProject.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {currentProject.tech.map(t => (
                      <span key={t} className="px-3 py-1 text-sm bg-white/10 rounded-full border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-auto">
                    <a href={currentProject.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full glass hover:bg-white/10 transition-colors">
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

          {/* Navigation Arrows (Absolute positioned outside the glass card) */}
          <div className="absolute -bottom-16 right-0 flex gap-4">
            <button 
              className="p-4 rounded-full glass hover:bg-white/10 transition-all hover:scale-110 active:scale-95"
              onClick={() => paginate(-1)}
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              className="p-4 rounded-full glass hover:bg-white/10 transition-all hover:scale-110 active:scale-95"
              onClick={() => paginate(1)}
            >
              <ChevronRight size={24} />
            </button>
          </div>

        </div>

        {/* Dot Indicators */}
        <div className="flex gap-3 justify-center mt-24">
          {projectsData.map((_, i) => (
            <button 
              key={i}
              onClick={() => {
                setDirection(i > currentIndex ? 1 : -1);
                setCurrentIndex(i);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-white scale-125 shadow-[0_0_10px_white]' : 'bg-white/30 hover:bg-white/50'}`}
            />
          ))}
        </div>

      </motion.div>
    </section>
  );
}
