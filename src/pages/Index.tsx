import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MetricsSection from "@/components/MetricsSection";
import ValuesSection from "@/components/ValuesSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import StrategicPartnershipsSection from "@/components/StrategicPartnershipsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQsSection from "@/components/FAQsSection";
import ContactSection from "@/components/ContactSection";

export default function Index() {
  return (
    <div className="min-h-dvh bg-black text-white overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <MetricsSection />
        <ValuesSection />
        <ServicesSection />
        <ProcessSection />
        <WhyChooseUsSection />
        <StrategicPartnershipsSection />
        <TestimonialsSection />
        <FAQsSection />
        <ContactSection />
      </main>
    </div>
  );
}
