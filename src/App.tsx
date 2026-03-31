import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import BrandIntelligenceSection from "./components/BrandIntelligenceSection";
import ApproachSection from "./components/ApproachSection";
import TeamSection from "./components/TeamSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-navy-900">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <BrandIntelligenceSection />
        <ApproachSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
