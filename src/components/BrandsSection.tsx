// src/components/BrandsSection.tsx
import React from 'react';
import { motion } from 'motion/react';
import LogoCarousel from './LogoCarousel';
import { useInView } from '../utils/useInView';

const BrandsSection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <section 
      ref={ref}
      className="relative py-18 bg-white overflow-hidden"
    >
      {/* Transición suave desde la sección anterior */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-100 to-white" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Carrusel de logos */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <LogoCarousel />
        </motion.div>
      </div>

      {/* Elementos decorativos sutiles */}
      <motion.div
        className="absolute top-1/2 right-20 w-3 h-3 bg-[#D4F225]/20 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-1/3 left-16 w-2 h-2 bg-[#7252A5]/20 rounded-full"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.1, 0.4, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </section>
  );
};

export default BrandsSection;