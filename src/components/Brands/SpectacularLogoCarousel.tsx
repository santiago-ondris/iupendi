import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { logoVariants, shineVariants } from '@/utils/Brands/brandAnimations';

interface BrandLogo {
  name: string;
  subtitle?: string;
  color: string;
}

const brandLogos: BrandLogo[] = [
  { name: 'BABEL HOTELS', subtitle: 'Hoteles', color: 'text-[#7252A5]' },
  { name: 'ART FACTORY HOSTELS', subtitle: 'Hoteles', color: 'text-[#D4F225]' },
  { name: 'NANU NIGHT', subtitle: 'Indumentaria', color: 'text-[#F2AE1F]' },
  { name: 'VANE QUIROGA KNITWEAR', subtitle: 'Indumentaria', color: 'text-[#759CCF]' },
  { name: 'TAMBREY TAVERN', subtitle: 'Restaurante', color: 'text-[#6E787D]' },
];

// Hook para detectar si es mobile
function useIsMobile(breakpoint = 640) { // 640px ≈ Tailwind 'sm'
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < breakpoint);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [breakpoint]);
  return isMobile;
}

const SpectacularLogoCarousel: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // logos triplicados para el efecto infinito
  const extendedLogos = [...brandLogos, ...brandLogos, ...brandLogos];
  const isMobile = useIsMobile();
  const logoWidth = isMobile ? 180 : 350;
  const totalWidth = brandLogos.length * logoWidth;

  return (
    <div className="relative w-full overflow-hidden">
      {/* Gradientes laterales */}
      <motion.div
        className="absolute left-0 top-0 w-8 sm:w-16 md:w-32 h-full bg-gradient-to-r from-white via-white/95 to-transparent z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.div
        className="absolute right-0 top-0 w-8 sm:w-16 md:w-32 h-full bg-gradient-to-l from-white via-white/95 to-transparent z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      {/* Líneas decorativas superior e inferior */}
      <motion.div
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      />

      {/* Contenedor del carrusel */}
      <div className="relative py-16">
        <motion.div
          className="flex items-center"
          animate={{ x: [-totalWidth, 0] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          style={{ width: `${extendedLogos.length * logoWidth}px` }}
        >
          {extendedLogos.map((logo, index) => {
            const originalIndex = index % brandLogos.length;
            const isHovered = hoveredIndex === originalIndex;
            
            return (
              <motion.div
                key={`${logo.name}-${Math.floor(index / brandLogos.length)}-${index % brandLogos.length}`}
                className="flex-shrink-0 flex items-center justify-center relative group"
                style={{ 
                  width: `${logoWidth}px`, 
                  height: '120px',
                  minWidth: `${logoWidth}px`
                }}
                variants={logoVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                onHoverStart={() => setHoveredIndex(originalIndex)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                {/* Efecto de resplandor de fondo en hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle, ${logo.color.replace('text-', '').replace('[', '').replace(']', '')}15 0%, transparent 70%)`,
                  }}
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Contenido del logo */}
                <div className="relative z-10 text-center px-4">
                  {/* Nombre principal */}
                  <motion.div
                    className={`text-sm sm:text-lg md:text-xl lg:text-2xl font-black ${logo.color} transition-all duration-300 whitespace-nowrap relative overflow-hidden`}                    style={{ fontFamily: 'Codec Pro, sans-serif' }}
                  >
                    {logo.name}
                    
                    {/* Efecto de brillo que cruza el texto */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
                      variants={shineVariants}
                      initial="hidden"
                      animate={isHovered ? "visible" : "hidden"}
                    />
                  </motion.div>
                  
                  {/* Subtítulo */}
                  {logo.subtitle && (
                    <motion.div
                      className="text-xs text-gray-500 mt-2 uppercase tracking-wider font-medium"
                      initial={{ opacity: 0.6 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {logo.subtitle}
                    </motion.div>
                  )}

                  {/* Punto decorativo debajo */}
                  <motion.div
                    className="w-1 h-1 rounded-full mx-auto mt-3 opacity-0 group-hover:opacity-100"
                    style={{ backgroundColor: logo.color.replace('text-', '').replace('[', '').replace(']', '') }}
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  />
                </div>

                {/* Efecto de partícula flotante en hover */}
                <motion.div
                  className="absolute top-1/4 right-1/4 w-1 h-1 rounded-full opacity-0 group-hover:opacity-100"
                  style={{ backgroundColor: logo.color.replace('text-', '').replace('[', '').replace(']', '') }}
                  animate={isHovered ? {
                    y: [-20, -40, -20],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Indicador sutil de scroll infinito */}
      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="w-1 h-1 bg-gray-300 rounded-full"
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default SpectacularLogoCarousel;