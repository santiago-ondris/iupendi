import React from 'react';
import { motion } from 'motion/react';
import HeroSection from '../components/HeroSection';
import CoreServicesSection from '../components/CoreServicesSection';
import BrandsSection from '../components/BrandsSection';
import ServicesDetailsSection from '../components/ServicesDetailsSection';
import FAQSection from '../components/FAQSection';
import SuperCTASection from '../components/SuperCTASection';
import FooterSection from '../components/FooterSection';

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
      <BrandsSection />
      <ServicesDetailsSection />
      <FAQSection />
      <SuperCTASection />
      <FooterSection />
    </motion.div>
  );
};

export default HomePage;