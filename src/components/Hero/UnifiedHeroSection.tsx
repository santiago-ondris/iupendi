import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import HeroLogo from './HeroLogo';
import {
  titleContainerVariants,
  titleWordVariants,
  highlightWordVariants,
  asteriskVariants,
  subtitleVariants,
  formVariants,
  scrollIndicatorVariants
} from '@/utils/Hero/heroAnimations';
import { HeroToServicesTransition } from '../OrganicTransitions';

const HeroSection: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Aquí agregarás la lógica de envío
  };

  const handleScrollToServices = () => {
    const servicesSection = document.getElementById('core-services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Figuras flotantes mejoradas que se extienden hacia la siguiente sección
  const floatingShapes = [
    { type: 'circle', color: 'bg-[#D4F225]/12', size: 'w-32 h-32', delay: 0 },
    { type: 'circle', color: 'bg-[#7252A5]/10', size: 'w-24 h-24', delay: 1 },
    { type: 'circle', color: 'bg-[#759CCF]/14', size: 'w-40 h-40', delay: 2 },
    { type: 'circle', color: 'bg-[#F2AE1F]/10', size: 'w-20 h-20', delay: 0.5 },
    { type: 'square', color: 'bg-[#D4F225]/12', size: 'w-16 h-16', delay: 0.8 },
    { type: 'square', color: 'bg-[#7252A5]/10', size: 'w-12 h-12', delay: 2.2 },
  ];

  const titleWords = [
    { text: "COMO", type: "normal" },
    { text: "ESTEROIDES", type: "normal" },
    { text: "PARA", type: "normal" },
    { text: "TU", type: "normal" },
    { text: "NEGOCIO", type: "highlight" },
  ];

  return (
    <>
      <section 
        id="hero"
        className="relative h-screen bg-gradient-to-br from-gray-50 via-gray-50 to-white flex flex-col justify-center items-center px-6 py-8 overflow-hidden"
      >
        {/* Background pattern con figuras flotantes mejoradas */}
        <div className="absolute inset-0 overflow-hidden z-0">
          {floatingShapes.map((shape, i) => (
            <motion.div
              key={i}
              className={`absolute ${shape.size} ${
                shape.type === 'circle' 
                  ? `${shape.color} rounded-full` 
                  : `${shape.color} transform rotate-45`
              }`}
              style={{
                left: `${5 + Math.random() * 90}%`,
                top: `${5 + Math.random() * 90}%`,
                zIndex: 1,
              }}
              animate={{
                y: [0, -40, 0],
                x: [0, Math.random() * 30 - 15, 0],
                rotate: shape.type === 'square' ? [45, 225, 45] : [0, 360, 0],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 10 + Math.random() * 6,
                repeat: Infinity,
                delay: shape.delay,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Elementos que se extienden hacia la siguiente sección */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`extending-${i}`}
              className="absolute w-3 h-3 rounded-full opacity-30"
              style={{
                backgroundColor: ['#D4F225', '#7252A5', '#759CCF'][i % 3],
                left: `${20 + i * 15}%`,
                top: '80%',
              }}
              animate={{
                y: [0, 100, 200, 300],
                opacity: [0.3, 0.6, 0.4, 0],
                scale: [1, 1.2, 0.8, 0.5],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center w-full flex flex-col justify-center min-h-[85vh] -translate-y-10">
          <HeroLogo />

          <motion.div
            className="mb-4 md:mb-6"
            variants={titleContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-none" style={{ fontFamily: 'Codec Pro, sans-serif' }}>
              <div className="block mb-2">
                {titleWords.slice(0, 2).map((word, idx) => (
                  <motion.span key={idx} className="inline-block mr-4 md:mr-6" variants={titleWordVariants}>
                    {word.text}
                  </motion.span>
                ))}
              </div>
              <div className="block">
                {titleWords.slice(2, 4).map((word, idx) => (
                  <motion.span key={idx + 2} className="inline-block mr-4 md:mr-6" variants={titleWordVariants}>
                    {word.text}
                  </motion.span>
                ))}
                <motion.span className="inline-block text-[#7252A5] mr-4" variants={highlightWordVariants}>
                  NEGOCIO
                </motion.span>
                <motion.span className="inline-block text-[#D4F225]" variants={asteriskVariants} animate={["visible", "float"]}>
                  ✱
                </motion.span>
              </div>
            </div>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed"
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
          >
            Hacer crecer un negocio es difícil. Nosotros lo hacemos mucho más fácil,
            más predecible, menos estresante y más divertido.
          </motion.p>

          {/* Formulario de email — ahora sin límite de max-width */}
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 w-full mx-auto mb-4 md:mb-6"
            variants={formVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex-1 relative">
              <motion.input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="✋ Ingresa tu email y te enviamos algo de 'magia'..."
                className="w-full px-8 py-5 text-base md:text-lg bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-full focus:outline-none focus:ring-4 focus:ring-[#D4F225]/30 focus:border-[#D4F225] placeholder-gray-500 transition-all duration-300 shadow-lg"
                required
                whileFocus={{ scale: 1.02 }}
              />
            </div>
            <motion.button
              type="submit"
              className="bg-gradient-to-r from-[#D4F225] to-[#c4e520] hover:from-[#c4e520] hover:to-[#b4d50f] text-gray-900 px-8 md:px-12 py-5 rounded-full font-bold text-base md:text-lg flex items-center justify-center gap-2 transition-all duration-300 min-w-[160px] shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hazlo <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </motion.button>
          </motion.form>
        </div>

        <motion.div
          className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
          variants={scrollIndicatorVariants}
          initial="hidden"
          animate={["visible", "bounce"]}
          onClick={handleScrollToServices}
        >
          <div className="flex flex-col items-center">
            <span className="text-xs md:text-sm text-[#7252A5] font-medium mb-2 tracking-wider uppercase">
              Ver servicios
            </span>
            <motion.div
              className="w-10 h-10 md:w-12 md:h-12 border-2 border-[#7252A5] rounded-full flex items-center justify-center hover:bg-[#7252A5] hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-4 right-6 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 3 }}
        >
          <p className="text-xs text-gray-400 max-w-48 text-right leading-relaxed">
            *Pero es 100% legal (promesa de meñique)
          </p>
        </motion.div>
      </section>

      {/* Transición orgánica hacia servicios */}
      <HeroToServicesTransition />
    </>
  );
};

export default HeroSection;