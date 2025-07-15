import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next'; 
import {
  titleContainerVariants,
  titleWordVariants,
  highlightWordVariants,
  asteriskVariants,
  subtitleVariants,
  formVariants,
  scrollIndicatorVariants
} from '@/utils/Hero/heroAnimations';
import { HeroToServicesTransition } from '@/components/Transitions/EnhancedTransitions';

const HeroSection: React.FC = () => {
  const { t } = useTranslation(); 
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  const handleScrollToServices = () => {
    const servicesSection = document.getElementById('core-services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // const floatingShapes = [
  //   { type: 'circle', color: 'bg-[#D4F225]/12', size: 'w-32 h-32', delay: 0 },
  //   { type: 'circle', color: 'bg-[#7252A5]/10', size: 'w-24 h-24', delay: 1 },
  //   { type: 'circle', color: 'bg-[#759CCF]/14', size: 'w-40 h-40', delay: 2 },
  //   { type: 'circle', color: 'bg-[#F2AE1F]/10', size: 'w-20 h-20', delay: 0.5 },
  //   { type: 'square', color: 'bg-[#D4F225]/12', size: 'w-16 h-16', delay: 0.8 },
  //   { type: 'square', color: 'bg-[#7252A5]/10', size: 'w-12 h-12', delay: 2.2 },
  // ];

  // const techShapes = [
  //   { type: 'hexagon', color: '#D4F225', size: 'w-24 h-24', delay: 0, opacity: 0.08 },
  //   { type: 'diamond', color: '#7252A5', size: 'w-20 h-20', delay: 1, opacity: 0.06 },
  //   { type: 'triangle', color: '#759CCF', size: 'w-32 h-32', delay: 2, opacity: 0.10 },
  //   { type: 'octagon', color: '#F2AE1F', size: 'w-16 h-16', delay: 0.5, opacity: 0.07 },
  //   { type: 'rhombus', color: '#6E787D', size: 'w-28 h-28', delay: 0.8, opacity: 0.05 },
  //   { type: 'pentagon', color: '#D4F225', size: 'w-18 h-18', delay: 2.2, opacity: 0.09 },
  // ];

  const blobShapes = [
    { type: 'blob1', color: '#D4F225', size: 'w-32 h-32', delay: 0, stroke: 2 },
    { type: 'blob2', color: '#7252A5', size: 'w-24 h-24', delay: 1, stroke: 1.5 },
    { type: 'blob3', color: '#759CCF', size: 'w-40 h-40', delay: 2, stroke: 2.5 },
    { type: 'blob4', color: '#F2AE1F', size: 'w-20 h-20', delay: 0.5, stroke: 1 },
    { type: 'blob5', color: '#6E787D', size: 'w-28 h-28', delay: 0.8, stroke: 1.8 },
    { type: 'blob6', color: '#D4F225', size: 'w-16 h-16', delay: 2.2, stroke: 1.2 },
    { type: 'blob4', color: '#F2AE1F', size: 'w-40 h-40', delay: 2.2, stroke: 1.2 },
  ];

  // const crystalShapes = [
  //   { type: 'fragment1', color: '#D4F225', size: 'w-28 h-28', delay: 0, intensity: 0.8 },
  //   { type: 'fragment2', color: '#7252A5', size: 'w-22 h-22', delay: 1, intensity: 0.6 },
  //   { type: 'fragment3', color: '#759CCF', size: 'w-36 h-36', delay: 2, intensity: 0.9 },
  //   { type: 'fragment4', color: '#F2AE1F', size: 'w-18 h-18', delay: 0.5, intensity: 0.7 },
  //   { type: 'fragment5', color: '#6E787D', size: 'w-24 h-24', delay: 0.8, intensity: 0.5 },
  //   { type: 'fragment6', color: '#D4F225', size: 'w-20 h-20', delay: 2.2, intensity: 0.6 },
  //   { type: 'fragment6', color: '#759CCF', size: 'w-36 h-36', delay: 2, intensity: 0.9 },
  //   { type: 'fragment3', color: '#7252A5', size: 'w-40 h-40', delay: 0.8, intensity: 0.9 },
  // ];

  const titleWords = t('hero.title').split(' ').map((word, _idx) => ({
    text: word,
    type: word === 'NEGOCIO' || word === 'BUSINESS' ? 'highlight' : 'normal'
  }));

  return (
    <>
      <section 
        id="hero"
        className="relative h-screen bg-gradient-to-br from-gray-50 via-gray-50 to-white flex flex-col justify-center items-center px-6 py-8 overflow-hidden mb-20"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 overflow-hidden z-0">
        {blobShapes.map((shape, i) => (
          <motion.div
            key={i}
            className={`absolute ${shape.size}`}
            style={{
              left: `${5 + Math.random() * 90}%`,
              top: `${5 + Math.random() * 90}%`,
              zIndex: 1,
            }}
            animate={{
              y: [0, -60, 0],
              x: [0, Math.random() * 50 - 25, 0],
              rotate: [0, 120, 240, 360],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: shape.delay,
              ease: "easeInOut",
            }}
          >
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full"
              style={{
                filter: `drop-shadow(0 4px 12px ${shape.color}30)`,
              }}
            >
              <path
                d={
                  shape.type === 'blob1' ? "M20,50 C20,20 40,0 60,10 C80,0 100,20 90,40 C100,60 80,80 60,90 C40,100 20,80 20,50Z" :
                  shape.type === 'blob2' ? "M30,20 C50,0 70,10 85,30 C100,50 90,70 75,85 C50,100 30,90 15,70 C0,50 10,30 30,20Z" :
                  shape.type === 'blob3' ? "M25,15 C45,5 65,15 80,35 C95,55 85,75 70,90 C50,100 30,95 15,75 C0,55 5,35 25,15Z" :
                  shape.type === 'blob4' ? "M35,10 C55,0 75,20 90,40 C100,60 80,80 60,85 C40,90 20,70 15,50 C10,30 15,20 35,10Z" :
                  shape.type === 'blob5' ? "M40,5 C60,0 80,15 95,35 C100,55 90,75 70,85 C50,95 30,80 20,60 C10,40 20,20 40,5Z" :
                  "M30,25 C50,15 70,25 85,45 C95,65 80,85 60,90 C40,85 25,65 20,45 C15,25 10,35 30,25Z"
                }
                fill="none"
                stroke={shape.color}
                strokeWidth={shape.stroke}
                opacity="0.6"
              />
              <path
                d={
                  shape.type === 'blob1' ? "M20,50 C20,20 40,0 60,10 C80,0 100,20 90,40 C100,60 80,80 60,90 C40,100 20,80 20,50Z" :
                  shape.type === 'blob2' ? "M30,20 C50,0 70,10 85,30 C100,50 90,70 75,85 C50,100 30,90 15,70 C0,50 10,30 30,20Z" :
                  shape.type === 'blob3' ? "M25,15 C45,5 65,15 80,35 C95,55 85,75 70,90 C50,100 30,95 15,75 C0,55 5,35 25,15Z" :
                  shape.type === 'blob4' ? "M35,10 C55,0 75,20 90,40 C100,60 80,80 60,85 C40,90 20,70 15,50 C10,30 15,20 35,10Z" :
                  shape.type === 'blob5' ? "M40,5 C60,0 80,15 95,35 C100,55 90,75 70,85 C50,95 30,80 20,60 C10,40 20,20 40,5Z" :
                  "M30,25 C50,15 70,25 85,45 C95,65 80,85 60,90 C40,85 25,65 20,45 C15,25 10,35 30,25Z"
                }
                fill={`${shape.color}08`}
              />
            </svg>
          </motion.div>
        ))}

          {/* Elementos que se extienden */}
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
        
        {/* Contenido principal */}
        <div   className="
            relative z-10 max-w-6xl mx-auto text-center w-full 
            flex flex-col justify-center min-h-[45vh] 
            -mt-65        /* móvil */
            md:-mt-50     /* md y arriba: desktop */ "
        >
          {/* TÍTULO */}
          <motion.div
            className="mb-4 md:mb-6"
            variants={titleContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-[#292929] leading-none">
              {/* Línea superior */}
              <div className="block mb-2">
                {titleWords.slice(0, 3).map((w, i) => (
                  <motion.span key={i} className="inline-block mr-2 sm:mr-4 md:mr-6" variants={titleWordVariants}>
                    {w.text}
                  </motion.span>
                ))}
              </div>

              {/* Línea inferior */}
              <div className="block">
                {titleWords.slice(3, titleWords.length - 1).map((w, i) => (
                  <motion.span key={i} className="inline-block mr-2 sm:mr-4 md:mr-6" variants={titleWordVariants}>
                    {w.text}
                  </motion.span>
                ))}
                <motion.span className="inline-block text-[#7252A5] mr-2 sm:mr-4" variants={highlightWordVariants}>
                  {titleWords[titleWords.length - 1].text}
                </motion.span>
                <motion.span className="inline-block text-[#D4F225]" variants={asteriskVariants} animate={["visible", "float"]}>
                  ✱
                </motion.span>
              </div>
            </div>
          </motion.div>

          {/* NUEVO SUBTÍTULO WARNING */}
          <motion.div
            className="mb-6 md:mb-8 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 1.8,
              ease: "easeOut"
            }}
          >
            <motion.div
              className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl px-4 sm:px-6 py-2 sm:py-3 shadow-md relative overflow-hidden"
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
              }}
            >
              {/* Línea superior de "peligro" */}
              <motion.div
                className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#F2AE1F] via-red-500 to-[#F2AE1F]"
                animate={{
                  scaleX: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Emoji warning simple */}
              <motion.span
                className="text-xl"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                ⚠️
              </motion.span>

              <span className="text-xs      
                sm:text-sm     
                md:text-base   
                lg:text-lg    
                font-semibold text-gray-800">
              <span className="hidden sm:inline">
                {t('hero.subtitleHighlight')}
              </span>
              <span className="sm:hidden">
                {t('hero.subtitleHighlight')}
              </span>
            </span>

              {/* Punto pulsante al final */}
              <motion.div
                className="w-2 h-2 bg-[#F2AE1F] rounded-full"
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>

          {/* SUBTÍTULO ORIGINAL */}
          <motion.p
            className="text-xs sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-4 sm:mb-6 max-w-md sm:max-w-4xl mx-auto leading-relaxed"
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }} // Retraso ligeramente ajustado
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* FORMULARIO */}
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 w-full mx-auto mb-4 md:mb-6"
            variants={formVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }} // Retraso ajustado
          >
            <div className="flex-1 relative">
              <motion.input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('hero.emailPlaceholder')} 
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
              {t('hero.cta')} <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </motion.button>
          </motion.form>
        </div>

        {/* SCROLL INDICATOR */}
        <motion.div
          className="absolute bottom-44 md:bottom-36 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
          variants={scrollIndicatorVariants}
          initial="hidden"
          animate={["visible", "bounce"]}
          onClick={handleScrollToServices}
        >
          <div className="flex flex-col items-center">
          <span className="whitespace-nowrap text-xs md:text-sm text-[#7252A5] font-medium mb-2 tracking-wider uppercase">
            {t('hero.scrollText')}
          </span>
            <motion.div
              className="w-10 h-10 md:w-12 md:h-12 border-2 border-[#7252A5] rounded-full flex items-center justify-center hover:bg-[#7252A5] hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;