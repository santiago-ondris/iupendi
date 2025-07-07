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

  return (
    <>
      <section 
        ref={ref}
        id="core-services"
        className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
        style={{ marginTop: '-180px', paddingTop: '4px' }} // Overlap
      >
        
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
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                No somos otra agencia más. Somos el equipo que{' '}
                <span className="text-[#7252A5] font-semibold">transforma tu visión</span>{' '}
                en resultados medibles y{' '}
                <span className="text-[#D4F225] font-semibold bg-[#D4F225]/10 px-2 py-1 rounded">
                  crecimiento exponencial
                </span>
              </p>

              {/* Líneas conectoras hacia las estadísticas */}
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

            {/* Estadísticas MEJORADAS - Mucho más grandes y llamativas */}
            <motion.div
              className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 md:p-12 shadow-xl mb-16 overflow-hidden"
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40, scale: isInView ? 1 : 0.9 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {/* Fondo animado sutil */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#7252A5]/5 via-transparent to-[#D4F225]/5"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />

              {/* Título de las estadísticas */}
              <motion.h3
                className="text-xl md:text-2xl font-bold text-gray-700 mb-8 relative z-10"
                style={{ fontFamily: 'Codec Pro, sans-serif' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                Resultados que hablan por nosotros
              </motion.h3>

              {/* Grid de estadísticas */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
                {[
                  { number: '500+', label: 'Proyectos exitosos', color: '#7252A5' },
                  { number: '98%', label: 'Clientes satisfechos', color: '#D4F225' },
                  { number: '3x', label: 'ROI promedio', color: '#759CCF' }
                ].map((stat, index) => (
                  <motion.div 
                    key={index} 
                    className="text-center relative group"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                    transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
                  >
                    {/* Círculo decorativo de fondo */}
                    <motion.div
                      className="absolute inset-0 rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                      style={{ backgroundColor: stat.color }}
                      initial={{ scale: 0 }}
                      animate={{ scale: isInView ? 1 : 0 }}
                      transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                    />
                    
                    {/* Número principal - MUY GRANDE */}
                    <motion.div
                      className="text-6xl md:text-8xl lg:text-9xl font-black mb-2 relative z-10"
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
                    
                    {/* Label */}
                    <motion.div
                      className="text-lg md:text-xl font-semibold text-gray-700 relative z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isInView ? 1 : 0 }}
                      transition={{ duration: 0.6, delay: 1.8 + index * 0.2 }}
                    >
                      {stat.label}
                    </motion.div>

                    {/* Línea decorativa debajo */}
                    <motion.div
                      className="w-16 h-1 rounded-full mx-auto mt-4"
                      style={{ backgroundColor: stat.color }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isInView ? 1 : 0 }}
                      transition={{ duration: 0.6, delay: 2 + index * 0.2 }}
                    />

                    {/* Partícula flotante */}
                    <motion.div
                      className="absolute -top-4 -right-4 w-3 h-3 rounded-full opacity-60"
                      style={{ backgroundColor: stat.color }}
                      animate={{
                        y: [0, -10, 0],
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
                className="absolute top-1/2 left-1/3 w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent hidden md:block"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: isInView ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 2.4 }}
              />
              <motion.div
                className="absolute top-1/2 right-1/3 w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent hidden md:block"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: isInView ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 2.6 }}
              />
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