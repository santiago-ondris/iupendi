// src/components/HeroSection.tsx
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Aquí agregarás la lógica de envío
  };

  // Figuras geométricas flotantes con colores de marca apagados
  const floatingShapes = [
    // Círculos
    { type: 'circle', color: 'bg-[#D4F225]/10', size: 'w-32 h-32', delay: 0 },
    { type: 'circle', color: 'bg-[#7252A5]/8', size: 'w-24 h-24', delay: 1 },
    { type: 'circle', color: 'bg-[#759CCF]/12', size: 'w-40 h-40', delay: 2 },
    { type: 'circle', color: 'bg-[#F2AE1F]/8', size: 'w-20 h-20', delay: 0.5 },
    { type: 'circle', color: 'bg-[#E7E8CF]/15', size: 'w-28 h-28', delay: 1.5 },
    
    // Cuadrados rotados
    { type: 'square', color: 'bg-[#D4F225]/12', size: 'w-16 h-16', delay: 0.8 },
    { type: 'square', color: 'bg-[#7252A5]/10', size: 'w-12 h-12', delay: 2.2 },
    { type: 'square', color: 'bg-[#759CCF]/8', size: 'w-20 h-20', delay: 1.8 },
    
    // Triángulos (simulados con border)
    { type: 'triangle', color: 'border-[#F2AE1F]/15', size: 'w-24 h-24', delay: 1.2 },
    { type: 'triangle', color: 'border-[#D4F225]/10', size: 'w-18 h-18', delay: 0.3 },
  ];

  return (
    <section className="relative min-h-screen bg-gray-50 flex flex-col justify-center items-center px-6 py-20 overflow-hidden">
      {/* Background pattern con figuras flotantes */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingShapes.map((shape, i) => (
          <motion.div
            key={i}
            className={`absolute ${shape.size} ${
              shape.type === 'circle' 
                ? `${shape.color} rounded-full` 
                : shape.type === 'square'
                ? `${shape.color} transform rotate-45`
                : `${shape.color} border-8 transform rotate-12`
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              rotate: shape.type === 'square' ? [45, 225, 45] : [0, 360, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: shape.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      {/* Contenido principal */}
      <div className="relative z-20 max-w-6xl mx-auto text-center">
        {/* Título principal con animaciones escalonadas */}
        <motion.h1 
          className="text-6xl md:text-8xl lg:text-9xl font-black text-gray-900 leading-none mb-8"
          style={{ fontFamily: 'Codec Pro, sans-serif' }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span 
            className="block"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            COMO ESTEROIDES
          </motion.span>
          <motion.span 
            className="block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            PARA TU{' '}
            <span className="text-[#7252A5]">NEGOCIO</span>
            <motion.span
              className="inline-block text-[#D4F225] ml-2"
              initial={{ opacity: 0, rotate: -45, scale: 0 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              ✱
            </motion.span>
          </motion.span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p 
          className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Hacer crecer un negocio es difícil. Nosotros lo hacemos mucho más fácil,
          más predecible, menos estresante y más divertido.
        </motion.p>

        {/* Formulario de email */}
        <motion.form 
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="flex-1 relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="✋ Ingresa tu email y te enviamos algo de 'magia'..."
              className="w-full px-6 py-4 text-lg bg-white border-2 border-gray-200 rounded-full focus:outline-none focus:ring-4 focus:ring-[#D4F225]/30 focus:border-[#D4F225] placeholder-gray-500 transition-all duration-300"
              required
            />
          </div>
          <motion.button
            type="submit"
            className="bg-[#D4F225] hover:bg-[#c4e520] text-gray-900 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 min-w-[140px] shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hazlo <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.form>

        {/* Disclaimer y reviews */}
        <motion.div 
          className="text-center space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p className="text-sm text-gray-500">
            *Pero es 100% legal (promesa de meñique)
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="flex text-[#F2AE1F]">
              {'★'.repeat(5)}
            </div>
            <span className="text-sm text-gray-600">
              4.9 estrellas de 2,847 reviews
            </span>
          </div>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="cursor-pointer"
        >
          <ChevronDown className="w-8 h-8 text-[#7252A5]" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;