import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import SkillsSection from "@/components/SkillsSection";
import MicroserviceArchitectureFlow from "@/components/MicroserviceArchitectureFlow";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <HeroSection />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <SkillsSection />
      <div className="section-divider" />
      <MicroserviceArchitectureFlow />
      <div className="section-divider" />
      <Projects />
      <div className="section-divider" />
      <Experience />
      <div className="section-divider" />
      <Education />
      <div className="section-divider" />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
