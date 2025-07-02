import React from 'react';
import { motion } from 'motion/react';
import InteractiveServiceCard from './InteractiveServiceCard';
import { useInView } from '@/utils/useInView';
import {
  sectionContainerVariants,
  headerVariants,
} from '@/utils/ServiceDetails/servicesAnimations';
import { ServicesToBrandsTransition } from '../OrganicTransitions';

const UnifiedServicesSection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const servicesData = [
    {
      id: 'paid-ads',
      icon: '🎯',
      title: 'Paid Media',
      description: 'Estrategias de Publicidad Digital que Convierten, No Solo Atraen Clics.',
      features: [
        'Configuración de Cuentas',
        'Estrategia y Planificación',
        'Segmentación Inteligente',
        'Creación de Campañas',
        'Optimización y Reporte'
      ],
      accentColor: 'bg-[#D4F225]'
    },
    {
      id: 'social-media',
      icon: '📱',
      title: 'Social Media Management',
      description: 'No se trata solo de publicar, se trata de conectar.',
      features: [
        'Estrategia y Manual de Uso de Redes',
        'Análisis de Mercado',
        'Planificación de Contenido',
        'Creatividad y Producción',
        'Reunión Mensual de Resultados'
      ],
      accentColor: 'bg-[#7252A5]'
    },
    {
      id: 'content-creation',
      icon: '🎬',
      title: 'Asesoramiento en Marketing Digital',
      description: 'Te damos el plan, la estrategia y el acompañamiento. Vos lo ejecutás.',
      features: [
        'Análisis de Mercado y Marca',
        'Definición de Estrategia Digital',
        'Acompañamiento Personalizado',
        'Capacitación y Recursos',
        'Monitoreo y Optimización'
      ],
      accentColor: 'bg-[#759CCF]'
    },
    {
      id: 'web-development',
      icon: '⚡',
      title: 'Sitio Web (Creación y Desarrollo)',
      description: 'Tu web no solo tiene que verse bien, tiene que vender.',
      features: [
        'Análisis y Estrategia',
        'Wireframing y Diseño UI/UX',
        'Desarrollo Web',
        'Optimización y Pruebas',
        'Lanzamiento y Mantenimiento'
      ],
      accentColor: 'bg-[#F2AE1F]'
    }
  ];

  // Partículas flotantes que conectan con otras secciones
  const connectingParticles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    color: ['#D4F225', '#7252A5', '#759CCF', '#F2AE1F'][i % 4],
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  return (
    <>
      <section 
        ref={ref}
        id="core-services"
        className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
        style={{ marginTop: '-180px', paddingTop: '4px' }} // Overlap
      >
        
        {/* Partículas conectoras entre secciones */}
        <div className="absolute inset-0 overflow-hidden">
          {connectingParticles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full"
              style={{
                backgroundColor: particle.color,
                width: particle.size,
                height: particle.size,
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                opacity: 0.15,
              }}
              animate={{
                y: [0, -50, -100, -150],
                opacity: [0.15, 0.3, 0.2, 0],
                scale: [1, 1.2, 0.8, 0.5],
              }}
              transition={{
                duration: 12 + particle.id,
                repeat: Infinity,
                delay: particle.id * 2,
                ease: "easeOut",
              }}
            />
          ))}

          {/* Gradientes conectores */}
          <motion.div
            className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50/50 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 1.5 }}
          />

          <motion.div
            className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/50 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </div>

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6"
          variants={sectionContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header espectacular con conexión visual */}
          <motion.div
            className="text-center mb-20"
            variants={headerVariants}
          >
            {/* Badge superior con animación conectora */}
            <motion.div
              className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full px-6 py-3 mb-8 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Línea conectora animada */}
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

            {/* Subtítulo con elementos conectores */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                No somos otra agencia más. Somos el equipo que{' '}
                <span className="text-[#7252A5] font-semibold">transforma tu visión</span>{' '}
                en resultados medibles y{' '}
                <span className="text-[#D4F225] font-semibold bg-[#D4F225]/10 px-2 py-1 rounded">
                  crecimiento exponencial
                </span>
              </p>

              {/* Líneas conectoras hacia las cards */}
              <div className="flex justify-center items-center gap-8">
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

            {/* Estadísticas conectadas */}
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
                <motion.div 
                  key={index} 
                  className="text-center relative"
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Conector visual */}
                  <motion.div
                    className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-gradient-to-b from-gray-300 to-transparent"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: isInView ? 1 : 0 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  />
                  <motion.div
                    className="text-3xl md:text-4xl font-black text-[#7252A5]"
                    style={{ fontFamily: 'Codec Pro, sans-serif' }}
                    initial={{ scale: 0 }}
                    animate={{ scale: isInView ? 1 : 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 1.4 + index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Grid de servicios con elementos conectores */}
          <motion.div 
            className="grid md:grid-cols-2 gap-8 lg:gap-12 relative"
            variants={sectionContainerVariants}
          >
            {/* Líneas conectoras entre cards */}
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
                {/* Conector hacia el centro */}
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
                <InteractiveServiceCard {...service} index={index} />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA conectado visualmente */}
          <motion.div
            className="text-center mt-20 relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            {/* Línea conectora desde las cards */}
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
              <span className="relative z-10">¿Hablamos de tu proyecto?</span>
            </motion.button>
          </motion.div>

          {/* Elementos que fluyen hacia la siguiente sección */}
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

      {/* Transición orgánica hacia brands */}
      <ServicesToBrandsTransition />
    </>
  );
};

export default UnifiedServicesSection;