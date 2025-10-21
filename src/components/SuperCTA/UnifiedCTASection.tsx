import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useInView } from '@/utils/useInView';
import { CTAToFooterTransition } from '@/components/Transitions/EnhancedTransitions';
import { useTranslation } from 'react-i18next';
import { sendNewsletterLead } from '@/utils/sheets';
import InlineSuccess from '../Toast/InlineSuccess';
import FloatingShapes from '../Background/FloatingShapes';

const floatingShapes = [
  { type: 'circle' as const, color: 'bg-[#D4F225]/12', size: 'w-32 h-32', delay: 0 },
  { type: 'circle' as const, color: 'bg-[#7252A5]/10', size: 'w-24 h-24', delay: 1 },
  { type: 'circle' as const, color: 'bg-[#759CCF]/14', size: 'w-40 h-40', delay: 2 },
  { type: 'circle' as const, color: 'bg-[#F2AE1F]/10', size: 'w-20 h-20', delay: 0.5 },
  { type: 'square' as const, color: 'bg-[#D4F225]/12', size: 'w-16 h-16', delay: 0.8 },
  { type: 'square' as const, color: 'bg-[#7252A5]/10', size: 'w-12 h-12', delay: 2.2 },
];


const UnifiedSuperCTASection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || isLoading) return;
    
    setIsLoading(true);
    
    await sendNewsletterLead({ 
      email: email.trim(), 
      origen: 'super-cta' 
    });
    
    setIsLoading(false);
    setEmail('');
    setShowSuccess(true);
  };

  return (
    <>
      <section 
        ref={ref}
        id="super-cta"
        className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-br from-gray-100 via-slate-100 to-gray-200 overflow-hidden"
        style={{ marginTop: '-190px', paddingTop: '104px' }} // Overlap con FAQ
      >
        {/* Elementos que llegan desde FAQ */}
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`from-faq-${i}`}
              className="absolute w-2 h-2 rounded-full opacity-10"
              style={{
                backgroundColor: ['#7252A5', '#D4F225', '#759CCF'][i % 3],
                left: `${8 + i * 7}%`,
                top: '-20px',
              }}
              animate={{
                y: [0, 60, 120, 180],
                opacity: [0.1, 0.25, 0.15, 0],
                scale: [1, 1.3, 0.9, 0.6],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeOut",
              }}
            />
          ))}
        </div>

        {/* Elementos decorativos de fondo conectados */}
        <div className="absolute inset-0">
        {/* Figuras flotantes como el Hero */}
        <FloatingShapes shapes={floatingShapes} />

        {/* Gradientes radiales evolutivos más prominentes */}
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-radial from-[#D4F225]/15 to-transparent rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-radial from-[#7252A5]/12 to-transparent rounded-full"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Resto del contenido existente */}
        <motion.div
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4F225]/20 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isInView ? 1 : 0 }}
          transition={{ duration: 3, delay: 1 }}
        />
        
        <motion.div
          className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#7252A5]/15 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isInView ? 1 : 0 }}
          transition={{ duration: 3.5, delay: 1.5 }}
        />
      </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          {/* Línea conectora desde FAQ */}
          <motion.div
            className="absolute -top-16 sm:-top-20 left-1/2 transform -translate-x-1/2 w-px h-8 sm:h-12 bg-gradient-to-b from-gray-400 to-transparent"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: isInView ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          />

          <motion.div
            className="mb-8 sm:mb-12 relative"
            initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
            animate={{ 
              opacity: isInView ? 1 : 0, 
              scale: isInView ? 1 : 0.5,
              rotateX: isInView ? 0 : -90
            }}
            transition={{ 
              duration: 1.2, 
              delay: 0.5,
              type: "spring",
              stiffness: 100
            }}
          >
            {/* Elementos decorativos alrededor del título */}
            <motion.div
              className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[#D4F225]/30 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[#7252A5]/30 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            />

            <motion.h2 
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-4 sm:mb-6 px-2"
              style={{ fontFamily: 'Codec Pro, sans-serif' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {t('superCta.titlePart1')}{' '}
              <motion.span
                className="text-[#7252A5] inline-block relative"
                initial={{ rotateY: 0 }}
                animate={{ rotateY: isInView ? [0, 360, 0] : 0 }}
                transition={{ duration: 1, delay: 1.7 }}
              >
                {t('superCta.titleHighlight')}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 bg-[#D4F225]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isInView ? 1 : 0 }}
                  transition={{ duration: 0.8, delay: 2.2 }}
                />
              </motion.span>
              <motion.span
                className="inline-block ml-4"
                initial={{ opacity: 0, rotate: -45, scale: 0 }}
                animate={{ 
                  opacity: isInView ? 1 : 0, 
                  rotate: isInView ? 0 : -45, 
                  scale: isInView ? 1 : 0 
                }}
                transition={{ duration: 0.6, delay: 2.5 }}
              >
                {t('superCta.titlePart2')}
              </motion.span>
            </motion.h2>

            <motion.div
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 font-medium mb-3 sm:mb-4 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              {t('superCta.subtitle')}{' '}
              <motion.span
                className="text-[#7252A5] font-bold bg-[#7252A5]/15 px-3 py-1 rounded-lg relative overflow-hidden"
                initial={{ scale: 1 }}
                animate={{ scale: isInView ? [1, 1.05, 1] : 1 }}
                transition={{ duration: 0.6, delay: 2.4 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                  initial={{ x: '-100%' }}
                  animate={{ x: '200%' }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 4 }}
                />
                <span className="relative z-10">{t('superCta.subtitleHighlight')}</span>
              </motion.span>
            </motion.div>
            
            <motion.div
              className="flex items-center justify-center gap-2 relative z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
              transition={{ duration: 0.6, delay: 2 }}
            >
              <Sparkles className="w-6 h-6 text-[#D4F225]" />
              <span className="text-gray-600 text-lg">
                  {t('superCta.note')}
              </span>
              <Sparkles className="w-6 h-6 text-[#D4F225]" />
            </motion.div>
          </motion.div>

          {/* Formulario con marco conector */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ 
              opacity: isInView ? 1 : 0, 
              y: isInView ? 0 : 100,
              scale: isInView ? 1 : 0.8
            }}
            transition={{ 
              duration: 1, 
              delay: 2.6,
              type: "spring",
              stiffness: 80
            }}
          >
            {/* Marco visual que conecta */}
            <motion.div
              className="absolute -inset-6 border-2 border-gray-300/20 rounded-3xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: isInView ? 0.3 : 0, scale: isInView ? 1 : 0.95 }}
              transition={{ duration: 0.8, delay: 3 }}
            />

            {/* Puntos conectores en las esquinas del formulario */}
            {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((position, i) => (
              <motion.div
                key={position}
                className={`absolute w-3 h-3 bg-[#D4F225] rounded-full ${
                  position === 'top-left' ? '-top-1.5 -left-1.5' :
                  position === 'top-right' ? '-top-1.5 -right-1.5' :
                  position === 'bottom-left' ? '-bottom-1.5 -left-1.5' :
                  '-bottom-1.5 -right-1.5'
                }`}
                initial={{ scale: 0 }}
                animate={{ scale: isInView ? 1 : 0 }}
                transition={{ duration: 0.4, delay: 3.2 + i * 0.1 }}
              />
            ))}

            {!showSuccess ? (
            <form 
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-2xl mx-auto relative z-10 px-4 sm:px-0"
            >
              <div className="flex-1 relative">
                <motion.input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('superCta.emailPlaceholder')}
                  className="w-full px-8 py-5 text-lg bg-white/95 backdrop-blur-sm border-2 border-gray-300 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-[#D4F225]/30 focus:border-[#D4F225] transition-all duration-300 shadow-xl"
                  required
                  whileFocus={{ scale: 1.02, borderColor: '#D4F225' }}
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isLoading || !email.trim()}
                className={`bg-gradient-to-r from-[#D4F225] to-[#c4e520] hover:from-[#c4e520] hover:to-[#b4d50f] text-black px-10 py-5 rounded-full font-black text-lg flex items-center justify-center gap-3 transition-all duration-300 min-w-[200px] shadow-xl hover:shadow-2xl relative overflow-hidden mb-7 ${
                  isLoading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
                whileHover={!isLoading ? { 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(212, 242, 37, 0.4)"
                } : {}}
                whileTap={!isLoading ? { scale: 0.95 } : {}}
                initial={{ rotate: -5 }}
                animate={{ rotate: isInView ? 0 : -5 }}
                transition={{ duration: 0.6, delay: 3.4 }}
              >
                {/* Múltiples efectos de brillo */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
                  initial={{ x: '-100%' }}
                  animate={{ x: '200%' }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7252A5]/20 to-transparent skew-x-12"
                  initial={{ x: '100%' }}
                  animate={{ x: '-200%' }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 4, delay: 1 }}
                />
                
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin relative z-10" />
                    <span className="relative z-10">{t('toast.send')}</span>
                  </>
                ) : (
                  <>
                    <span className="relative z-10">{t('superCta.button')}</span>
                    <ArrowRight className="w-6 h-6 relative z-10" />
                  </>
                )}
              </motion.button>
            </form>
            ) : (
              <div className="max-w-2xl mx-auto px-4 sm:px-0">
                <InlineSuccess 
                  message={t('toast.lesto')}
                />
              </div>
            )}
          </motion.div>

          <motion.div
            className="mt-8 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 3.8 }}
          >
            
            {/* Línea conectora hacia footer */}
            <motion.div
              className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gradient-to-t from-gray-400 to-transparent"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: isInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 4 }}
            />
          </motion.div>
        </div>

        {/* Elementos que fluyen hacia footer */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`flow-to-footer-${i}`}
              className="absolute w-2 h-2 rounded-full opacity-20"
              style={{
                backgroundColor: ['#D4F225', '#7252A5', '#759CCF', '#F2AE1F'][i % 4],
                left: `${5 + i * 6}%`,
                top: '90%',
              }}
              animate={{
                y: [0, 60, 120, 180, 240],
                opacity: [0.2, 0.4, 0.3, 0.15, 0],
                scale: [1, 1.3, 1, 0.8, 0.5],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      </section>

      {/* Transición orgánica hacia Footer */}
      <CTAToFooterTransition />
    </>
  );
};

export default UnifiedSuperCTASection;