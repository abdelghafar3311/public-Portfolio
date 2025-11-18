import { Mail, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-hero-gradient text-primary-foreground py-12">
      <div className="section-container">
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-bold">Let's Connect</h3>
          <p className="text-primary-foreground/90">
            Open to opportunities and collaborations
          </p>

          <div className="flex justify-center gap-6 pt-4">
            <a
              href="mailto:abdelghafar3311@gmail.com"
              className="flex items-center gap-2 hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
            <a
              href="https://github.com/abdelghafar3311"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/abdelghafarnagy/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="pt-8 border-t border-primary-foreground/20">
            <p className="text-sm text-primary-foreground/70">
              © {new Date().getFullYear()} Abdelghafar Nagy Ahmed. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
