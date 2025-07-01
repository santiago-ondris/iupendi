// src/components/ServicesDetailsSection.tsx
import React from 'react';
import { motion } from 'motion/react';
import ServiceRow from './ServiceRow';
import { useInView } from '../utils/useInView';
import { servicesData } from '../utils/servicesData';

const ServicesDetailsSection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section 
      ref={ref}
      className="relative py-20 bg-black overflow-hidden"
    >
      {/* Transición suave desde la sección anterior */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-black" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header de navegación */}
        <motion.div
          className="flex justify-between items-center mb-16 pb-8 border-b border-gray-800"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="flex items-center gap-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center gap-2 text-white">
              <span className="text-sm font-medium">↓</span>
              <span className="text-sm font-medium tracking-wider uppercase">Servicios</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <span className="text-sm font-medium">↓</span>
              <span className="text-sm font-medium tracking-wider uppercase">Características</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <span className="text-sm font-medium">↓</span>
              <span className="text-sm font-medium tracking-wider uppercase">Contacto</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Lista de servicios */}
        <div className="space-y-0">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.6 + (index * 0.1),
                type: "spring",
                stiffness: 100
              }}
            >
              <ServiceRow {...service} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Elementos decorativos */}
      <motion.div
        className="absolute top-1/4 right-20 w-4 h-4 bg-[#D4F225]/20 rounded-full"
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
        className="absolute bottom-1/3 left-16 w-3 h-3 bg-[#7252A5]/20"
        animate={{
          rotate: [0, 180, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
};

export default ServicesDetailsSection;