import { useEffect, useRef } from "react";
import { Hero } from "./components/Hero";
import { Expertise } from "./components/Expertise";
import { Projects } from "./components/Projects";
import { EngineeringApproach } from "./components/EngineeringApproach";
import { TechStack } from "./components/TechStack";
import { Credibility } from "./components/Credibility";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

export default function App() {
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Apply dark mode by default
    document.documentElement.classList.add('dark');
  }, []);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      {/* Hero Section */}
      <Hero onViewProjects={scrollToProjects} />

      {/* Expertise Section */}
      <Expertise />

      {/* Projects Section */}
      <div ref={projectsRef}>
        <Projects />
      </div>

      {/* Engineering Approach */}
      <EngineeringApproach />

      {/* Tech Stack */}
      <TechStack />

      {/* Credibility */}
      <Credibility />

      {/* About */}
      <About />

      {/* Contact & Footer */}
      <Contact />
    </div>
  );
}
