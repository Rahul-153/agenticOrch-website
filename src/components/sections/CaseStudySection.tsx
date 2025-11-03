import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote, CheckCircle2 } from 'lucide-react';

export const CaseStudySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const outcomes = [
    'Reduced task coordination time by 70%',
    'Integrated 3 major frameworks seamlessly',
    'Achieved 99.5% uptime in production',
    'Processed 10K+ agent interactions daily',
  ];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-accent/10 border border-accent/20">
            <span className="text-sm text-accent font-medium">Proof of Impact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Real <span className="gradient-text">Results</span>
          </h2>
        </motion.div>

        {/* Case Study Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="glass-effect rounded-3xl p-8 md:p-12 border border-white/10">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left: Story */}
              <div>
                <Quote className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
                  Multi-Agent Architecture for U.S. SaaS Startup
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Built an <span className="text-primary font-medium">MCP-driven</span> multi-agent 
                  system integrating{' '}
                  <span className="text-secondary font-medium">LangChain</span> orchestration,{' '}
                  <span className="text-accent font-medium">Google ADK</span> for cloud deployment, and{' '}
                  <span className="text-primary font-medium">custom MCP servers</span> — coordinating 
                  task automation across teams and external APIs.
                </p>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>6 Weeks</span>
                  </div>
                  <div className="w-1 h-1 bg-gray-600 rounded-full" />
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <span>SaaS Platform</span>
                  </div>
                  <div className="w-1 h-1 bg-gray-600 rounded-full" />
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>B2B</span>
                  </div>
                </div>
              </div>

              {/* Right: Outcomes */}
              <div>
                <h4 className="text-xl font-semibold mb-6 text-primary">
                  Key Outcomes
                </h4>
                <div className="space-y-4">
                  {outcomes.map((outcome, index) => (
                    <motion.div
                      key={outcome}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <span className="text-gray-300 text-lg">{outcome}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Visual Diagram Placeholder */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="mt-8 p-6 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20"
                >
                  <div className="text-center">
                    <div className="text-5xl font-bold gradient-text mb-2">
                      3x
                    </div>
                    <p className="text-sm text-gray-400">
                      Faster deployment vs. in-house development
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Tech Stack Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-10 pt-8 border-t border-white/10"
            >
              <p className="text-sm text-gray-500 mb-3">Technologies Used:</p>
              <div className="flex flex-wrap gap-2">
                {['LangChain', 'LangGraph', 'Google ADK', 'MCP', 'Python', 'TypeScript', 'Google Cloud'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-lg">
            Want to see detailed case studies?{' '}
            <a href="#contact" className="text-primary hover:text-primary-hover underline transition-colors">
              Get in touch
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
