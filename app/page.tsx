"use client";

import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { Particles } from "@/components/magicui/particles";
import { useTheme } from "next-themes";
import NavigationBar from "@/components/navigation-bar";
import Hero from "@/pages/hero";
import About from "@/pages/about";
import Services from "@/pages/services";
import Experience from "@/pages/experience";
import Footer from "@/pages/footer";
import Projects from "@/pages/projects";
import Community from "@/pages/community";


export default function Home() {
    const { theme } = useTheme();

    return (
        <div className="relative min-h-screen">

            <Particles className="absolute inset-0 z-0" quantity={500} color={theme === "dark" ? "#ffffff" : "#000000"} refresh/>
            <ScrollProgress/>
            <NavigationBar/>

            <main className="relative z-10">
                <Hero/>
                <About/>
                <Services/>
                <Experience/>
                <Projects/>
                <Community/>
            </main>

            <Footer />
        </div>
    )
  }