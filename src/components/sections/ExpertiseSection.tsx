import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Network, Database, Brain, Workflow, Activity } from 'lucide-react';

const services = [
  {
    icon: Network,
    title: 'Agentic Orchestration Design',
    description: 'Designing reasoning loops, delegation logic, and cross-agent collaboration using ADK + AutoGen + CrewAI.',
    gradient: 'from-primary/20 to-secondary/20',
  },
  {
    icon: Database,
    title: 'MCP Integrations',
    description: 'Custom Model Context Protocol servers that connect LLMs to enterprise APIs and private data.',
    gradient: 'from-secondary/20 to-accent/20',
  },
  {
    icon: Brain,
    title: 'LangChain & LlamaIndex Pipelines',
    description: 'Context-aware retrieval, memory, and reasoning frameworks for adaptive agents.',
    gradient: 'from-accent/20 to-primary/20',
  },
  {
    icon: Workflow,
    title: 'OpenAI Swarm & Semantic Kernel Ops',
    description: 'Multi-agent planning, tool-use orchestration, and execution monitoring.',
    gradient: 'from-primary/20 to-accent/20',
  },
  {
    icon: Activity,
    title: 'AI Workflow Observability',
    description: 'Dashboards tracking latency, success rates, and conversation context in real time.',
    gradient: 'from-secondary/20 to-primary/20',
  },
];

export const ExpertiseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-secondary/10 border border-secondary/20">
            <span className="text-sm text-secondary font-medium">Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What We <span className="gradient-text">Build</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            End-to-end agentic infrastructure that transforms isolated AI tools into coordinated intelligent systems.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full glass-effect rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover Effect Line */}
                  <div className="mt-6 h-1 w-0 bg-gradient-to-r from-primary to-secondary rounded-full group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass-effect rounded-2xl p-8 border border-primary/20 max-w-3xl mx-auto">
            <p className="text-lg text-gray-300">
              <span className="text-primary font-semibold">Production-ready</span> systems with{' '}
              <span className="text-secondary font-semibold">enterprise-grade</span> security,
              observability, and scalability built in from day one.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
