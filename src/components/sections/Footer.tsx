import { Linkedin, Mail, FileText } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-white/10">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-3">
              Agentic Orch
            </h3>
            <p className="text-gray-400 text-sm">
              Orchestrating Intelligence for the AI Era
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/company/agenticorch"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 flex items-center justify-center transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-primary transition-colors" />
              </a>
              <a
                href="mailto:hello@agenticorch.ai"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 flex items-center justify-center transition-all hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-gray-400 hover:text-primary transition-colors" />
              </a>
              <a
                href="/blog"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 flex items-center justify-center transition-all hover:scale-110"
                aria-label="Blog"
              >
                <FileText className="w-5 h-5 text-gray-400 hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {currentYear} Agentic Orch — Orchestrating Intelligence
            </p>
            <div className="flex gap-6 text-xs text-gray-500">
              <span>Built with React & Tailwind</span>
              <span>•</span>
              <span>Powered by AI Agents</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
    </footer>
  );
};
