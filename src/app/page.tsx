import ContactSectionHome from "@/modules/homepage/contact-section-home";
import HeroSectionHome from "@/modules/homepage/hero-section-home";
import ProductSectionHome from "@/modules/homepage/product-section-home";
import ServiceSectionHome from "@/modules/homepage/service-section-home";

export default function EmployeeManagementPage() {
  return (
    <main>
      <HeroSectionHome />
      <ProductSectionHome />
      <ServiceSectionHome />
      <ContactSectionHome />
    </main>
  );
}
