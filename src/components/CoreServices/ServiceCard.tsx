import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import {
  subtitleVariants,
  titleVariants,
  descriptionVariants,
  buttonVariants,
  ratingVariants
} from '../../utils/Cards/cardAnimations';  // <-- centralizamos aquí :contentReference[oaicite:1]{index=1}

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
      className={`relative ${bgColor} rounded-3xl p-8 md:p-12 text-white flex flex-col justify-between overflow-hidden`}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Overlay sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      
      {/* Forma decorativa giratoria */}
      <motion.div
        className={`absolute -top-10 -right-10 w-32 h-32 ${type === 'primary' ? 'bg-[#D4F225]/10' : 'bg-[#F2AE1F]/10'} rounded-full`}
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

        {/* Subtítulo */}
        <motion.p
          className={`text-sm font-bold tracking-wider mb-4 ${type === 'primary' ? 'text-[#D4F225]' : 'text-[#F2AE1F]'}`}
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
        >
          {subtitle}
        </motion.p>

        {/* Título */}
        <motion.h3
          className="text-5xl md:text-6xl font-black mb-6 leading-none"
          style={{ fontFamily: 'Codec Pro, sans-serif' }}
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          {title}
        </motion.h3>

        {/* Descripción */}
        <motion.p
          className="text-gray-300 text-lg leading-relaxed mb-8"
          variants={descriptionVariants}
          initial="hidden"
          animate="visible"
        >
          {description}
        </motion.p>
      </div>

      {/* Footer con CTA y rating */}
      <div className="relative z-10">
        <motion.button
          className={`w-full ${
            type === 'primary'
              ? 'bg-[#D4F225] hover:bg-[#c4e520]'
              : 'bg-[#F2AE1F] hover:bg-[#F2AE1F]'
          } text-black font-bold py-4 px-8 rounded-full text-lg mb-6 transition-all duration-300`}
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={buttonText}
        >
          {buttonText}
        </motion.button>

        <motion.div
          className="flex items-center justify-center gap-2"
          variants={ratingVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < Math.floor(rating) ? 'text-[#F2AE1F] fill-current' : 'text-gray-500'
                }`}
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
