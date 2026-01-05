import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const techCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Java', icon: 'java' },
      { name: 'Python', icon: 'py' },
      { name: 'C', icon: 'c' },
      { name: 'JavaScript', icon: 'js' },
      { name: 'PHP', icon: 'php' }
    ]
  },
  {
    title: 'Frontend & Backend Frameworks',
    skills: [
      { name: 'React', icon: 'react' },
      { name: 'Angular', icon: 'angular' },
      { name: 'Flask', icon: 'flask' },
      { name: 'Django', icon: 'django' },
      { name: 'FastAPI', icon: 'fastapi' },
      { name: 'Node.js', icon: 'nodejs' }
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', icon: 'mysql' },
      { name: 'SQLite', icon: 'sqlite' },
      { name: 'PostgreSQL', icon: 'postgres' },
      { name: 'MongoDB', icon: 'mongodb' }
    ]
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', icon: 'aws' },
      { name: 'Azure', icon: 'azure' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Linux', icon: 'linux' },
      { name: 'github', icon: 'github'},
      { name: 'git', icon: 'git' },
      { name: 'gitlab', icon: 'gitlab'}
    ]
  },
  {
    title: 'AI / ML & Blockchain',
    skills: [
      { name: 'TensorFlow', icon: 'tensorflow' },
      { name: 'PyTorch', icon: 'pytorch' },
      { name: 'Blockchain', icon: 'solidity' }
    ]
  },
];

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tech-stack" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            Tech Stack
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-16 rounded-full" />

          <div className="max-w-6xl mx-auto space-y-12">
            {techCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                className="backdrop-blur-lg bg-[#111827]/50 border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">{category.title}</h3>

                <div className="flex flex-wrap gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05, duration: 0.4 }}
                      className="group relative"
                    >
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-400 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/30">
                          <img
                            src={`https://skillicons.dev/icons?i=${skill.icon}`}
                            alt={skill.name}
                            className="w-10 h-10"
                          />
                        </div>
                        <span className="text-gray-300 text-sm font-medium group-hover:text-cyan-400 transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
