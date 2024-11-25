"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Game Space",
    description:
      "A web application that allows users to browse and play games online for free.",
    image: "game space.jpeg",
    technologies: ["Next.js", "TailwindCSS", "JavaScript", "React"],
    demo: "https://likith077.github.io/Game-Space/",
    github: "https://github.com/Likith077/Game-Space",
  },
  {
    title: "Face Recognition Attendance System",
    description:
      "A system that uses face recognition to mark attendance in a classroom.",
    image: "face-recognition.jpeg",
    technologies: ["Python", "OpenCV", "TensorFlow", "Computer Vision"],
   
    github: "https://github.com/Likith077/Face-Recognition-Based-Attendance-System.git",
  },
  {
    title: "Insurance Fraud Detection",
    description:
      "A system that predicts whether an insurance claim is fraudulent or not using machine learning.",
    image: "fraud detection.jpeg",
    technologies: ["Python", "Machine Learning", "Flask", "Keras",],
    
    github: "https://github.com/Likith077/Insurance-fraud-prediction-data-science.git",
  },
  {
    title: "Weather Forecast",
    description:
      "A web application that allows users to view the weather forecast for a particular location.",
    image: "weather forecast.jpeg",
    technologies: ["React", "TailwindCSS", "JavaScript", "HTML", "CSS"],
    demo: "https://likith077-weather-forecast.vercel.app/",
    github: "https://github.com/Likith077/Weather-App.git",
  },
  {
    title: "Todo List",
    description:
      "A web application that allows users to create, read, update and delete tasks.",
    image: "Todo-List.png",
    technologies: ["React", "TailwindCSS", "JavaScript", "HTML", "CSS"],
    demo: "https://likith077-todolist.vercel.app/",
    github: "https://github.com/Likith077/todolist.git",
  },
  {
    title: "Portfolio",
    description:
      "A web application that showcases my skills and projects.",
    image: "portfolio.png",
    technologies: ["React", "TailwindCSS", "JavaScript", "HTML", "CSS"],
    demo: "https://likith077-portfolio-1.vercel.app/",
    github: "https://github.com/Likith077/Portfolio.git",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="pt-16 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden group">
                <div className="aspect-video relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110 group-hover:opacity-90"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}