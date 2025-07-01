// src/components/LogoCarousel.tsx
import React from 'react';
import { motion } from 'motion/react';
import { brandLogos } from '../utils/brandLogos';

const LogoCarousel: React.FC = () => {
  // Duplicamos los logos 3 veces para asegurar el loop infinito
  const extendedLogos = [...brandLogos, ...brandLogos, ...brandLogos];
  const logoWidth = 250; // Ancho fijo por logo
  const totalWidth = brandLogos.length * logoWidth;

  return (
    <div className="relative w-full">
      {/* Gradientes laterales para fade effect */}
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-10" />
      
      {/* Contenedor del carrusel */}
      <div className="overflow-hidden py-8">
        <motion.div
          className="flex items-center"
          animate={{
            x: [-totalWidth, 0],
          }}
          transition={{
            duration: 40, // Más lento - 40 segundos
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          style={{
            width: `${extendedLogos.length * logoWidth}px`,
          }}
        >
          {extendedLogos.map((logo, index) => (
            <motion.div
              key={`${logo.name}-${Math.floor(index / brandLogos.length)}-${index % brandLogos.length}`}
              className="flex-shrink-0 flex items-center justify-center px-8"
              style={{ 
                width: `${logoWidth}px`, 
                height: '100px',
                minWidth: `${logoWidth}px`
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex items-center justify-center w-full h-full">
                {/* Logos simulados con texto estilizado */}
                <div className="text-center">
                  <div 
                    className={`text-2xl md:text-3xl font-bold ${logo.color} opacity-50 hover:opacity-80 transition-opacity duration-300 whitespace-nowrap`}
                    style={{ fontFamily: 'Codec Pro, sans-serif' }}
                  >
                    {logo.name}
                  </div>
                  {logo.subtitle && (
                    <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider">
                      {logo.subtitle}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoCarousel;