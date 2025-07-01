import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface ServiceRowProps {
  id: string;
  icon: string;
  title: string;
  features: string[];
  accentColor: string;
}

const ServiceRow: React.FC<ServiceRowProps> = ({
  icon,
  title,
  features,
  accentColor
}) => {
  return (
    <motion.div
      className="group border-b border-gray-800 py-8 cursor-pointer"
      whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* Columna de Servicio */}
        <div className="lg:col-span-4">
          <motion.div
            className="flex items-center gap-4"
            whileHover={{ x: 10 }}
            transition={{ duration: 0.3 }}
          >
            {/* Icono */}
            <div className="flex-shrink-0">
              <motion.div
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span 
                  className="text-xl font-black text-black"
                  style={{ fontFamily: 'Codec Pro, sans-serif' }}
                >
                  {icon}
                </span>
              </motion.div>
            </div>
            
            {/* Título */}
            <div>
              <h3 
                className="text-2xl md:text-3xl font-black text-white group-hover:text-gray-200 transition-colors duration-300"
                style={{ fontFamily: 'Codec Pro, sans-serif' }}
              >
                {title}
              </h3>
            </div>
          </motion.div>
        </div>

        {/* Columna de Características */}
        <div className="lg:col-span-6">
          <div className="space-y-2">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-sm text-gray-400 font-medium">
                  {String(index + 1).padStart(2, '0')}.
                </span>
                <span className="text-gray-300 text-sm md:text-base group-hover:text-white transition-colors duration-300">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Columna de CTA */}
        <div className="lg:col-span-2">
          <motion.button
            className={`w-full ${accentColor} text-black font-bold py-3 px-6 rounded-full text-sm transition-all duration-300 flex items-center justify-center gap-2 opacity-80 group-hover:opacity-100`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="hidden md:inline">Contactar</span>
            <span className="md:hidden">CTA</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Línea de acento que aparece en hover */}
      <motion.div
        className={`h-0.5 ${accentColor} mt-6 origin-left`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
};

export default ServiceRow;