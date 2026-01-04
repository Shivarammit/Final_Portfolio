import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Award, Code, Users } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'GeeksforGeeks Hackathon Finalist',
    description: 'Competed among top developers nationwide',
    color: 'from-yellow-500/20 to-orange-500/20',
    borderColor: 'border-yellow-500/30',
    iconColor: 'text-yellow-400'
  },
  {
    icon: Award,
    title: 'FOSSEE Mapathon Notable Participant',
    description: 'IIT Bombay - Open Source Contribution',
    color: 'from-cyan-500/20 to-blue-500/20',
    borderColor: 'border-cyan-500/30',
    iconColor: 'text-cyan-400'
  },
  {
    icon: Trophy,
    title: 'TechQuiz 2023 Winner',
    description: 'First place in technical competition',
    color: 'from-green-500/20 to-emerald-500/20',
    borderColor: 'border-green-500/30',
    iconColor: 'text-green-400'
  },
  {
    icon: Code,
    title: '300+ Problems Solved',
    description: 'LeetCode and HackerRank - Competitive Programming',
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-purple-500/30',
    iconColor: 'text-purple-400'
  },
  {
    icon: Users,
    title: 'NSO Active Member',
    description: 'National Sports Organisation',
    color: 'from-cyan-500/20 to-teal-500/20',
    borderColor: 'border-teal-500/30',
    iconColor: 'text-teal-400'
  }
];

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            Achievements
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-16 rounded-full" />

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative"
              >
                <div
                  className={`backdrop-blur-lg bg-gradient-to-br ${achievement.color} border ${achievement.borderColor} rounded-2xl p-6 shadow-xl hover:scale-105 transition-all duration-300 h-full`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`p-3 bg-[#111827]/50 rounded-lg group-hover:scale-110 transition-transform`}
                    >
                      <achievement.icon className={`w-6 h-6 ${achievement.iconColor}`} />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {achievement.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
