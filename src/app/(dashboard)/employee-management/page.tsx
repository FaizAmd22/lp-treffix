import CtaSection from "@/modules/employee-management/cta-section";
import FeaturesSection from "@/modules/employee-management/feature-section";
import HeroSection from "@/modules/employee-management/hero-section";
import PricingSection from "@/modules/employee-management/pricing-section";

export default function EmployeeManagementPage() {
  return (
    <main className="animate__animated animate__fadeIn">
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <CtaSection />
    </main>
  );
}
