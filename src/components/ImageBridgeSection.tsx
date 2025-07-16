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
      style={{ marginTop: '-190px', paddingTop: '100px' }}
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
          src="/teamimg2.png" 
          alt="Equipo Iupendi Digital trabajando"
          className="w-full h-full object-cover object-center"
        />
        
        {/* Overlay gradient para mejorar legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/40" />
      </motion.div>

      {/* SOLO indicador de scroll hacia siguiente sección */}
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
    </section>
  );
};

export default ImageBridgeSection;