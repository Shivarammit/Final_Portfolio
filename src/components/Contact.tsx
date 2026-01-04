import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shivaramcvm@gmail.com',
      href: 'mailto:shivaramcvm@gmail.com',
      color: 'from-cyan-500/20 to-blue-500/20'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Shivarammit',
      href: 'https://github.com/Shivarammit',
      color: 'from-gray-500/20 to-slate-500/20'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Shivaram Madankumar',
      href: 'https://www.linkedin.com/in/shivaram-m-57a12b292/',
      color: 'from-blue-500/20 to-cyan-500/20'
    }
  ];

  const additionalLinks = [
    {
      label: 'LeetCode',
      value: 'leetcode.com/u/shivaram_mit',
      href: 'https://leetcode.com/u/shivaram_mit/',
      icon: '⚡'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8 rounded-full" />

          <p className="text-gray-400 text-lg text-center max-w-2xl mx-auto mb-16">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
          </p>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group backdrop-blur-lg bg-[#111827]/50 border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <method.icon className="w-6 h-6 text-cyan-400" />
                </div>

                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-cyan-400 transition-colors">
                  {method.label}
                </h3>

                <p className="text-gray-400 text-sm break-words">{method.value}</p>
              </motion.a>
            ))}
          </div>

          <div className="max-w-5xl mx-auto mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {additionalLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  className="group px-6 py-3 backdrop-blur-lg bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl hover:border-yellow-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/20"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xl group-hover:animate-pulse">{link.icon}</span>
                    <div>
                      <p className="text-yellow-400 font-semibold text-sm">{link.label}</p>
                      <p className="text-gray-400 text-xs">{link.value}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center"
          >
            <a
              href="mailto:shivaram.madankumar@gmail.com"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
            >
              <Send className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
              <span className="text-white font-bold">Send Message</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-20 pt-8 border-t border-cyan-500/20 text-center"
      >
        <p className="text-gray-400 text-sm">
          © 2024 Shivaram Madankumar. Built with React, Tailwind CSS, and Framer Motion.
        </p>
      </motion.footer>
    </section>
  );
}
