"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Code2,
  Database,
  Smartphone,
  Globe,
  GitBranch,
  Layout,
} from "lucide-react";

const services = [
  {
    title: "Full Stack Development",
    description:
      "End-to-end web application development using modern technologies and best practices.",
    icon: Code2,
  },
  {
    title: "UI/UX Development",
    description:
      "Creating intuitive and responsive user interfaces with modern design principles.",
    icon: Layout,
  },
  {
    title: "API Integration & Management",
    description:
      "Integrating APIs from various sources to enhance functionality and improve user experience.",
    icon: Globe,
  },
  {
    title: "Database Design",
    description:
      "Efficient database architecture and optimization for scalable applications.",
    icon: Database,
  },
  {
    title: "Mobile Development",
    description:
      "Cross-platform mobile application development using React Native.",
    icon: Smartphone,
  },
  {
    title: "Deployment",
    description:
      "Deploying applications to cloud platforms for scalability and reliability.",
    icon: GitBranch,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6">
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}