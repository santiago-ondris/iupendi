import React from 'react';
import { motion } from 'motion/react';
import ServiceCard from './ServiceCard';
import { useInView } from '../utils/useInView';

const CoreServicesSection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const services = [
    {
      id: 'agency',
      icon: 'I',
      iconColor: 'text-[#D4F225]',
      bgColor: 'bg-gray-800',
      subtitle: 'CONTRATA QUE LO HAGAMOS POR TI',
      title: 'AGENCIA',
      description: 'Servicios de marketing digital gestionados y "hechos para ti" para empresas medianas a grandes que buscan acelerar el "hiper-crecimiento". Y sí, garantizamos resultados y olemos fantástico *guiño*.',
      buttonText: 'Empezar',
      rating: 4.8,
      reviews: 1247,
      type: 'primary' as const
    },
    {
      id: 'courses',
      icon: 'I',
      iconColor: 'text-[#7252A5]',
      bgColor: 'bg-gray-700',
      subtitle: 'APRENDE A HACERLO TÚ MISMO',
      title: 'CURSOS',
      description: 'Programas de capacitación en crecimiento empresarial para empresas serias sobre escalar su negocio de coaching, consultoría o servicios a siete y ocho cifras RÁPIDO (en meses, no años).',
      buttonText: 'Empezar',
      rating: 4.9,
      reviews: 3847,
      type: 'secondary' as const
    }
  ];

  return (
    <section 
      ref={ref}
      className="relative py-20 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden"
    >
      {/* Elementos decorativos de transición */}
      <motion.div
        className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header de la sección */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-black text-gray-400 mb-4 tracking-wider"
            style={{ fontFamily: 'Codec Pro, sans-serif' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            NUESTROS SERVICIOS
          </motion.h2>
        </motion.div>

        {/* Grid de servicios */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={{ 
                opacity: isInView ? 1 : 0, 
                y: isInView ? 0 : 100,
                scale: isInView ? 1 : 0.9
              }}
              transition={{ 
                duration: 0.8, 
                delay: 0.6 + (index * 0.2),
                type: "spring",
                stiffness: 100
              }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Formas decorativas flotantes */}
      <motion.div
        className="absolute top-20 right-10 w-20 h-20 bg-[#D4F225]/10 rounded-full"
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
        className="absolute bottom-20 left-10 w-16 h-16 bg-[#7252A5]/10 transform rotate-45"
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
  );
};

export default CoreServicesSection;