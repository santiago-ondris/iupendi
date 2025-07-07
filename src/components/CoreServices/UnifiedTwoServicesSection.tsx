import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import ServiceCard from './ServiceCard';
import { useInView } from '@/utils/useInView';
import { ServicesToBrandsTransition } from '../OrganicTransitions';

const UnifiedCoreServicesSection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const { t } = useTranslation(); 

  const services = [
    {
      id: 'agency',
      icon: 'I',
      iconColor: 'text-[#D4F225]',
      bgColor: 'bg-gray-800',
      subtitle: t('services.agency.subtitle'), 
      title: t('services.agency.title'),
      description: t('services.agency.description'), 
      buttonText: t('services.agency.button'),
      rating: 4.8,
      reviews: 1247,
      type: 'primary' as const
    },
    {
      id: 'courses',
      icon: 'I',
      iconColor: 'text-[#7252A5]',
      bgColor: 'bg-gray-700',
      subtitle: t('services.courses.subtitle'), 
      title: t('services.courses.title'),
      description: t('services.courses.description'), 
      buttonText: t('services.courses.button'), 
      rating: 4.9,
      reviews: 3847,
      type: 'secondary' as const
    }
  ];

  const scrollToDetailedServices = () => {
    const detailedSection = document.getElementById('detailed-services');
    if (detailedSection) {
      detailedSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section 
        id="core-services"
        ref={ref}
        className="relative py-20 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
        style={{ marginTop: '-40px', paddingTop: '28px' }}
      >
        {/* Elementos conectores */}
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`from-hero-${i}`}
              className="absolute w-3 h-3 rounded-full opacity-20"
              style={{
                backgroundColor: ['#D4F225', '#7252A5', '#759CCF'][i % 3],
                left: `${20 + i * 15}%`,
                top: '-20px',
              }}
              animate={{
                y: [0, 50, 100, 150],
                opacity: [0.2, 0.4, 0.3, 0],
                scale: [1, 1.1, 0.9, 0.7],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeOut",
              }}
            />
          ))}
        </div>

        {/* Gradientes conectores */}
        <motion.div
          className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gray-50/30 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 1.5 }}
        />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10 font-text">
          {/* HEADER */}
          <motion.div
            className="mb-16 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Línea conectora */}
            <motion.div
              className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-px h-6 bg-gradient-to-b from-gray-300 to-transparent"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: isInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />

            {/* TÍTULO */}
            <motion.h2 
              className="text-5xl md:text-7xl font-black text-[#6E787D] mb-6 tracking-wider relative"
              style={{ fontFamily: 'Codec Pro, sans-serif' }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {t('services.sectionTitle')} 
              
              {/* Elemento decorativo  */}
              <motion.div
                className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[#D4F225]/30 rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.h2>

            {/* SUBTÍTULO  */}
            <motion.div
              className="flex items-center justify-center gap-4 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div
                className="hidden md:block w-12 h-px bg-gradient-to-r from-transparent to-gray-300"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isInView ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              />
              <p className="text-lg text-gray-600 text-center">
                {t('services.subtitle')}
              </p>
              <motion.div
                className="hidden md:block w-12 h-px bg-gradient-to-l from-transparent to-gray-300"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isInView ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              />
            </motion.div>
          </motion.div>

          {/* Grid de servicios */}
          <motion.div
            className="grid lg:grid-cols-2 gap-8 lg:gap-12 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {/* Conectores centrales */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-24 bg-gradient-to-b from-transparent via-gray-300 to-transparent hidden lg:block z-20"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: isInView ? 1 : 0 }}
              transition={{ duration: 1, delay: 1.8 }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent hidden lg:block z-20"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isInView ? 1 : 0 }}
              transition={{ duration: 1, delay: 2 }}
            />

            {/* SERVICIOS CON DATOS */}
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={{ 
                  opacity: isInView ? 1 : 0, 
                  y: isInView ? 0 : 60,
                  scale: isInView ? 1 : 0.9
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.4 + (index * 0.2),
                  type: "spring",
                  stiffness: 100
                }}
                className="relative"
              >
                {/* Conectores hacia el centro */}
                <motion.div
                  className={`absolute ${
                    index === 0 ? 'bottom-1/2 right-0' : 'bottom-1/2 left-0'
                  } w-6 h-px bg-gradient-to-r from-gray-200 to-transparent hidden lg:block`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isInView ? 1 : 0 }}
                  transition={{ duration: 0.6, delay: 2.2 + index * 0.1 }}
                />
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA  */}
          <motion.div
            className="mt-16 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 2.4 }}
          >
            {/* Línea conectora */}
            <motion.div
              className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-px h-6 bg-gradient-to-b from-gray-300 to-transparent"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: isInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 2.6 }}
            />
            
            <motion.button
              onClick={scrollToDetailedServices}
              className="inline-flex items-center bg-gradient-to-r from-[#7252A5] to-[#6341a0] hover:from-[#6341a0] hover:to-[#5a3899] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Efecto de brillo */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
              />
              <span className="relative z-10 mr-2">{t('services.cta')}</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Elementos que fluyen */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`flow-to-brands-${i}`}
              className="absolute w-2 h-2 rounded-full opacity-25"
              style={{
                backgroundColor: ['#D4F225', '#7252A5', '#759CCF'][i % 3],
                left: `${15 + i * 10}%`,
                top: '90%',
              }}
              animate={{
                y: [0, 40, 80, 120],
                opacity: [0.25, 0.5, 0.3, 0],
                scale: [1, 1.1, 0.9, 0.7],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: i * 0.6,
                ease: "easeOut",
              }}
            />
          ))}
        </div>

        {/* Formas decorativas */}
        <motion.div
          className="absolute top-20 right-10 w-20 h-20 bg-[#D4F225]/15 rounded-full"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-16 h-16 bg-[#7252A5]/15 transform rotate-45"
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </section>

      <ServicesToBrandsTransition />
    </>
  );
};

export default UnifiedCoreServicesSection;