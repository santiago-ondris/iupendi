import React from 'react';
import { motion } from 'motion/react';
import FAQCardLight from './FAQCardLight';
import { useInView } from '@/utils/useInView';
import {
  faqSectionVariants,
  faqHeaderVariants,
  ctaVariants
} from '@/utils/FAQ/faqAnimations';
import { FAQToCTATransition } from '@/components/Transitions/EnhancedTransitions';
import { useTranslation } from 'react-i18next';

const UnifiedFAQSection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const { t } = useTranslation();

  const floatingShapes = [
    { type: 'circle', color: 'bg-[#D4F225]/12', size: 'w-64 h-64', delay: 0 },
    { type: 'circle', color: 'bg-[#7252A5]/10', size: 'w-48 h-48', delay: 1 },
    { type: 'circle', color: 'bg-[#759CCF]/14', size: 'w-80 h-80', delay: 2 },
    { type: 'circle', color: 'bg-[#F2AE1F]/10', size: 'w-40 h-40', delay: 0.5 },
    { type: 'square', color: 'bg-[#D4F225]/12', size: 'w-32 h-32', delay: 0.8 },
    { type: 'square', color: 'bg-[#7252A5]/10', size: 'w-24 h-24', delay: 2.2 },
  ];

  const faqData = [
    {
      id: 'resultsTime',
      question: t('faq.questions.resultsTime.question'),
      answer: t('faq.questions.resultsTime.answer'),
      highlight: t('faq.questions.resultsTime.highlight'),
      accentColor: 'bg-[#D4F225] hover:bg-[#c4e520]'
    },
    {
      id: 'investment',
      question: t('faq.questions.investment.question'),
      answer: t('faq.questions.investment.answer'),
      highlight: t('faq.questions.investment.highlight'),
      accentColor: 'bg-[#7252A5] hover:bg-[#6341a0]'
    },
    {
      id: 'whatMakesDifferent',
      question: t('faq.questions.whatMakesDifferent.question'),
      answer: t('faq.questions.whatMakesDifferent.answer'),
      highlight: t('faq.questions.whatMakesDifferent.highlight'),
      accentColor: 'bg-[#759CCF] hover:bg-[#6589c1]'
    },
    {
      id: 'servicesIncluded',
      question: t('faq.questions.servicesIncluded.question'),
      answer: t('faq.questions.servicesIncluded.answer'),
      highlight: t('faq.questions.servicesIncluded.highlight'),
      accentColor: 'bg-[#F2AE1F] hover:bg-[#e09d0e]'
    },
    {
      id: 'supportCommunication',
      question: t('faq.questions.supportCommunication.question'),
      answer: t('faq.questions.supportCommunication.answer'),
      highlight: t('faq.questions.supportCommunication.highlight'),
      accentColor: 'bg-[#D4F225] hover:bg-[#c4e520]'
    }
  ];

  return (
    <>
      <section 
        ref={ref}
        id="faq"
        className="relative py-20 bg-gradient-to-b from-gray-50 via-slate-50 to-gray-100 overflow-hidden"
        style={{ marginTop: '-80px', paddingTop: '24px' }} // Overlap con Brands/DetailedServices
      >
        {/* Elementos que llegan desde la sección anterior */}
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`from-detailed-${i}`}
              className="absolute w-2 h-2 rounded-full opacity-15"
              style={{
                backgroundColor: ['#D4F225', '#7252A5', '#759CCF', '#F2AE1F'][i % 4],
                left: `${10 + i * 8}%`,
                top: '-15px',
              }}
              animate={{
                y: [0, 40, 80, 120],
                opacity: [0.15, 0.3, 0.2, 0],
                scale: [1, 1.2, 0.9, 0.7],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeOut",
              }}
            />
          ))}
        </div>

        {/* Elementos decorativos de fondo conectados */}
        <div className="absolute inset-0 overflow-hidden">
        {/* Figuras flotantes como el Hero */}
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

        {/* Gradientes radiales evolutivos más prominentes */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-5"
          style={{ 
            background: 'radial-gradient(circle, #7252A5 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.12, 0.05],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full opacity-5"
          style={{ 
            background: 'radial-gradient(circle, #D4F225 0%, transparent 70%)',
          }}
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.05, 0.12, 0.05],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        {/* Resto del contenido existente */}
        <motion.div
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#7252A5]/10 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isInView ? 1 : 0 }}
          transition={{ duration: 3, delay: 1 }}
        />
        
        <motion.div
          className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4F225]/10 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isInView ? 1 : 0 }}
          transition={{ duration: 3.5, delay: 1.5 }}
        />
      </div>

        <motion.div
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6"
          variants={faqSectionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header principal con conexiones visuales */}
          <motion.div
            className="text-center mb-16 relative"
            variants={faqHeaderVariants}
          >
            {/* Línea conectora desde la sección anterior */}
            <motion.div
              className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-px h-6 bg-gradient-to-b from-gray-300 to-transparent"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: isInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />

            {/* Badge superior con marco conector */}
            <motion.div
              className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-6 sm:mb-8 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Línea superior animada */}
              <motion.div
                className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#7252A5] via-[#D4F225] to-[#759CCF]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isInView ? 1 : 0 }}
                transition={{ duration: 1.5, delay: 0.8 }}
              />
              
              <motion.div
                className="w-2 h-2 bg-[#7252A5] rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-xs sm:text-sm font-medium text-gray-700 tracking-wider uppercase">
                {t('faq.badge')}
              </span>
              
              {/* Conectores laterales responsivos */}
              <motion.div
                className="absolute -left-6 sm:-left-8 top-1/2 transform -translate-y-1/2 w-4 sm:w-6 h-px bg-gradient-to-r from-transparent to-gray-300"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isInView ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              />
              <motion.div
                className="absolute -right-6 sm:-right-8 top-1/2 transform -translate-y-1/2 w-4 sm:w-6 h-px bg-gradient-to-l from-transparent to-gray-300"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isInView ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              />
            </motion.div>

            {/* 🎯 TÍTULO PRINCIPAL RESPONSIVE MEJORADO */}
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 mb-4 sm:mb-6 leading-none relative px-2"
              style={{ fontFamily: 'Codec Pro, sans-serif' }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="block">{t('faq.title').split(' ').slice(0, 2).join(' ')}</span>
                <span className="block">
                  <span className="text-[#7252A5]">{t('faq.title').split(' ').slice(2, 4).join(' ')}</span>
                  <br className="sm:hidden" />
                  <span className="block">
                    <span className="text-[#D4F225]">{t('faq.title').split(' ').slice(4).join(' ')}</span>
                    <motion.span
                      className="inline-block text-[#759CCF] ml-2 sm:ml-4 text-2xl sm:text-4xl md:text-6xl lg:text-7xl"
                      animate={{ rotate: [0, 15, -15, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    >
                      👀
                    </motion.span>
                  </span>
                </span>
              
              {/* Elementos decorativos conectores responsivos */}
              <motion.div
                className="absolute -right-2 sm:-right-6 top-1/4 w-2 sm:w-3 h-2 sm:h-3 bg-[#D4F225]/30 rounded-full"
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.h2>
            
            {/* Subtítulo con líneas conectoras responsivas */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div
                className="hidden sm:block w-12 lg:w-16 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isInView ? 1 : 0 }}
                transition={{ duration: 1, delay: 1.2 }}
              />
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed text-center px-4">
                {t('faq.subtitle')}
              </p>
              <motion.div
                className="hidden sm:block w-12 lg:w-16 h-px bg-gradient-to-l from-transparent via-gray-300 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isInView ? 1 : 0 }}
                transition={{ duration: 1, delay: 1.2 }}
              />
            </motion.div>
          </motion.div>

          {/* Grid de FAQ Cards con conectores */}
          <motion.div 
            className="space-y-4 sm:space-y-6 relative"
            variants={faqSectionVariants}
          >
            {/* Línea conectora central vertical */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent"
              style={{ height: '80%', top: '10%' }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: isInView ? 1 : 0 }}
              transition={{ duration: 2, delay: 1.5 }}
            />

            {faqData.map((faq, index) => (
              <motion.div
                key={faq.id}
                variants={faqHeaderVariants}
                custom={index}
                className="relative"
              >
                {/* Conectores hacia la línea central - solo en desktop */}
                <motion.div
                  className={`absolute top-1/2 ${index % 2 === 0 ? 'right-1/2' : 'left-1/2'} w-6 sm:w-8 h-px bg-gradient-to-${index % 2 === 0 ? 'l' : 'r'} from-gray-200 to-transparent hidden md:block`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isInView ? 1 : 0 }}
                  transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                />
                <FAQCardLight {...faq} index={index} />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA integrado con conexiones */}
          <motion.div
            className="mt-16 sm:mt-20 text-center relative"
            variants={ctaVariants}
          >
            {/* Línea conectora desde las FAQs */}
            <motion.div
              className="absolute -top-8 sm:-top-10 left-1/2 transform -translate-x-1/2 w-px h-6 sm:h-8 bg-gradient-to-b from-gray-300 to-transparent"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: isInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 2.5 }}
            />

            <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl relative overflow-hidden mx-4 sm:mx-0">
              {/* Fondo animado */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#7252A5]/5 via-transparent to-[#D4F225]/5"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              
              <motion.h3
                className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3 sm:mb-4 relative z-10"
                style={{ fontFamily: 'Codec Pro, sans-serif' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 2.7 }}
              >
                {t('faq.ctaTitle')}
              </motion.h3>
              
              <motion.p
                className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg relative z-10 px-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 2.9 }}
              >
                {t('faq.ctaSubtitle')}
              </motion.p>
              
              <motion.button
                className="bg-gradient-to-r from-[#7252A5] to-[#6341a0] hover:from-[#6341a0] hover:to-[#5a3899] text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 relative z-10 overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 3.1 }}
              >
                {/* Efecto de brillo */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                  initial={{ x: '-100%' }}
                  animate={{ x: '200%' }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                />
                <span className="relative z-10">{t('faq.ctaButton')}</span>
              </motion.button>
            </div>

            {/* Línea conectora hacia la siguiente sección */}
            <motion.div
              className="absolute -bottom-8 sm:-bottom-10 left-1/2 transform -translate-x-1/2 w-px h-6 sm:h-8 bg-gradient-to-t from-gray-300 to-transparent"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: isInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 3.3 }}
            />
          </motion.div>
        </motion.div>

        {/* Elementos que fluyen hacia CTA */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`flow-to-cta-${i}`}
              className="absolute w-2 h-2 rounded-full opacity-15"
              style={{
                backgroundColor: ['#7252A5', '#D4F225', '#759CCF'][i % 3],
                left: `${8 + i * 7}%`,
                top: '90%',
              }}
              animate={{
                y: [0, 50, 100, 150, 200],
                opacity: [0.15, 0.3, 0.25, 0.1, 0],
                scale: [1, 1.2, 0.9, 0.7, 0.5],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      </section>

      {/* Transición orgánica hacia CTA */}
      <FAQToCTATransition />
    </>
  );
};

export default UnifiedFAQSection;