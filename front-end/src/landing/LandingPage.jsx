import CookiesSection from './CookiesSection';
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
      <PartnerSection />  
      <PricingSection />
      <FooterSection />
      <CookiesSection />
    </div>
  );
}

export default LandingPage;
