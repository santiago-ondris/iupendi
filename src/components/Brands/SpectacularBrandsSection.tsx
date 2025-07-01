import React from 'react';
import { motion } from 'motion/react';
import SpectacularLogoCarousel from './SpectacularLogoCarousel';
import { useInView } from '@/utils/useInView';
import {
  sectionContainerVariants,
  carouselWrapperVariants,
  particleVariants,
  backgroundGradientVariants,
  decorativeVariants
} from '@/utils/Brands/brandAnimations';

const SpectacularBrandsSection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  // Partículas flotantes para el ambiente
  const floatingParticles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    color: ['#D4F225', '#7252A5', '#759CCF', '#F2AE1F'][i % 4],
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  return (
    <section 
      ref={ref}
      className="relative bg-white overflow-hidden"
    >
      {/* Transición suave desde la sección anterior */}
      <motion.div
        className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gray-100 to-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      />

      {/* Elementos de fondo decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradientes radiales sutiles */}
        <motion.div
          className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full opacity-5"
          style={{ 
            background: 'radial-gradient(circle, #D4F225 0%, transparent 70%)',
            transform: 'translate(-50%, -50%)'
          }}
          variants={backgroundGradientVariants}
          initial="hidden"
          animate={isInView ? ["visible", "float"] : "hidden"}
        />
        
        <motion.div
          className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full opacity-5"
          style={{ 
            background: 'radial-gradient(circle, #7252A5 0%, transparent 70%)',
            transform: 'translate(50%, -50%)'
          }}
          variants={backgroundGradientVariants}
          initial="hidden"
          animate={isInView ? ["visible", "float"] : "hidden"}
          transition={{ delay: 0.5 }}
        />

        {/* Partículas flotantes ambientales */}
        {floatingParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full opacity-20"
            style={{
              backgroundColor: particle.color,
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            variants={particleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={particle.id}
          />
        ))}

        {/* Elementos geométricos decorativos */}
        <motion.div
          className="absolute top-1/3 right-16 w-8 h-8 rounded-full"
          style={{ backgroundColor: '#D4F225' }}
          variants={decorativeVariants}
          initial="hidden"
          animate={isInView ? ["visible", "pulse"] : "hidden"}
        />
        
        <motion.div
          className="absolute bottom-1/3 left-20 w-6 h-6"
          style={{ 
            backgroundColor: '#7252A5',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
          }}
          variants={decorativeVariants}
          initial="hidden"
          animate={isInView ? ["visible", "pulse"] : "hidden"}
          transition={{ delay: 0.3 }}
        />

        <motion.div
          className="absolute top-2/3 right-1/3 w-4 h-4 rotate-45"
          style={{ backgroundColor: '#759CCF' }}
          variants={decorativeVariants}
          initial="hidden"
          animate={isInView ? ["visible", "pulse"] : "hidden"}
          transition={{ delay: 0.6 }}
        />
      </div>

      {/* Contenido principal */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6"
        variants={sectionContainerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Badge sutil arriba */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 text-gray-500 text-sm font-medium tracking-wider uppercase"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="w-1 h-1 bg-[#D4F225] rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Confían en nosotros
            <motion.div
              className="w-1 h-1 bg-[#7252A5] rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </motion.div>
        </motion.div>

        {/* Carrusel espectacular */}
        <motion.div
          variants={carouselWrapperVariants}
          className="relative"
        >
          <SpectacularLogoCarousel />
        </motion.div>

        {/* Estadística sutil debajo */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.p
            className="text-gray-500 text-sm"
            whileHover={{ scale: 1.02 }}
          >
            Más de <motion.span 
              className="text-[#7252A5] font-bold"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              500+ proyectos exitosos
            </motion.span> nos respaldan
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Transición suave hacia la siguiente sección */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-white to-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </section>
  );
};

export default SpectacularBrandsSection;