import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProceduresSection from "@/components/ProceduresSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import SpecializedProceduresSection from "@/components/SpecializedProceduresSection";
import FollowUpCasesSection from "@/components/FollowUpCasesSection";
import RhinoplastySection from "@/components/RhinoplastySection";
import LipFillerResultsSection from "@/components/LipFillerResultsSection";
import FeaturedCaseSection from "@/components/FeaturedCaseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen font-sans">
      <HeroSection />
      <AboutSection />
      <FeaturedCaseSection />
      <ProceduresSection />
      <BeforeAfterSection />
      <FollowUpCasesSection />
      <SpecializedProceduresSection />
      <RhinoplastySection />
      <LipFillerResultsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
