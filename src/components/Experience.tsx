import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const responsibilities = [
    'Built interactive Angular dashboards for operational metrics monitoring',
    'Developed Flask-based REST APIs for enterprise-scale data processing',
    'Worked with SQLite and large datasets for data analysis and reporting',
    'Collaborated in Agile sprints with cross-functional teams',
    'Contributed to automation initiatives and process improvements'
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            Experience
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-16 rounded-full" />

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full hidden md:block" />

              <div className="md:ml-12 backdrop-blur-lg bg-[#111827]/50 border border-cyan-500/20 rounded-2xl p-8 md:p-10 shadow-2xl hover:border-cyan-500/40 transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      Technology Summer Intern
                    </h3>
                    <div className="flex items-center gap-2 text-cyan-400 text-lg font-semibold mb-3">
                      <Briefcase className="w-5 h-5" />
                      <span>Barclays</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">Summer 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">India</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {responsibilities.map((responsibility, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                      className="flex items-start gap-3 group"
                    >
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-150 transition-transform flex-shrink-0" />
                      <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors">
                        {responsibility}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-cyan-500/20">
                  <div className="flex flex-wrap gap-3">
                    {['Angular', 'Flask', 'REST APIs', 'SQLite', 'Agile', 'Enterprise Scale'].map(
                      (skill, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ delay: 0.8 + index * 0.05 }}
                          className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium hover:border-cyan-400 hover:scale-105 transition-all duration-300"
                        >
                          {skill}
                        </motion.span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
