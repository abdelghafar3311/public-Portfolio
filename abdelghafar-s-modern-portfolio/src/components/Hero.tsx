import { Mail, MapPin, Phone, Github, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const contactInfo = [
    { icon: Mail, text: "abdelghafar3311@gmail.com", href: "mailto:abdelghafar3311@gmail.com" },
    { icon: Phone, text: "01030826549", href: "tel:01030826549" },
    { icon: MapPin, text: "Giza, Egypt" },
    { icon: Github, text: "github.com/abdelghafar3311", href: "https://github.com/abdelghafar3311" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-hero-gradient text-primary-foreground">
      <div className="section-container text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Abdelghafar Nagy Ahmed
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-light">
            Philosophy Graduate | Web Developer | Problem Solver
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
          {contactInfo.map((item, index) => (
            <div key={index} className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <item.icon className="w-4 h-4" />
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="link-underline"
                >
                  {item.text}
                </a>
              ) : (
                <span>{item.text}</span>
              )}
            </div>
          ))}
        </div>

        <div className="flex gap-4 justify-center pt-4">
          <Button
            size="lg"
            variant="secondary"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
            asChild
          >
            <a href="https://drive.google.com/file/d/1--VWJ_j4KGKnBLC1u16EWqm8zYFd1_Op/view?usp=drive_link" rel="noopener noreferrer" download="Abdelghafar_Nagy_Ahmed_CV.pdf">
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
            asChild
          >
            <a href="https://www.linkedin.com/in/abdelghafarnagy/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
