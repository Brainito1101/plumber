import { HeroSection } from '@/components/plumbing/hero-section';
import { TrustSection } from '@/components/plumbing/trust-section';
import { AboutSection } from '@/components/plumbing/about-section';
import { ServicesSection } from '@/components/plumbing/services-section';
import { PricingSection } from '@/components/plumbing/pricing-section';
import { ReviewsSection } from '@/components/plumbing/reviews-section';
import { ContactSection } from '@/components/plumbing/contact-section';
import { MobileCtaBar } from '@/components/plumbing/mobile-cta-bar';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TrustSection />
      <AboutSection />
      <ServicesSection />
      <PricingSection />
      <ReviewsSection />
      <ContactSection />
      <MobileCtaBar />
    </main>
  );
}
