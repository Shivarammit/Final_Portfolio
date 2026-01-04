import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const roles = [
  'Software Engineer',
  'Backend & Cloud Developer',
  'AI & Systems Enthusiast'
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
        >
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent"
            >
              Shivaram Madankumar
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-16 flex items-center justify-center lg:justify-start mb-8"
            >
              <span className="text-xl md:text-2xl text-cyan-400 font-mono">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-gray-400 text-base md:text-lg mb-12"
            >
              Building scalable backend systems, cloud infrastructure, and AI-powered solutions
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
            <a
              href="https://github.com/Shivarammit"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105"
            >
              <div className="flex items-center gap-2">
                <Github className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform" />
                <span className="text-white font-medium">GitHub</span>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/shivaram-m-57a12b292/"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105"
            >
              <div className="flex items-center gap-2">
                <Linkedin className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span className="text-white font-medium">LinkedIn</span>
              </div>
            </a>

            <a
              href="mailto:shivaramcvm@yahoo.in"
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105"
            >
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span className="text-white font-medium">Email</span>
              </div>
            </a>

            <button
              onClick={scrollToProjects}
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
            >
              <span className="text-white font-bold">View Projects</span>
            </button>
          </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-80 h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl" />
              <img
                src="/whatsapp_image_2025-12-15_at_3.20.32_pm.jpeg"
                alt="Shivaram Madankumar"
                className="relative w-full h-full object-cover rounded-3xl shadow-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-cyan-400 animate-bounce" />
      </motion.div>
    </section>
  );
}
