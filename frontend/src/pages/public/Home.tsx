import Hero from "@/components/home/Hero";
import TrustedSection from "@/components/home/TrustedSection";
import ServicesSection from "@/components/home/ServicesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import FAQPreviewSection from "@/components/home/FAQPreviewSection";
import CTASection from "@/components/home/CTASection";

function Home() {
  return (
    <>
      <Hero />
      <TrustedSection />
      <ServicesSection />
      <HowItWorksSection />
      <FeaturesSection />
      <FAQPreviewSection />
      <CTASection />
    </>
  );
}

export default Home;