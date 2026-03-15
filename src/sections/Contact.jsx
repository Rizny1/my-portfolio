import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Map, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate network request
    setTimeout(() => {
      setFormStatus('sent');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="w-full min-h-screen flex items-center justify-center relative py-20 px-4">
      <motion.div 
        className="z-10 w-full max-w-5xl glass rounded-3xl p-6 md:p-12 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-black text-white/90 mb-12 border-b-2 border-white/10 pb-4 inline-block">
          Contact Me
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column: Info & Map */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            
            {/* Contact Info Card */}
            <div className="glass rounded-2xl p-6 border border-white/10 flex flex-col gap-6">
              <h3 className="text-xl font-semibold text-gray-300 border-b border-white/10 pb-2">Contact Info</h3>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone NO</p>
                  <p className="text-white font-medium">+94 74 232 2292</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:riyalrizny1@gmail.com" className="text-white font-medium hover:text-blue-400 transition-colors">
                    riyalrizny1@gmail.com
                  </a>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="flex gap-4 mt-4">
                <a 
                  href="https://github.com/Rizny1" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex-1 py-3 px-4 glass rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-all text-sm font-semibold hover:-translate-y-1"
                >
                  <Github size={18} /> GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/rizny" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex-1 py-3 px-4 glass rounded-xl flex items-center justify-center gap-2 hover:bg-[#0A66C2]/20 transition-all text-sm font-semibold hover:-translate-y-1"
                >
                  <Linkedin size={18} /> LinkedIn
                </a>
              </div>
            </div>

            {/* Map Placeholder Card */}
            <div className="glass rounded-2xl p-2 border border-white/10 flex-1 min-h-[150px] relative overflow-hidden group">
               {/* A generic world map SVG background pattern */}
               <div className="absolute inset-0 opacity-30 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/80 to-transparent" />
               <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white/80">
                 <Map size={16} /> Sri Lanka
               </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="w-full lg:w-1/2">
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8 flex flex-col gap-6 h-full border border-white/10">
              <h3 className="text-2xl font-semibold text-gray-200 mb-2">Your Message</h3>
              
              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-400 font-medium ml-1">Full Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-400 font-medium ml-1">Email</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col gap-1 flex-1 relative">
                <label className="text-sm text-gray-400 font-medium ml-1 flex items-center">
                  Write the Message
                  <span className="ml-2 w-full h-[1px] bg-gradient-to-r from-blue-500 to-transparent flex-1 mt-1 block max-w-[100px]" />
                </label>
                <textarea 
                  required
                  rows="5"
                  className="w-full h-full min-h-[150px] bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="I'd like to work with you on a project..."
                />
              </div>

              <button 
                type="submit"
                disabled={formStatus !== 'idle'}
                className={`group relative overflow-hidden rounded-lg px-6 py-4 font-semibold text-white transition-all 
                  ${formStatus === 'idle' ? 'bg-blue-600 hover:bg-blue-500' : 
                    formStatus === 'sending' ? 'bg-blue-800 cursor-not-allowed' : 'bg-emerald-600'}`}
              >
                <div className="relative z-10 flex items-center justify-center gap-2">
                  {formStatus === 'idle' && <>LAUNCH MESSAGE <Send size={18} className="group-hover:translate-x-1 transition-transform" /></>}
                  {formStatus === 'sending' && <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}><RefreshCw size={18} /></motion.div>}
                  {formStatus === 'sent' && 'MESSAGE SENT!'}
                </div>
              </button>
            </form>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
