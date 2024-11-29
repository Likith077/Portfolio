"use client";

import React, { useEffect, useCallback, useState } from "react";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import { useRouter } from "next/navigation";

const socialLinks = [
  { href: "https://github.com/Likith077", icon: Github, label: "GitHub Profile" },
  { href: "https://x.com/LNirvsn?s=08", icon: FaXTwitter, label: "X (Twitter) Profile" },
  { href: "https://www.linkedin.com/in/likithnirvan/", icon: Linkedin, label: "LinkedIn Profile" },
  { href: "mailto:likithnirvan@gmail.com", icon: Mail, label: "Email" },
  { href: "https://wa.me/918296160881", icon: FaWhatsapp, label: "WhatsApp" },
];

export function HeroSection() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const particlesInit = useCallback(async (engine : any) => {
    await loadFull(engine); // Ensure that all features of tsParticles are loaded
  }, []);

  const particlesOptions = {
    fullScreen: { enable: false },
    background: { color: { value: "transparent" } },
    particles: {
      number: { value: 30 },
      color: { value:"#03dac6" },
      links: {
        enable: !isMobile,
        color: ["#03dac6", "#ff0266"],
        distance: 150,
      },
      move: { enable: true, speed: 1 },
      size: { value: 3 },
    },
  };
  

  return (
    <section className="relative min-h-screen w-full overflow-hidden hero-section">
      {!isMobile && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
          className="particles-bg absolute top-0 left-0 w-full h-full"
        />
      )}
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
              Full Stack Developer specializing in creating robust and scalable applications with modern technologies.
            </p>
            <div className="flex gap-4 justify-start">
              <Button
                size="default"
                className="transition-transform hover:scale-105 hover:shadow-lg text-sm md:text-base"
                onClick={() => router.push("#about")}
              >
                View Portfolio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="default"
                variant="outline"
                onClick={() => window.open("/resume.pdf", "_blank")}
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
