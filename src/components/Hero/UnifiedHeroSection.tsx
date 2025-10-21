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
import { sendNewsletterLead } from '@/utils/sheets';
import InlineSuccess from '../Toast/InlineSuccess';
import FloatingBlobs from '../Background/FloatingBlobs';

const blobShapes = [
  { type: 'blob1', color: '#f2ae1f', size: 'w-32 h-32', delay: 0, stroke: 2 },
  { type: 'blob2', color: '#6e787d', size: 'w-24 h-24', delay: 1, stroke: 1.5 },
  { type: 'blob3', color: '#d4f225', size: 'w-40 h-40', delay: 2, stroke: 2.5 },
  { type: 'blob4', color: '#759ccf', size: 'w-20 h-20', delay: 0.5, stroke: 1 },
  { type: 'blob5', color: '#7252a5', size: 'w-28 h-28', delay: 0.8, stroke: 1.8 },
  { type: 'blob6', color: '#e7e8cf', size: 'w-16 h-16', delay: 2.2, stroke: 1.2 },
  { type: 'blob4', color: '#f2ae1f', size: 'w-40 h-40', delay: 2.2, stroke: 1.2 },
];

const HeroSection: React.FC = () => {
  const { t } = useTranslation(); 
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!email.trim() || isLoading) return;
  
  setIsLoading(true);
  
  await sendNewsletterLead({ 
    email: email.trim(), 
    origen: 'hero' 
  });
  
  setIsLoading(false);
  setEmail('');
  setShowSuccess(true);
};

  const handleScrollToServices = () => {
    const servicesSection = document.getElementById('core-services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          <FloatingBlobs shapes={blobShapes} showExtendingElements={true} />
        </div>
        
        {/* Contenido principal */}
        <div className="
            relative z-10 max-w-7xl mx-auto text-center w-full 
            flex flex-col justify-center min-h-[45vh] 
            -mt-65 md:-mt-50"
        >
          <motion.div
            className="mb-4 md:mb-6"
            variants={titleContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="
              text-[2.5rem] leading-[0.9] tracking-tighter
              sm:text-[3rem] sm:leading-[0.9] sm:tracking-tighter
              md:text-[5rem] md:leading-[0.85] md:tracking-tighter
              lg:text-[6.5rem] lg:leading-[0.85] lg:tracking-tighter
              xl:text-[7.5rem] xl:leading-[0.85] xl:tracking-tighter
              font-black text-[#292929]
            ">
              {/* Mobile: cada palabra en su línea si es necesario */}
              <div className="block md:hidden space-y-1">
                {/* "COMO ANABOLICOS" */}
                <motion.div variants={titleWordVariants}>
                  {titleWords[0].text} {titleWords[1].text}
                </motion.div>
                
                {/* "PERO PARA TU" */}
                <motion.div variants={titleWordVariants}>
                  {titleWords[2].text} {titleWords[3].text} {titleWords[4].text}
                </motion.div>
                
                {/* "MARCA 💡" */}
                <motion.div className="text-[#7252A5]" variants={highlightWordVariants} animate={["visible", "float"]}>
                  {titleWords[5].text} 📈
                </motion.div>
              </div>

              {/* Desktop: 2 líneas compactas */}
              <div className="hidden md:block">
                {/* Primera línea */}
                <div className="whitespace-nowrap">
                  {titleWords.slice(0, 2).map((w, i) => (
                    <motion.span 
                      key={i} 
                      className="inline-block mr-3 lg:mr-4"
                      variants={titleWordVariants}
                    >
                      {w.text}
                    </motion.span>
                  ))}
                </div>

                {/* Segunda línea */}
                <div className="whitespace-nowrap">
                  {titleWords.slice(2, titleWords.length - 2).map((w, i) => (
                    <motion.span
                      key={i}
                      className="inline-block mr-3 lg:mr-4"
                      variants={titleWordVariants}
                    >
                      {w.text}
                    </motion.span>
                  ))}
                  
                  {titleWords.slice(-2).map((w, i) => (
                    <motion.span
                      key={`highlight-${i}`}
                      className="inline-block text-[#7252A5] mr-2 lg:mr-3"
                      variants={highlightWordVariants}
                      animate={["visible", "float"]}
                    >
                      {w.text}
                    </motion.span>
                  ))}

                  <motion.span
                    className="inline-block text-[#7252A5]"
                    variants={asteriskVariants}
                    animate={["visible", "float"]}
                  >
                    📈
                  </motion.span>
                </div>
              </div>
            </div>
          </motion.div>

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

              <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-gray-800">
                <span className="hidden sm:inline">
                  {t('hero.subtitleHighlight')}
                </span>
                <span className="sm:hidden">
                  {t('hero.subtitleHighlight')}
                </span>
              </span>

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
            className="text-xs sm:text-lg md:text-xl lg:text-2xl 
            text-gray-800 font-semibold tracking-wide 
            bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text
            mb-4 sm:mb-6 max-w-md sm:max-w-4xl mx-auto leading-relaxed"
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* FORMULARIO */}
          {!showSuccess ? (
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 w-full mx-auto mb-4 md:mb-6"
            variants={formVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
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
              disabled={isLoading || !email.trim()}
              className={`bg-gradient-to-r from-[#D4F225] to-[#c4e520] hover:from-[#c4e520] hover:to-[#b4d50f] text-gray-900 px-8 md:px-12 py-5 rounded-full font-bold text-base md:text-lg flex items-center justify-center gap-2 transition-all duration-300 min-w-[160px] shadow-lg hover:shadow-xl ${
                isLoading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
              whileHover={!isLoading ? { scale: 1.05 } : {}}
              whileTap={!isLoading ? { scale: 0.95 } : {}}
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
                  {t('toast.send')}
                </>
              ) : (
                <>
                  {t('hero.cta')} <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </>
              )}
            </motion.button>
          </motion.form>
          ) : (
            <div className="max-w-2xl mx-auto px-4 sm:px-0">
              <InlineSuccess 
                message={t('toast.lesto')}
              />
            </div>
          )}
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