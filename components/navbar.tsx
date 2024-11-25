"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navigation = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors ${
        isScrolled
          ? "border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="container flex h-16 items-center px-4">
        <span className="md:hidden text-lg font-semibold">Portfolio</span>
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <div className="flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full flex items-center gap-2"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button 
              className="transition-transform hover:scale-105 hover:shadow-lg"
              onClick={() => {
                window.open('/resume.pdf', '_blank');
              }}
            >
              Download resume
            </Button>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4 md:hidden">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full border-none [&>button]:absolute [&>button]:left-1/2 [&>button]:-translate-x-1/2 [&>button]:top-6 [&>button]:p-2 [&>button]:hover:bg-accent [&>button]:h-10 [&>button]:w-10 [&>button]:rounded-full">
              <div className="flex h-full flex-col justify-center space-y-8">
                {navigation.map((item) => (
                  <SheetClose asChild key={item.name}>
                    <Link
                      href={item.href}
                      className="text-center text-xl font-medium transition-colors hover:text-primary relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                    >
                      {item.name}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button 
                    className="w-full transition-transform hover:scale-105 hover:shadow-lg"
                    onClick={() => {
                      window.open('/your-resume.pdf', '_blank');
                    }}
                  >
                    Download Resume
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}