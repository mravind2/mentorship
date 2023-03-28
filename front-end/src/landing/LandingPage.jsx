import CompanySection from './CompanySection';
import CookiesSection from './CookiesSection';
import FAQSection from './FAQSection';
import FeaturesSection from './FeaturesSection';
import FooterSection from './FooterSection';
import HeaderSection from './HeaderSection';
import HeroSection from './HeroSection';
import PartnerSection from './PartnerSection';
import PricingSection from './PricingSection';

function LandingPage() {
  return (
    <div>
      <HeaderSection />
      <HeroSection />
      <section id="features">
        <FeaturesSection />
      </section>
      <section id="pricing">
        <PricingSection />
      </section>
      <section id="company">
        <CompanySection />
      </section>
      <section id="partners">
        <PartnerSection />
      </section>
      <section id="faqs">
        <FAQSection />
      </section>
      <FooterSection />
      <CookiesSection />
    </div>
  );
}

export default LandingPage;
