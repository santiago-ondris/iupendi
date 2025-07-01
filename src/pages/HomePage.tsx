import React from 'react';
import { motion } from 'motion/react';
import UnifiedBrandsSection from '@/components/Brands/UnifiedBrandsSection';
import UnifiedFAQSection from '@/components/FAQ/UnifiedFAQSection';
import UnifiedHeroSection from '../components/Hero/UnifiedHeroSection';
import UnifiedSuperCTASection from '../components/SuperCTA/UnifiedCTASection';
import UnifiedFooterSection from '../components/Footer/FooterSection';
import UnifiedCoreServicesSection from '@/components/CoreServices/UnifiedTwoServicesSection';
import UnifiedServicesSection from '@/components/ServicesDetails/UnifiedServicesSection';

const HomePage: React.FC = () => {
  return (
    <motion.div 
      className="w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <UnifiedHeroSection />
      <UnifiedCoreServicesSection  />
      <UnifiedBrandsSection />
      <UnifiedServicesSection />
      <UnifiedFAQSection />
      <UnifiedSuperCTASection />
      <UnifiedFooterSection />
    </motion.div>
  );
};

export default HomePage;