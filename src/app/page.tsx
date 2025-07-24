import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import ServicesSection from "@/app/components/ServicesSection";
import AboutSection from "@/app/components/AboutSection";
import PortfolioSection from "@/app/components/PortfolioSection";
import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <ServicesSection/>
      <AboutSection/>
      <PortfolioSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}
