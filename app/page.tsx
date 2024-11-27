import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ProjectsSection } from "@/components/sections/projects";
import { ServicesSection } from "@/components/sections/services";
import { ContactSection } from "@/components/sections/contact";
import { BrowserRouter as Router } from "react-router-dom";

export default function Home() {
  return (
    
    <div className="container mx-auto px-4">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <ContactSection />
      </div>
    
  );
}