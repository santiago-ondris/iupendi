// src/components/Transitions/EnhancedTransitions.tsx
import React from 'react';
import { motion } from 'motion/react';
import SectionConnector from './SectionConnector';
import { useInView } from '@/utils/useInView';

// 1. Hero → CoreServices - Transición orgánica suave
export const HeroToServicesTransition: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="relative">
      <SectionConnector 
        fromSection="hero" 
        toSection="core-services" 
        isVisible={isInView}
      />
      
      {/* Elementos específicos adicionales para esta transición */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradiente de conexión específico */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white/50 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 1.5, delay: 1 }}
        />
        
        {/* Puntos de anclaje visuales */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#D4F225]/40 rounded-full"
            style={{
              left: `${30 + i * 20}%`,
              bottom: '50%',
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { 
              scale: [0, 1.5, 1], 
              opacity: [0, 0.8, 0.4] 
            } : {}}
            transition={{ 
              duration: 1, 
              delay: 0.5 + i * 0.2,
              repeat: Infinity,
              repeatDelay: 4
            }}
          />
        ))}
      </div>
    </div>
  );
};

// 2. CoreServices → Brands - Transición tipo wave moderna
export const ServicesToBrandsTransition: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="relative">
      <SectionConnector 
        fromSection="core-services" 
        toSection="brands" 
        isVisible={isInView}
      />
      
      {/* Efecto de momentum entre servicios y brands */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#759CCF]/20 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isInView ? 1 : 0 }}
          transition={{ duration: 2, delay: 0.8 }}
        />
      </div>
    </div>
  );
};

// 3. Brands → DetailedServices - Transición geométrica
export const BrandsToDetailedServicesTransition: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="relative">
      <SectionConnector 
        fromSection="brands" 
        toSection="detailed-services" 
        isVisible={isInView}
      />
      
      {/* Grid sutil que conecta las marcas con los servicios */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 h-full">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="border-r border-gray-200/30 h-full"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: isInView ? 1 : 0 }}
              transition={{ 
                duration: 0.8, 
                delay: i * 0.05,
                ease: "easeOut" 
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// 4. DetailedServices → FAQ - Transición de partículas inteligente
export const DetailedServicesToFAQTransition: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="relative">
      <SectionConnector 
        fromSection="detailed-services" 
        toSection="faq" 
        isVisible={isInView}
      />
      
      {/* Elementos que simbolizan preguntas flotando */}
      <div className="absolute inset-0 overflow-hidden">
        {['?', '!', '?', '!'].map((_symbol, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl font-bold opacity-10"
            style={{
              left: `${20 + i * 20}%`,
              top: '40%',
              color: i % 2 === 0 ? '#7252A5' : '#D4F225',
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

// 5. FAQ → CTA - Transición dramática para el super CTA
export const FAQToCTATransition: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="relative">
      <SectionConnector 
        fromSection="faq" 
        toSection="super-cta" 
        isVisible={isInView}
      />
      
      {/* Efecto de "build-up" hacia el CTA final */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Líneas de energía convergentes */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent to-[#7252A5]/30"
            style={{
              left: `${i * 20}%`,
              top: `${30 + i * 10}%`,
              width: `${50 + i * 10}%`,
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { 
              scaleX: 1, 
              opacity: [0, 0.6, 0.3] 
            } : {}}
            transition={{ 
              duration: 1.5, 
              delay: i * 0.2,
              ease: "easeOut" 
            }}
          />
        ))}
        
        {/* Pulsos de anticipación */}
        <motion.div
          className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#D4F225]/20 rounded-full"
          animate={isInView ? {
            scale: [1, 3, 1],
            opacity: [0.2, 0.6, 0.2],
          } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};

// 6. CTA → Footer - Transición de cierre elegante
export const CTAToFooterTransition: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="relative">
      <SectionConnector 
        fromSection="super-cta" 
        toSection="footer" 
        isVisible={isInView}
      />
      
      {/* Efecto de "settling down" hacia el footer */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradiente de transición de color */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-100/30 to-gray-200/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        
        {/* Partículas que se "asientan" en el footer */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              backgroundColor: ['#D4F225', '#7252A5', '#759CCF', '#F2AE1F'][i % 4],
              left: `${5 + i * 6}%`,
              top: '20%',
            }}
            animate={{
              y: [0, 80, 160, 240, 320],
              opacity: [0.3, 0.6, 0.4, 0.2, 0],
              scale: [1, 1.2, 1, 0.8, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Componente para elementos conectores globales (líneas sutiles que cruzan toda la experiencia)
export const GlobalConnectors: React.FC = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    {/* Líneas conectoras que cruzan toda la experiencia de forma muy sutil */}
    <motion.div
      className="absolute top-1/5 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4F225]/8 to-transparent"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 8, delay: 3 }}
    />
    
    <motion.div
      className="absolute top-2/5 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#7252A5]/6 to-transparent"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 10, delay: 5 }}
    />
    
    <motion.div
      className="absolute top-3/5 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#759CCF]/6 to-transparent"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 9, delay: 7 }}
    />

    <motion.div
      className="absolute top-4/5 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F2AE1F]/5 to-transparent"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 7, delay: 9 }}
    />
  </div>
);