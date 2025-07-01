// src/components/ServiceCard.tsx
import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

interface ServiceCardProps {
  id: string;
  icon: string;
  iconColor: string;
  bgColor: string;
  subtitle: string;
  title: string;
  description: string;
  buttonText: string;
  rating: number;
  reviews: number;
  type: 'primary' | 'secondary';
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  iconColor,
  bgColor,
  subtitle,
  title,
  description,
  buttonText,
  rating,
  reviews,
  type
}) => {
  return (
    <motion.div
      className={`relative ${bgColor} rounded-3xl p-8 md:p-12 text-white min-h-[600px] flex flex-col justify-between overflow-hidden`}
      whileHover={{ scale: 1.02, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {/* Efectos de fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      
      {/* Forma decorativa */}
      <motion.div
        className={`absolute -top-10 -right-10 w-32 h-32 ${type === 'primary' ? 'bg-[#D4F225]/10' : 'bg-[#7252A5]/10'} rounded-full`}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="relative z-10">
        {/* Icono */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center">
            <span className={`text-4xl font-black ${iconColor}`} style={{ fontFamily: 'Codec Pro, sans-serif' }}>
              {icon}
            </span>
          </div>
        </motion.div>

        {/* Subtítulo */}
        <motion.p
          className={`text-sm font-bold tracking-wider mb-4 ${type === 'primary' ? 'text-[#D4F225]' : 'text-[#7252A5]'}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {subtitle}
        </motion.p>

        {/* Título */}
        <motion.h3
          className="text-5xl md:text-6xl font-black mb-6 leading-none"
          style={{ fontFamily: 'Codec Pro, sans-serif' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {title}
        </motion.h3>

        {/* Descripción */}
        <motion.p
          className="text-gray-300 text-lg leading-relaxed mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {description}
        </motion.p>
      </div>

      {/* Footer del card */}
      <div className="relative z-10">
        {/* Botón CTA */}
        <motion.button
          className={`w-full ${type === 'primary' ? 'bg-[#D4F225] hover:bg-[#c4e520]' : 'bg-[#7252A5] hover:bg-[#6341a0]'} text-black font-bold py-4 px-8 rounded-full text-lg mb-6 transition-all duration-300`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          {buttonText}
        </motion.button>

        {/* Rating y reviews */}
        <motion.div
          className="flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${i < Math.floor(rating) ? 'text-[#F2AE1F] fill-current' : 'text-gray-500'}`}
              />
            ))}
          </div>
          <span className="text-gray-300 text-sm ml-2">
            {rating} estrellas de {reviews.toLocaleString()} reviews
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;