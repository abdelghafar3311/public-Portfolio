import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Tager – React CRUDs Backend",
      description: "A web platform connecting property owners with entrepreneurs. Improved skills in data handling, user interfaces, and backend integration using Express.js & Next.js.",
      tech: ["React", "Next.js", "Express.js", "Backend Integration"],
      links: {
        live: "https://tager-frontend.vercel.app/",
        githubFrontend: "https://github.com/abdelghafar3311/Tager-Frontend",
        githubBackend: "https://github.com/abdelghafar3311/react-cruds-backend---express",
      },
    },
    {
      title: "React-CRUDs",
      description: "Desktop-like web app for managing sales, purchases, and inventory. Strengthened understanding of structured data and workflow organization.",
      tech: ["React", "Data Management", "CRUD Operations"],
      links: {
        live: "https://react-cruds.vercel.app",
        github: "https://github.com/abdelghafar3311/React-Cruds",
      },
    },
    {
      title: "CRUDS-JS",
      description: "Simple CRUD system for creating, editing, viewing, and deleting records. Enhanced ability to manage datasets and clean interfaces.",
      tech: ["JavaScript", "CRUD", "Data Management"],
      links: {
        live: "https://cruds-js-ft5a.vercel.app/",
        github: "https://github.com/abdelghafar3311/CRUDS-JS",
      },
    },
    {
      title: "Chrome Extension – Links Manager",
      description: "Browser extension for saving and backing up important links. Sharpened skills in data storage, browser APIs, and practical tool creation.",
      tech: ["JavaScript", "Browser APIs", "Chrome Extensions"],
      links: {
        live: "https://extension-chrome-links-6frc.vercel.app/",
        github: "https://github.com/abdelghafar3311/Extension-Chrome--Links",
      },
    },
  ];

  return (
    <section id="projects" className="bg-section-bg">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">
          Technical Experience & Projects
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Hands-on experience building web applications with modern technologies
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 card-hover flex flex-col">
              <h3 className="text-xl font-bold mb-3 text-primary">{project.title}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.links.live && (
                  <Button
                    variant="default"
                    size="sm"
                    className="bg-accent hover:bg-accent/90"
                    asChild
                  >
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.links.github && (
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                  >
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                )}
                {project.links.githubFrontend && (
                  <>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                    >
                      <a href={project.links.githubFrontend} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Frontend
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                    >
                      <a href={project.links.githubBackend} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Backend
                      </a>
                    </Button>
                  </>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
