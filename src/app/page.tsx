import CtaSection from "@/shared/components/cta-section";
import FeaturesSection from "@/shared/components/feature-section";
import HeroSection from "@/shared/components/hero-section";
import PricingSection from "@/shared/components/pricing-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <CtaSection />
    </main>
  );
}
