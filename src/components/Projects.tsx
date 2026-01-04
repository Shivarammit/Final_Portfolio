import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Efficient Dual-Stream CNN-LSTM Model for Embedded Visual Odometry',
    description:
      'Conducted a research project under Singapore University of Social Sciences (SUSS), developing a dual-stream CNN-LSTM visual odometry model using stereo imagery from the KITTI dataset to estimate real-time vehicle motion as a GPS fallback. Designed a reliable localization pipeline for autonomous and robotic systems, enabling stable pose estimation during GPS-loss scenarios through deep learning-based motion prediction.',
    techStack: [
      { name: 'Python', icon: 'py' },
      { name: 'TensorFlow', icon: 'tensorflow' },
      { name: 'PyTorch', icon: 'pytorch' }
    ],
    tags: ['Deep Learning', 'Computer Vision', 'Research', 'CNN', 'LSTM', 'KITTI Dataset']
  },
  {
    title: 'Secure Cloud Forensic System',
    description:
      'Developed a secure cloud forensic system ensuring confidentiality, integrity, and authenticity of digital evidence using optimized cryptographic key generation, multi-key homomorphic encryption, and blockchain-based evidence hashing to maintain tamper-proof chain of custody. Focused on secure evidence storage, encrypted computation, and performance-aware cryptographic design.',
    techStack: [
      { name: 'Python', icon: 'py' },
      { name: 'Java', icon: 'java' },
      { name: 'Blockchain', icon: 'solidity' },
      { name: 'AWS', icon: 'aws' },
      { name: 'MySQL', icon: 'mysql' }
    ],
    tags: ['Cryptography', 'Blockchain', 'Cloud Security', 'Homomorphic Encryption']
  },
  {
    title: 'Secure BB84 Quantum Key Distribution Simulation',
    description:
      'Simulated the BB84 Quantum Key Distribution protocol using Python and Qiskit to demonstrate secure quantum key exchange. Visualized how eavesdropping disturbs quantum states and analyzed error rates and key mismatches caused by interception. Implemented sender-receiver communication, basis selection, key sifting, and statistical validation of quantum security principles.',
    techStack: [
      { name: 'Python', icon: 'py' },
      { name: 'Qiskit', icon: 'py' }
    ],
    tags: ['Quantum Cryptography', 'Security', 'Simulation', 'Quantum Computing']
  },
  {
    title: 'Crop Recommendation System',
    description:
      'Built a crop recommendation system using machine learning to assist farmers in selecting optimal crops based on soil nutrients and environmental parameters. The system analyzes multiple data points to provide data-driven recommendations for improving agricultural productivity.',
    techStack: [
      { name: 'Python', icon: 'py' },
      { name: 'Machine Learning', icon: 'pytorch' },
      { name: 'Data Analysis', icon: 'py' }
    ],
    tags: ['Machine Learning', 'Agriculture', 'Data Science'],
    github: 'https://github.com/Shivarammit/Crop-Recommendation-System'
  },
  {
    title: 'Operational Excellence Dashboard',
    description:
      'Built a full-stack analytics dashboard to monitor operational performance metrics in real time. Designed the frontend using Angular and developed scalable Flask-based REST APIs to fetch, process, and visualize enterprise data. Implemented interactive charts, KPI tracking, and automation workflows to support data-driven decision-making across teams.',
    techStack: [
      { name: 'Angular', icon: 'angular' },
      { name: 'Flask', icon: 'flask' },
      { name: 'SQLite', icon: 'sqlite' },
      { name: 'Python', icon: 'py' }
    ],
    tags: ['Full Stack', 'REST APIs', 'Data Visualization', 'Analytics']
  }
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-16 rounded-full" />

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="backdrop-blur-lg bg-[#111827]/50 border border-cyan-500/20 rounded-2xl p-8 md:p-12 shadow-2xl hover:border-cyan-500/40 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <h3 className="text-3xl font-bold text-white">{projects[currentIndex].title}</h3>
                    {projects[currentIndex].github && (
                      <a
                        href={projects[currentIndex].github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 p-2 text-cyan-400 hover:bg-cyan-500/20 rounded-lg transition-all"
                        aria-label="View on GitHub"
                      >
                        <ExternalLink className="w-6 h-6" />
                      </a>
                    )}
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    {projects[currentIndex].description}
                  </p>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {projects[currentIndex].tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-cyan-500/20 pt-6">
                    <h4 className="text-xl font-semibold text-cyan-400 mb-4">Tech Stack</h4>
                    <div className="flex flex-wrap gap-4">
                      {projects[currentIndex].techStack.map((tech, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="group flex items-center gap-3 px-4 py-3 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg hover:border-cyan-400 hover:scale-105 transition-all duration-300"
                        >
                          <img
                            src={`https://skillicons.dev/icons?i=${tech.icon}`}
                            alt={tech.name}
                            className="w-8 h-8"
                          />
                          <span className="text-white font-medium">{tech.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-center items-center gap-4 mt-8">
                <button
                  onClick={prevProject}
                  className="group p-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-110"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="w-6 h-6 text-cyan-400" />
                </button>

                <div className="flex gap-2">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? 'bg-cyan-400 w-8'
                          : 'bg-cyan-500/30 hover:bg-cyan-500/50'
                      }`}
                      aria-label={`Go to project ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextProject}
                  className="group p-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-110"
                  aria-label="Next project"
                >
                  <ChevronRight className="w-6 h-6 text-cyan-400" />
                </button>
              </div>

              <div className="text-center mt-6">
                <span className="text-gray-400">
                  Project {currentIndex + 1} of {projects.length}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
