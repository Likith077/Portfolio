"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Particles from "react-tsparticles";

// Add this declaration at the top of the file
declare global {
  interface Window {
    Particles: any; // or a more specific type if known
  }
}

const socialLinks = [
  {
    href: "https://github.com/Likith077",
    icon: Github,
    label: "GitHub Profile"
  },
  {
    href: "https://x.com/LNirvsn?s=08",
    icon: FaXTwitter,
    label: "X (Twitter) Profile"
  },
  {
    href: "https://www.linkedin.com/in/likithnirvan/",
    icon: Linkedin,
    label: "LinkedIn Profile"
  },
  {
    href: "mailto:likithnirvan@gmail.com",
    icon: Mail,
    label: "Email"
  },
  {
    href: "https://wa.me/918296160881",
    icon: FaWhatsapp,
    label: "WhatsApp"
  }
];

export function HeroSection() {
  const router = useRouter();

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Make sure to place your resume.pdf in the public folder
    link.download = 'LikithNirvan_Resume.pdf'; // Name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const initParticles = async () => {
      if (typeof window !== 'undefined') {
        try {
          // Check if window.Particles is defined
          if (window.Particles) {
            // @ts-ignore
            await window.Particles.init({
              selector: ".background",
              color: ["#03dac6", "#ff0266", "#000000"],
              connectParticles: true,
              sizeVariations: 3,
              maxParticles: 100,
              speed: 0.5,
              responsive: [{
                breakpoint: 768,
                options: {
                  maxParticles: 43,
                  connectParticles: false
                }
              }],
              fullScreen: {
                enable: true,
                zIndex: -1
              },
              particles: {
                number: {
                  value: 100,
                  density: {
                    enable: true,
                    value_area: 800
                  }
                }
              }
            });
          } else {
            console.error("Particles library is not loaded.");
          }
        } catch (error) {
          console.error("Failed to initialize particles:", error);
        }
      }
    };

    initParticles();
  }, []);

  return (
    <section className="relative min-h-[120vh] md:min-h-screen w-full mb-16 md:mb-0 overflow-hidden">
      <canvas className="background fixed top-0 left-0 w-screen h-screen" />
      
      <div className="absolute inset-0 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full px-2 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-foreground pl-4 md:pl-0 -ml-6 md:-ml-10 md:-mt-24"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-left">
              Building elegant solutions for{" "}
              <span className="text-primary">web and software</span> challenges
            </h1>
            <p className="text-lg text-muted-foreground mb-8 text-left">
              Full Stack Developer specializing in creating robust and scalable applications
              with modern technologies.
            </p>
            
            <div className="flex gap-4 justify-start">
              <Button 
                size="default"
                className="transition-transform hover:scale-105 hover:shadow-lg text-sm md:text-base"
                onClick={scrollToAbout}
              >
                View Portfolio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="default"
                variant="outline" 
                onClick={handleDownload}
                className="transition-transform hover:scale-105 hover:shadow-lg text-sm md:text-base"
              >
                Download Resume
              </Button>
            </div>

            <div className="flex gap-4 mt-8 justify-start">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[300px] w-[300px] md:h-[600px] md:w-[600px] mx-auto -mt-16 md:-mt-24 mb-4 md:mb-0"
          >
            <Image
              src="/profile.png"
              alt="Profile Photo"
              fill
              className="object-cover rounded-full border-4 border-primary/10"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}