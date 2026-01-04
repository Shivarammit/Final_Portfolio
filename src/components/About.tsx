import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Cloud, Brain } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Code2,
      title: 'Backend & Systems',
      description: 'Expert in Data Structures, Operating Systems, and Computer Networks'
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Building scalable cloud infrastructure and distributed systems'
    },
    {
      icon: Brain,
      title: 'AI & Innovation',
      description: 'Exploring AI, Blockchain, and cutting-edge technologies'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-12 rounded-full" />

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="backdrop-blur-lg bg-[#111827]/50 border border-cyan-500/20 rounded-2xl p-8 md:p-12 shadow-2xl hover:border-cyan-500/40 transition-all duration-300"
            >
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a <span className="text-cyan-400 font-semibold">Computer Science Engineer</span> with strong foundations in <span className="text-cyan-400 font-semibold">Data Structures, Operating Systems, Computer Networks, Backend Systems, and Cloud Technologies</span>. As a <span className="text-cyan-400 font-semibold">former Barclays Technology Intern</span>, I've worked on enterprise-scale applications and collaborated with senior engineers on modern software development practices.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm passionate about <span className="text-cyan-400 font-semibold">building scalable applications, applied research, and security-focused systems</span>. My recent work includes developing advanced deep learning models for computer vision, implementing quantum-safe cryptographic protocols, and architecting secure cloud infrastructure. I'm actively exploring <span className="text-cyan-400 font-semibold">AI, Distributed Systems, Blockchain, and Quantum-safe security models</span> to solve real-world problems at scale.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                    className="group p-6 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105"
                  >
                    <item.icon className="w-10 h-10 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
