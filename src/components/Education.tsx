import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const educationData = [
  {
    institution: 'Madras Institute of Technology, Anna University',
    degree: 'Bachelor of Engineering',
    field: 'Computer Science and Engineering',
    year: '2022 – 2026',
    location: 'Chennai, India',
    color: 'from-cyan-500/20 to-blue-500/20',
    borderColor: 'border-cyan-500/30'
  },
  {
    institution: 'Chettinad Vidya Mandir',
    degree: 'High School',
    field: 'Computer Science',
    year: '2020 – 2022',
    location: 'Karur, India',
    color: 'from-blue-500/20 to-purple-500/20',
    borderColor: 'border-blue-500/30'
  }
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            Education
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-16 rounded-full" />

          <div className="max-w-4xl mx-auto space-y-6">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`backdrop-blur-lg bg-gradient-to-br ${edu.color} border ${edu.borderColor} rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-[#111827]/50 rounded-lg mt-1">
                    <GraduationCap className="w-6 h-6 text-cyan-400" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-1">{edu.degree}</h3>
                    <p className="text-cyan-300 text-lg font-semibold mb-2">{edu.institution}</p>
                    <p className="text-gray-300 text-base">{edu.field}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-6">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm">{edu.year}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm">{edu.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
