import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  serviceCardVariants,
  cardContentVariants,
  titleVariants,
  featureVariants,
} from '@/utils/ServiceDetails/servicesAnimations';

interface ServiceCardProps {
  id: string;
  title: string;
  subtitle: string;
  bullets: string[];
  cta: string;
  accentColor: string;
  index: number;
}

const InteractiveServiceCard: React.FC<ServiceCardProps> = ({
  title,
  subtitle,
  bullets,
  cta,
  accentColor,
}) => {
  const [isHovered] = useState(false);

  // Extraer el color base para las animaciones
  const colorClass = accentColor.split(' ')[0]; // bg-[#D4F225]
  const colorValue = colorClass.replace('bg-[', '').replace(']', ''); // #D4F225

  return (
    <motion.div
      className="relative group"
      variants={serviceCardVariants}
    >
      {/* Card principal */}
      <motion.div
        className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 overflow-hidden min-h-[480px] flex flex-col"
        style={{
          boxShadow: isHovered 
            ? `0 25px 50px rgba(0,0,0,0.15), 0 0 0 1px ${colorValue}20`
            : '0 10px 30px rgba(0,0,0,0.1)'
        }}
      >
        {/* Borde de color en esquina superior derecha */}
        <motion.div
          className="absolute top-0 right-0 w-12 h-12 rounded-bl-3xl"
          style={{ 
            background: `linear-gradient(135deg, ${colorValue} 0%, ${colorValue}80 100%)` 
          }}
          animate={{
            scale: isHovered ? 1.05 : 1,
            boxShadow: isHovered 
              ? `0 0 20px ${colorValue}40`
              : `0 0 0px ${colorValue}00`
          }}
          transition={{ duration: 0.3 }}
        />

        <motion.div
          variants={cardContentVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className="relative z-10 flex flex-col h-full"
        >
          <motion.div
            className="flex items-center gap-3 mb-4 mt-2"
            variants={titleVariants}
          >
            <motion.div
              className="w-4 h-4 rounded-full flex-shrink-0"
              style={{ backgroundColor: colorValue }}
              animate={{
                scale: isHovered ? [1, 1.2, 1] : 1,
                boxShadow: isHovered 
                  ? `0 0 15px ${colorValue}60, 0 0 30px ${colorValue}30`
                  : `0 0 0px ${colorValue}00`
              }}
              transition={{ duration: 0.3 }}
            />
            
            <h3
              className="text-2xl md:text-3xl font-black text-gray-900 leading-tight"
              style={{ fontFamily: 'Codec Pro, sans-serif' }}
            >
              {title}
            </h3>
          </motion.div>

          <motion.p
            className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {subtitle}
          </motion.p>

          {/* Bullets */}
          <motion.div 
            className="mb-8 flex-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="space-y-3">
              {bullets.map((bullet, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3"
                  variants={featureVariants}
                  custom={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <motion.div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: colorValue }}
                    whileHover={{ scale: 1.3 }}
                  />
                  <span className="text-gray-700 leading-relaxed text-sm md:text-base">
                    {bullet}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="mt-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div 
              className="relative p-4 rounded-2xl overflow-hidden"
              style={{ backgroundColor: `${colorValue}08` }}
            >
              <motion.div
                className="absolute top-0 left-0 w-full h-0.5"
                style={{ backgroundColor: colorValue }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />
              
              <div className="flex flex-col items-center gap-3">
                <p className="text-gray-900 font-bold text-sm">
                  {cta}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-5"
            style={{ backgroundColor: colorValue }}
            animate={{
              scale: isHovered ? [1, 1.2, 1] : 1,
              rotate: [0, 180, 360]
            }}
            transition={{ 
              scale: { duration: 0.6 },
              rotate: { duration: 20, repeat: Infinity, ease: "linear" }
            }}
          />
          
          {/* Partículas sutiles */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full opacity-20"
              style={{ 
                backgroundColor: colorValue,
                left: `${20 + i * 30}%`,
                top: `${30 + i * 20}%`
              }}
              animate={{
                y: [0, -10, 0],
                opacity: isHovered ? [0.2, 0.4, 0.2] : 0.2
              }}
              transition={{
                duration: 2 + i,
                repeat: Infinity,
                delay: i * 0.5
              }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default InteractiveServiceCard;