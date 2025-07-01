// src/components/SpectacularServicesSection.tsx
import React from 'react';
import { motion } from 'motion/react';
import InteractiveServiceCard from './InteractiveServiceCard';
import { useInView } from '@/utils/useInView';
import {
  sectionContainerVariants,
  headerVariants,
  particleVariants
} from '@/utils/ServiceDetails/servicesAnimations';

const SpectacularServicesSection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const servicesData = [
    {
      id: 'paid-ads',
      icon: '🎯',
      title: 'Paid Advertising',
      description: 'Campañas publicitarias que convierten. Cada peso invertido trabaja para maximizar tu ROI.',
      features: [
        'Google Ads & Facebook Ads optimizados',
        'Segmentación avanzada por audiencias',
        'A/B Testing continuo de creatividades',
        'Reportes en tiempo real y análisis profundo'
      ],
      accentColor: 'bg-[#D4F225]'
    },
    {
      id: 'social-media',
      icon: '📱',
      title: 'Social Media Management',
      description: 'Construimos comunidades leales que se convierten en embajadores de tu marca.',
      features: [
        'Estrategia de contenido personalizada',
        'Community management profesional',
        'Análisis de tendencias y competencia',
        'Crecimiento orgánico sostenible'
      ],
      accentColor: 'bg-[#7252A5]'
    },
    {
      id: 'content-creation',
      icon: '🎬',
      title: 'Content Creation',
      description: 'Contenido que conecta, emociona y convierte. Historias que tu audiencia no puede ignorar.',
      features: [
        'Producción de video profesional',
        'Fotografía de producto y lifestyle',
        'Diseño gráfico y motion graphics',
        'Copywriting persuasivo y storytelling'
      ],
      accentColor: 'bg-[#759CCF]'
    },
    {
      id: 'web-development',
      icon: '⚡',
      title: 'Web Development',
      description: 'Sitios web que venden mientras duermes. Experiencias digitales que convierten visitantes en clientes.',
      features: [
        'Desarrollo web responsive y rápido',
        'E-commerce optimizado para ventas',
        'SEO técnico y optimización móvil',
        'Integración con herramientas de marketing'
      ],
      accentColor: 'bg-[#F2AE1F]'
    }
  ];

  // Partículas flotantes para el fondo
  const backgroundParticles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    color: ['#D4F225', '#7252A5', '#759CCF', '#F2AE1F'][i % 4],
    size: Math.random() * 6 + 4,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  return (
    <section 
      ref={ref}
      className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden"
    >
      {/* Partículas de fondo animadas */}
      <div className="absolute inset-0 overflow-hidden">
        {backgroundParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full opacity-20"
            style={{
              backgroundColor: particle.color,
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            variants={particleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={particle.id}
          />
        ))}
      </div>

      {/* Gradientes decorativos */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-[#D4F225]/5 to-transparent"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.5 }}
          transition={{ duration: 1.5 }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-[#7252A5]/5 to-transparent"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.5 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6"
        variants={sectionContainerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header espectacular */}
        <motion.div
          className="text-center mb-20"
          variants={headerVariants}
        >
          {/* Badge superior */}
          <motion.div
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-6 py-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="w-2 h-2 bg-[#D4F225] rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm font-medium text-gray-700 tracking-wider uppercase">
              Servicios Premium
            </span>
          </motion.div>

          {/* Título principal */}
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
            <span className="block">SERVICIOS QUE</span>
            <span className="block">
              <span className="text-[#7252A5]">CONVIERTEN</span>
              <motion.span
                className="inline-block text-[#D4F225] ml-4"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                ✦
              </motion.span>
            </span>
          </motion.h2>

          {/* Subtítulo */}
          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            No somos otra agencia más. Somos el equipo que{' '}
            <span className="text-[#7252A5] font-semibold">transforma tu visión</span>{' '}
            en resultados medibles y{' '}
            <span className="text-[#D4F225] font-semibold bg-[#D4F225]/10 px-2 py-1 rounded">
              crecimiento exponencial
            </span>
          </motion.p>

          {/* Estadísticas rápidas */}
          <motion.div
            className="flex justify-center gap-8 md:gap-12 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { number: '500+', label: 'Proyectos exitosos' },
              { number: '98%', label: 'Clientes satisfechos' },
              { number: '3x', label: 'ROI promedio' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <motion.div
                  className="text-3xl md:text-4xl font-black text-[#7252A5]"
                  style={{ fontFamily: 'Codec Pro, sans-serif' }}
                  initial={{ scale: 0 }}
                  animate={{ scale: isInView ? 1 : 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 1 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Grid de servicios interactivos */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
          variants={sectionContainerVariants}
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              variants={headerVariants}
              custom={index}
            >
              <InteractiveServiceCard {...service} index={index} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA final de la sección */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.button
            className="bg-gradient-to-r from-[#D4F225] to-[#c4e520] hover:from-[#c4e520] hover:to-[#b4d50f] text-gray-900 font-black px-12 py-5 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            ¿Hablamos de tu proyecto?
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SpectacularServicesSection;