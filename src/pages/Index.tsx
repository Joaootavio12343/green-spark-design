import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AuthoritySection from "@/components/AuthoritySection";
import PortfolioSection from "@/components/PortfolioSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProcessSection from "@/components/ProcessSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => (
  <div className="min-h-screen bg-background transition-colors duration-300">
    <Navbar />
    <HeroSection />
    <AuthoritySection />
    <PortfolioSection />
    <ServicesSection />
    <TestimonialsSection />
    <ProcessSection />
    <PricingSection />
    <FAQSection />
    <CTASection />
    <Footer />
    <WhatsAppFloat />
  </div>
);

export default Index;
