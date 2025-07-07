import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import {
  serviceCardVariants,
  cardContentVariants,
  iconVariants,
  titleVariants,
  featureVariants,
  ctaVariants,
  decorativeVariants
} from '@/utils/ServiceDetails/servicesAnimations';

interface ServiceCardProps {
  id: string;
  icon: string;
  title: string;
  features: string[];
  accentColor: string;
  description?: string;
  index: number;
}

const InteractiveServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  features,
  accentColor,
  description = "Estrategias personalizadas que convierten visitantes en clientes leales",
  index
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Extraer el color base para las animaciones
  const colorClass = accentColor.split(' ')[0]; // bg-[#D4F225]
  const colorValue = colorClass.replace('bg-[', '').replace(']', ''); // #D4F225

  return (
    <motion.div
      className="relative group perspective-1000"
      variants={serviceCardVariants}
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Card principal */}
      <motion.div
        className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 overflow-hidden cursor-pointer min-h-[420px] flex flex-col justify-between"
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          boxShadow: isHovered 
            ? `0 25px 50px rgba(0,0,0,0.15), 0 0 0 1px ${colorValue}20`
            : '0 10px 30px rgba(0,0,0,0.1)'
        }}
      >
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradiente sutil */}
          <motion.div
            className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-5"
            style={{ backgroundColor: colorValue }}
            variants={decorativeVariants}
            initial="hidden"
            animate={["visible", "float"]}
            custom={index}
          />
          
          {/* Partículas flotantes */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full opacity-20"
              style={{ backgroundColor: colorValue }}
              variants={decorativeVariants}
              initial="hidden"
              animate={isHovered ? ["visible", "float"] : "visible"}
              custom={i}
            />
          ))}
        </div>

        {/* Contenido de la card */}
        <motion.div
          variants={cardContentVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className="relative z-10"
        >
          {/* Header con icono y título */}
          <div className="mb-6">
            <motion.div
              className="flex items-center gap-4 mb-4"
              variants={titleVariants}
            >
              {/* Icono animado */}
              <motion.div
                className="w-16 h-16 rounded-2xl flex items-center justify-center relative overflow-hidden"
                style={{ backgroundColor: `${colorValue}15` }}
                variants={iconVariants}
              >
                <motion.span
                  className="text-2xl font-black"
                  style={{ 
                    fontFamily: 'Codec Pro, sans-serif',
                    color: colorValue
                  }}
                >
                  {icon}
                </motion.span>
                
                {/* Efecto de brillo en hover */}
                <motion.div
                  className="absolute inset-0 bg-white/20 -skew-x-12"
                  initial={{ x: '-100%' }}
                  animate={isHovered ? { x: '200%' } : { x: '-100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>

              {/* Badge de "Destacado" en algunas cards */}
              {index === 0 && (
                <motion.div
                  className="flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold"
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5, type: "spring" }}
                >
                  <Sparkles className="w-3 h-3" />
                  Más popular
                </motion.div>
              )}
            </motion.div>

            <motion.h3
              className="text-2xl md:text-3xl font-black text-gray-900 leading-tight"
              style={{ fontFamily: 'Codec Pro, sans-serif' }}
              variants={titleVariants}
            >
              {title}
            </motion.h3>

            <motion.p
              className="text-gray-600 mt-3 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {description}
            </motion.p>
          </div>

          {/* Lista de características */}
          <div className="mb-8">
            <div className="space-y-3">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3"
                  variants={featureVariants}
                  custom={i}
                >
                  <motion.div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: colorValue }}
                    whileHover={{ scale: 1.5 }}
                  />
                  <span className="text-gray-700 leading-relaxed">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Footer con CTA */}
        <motion.div
          className="relative z-10"
          variants={ctaVariants}
        >
          <motion.button
            className="w-full flex items-center justify-between p-4 rounded-2xl font-bold text-gray-900 transition-all duration-300"
            style={{ backgroundColor: `${colorValue}20` }}
            variants={ctaVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <span className="flex items-center gap-2">
              <Zap className="w-5 h-5" style={{ color: colorValue }} />
              Empezar ya mismo
            </span>
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ x: 5 }}
            >
              <ArrowRight className="w-5 h-5" style={{ color: colorValue }} />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Indicador de expansión */}
        <motion.div
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-gray-600"
          whileHover={{ scale: 1.1 }}
          animate={{ rotate: isExpanded ? 180 : 0 }}
        >
          <span className="text-sm">⌄</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default InteractiveServiceCard;