import React from 'react';
import { motion } from 'motion/react';
import SpectacularLogoCarousel from './SpectacularLogoCarousel';
import { useInView } from '@/utils/useInView';
import { BrandsToDetailedServicesTransition } from '../OrganicTransitions';

const UnifiedBrandsSection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  // Partículas conectoras que vienen de CoreServices
  const connectingParticles = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    color: ['#D4F225', '#7252A5', '#759CCF', '#F2AE1F'][i % 4],
    size: Math.random() * 3 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  return (
    <>
      <section 
        ref={ref}
        id="brands"
        className="relative py-16 bg-gradient-to-b from-white via-gray-50 to-gray-50 overflow-hidden"
        style={{ marginTop: '-180px', paddingTop: '24px' }} // Overlap con CoreServices
      >
        {/* Elementos que llegan desde CoreServices */}
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`from-core-${i}`}
              className="absolute w-2 h-2 rounded-full opacity-20"
              style={{
                backgroundColor: ['#D4F225', '#7252A5', '#759CCF'][i % 3],
                left: `${15 + i * 10}%`,
                top: '-10px',
              }}
              animate={{
                y: [0, 30, 60, 90],
                opacity: [0.2, 0.4, 0.3, 0],
                scale: [1, 1.1, 0.9, 0.7],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeOut",
              }}
            />
          ))}
        </div>

        {/* Elementos de fondo decorativos conectados */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradientes radiales que se conectan */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-5"
            style={{ 
              background: 'radial-gradient(circle, #D4F225 0%, transparent 70%)',
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.div
            className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full opacity-5"
            style={{ 
              background: 'radial-gradient(circle, #7252A5 0%, transparent 70%)',
            }}
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />

          {/* Partículas flotantes ambientales */}
          {connectingParticles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full opacity-15"
              style={{
                backgroundColor: particle.color,
                width: particle.size,
                height: particle.size,
                left: `${particle.x}%`,
                top: `${particle.y}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.15, 0.3, 0.15],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 6 + particle.id,
                repeat: Infinity,
                delay: particle.id * 0.8,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Líneas conectoras sutiles */}
          <motion.div
            className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4F225]/15 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isInView ? 1 : 0 }}
            transition={{ duration: 2, delay: 1 }}
          />
          
          <motion.div
            className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#7252A5]/10 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isInView ? 1 : 0 }}
            transition={{ duration: 2.5, delay: 1.5 }}
          />
        </div>

        {/* Contenido principal */}
        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Badge sutil arriba con conexión visual */}
          <motion.div
            className="text-center mb-12 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Línea conectora desde CoreServices */}
            <motion.div
              className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-px h-6 bg-gradient-to-b from-gray-300 to-transparent"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: isInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            />

            <motion.div
              className="inline-flex items-center gap-2 text-gray-500 text-sm font-medium tracking-wider uppercase relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              {/* Fondo animado */}
              <motion.div
                className="absolute inset-0 bg-white/60 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: isInView ? 1 : 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              />
              
              <motion.div
                className="w-1 h-1 bg-[#D4F225] rounded-full relative z-10"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="relative z-10">Confían en nosotros</span>
              <motion.div
                className="w-1 h-1 bg-[#7252A5] rounded-full relative z-10"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
              
              {/* Conectores laterales */}
              <motion.div
                className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-6 h-px bg-gradient-to-r from-transparent to-gray-300"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isInView ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              />
              <motion.div
                className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-6 h-px bg-gradient-to-l from-transparent to-gray-300"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isInView ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              />
            </motion.div>
          </motion.div>

          {/* Carrusel espectacular con marco conector */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.95 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {/* Marco visual que conecta */}
            <motion.div
              className="absolute -inset-4 border border-gray-200/50 rounded-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 0.3 : 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            />
            
            {/* Puntos conectores en las esquinas */}
            {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((position, i) => (
              <motion.div
                key={position}
                className={`absolute w-2 h-2 bg-[#D4F225] rounded-full ${
                  position === 'top-left' ? '-top-1 -left-1' :
                  position === 'top-right' ? '-top-1 -right-1' :
                  position === 'bottom-left' ? '-bottom-1 -left-1' :
                  '-bottom-1 -right-1'
                }`}
                initial={{ scale: 0 }}
                animate={{ scale: isInView ? 1 : 0 }}
                transition={{ duration: 0.4, delay: 1.4 + i * 0.1 }}
              />
            ))}

            <SpectacularLogoCarousel />
          </motion.div>

          {/* Estadística sutil con conectores */}
          <motion.div
            className="text-center mt-12 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            {/* Línea conectora hacia el carrusel */}
            <motion.div
              className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-px h-4 bg-gradient-to-b from-gray-300 to-transparent"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: isInView ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            />

            {/* Conectores hacia la siguiente sección */}
            <motion.div
              className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-px h-4 bg-gradient-to-t from-gray-300 to-transparent"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: isInView ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 2 }}
            />
          </motion.div>
        </motion.div>

        {/* Elementos que fluyen hacia DetailedServices */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`flow-to-detailed-${i}`}
              className="absolute w-2 h-2 rounded-full opacity-20"
              style={{
                backgroundColor: ['#D4F225', '#7252A5', '#759CCF', '#F2AE1F'][i % 4],
                left: `${10 + i * 8}%`,
                top: '90%',
              }}
              animate={{
                y: [0, 40, 80, 120, 160],
                opacity: [0.2, 0.4, 0.3, 0.15, 0],
                scale: [1, 1.2, 0.9, 0.7, 0.5],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeOut",
              }}
            />
          ))}
        </div>

        {/* Elementos geométricos decorativos conectados */}
        <motion.div
          className="absolute top-1/3 right-16 w-6 h-6 rounded-full bg-[#D4F225]/20"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 left-16 w-4 h-4 bg-[#759CCF]/20 rotate-45"
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-2/3 right-1/3 w-3 h-3 bg-[#7252A5]/20 rounded-full"
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </section>

      {/* Transición orgánica hacia DetailedServices */}
      <BrandsToDetailedServicesTransition />
    </>
  );
};

export default UnifiedBrandsSection;