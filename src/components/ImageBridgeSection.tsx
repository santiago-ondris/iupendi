import React from 'react';
import { motion } from 'motion/react';
import { useInView } from '@/utils/useInView';

const ImageBridgeSection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <section 
      ref={ref}
      id="image-bridge"
      className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen overflow-hidden"
      style={{ marginTop: '-190px', paddingTop: '100px' }} // Overlap con hero
    >
      {/* Imagen de fondo */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ 
          scale: isInView ? 1 : 1.1, 
          opacity: isInView ? 1 : 0 
        }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img
          src="/src/assets/images/teamimg2.png" 
          alt="Equipo Iupendi Digital trabajando"
          className="w-full h-full object-cover object-center"
        />
        
        {/* Overlay gradient para mejorar legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/40" />
      </motion.div>

      {/* Elementos flotantes que conectan */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`floating-${i}`}
            className="absolute w-2 h-2 rounded-full opacity-20"
            style={{
              backgroundColor: ['#D4F225', '#7252A5', '#759CCF'][i % 3],
              left: `${15 + i * 10}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Indicadores de scroll hacia siguiente sección */}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        <motion.div
          className="w-1 h-8 sm:h-16 bg-gradient-to-b from-white/60 to-transparent rounded-full"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* Elementos que fluyen hacia la siguiente sección */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`flow-to-services-${i}`}
            className="absolute w-2 h-2 rounded-full opacity-25"
            style={{
              backgroundColor: ['#D4F225', '#7252A5', '#759CCF'][i % 3],
              left: `${20 + i * 15}%`,
              top: '90%',
            }}
            animate={{
              y: [0, 40, 80, 120],
              opacity: [0.25, 0.5, 0.3, 0],
              scale: [1, 1.2, 0.9, 0.7],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default ImageBridgeSection;