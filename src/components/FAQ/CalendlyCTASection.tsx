import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface CalendlyCTASectionProps {
  isInView: boolean;
}

const CalendlyCTASection: React.FC<CalendlyCTASectionProps> = ({ isInView }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleStartOnboarding = () => {
    navigate('/onboarding');
  };

  return (
    <motion.div
      className="mt-16 sm:mt-20 relative"
      initial={{ opacity: 0, y: 40 }}
      animate={{ 
        opacity: isInView ? 1 : 0, 
        y: isInView ? 0 : 40
      }}
      transition={{ 
        duration: 0.8, 
        delay: 0.2
      }}
    >
      <motion.div
        className="absolute -top-8 sm:-top-10 left-1/2 transform -translate-x-1/2 w-px h-6 sm:h-8 bg-gradient-to-b from-gray-300 to-transparent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isInView ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 0 }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.95 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <motion.div
            className="absolute -inset-6 border border-gray-200/40 rounded-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 0.5 : 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          />

          <div className="relative text-center bg-white/50 backdrop-blur-sm rounded-2xl p-8 sm:p-12">
            <motion.div
              className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-6 h-px bg-gradient-to-r from-transparent to-gray-300"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
            <motion.div
              className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-6 h-px bg-gradient-to-l from-transparent to-gray-300"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />

            <motion.h3
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight"
              style={{ fontFamily: 'Codec Pro, sans-serif' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {t('calendlyCta.title')}
            </motion.h3>

            <motion.div
              className="relative block mb-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.p
                className="text-2xl sm:text-3xl text-[#7252A5] font-black relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                {t('calendlyCta.subtitle')}
              </motion.p>
              <motion.div
                className="absolute inset-0 bg-[#D4F225]/20 rounded-lg transform -skew-x-6 -z-10"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isInView ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              />
            </motion.div>

            <motion.div
              className="relative block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.button
                onClick={handleStartOnboarding}
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#7252A5] to-[#5f4489] text-white px-10 py-5 rounded-2xl font-black text-xl transition-all duration-300 shadow-2xl hover:shadow-[#7252A5]/50 overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                  initial={{ x: '-100%' }}
                  animate={{ x: '200%' }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                />
                
                <Sparkles className="w-5 h-5 relative z-10" />
                <span className="relative z-10">{t('calendlyCta.cta')}</span>
                <ChevronRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: ['#D4F225', '#7252A5', '#759CCF', '#F2AE1F'][i],
                    left: `${-10 + i * 40}%`,
                    top: `${i % 2 === 0 ? -20 : 120}%`,
                  }}
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: i * 0.4,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute -bottom-8 sm:-bottom-10 left-1/2 transform -translate-x-1/2 w-px h-6 sm:h-8 bg-gradient-to-t from-gray-300 to-transparent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isInView ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
      />
    </motion.div>
  );
};

export default CalendlyCTASection;