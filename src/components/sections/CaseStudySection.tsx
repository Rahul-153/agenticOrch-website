import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Wrench, Stethoscope, Factory, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

export const CaseStudySection = () => {
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const projects = [
    {
      icon: Building2,
      title: 'U.S. Startup #1',
      subtitle: 'Multi-Agent Orchestration',
      description: 'Engineered a full orchestration layer integrating LangChain and Google ADK with a FastAPI backend. The system interconnects multiple open-source LLMs, enabling real-time communication between agents, APIs, and internal data sources.',
      status: 'Ongoing Partnership',
      tags: ['LangChain', 'Google ADK', 'FastAPI', 'Open-source LLMs'],
      color: 'primary'
    },
    {
      icon: Wrench,
      title: 'U.S. Startup #2',
      subtitle: 'MCP Server Development',
      description: 'Collaborating on MCP server development and enterprise-level orchestration. Our team contributes to their MCP toolkit, writes technical blogs, and engages in product discussions to improve large-scale API integration patterns.',
      status: 'Active Collaboration',
      tags: ['MCP', 'Enterprise', 'API Integration', 'Technical Writing'],
      color: 'secondary'
    },
    {
      icon: Stethoscope,
      title: 'Canadian Foot & Dental Clinics',
      subtitle: 'Healthcare AI Automation',
      description: 'Partnered to design AI-powered workflows that automate patient engagement, appointment scheduling, and operations management — reducing manual coordination and improving service efficiency.',
      status: 'Deployed',
      tags: ['Healthcare', 'Automation', 'Patient Engagement', 'Operations'],
      color: 'accent'
    },
    {
      icon: Factory,
      title: 'Canadian Enterprise Operations',
      subtitle: 'Self-Healing Systems',
      description: 'Supporting a large-scale organization with RAG-based solutions, agentic process automation, and self-healing systems designed to improve operational reliability and reduce downtime.',
      status: 'Ongoing Partnership',
      tags: ['RAG', 'Process Automation', 'Enterprise', 'Reliability'],
      color: 'primary'
    }
  ];

  const getColorClass = (color: string) => {
    switch(color) {
      case 'primary': return 'from-primary/20 to-primary/5 border-primary/30';
      case 'secondary': return 'from-secondary/20 to-secondary/5 border-secondary/30';
      case 'accent': return 'from-accent/20 to-accent/5 border-accent/30';
      default: return 'from-primary/20 to-primary/5 border-primary/30';
    }
  };

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
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-accent/10 border border-accent/20">
            <span className="text-sm text-accent font-medium">Proof of Impact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Real <span className="gradient-text">Results</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            <span className="font-semibold text-white">Multi-Agent Orchestration Projects and Industry Collaborations</span>
            <br />
            <span className="text-base mt-2 block">
              At AgenticOrch, we're actively engaged with multiple startups and organizations in North America — building, deploying, and refining advanced AI orchestration systems using open-source LLM frameworks, LangChain, Google ADK, and MCP servers. <span className="text-primary font-medium">We're open to collaborating with teams worldwide.</span>
            </span>
          </p>
        </motion.div>

        {/* Horizontal Scrolling Cards */}
        <div className="relative">
          <motion.div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                  className="flex-shrink-0 w-[380px] snap-center"
                >
                  <div className={`glass-effect rounded-2xl p-8 border h-full bg-gradient-to-br ${getColorClass(project.color)} hover:scale-[1.02] transition-all duration-300`}>
                    {/* Icon & Status */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`p-3 rounded-xl bg-${project.color}/10 border border-${project.color}/20`}>
                        <Icon className={`w-8 h-8 text-${project.color}`} />
                      </div>
                      <span className="text-xs px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                        {project.status}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className={`text-sm font-medium text-${project.color} mb-4`}>
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Navigation Arrows */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center justify-center gap-4 mt-6"
          >
            <button
              onClick={scrollLeft}
              className="p-3 rounded-full glass-effect border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors" />
            </button>
            <p className="text-sm text-gray-500">
              Navigate through projects
            </p>
            <button
              onClick={scrollRight}
              className="p-3 rounded-full glass-effect border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors" />
            </button>
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="max-w-3xl mx-auto p-8 rounded-2xl glass-effect border border-primary/20">
            <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
            <p className="text-lg text-gray-300 leading-relaxed">
              These collaborations reflect our mission — to{' '}
              <span className="text-primary font-semibold">bridge open-source AI frameworks</span> and{' '}
              <span className="text-secondary font-semibold">real-world operations</span>, delivering{' '}
              <span className="text-accent font-semibold">scalable, production-ready orchestration systems</span>.
            </p>
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
            Ready to build your orchestration system?{' '}
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-primary hover:text-primary-hover underline transition-colors cursor-pointer"
            >
              Let's talk
            </a>
          </p>
        </motion.div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};
