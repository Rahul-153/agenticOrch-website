import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20"
          >
            <span className="text-sm text-primary font-medium">Our Vision</span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
          >
            From Automation to{' '}
            <span className="gradient-text">Orchestration</span>
          </motion.h2>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6 text-lg text-gray-300 leading-relaxed"
          >
            <p>
              Agentic Orch engineers the <span className="text-primary font-medium">orchestration and integration layer</span> that enables AI agents to communicate, reason, and execute together.
            </p>
            <p>
              We specialize in three core pillars —{' '}
              <span className="text-secondary font-medium">LangChain (with LangGraph and LangSmith)</span> for open-source agent orchestration and monitoring,{' '}
              <span className="text-primary font-medium">Google Agent Development Kit (ADK)</span> for cloud-native orchestration within Google Cloud and Workspace environments,{' '}
              and <span className="text-accent font-medium">Model Context Protocol (MCP)</span> for building custom API integrations and external tool connectivity —
              delivering cohesive, production-ready agentic systems.
            </p>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 relative"
          >
            <div className="glass-effect rounded-2xl p-8 border border-primary/20">
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                {[
                  'LangChain',
                  'LangGraph',
                  'LangSmith',
                  'Google ADK',
                  'Model Context Protocol',
                ].map((framework, index) => (
                  <motion.div
                    key={framework}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 transition-colors"
                  >
                    <span className="text-sm font-medium text-gray-200">
                      {framework}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Connection Lines */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
              <svg className="w-full h-full opacity-20">
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="40"
                  stroke="#00C2FF"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 2, delay: 1 }}
                />
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="80"
                  stroke="#6A5CFF"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 2, delay: 1.2 }}
                />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
