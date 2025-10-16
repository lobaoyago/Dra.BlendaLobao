import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProceduresSection from "@/components/ProceduresSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import LipFillerResultsSection from "@/components/LipFillerResultsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen font-sans">
      <HeroSection />
      <AboutSection />
      <ProceduresSection />
      <BeforeAfterSection />
      <LipFillerResultsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
