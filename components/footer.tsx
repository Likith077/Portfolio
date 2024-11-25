import { Github, Linkedin, Mail } from "lucide-react";
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  {
    href: "https://github.com/Likith077",
    icon: Github,
    label: "GitHub Profile"
  },
  {
    href: "https://www.linkedin.com/in/likithnirvan/",
    icon: Linkedin,
    label: "LinkedIn Profile"
  },
  {
    href: "https://x.com/LNirvsn?s=08",
    icon: FaXTwitter,
    label: "Twitter Profile"
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

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-4 md:flex-row md:gap-2 md:px-6">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {currentYear} Built with Next.js and TailwindCSS.
          </p>
        </div>
        <div className="flex gap-4 px-4 md:px-6">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
