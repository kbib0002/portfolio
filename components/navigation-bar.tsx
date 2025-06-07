"use client";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import NavigationBarMobile from "@/components/navigation-bar-mobile";

const NavigationBar = () => {
  return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-15 items-center w-[80%] mx-auto">
                <NavigationBarMobile/>

                <div className="hidden lg:flex gap-2">
                    <Link className="mr-24 flex items-center" href="/">
                    <span className="font-bold text-base md:text-lg lg:text-xl">
                    Kyle Bibby
                    </span>
                    </Link>

                <div className="flex items-center space-x-8 text-sm font-medium lg:text-base">
                        <Link href="#about" className="transition-colors hover:text-foreground/70" aria-label="about">
                        About
                        </Link>
                        <Link href="#services" className="transition-colors hover:text-foreground/70" aria-label="services">
                        Services
                        </Link>
                        <Link href="#experience" className="transition-colors hover:text-foreground/70" aria-label="experience">
                        Experience
                        </Link>
                        <Link href="#projects" className="transition-colors hover:text-foreground/70" aria-label="projects">
                        Projects
                        </Link>
                        <Link href="#community" className="transition-colors hover:text-foreground/70" aria-label="community">
                        Community
                        </Link>
                </div>
                </div>

                <div className="ml-auto">
                <ThemeToggle/>
                </div>
            </div>
        </nav>
  );
};

export default NavigationBar;