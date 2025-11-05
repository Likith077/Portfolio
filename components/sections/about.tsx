"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const skills = {
  frontend: ["React", "Next.js", "JavaScript", "TailwindCSS", "TypeScript", "HTML", "CSS"],
  backend: ["Python", "Django", "Node.js", "Express"],
  database: ["MySQL","MongoDB",],
  tools: ["Git","Linux", "AWS", "Windows"],
};

const certifications = [
  {
    title: "J.P. Morgan Software Engineering Job Simulation",
    issuer: "Forage",
    date: "2024",
  },
  {
    title: "Foundations of Web Development: CSS, Bootstrap, JS, React",
    issuer: "Udemy",
    date: "2024",
  },
 
  {
    title: "Next.js Web Dev: Master this Powerful React Framework ",
    issuer: "Udemy",
    date: "2024",
  },
   {
    title: "Front End Development Libraries",
    issuer: "freeCodeCamp",
    date: "2024",
  }, 
  {
    title: "Responsive Web Design Certification",
    issuer: "freeCodeCamp",
    date: "2023",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2023",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="pt-16 md:pt-16 pb-10 -mt-20 md:mt-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
          Hi I'm a Likith Nirvan passionate Full Stack Developer with a experience in building
          web applications. I specialize in creating efficient, scalable, and
          user-friendly solutions using modern technologies.
        </p>

        <Tabs defaultValue="skills" className="mb-12">
          <TabsList>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
          </TabsList>
          <TabsContent value="skills">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <Card key={category} className="p-6">
                  <h3 className="font-semibold mb-4 capitalize">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="certifications">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert) => (
                <Card key={cert.title} className="p-6">
                  <h3 className="font-semibold mb-2">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground">{cert.date}</p>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </section>
  );
}
