import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import InteractiveServiceCard from './InteractiveServiceCard';
import { useInView } from '@/utils/useInView';
import {
  sectionContainerVariants,
  headerVariants,
} from '@/utils/ServiceDetails/servicesAnimations';
import { ServicesToBrandsTransition } from '@/components/Transitions/EnhancedTransitions';

const UnifiedServicesSection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const { t } = useTranslation();

  const floatingShapes = [
    { type: 'circle', color: 'bg-[#D4F225]/12', size: 'w-32 h-32', delay: 0 },
    { type: 'circle', color: 'bg-[#7252A5]/10', size: 'w-24 h-24', delay: 1 },
    { type: 'circle', color: 'bg-[#759CCF]/14', size: 'w-40 h-40', delay: 2 },
    { type: 'circle', color: 'bg-[#F2AE1F]/10', size: 'w-20 h-20', delay: 0.5 },
    { type: 'square', color: 'bg-[#D4F225]/12', size: 'w-16 h-16', delay: 0.8 },
    { type: 'square', color: 'bg-[#7252A5]/10', size: 'w-12 h-12', delay: 2.2 },
  ];

  const servicesData = [
    {
      id: 'paidAds',
      icon: '🎯',
      title: t('detailedServices.services.paidAds.title'),
      description: t('detailedServices.services.paidAds.description'),
      features: t('detailedServices.services.paidAds.features', { returnObjects: true }),
      cta: t('detailedServices.services.paidAds.cta'), // ← Nuevo
      accentColor: 'bg-[#D4F225]'
    },
    {
      id: 'socialMedia',
      icon: '📱',
      title: t('detailedServices.services.socialMedia.title'),
      description: t('detailedServices.services.socialMedia.description'),
      features: t('detailedServices.services.socialMedia.features', { returnObjects: true }),
      cta: t('detailedServices.services.socialMedia.cta'), // ← Nuevo
      accentColor: 'bg-[#7252A5]'
    },
    {
      id: 'contentCreation',
      icon: '🎬',
      title: t('detailedServices.services.contentCreation.title'),
      description: t('detailedServices.services.contentCreation.description'),
      features: t('detailedServices.services.contentCreation.features', { returnObjects: true }),
      cta: t('detailedServices.services.contentCreation.cta'), // ← Nuevo
      accentColor: 'bg-[#759CCF]'
    },
    {
      id: 'webDevelopment',
      icon: '⚡',
      title: t('detailedServices.services.webDevelopment.title'),
      description: t('detailedServices.services.webDevelopment.description'),
      features: t('detailedServices.services.webDevelopment.features', { returnObjects: true }),
      cta: t('detailedServices.services.webDevelopment.cta'), // ← Nuevo
      accentColor: 'bg-[#F2AE1F]'
    }
  ];

  return (
    <>
      <section 
        ref={ref}
        id="core-services"
        className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
        style={{ marginTop: '-180px', paddingTop: '4px' }}
      >
        
        {/* Figuras flotantes */}
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
        </div>

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6"
          variants={sectionContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* HEADER */}
          <motion.div
            className="text-center mb-20"
            variants={headerVariants}
          >
            {/* Badge superior */}
            <motion.div
              className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full px-6 py-3 mb-8 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#D4F225] to-[#7252A5]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isInView ? 1 : 0 }}
                transition={{ duration: 1.5, delay: 0.8 }}
              />
              <motion.div
                className="w-2 h-2 bg-[#D4F225] rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-medium text-gray-700 tracking-wider uppercase">
                {t('detailedServices.badge')}
              </span>
            </motion.div>

            {/* TÍTULO PRINCIPAL */}
            <motion.h2
              className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-none mb-6"
              style={{ fontFamily: 'Codec Pro, sans-serif' }}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ 
                opacity: isInView ? 1 : 0, 
                y: isInView ? 0 : 50,
                scale: isInView ? 1 : 0.9
              }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="block">{t('detailedServices.sectionTitle').split(' ').slice(0, 2).join(' ')}</span>
              <span className="block">
                <span className="text-[#7252A5]">{t('detailedServices.sectionTitle').split(' ').slice(2).join(' ')}</span>
                <motion.span
                  className="inline-block text-[#D4F225] ml-4"
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                  ✦
                </motion.span>
              </span>
            </motion.h2>

            {/* SUBTÍTULO */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                {t('detailedServices.subtitle')}
              </p>

              {/* Líneas conectoras */}
              <div className="flex justify-center items-center gap-8 mb-6">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-12 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isInView ? 1 : 0 }}
                    transition={{ duration: 0.8, delay: 1 + i * 0.2 }}
                  />
                ))}
              </div>
            </motion.div>

            {/* ESTADÍSTICAS INTEGRADAS */}
            <motion.div
              className="mb-16 relative"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {/* Fondo animado sutil */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#7252A5]/3 via-transparent to-[#D4F225]/3 -mx-8"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />

              {/* TÍTULO DE ESTADÍSTICAS */}
              <motion.h3
                className="text-lg md:text-xl font-bold text-gray-700 mb-8 text-center relative z-10"
                style={{ fontFamily: 'Codec Pro, sans-serif' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                {t('detailedServices.statsTitle')}
              </motion.h3>

              {/* GRID DE ESTADÍSTICAS */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
                {[
                  { 
                    number: t('detailedServices.stats.projects'), 
                    label: t('detailedServices.stats.projectsLabel'), 
                    color: '#7252A5' 
                  },
                  { 
                    number: t('detailedServices.stats.satisfaction'), 
                    label: t('detailedServices.stats.satisfactionLabel'), 
                    color: '#D4F225' 
                  },
                  { 
                    number: t('detailedServices.stats.roi'), 
                    label: t('detailedServices.stats.roiLabel'), 
                    color: '#759CCF' 
                  }
                ].map((stat, index) => (
                  <motion.div 
                    key={index} 
                    className="text-center relative group"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                    transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
                  >
                    
                    {/* NÚMERO  */}
                    <motion.div
                      className="text-2xl sm:text-3xl md:text-4xl font-black mb-1 relative z-10"
                      style={{ 
                        fontFamily: 'Codec Pro, sans-serif',
                        color: stat.color
                      }}
                      initial={{ scale: 0, rotateY: -90 }}
                      animate={{ 
                        scale: isInView ? 1 : 0,
                        rotateY: isInView ? 0 : -90
                      }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 1.6 + index * 0.2,
                        type: "spring",
                        stiffness: 150
                      }}
                    >
                      {stat.number}
                    </motion.div>
                    
                    {/* LABEL  */}
                    <motion.div
                      className="text-sm sm:text-base md:text-lg font-semibold text-gray-700 relative z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isInView ? 1 : 0 }}
                      transition={{ duration: 0.6, delay: 1.8 + index * 0.2 }}
                    >
                      {stat.label} 
                    </motion.div>

                    {/* Línea decorativa */}
                    <motion.div
                      className="w-8 sm:w-12 h-0.5 rounded-full mx-auto mt-3"
                      style={{ backgroundColor: stat.color }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isInView ? 1 : 0 }}
                      transition={{ duration: 0.6, delay: 2 + index * 0.2 }}
                    />

                    {/* Partícula flotante */}
                    <motion.div
                      className="absolute -top-2 -right-2 w-2 h-2 rounded-full opacity-60"
                      style={{ backgroundColor: stat.color }}
                      animate={{
                        y: [0, -8, 0],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Líneas conectoras entre estadísticas */}
              <motion.div
                className="absolute top-1/2 left-1/3 w-px h-8 bg-gradient-to-b from-transparent via-gray-300 to-transparent hidden md:block"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: isInView ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 2.4 }}
              />
              <motion.div
                className="absolute top-1/2 right-1/3 w-px h-8 bg-gradient-to-b from-transparent via-gray-300 to-transparent hidden md:block"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: isInView ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 2.6 }}
              />
            </motion.div>
          </motion.div>

          {/* Grid de servicios */}
          <motion.div 
            className="grid md:grid-cols-2 gap-8 lg:gap-12 relative"
            variants={sectionContainerVariants}
          >
            {/* Líneas conectoras */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-gray-200 to-transparent hidden md:block"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: isInView ? 1 : 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent hidden md:block"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isInView ? 1 : 0 }}
              transition={{ duration: 1, delay: 1.7 }}
            />

            {servicesData.map((service, index) => (
              <motion.div
                key={service.id}
                variants={headerVariants}
                custom={index}
                className="relative"
              >
                {/* Conectores */}
                <motion.div
                  className={`absolute ${
                    index === 0 ? 'bottom-1/2 right-0' :
                    index === 1 ? 'bottom-1/2 left-0' :
                    index === 2 ? 'top-1/2 right-0' :
                    'top-1/2 left-0'
                  } w-4 h-px bg-gradient-to-r from-gray-200 to-transparent hidden md:block`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isInView ? 1 : 0 }}
                  transition={{ duration: 0.6, delay: 2 + index * 0.1 }}
                />
                <InteractiveServiceCard 
                  {...{ ...service, features: Array.isArray(service.features) ? service.features : [] }} 
                  index={index} 
                />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center mt-20 relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            {/* Línea conectora */}
            <motion.div
              className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gradient-to-b from-gray-300 to-transparent"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: isInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 2.2 }}
            />
            
            <motion.button
              className="bg-gradient-to-r from-[#D4F225] to-[#c4e520] hover:from-[#c4e520] hover:to-[#b4d50f] text-gray-900 font-black px-12 py-5 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Efecto de brillo */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              />
              <span className="relative z-10">{t('detailedServices.cta')}</span>
            </motion.button>
          </motion.div>

          {/* Elementos que fluyen */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`flow-to-brands-${i}`}
                className="absolute w-2 h-2 rounded-full opacity-20"
                style={{
                  backgroundColor: ['#D4F225', '#7252A5', '#759CCF'][i % 3],
                  left: `${15 + i * 10}%`,
                  top: '90%',
                }}
                animate={{
                  y: [0, 50, 100, 150],
                  opacity: [0.2, 0.4, 0.3, 0],
                  scale: [1, 1.1, 0.9, 0.7],
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
        </motion.div>
      </section>

      <ServicesToBrandsTransition />
    </>
  );
};

export default UnifiedServicesSection;