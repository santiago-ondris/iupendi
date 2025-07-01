import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { useInView } from '@/utils/useInView';
import {
  containerVariants,
  cardVariants,
  subtitleVariants,
  titleVariants
} from '../../utils/Cards/cardAnimations';  // <-- centralizamos aquí :contentReference[oaicite:0]{index=0}

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
      id="core-services"
      ref={ref}
      className="relative py-20 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden"
    >
      {/* Fade-in superior */}
      <motion.div
        className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      />

      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-black text-gray-800 mb-4 tracking-wider"
            style={{ fontFamily: 'Codec Pro, sans-serif' }}
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            NUESTROS SERVICIOS
          </motion.h2>

          {/* Subtítulo explicativo */}
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            variants={subtitleVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            Elige entre nuestro servicio completo o aprende a gestionar tu propio marketing con expertos.
          </motion.p>
        </motion.div>

        {/* Grid animado con stagger */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {services.map(service => (
            <motion.div key={service.id} variants={cardVariants}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA para ver todo */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <a
            href="#services-general"
            className="inline-flex items-center bg-[#7252A5] hover:bg-[#6341a0] text-white font-bold py-4 px-8 rounded-full transition-all duration-300"
          >
            Ver todos los servicios
            <ChevronDown className="w-5 h-5 ml-2" />
          </a>
        </motion.div>
      </div>

      {/* Formas decorativas pulsantes */}
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
