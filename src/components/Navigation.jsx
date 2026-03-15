import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Cpu, Briefcase, Send, X, Compass, Grip } from 'lucide-react';

const navItems = [
  { id: 'hero', label: 'Home', icon: Compass },
  { id: 'about', label: 'About', icon: User },
  { id: 'skills', label: 'Skills', icon: Cpu },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'contact', label: 'Contact', icon: Send },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeItem, setActiveItem] = useState('hero');

  const handleNavClick = (id) => {
    setActiveItem(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 flex items-center">
      {/* Toggle Button / Menu Controller */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-10 p-4 rounded-full glass hover:bg-white/10 transition-colors shadow-lg flex items-center justify-center text-white/70 hover:text-white"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X size={24} /> : <Grip size={24} />}
      </motion.button>

      {/* Navigation Items (Arc around the close button, or vertical list) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.5, x: -20, transition: { duration: 0.2 } }}
            className="flex flex-col gap-4 ml-6"
          >
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeItem === item.id;
              
              return (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`group relative p-3 rounded-full flex items-center glass transition-all duration-300
                    ${isActive ? 'bg-white/20 text-white shadow-[0_0_15px_rgba(255,255,255,0.3)]' : 'text-white/60 hover:text-white hover:bg-white/10'}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={20} />
                  
                  {/* Tooltip / Label */}
                  <motion.div
                    className="absolute left-full ml-4 px-3 py-1.5 rounded-md glass text-sm font-medium whitespace-nowrap opacity-0 md:group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                  >
                    {item.label}
                  </motion.div>
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
