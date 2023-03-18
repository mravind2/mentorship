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
      <FeaturesSection />
      <PricingSection />
      <CompanySection />
      <PartnerSection />  
      <FAQSection />
      
      <FooterSection />
      <CookiesSection />
    </div>
  );
}

export default LandingPage;
