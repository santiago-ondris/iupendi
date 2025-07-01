import React from 'react';
import { motion } from 'motion/react';
import HeroSection from '../components/Hero/HeroSection';
import CoreServicesSection from '../components/CoreServices/CoreServicesSection';
import SuperCTASection from '../components/SuperCTA/SpectacularCTASection';
import FooterSection from '../components/Footer/FooterSection';
import SpectacularServicesSection from '@/components/ServicesDetails/SpectacularServicesSection';
import SpectacularBrandsSection from '@/components/Brands/SpectacularBrandsSection';
import FAQSectionLight from '@/components/FAQ/FAQSectionLight';

const HomePage: React.FC = () => {
  return (
    <motion.div 
      className="w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <HeroSection />
      <CoreServicesSection />
      <SpectacularBrandsSection />
      <SpectacularServicesSection  />
      <FAQSectionLight />
      <SuperCTASection />
      <FooterSection />
    </motion.div>
  );
};

export default HomePage;