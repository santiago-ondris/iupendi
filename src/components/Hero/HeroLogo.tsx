import React from 'react';
import { motion } from 'motion/react';
import { logoVariants } from '@/utils/Hero/heroAnimations';

const HeroLogo: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col items-center mb-6 md:mb-8"
      variants={logoVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Logo circular con la "I" */}
      <motion.div
        className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center mb-4 shadow-xl"
        whileHover={{ 
          scale: 1.1, 
          rotate: 360,
          boxShadow: "0 20px 40px rgba(114, 82, 165, 0.3)"
        }}
        transition={{ duration: 0.8 }}
      >
        <span
          className="text-3xl md:text-4xl font-black text-[#7252A5]"
          style={{ fontFamily: 'Codec Pro, sans-serif' }}
        >
          I
        </span>
      </motion.div>

      {/* Texto del logo */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <motion.h1
          className="text-2xl md:text-3xl font-black text-[#7252A5] tracking-wide"
          style={{ fontFamily: 'Codec Pro, sans-serif' }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          IUPENDI DIGITAL
        </motion.h1>
        
        <motion.p
          className="text-sm md:text-base text-gray-600 mt-1 font-medium tracking-wider uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Agencia
        </motion.p>
      </motion.div>

      {/* Línea decorativa debajo del logo */}
      <motion.div
        className="w-16 h-0.5 bg-[#D4F225] mt-4"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      />
    </motion.div>
  );
};

export default HeroLogo;