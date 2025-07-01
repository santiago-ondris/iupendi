import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useInView } from '@/utils/useInView';

const SpectacularCTASection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Aquí agregarás la lógica de envío
  };

  return (
    <section 
      ref={ref}
      id="super-cta"
      className="relative py-32 bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden"
    >
      {/* Transición suave desde la sección anterior */}
      <motion.div
        className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      />

      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0">
        {/* Círculos grandes de fondo */}
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 bg-[#D4F225]/10 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#7252A5]/8 rounded-full"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Partículas flotantes */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#D4F225]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Gradientes radiales adicionales para más ambiente */}
        <motion.div
          className="absolute top-1/3 right-1/3 w-72 h-72 rounded-full opacity-5"
          style={{ 
            background: 'radial-gradient(circle, #759CCF 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Pregunta principal con animación dramática */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
          animate={{ 
            opacity: isInView ? 1 : 0, 
            scale: isInView ? 1 : 0.5,
            rotateX: isInView ? 0 : -90
          }}
          transition={{ 
            duration: 1.2, 
            delay: 0.3,
            type: "spring",
            stiffness: 100
          }}
        >
          <motion.h2 
            className="text-6xl md:text-8xl font-black text-gray-900 mb-6"
            style={{ fontFamily: 'Codec Pro, sans-serif' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            ¿Todavía no te{' '}
            <motion.span
              className="text-[#7252A5] inline-block"
              initial={{ rotateY: 0 }}
              animate={{ rotateY: isInView ? [0, 360, 0] : 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              convencimos
            </motion.span>
            <motion.span
              className="inline-block ml-4"
              initial={{ opacity: 0, rotate: -45, scale: 0 }}
              animate={{ 
                opacity: isInView ? 1 : 0, 
                rotate: isInView ? 0 : -45, 
                scale: isInView ? 1 : 0 
              }}
              transition={{ duration: 0.6, delay: 2 }}
            >
              ?
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Subtítulo con personalidad */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.p
            className="text-2xl md:text-3xl text-gray-700 font-medium mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            Dale, sabemos que{' '}
            <motion.span
              className="text-[#D4F225] font-bold bg-[#D4F225]/10 px-3 py-1 rounded-lg"
              initial={{ scale: 1 }}
              animate={{ scale: isInView ? [1, 1.05, 1] : 1 }}
              transition={{ duration: 0.6, delay: 2.2 }}
            >
              querés contactarnos
            </motion.span>
          </motion.p>
          
          <motion.div
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            <Sparkles className="w-6 h-6 text-[#D4F225]" />
            <span className="text-gray-600 text-lg">
              (No te juzgamos, es normal)
            </span>
            <Sparkles className="w-6 h-6 text-[#D4F225]" />
          </motion.div>
        </motion.div>

        {/* Formulario con animación espectacular */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ 
            opacity: isInView ? 1 : 0, 
            y: isInView ? 0 : 100,
            scale: isInView ? 1 : 0.8
          }}
          transition={{ 
            duration: 1, 
            delay: 2.4,
            type: "spring",
            stiffness: 80
          }}
        >
          <form 
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto"
          >
            <div className="flex-1 relative">
              <motion.input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu email (prometemos no spamear... mucho 😉)"
                className="w-full px-8 py-5 text-lg bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-[#D4F225]/30 focus:border-[#D4F225] transition-all duration-300 shadow-lg"
                required
                whileFocus={{ scale: 1.02 }}
              />
            </div>
            
            <motion.button
              type="submit"
              className="bg-[#D4F225] hover:bg-[#c4e520] text-black px-10 py-5 rounded-full font-black text-lg flex items-center justify-center gap-3 transition-all duration-300 min-w-[200px] shadow-xl hover:shadow-2xl"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(212, 242, 37, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ rotate: -5 }}
              animate={{ rotate: isInView ? 0 : -5 }}
              transition={{ duration: 0.6, delay: 2.8 }}
            >
              ¡Hagámoslo! <ArrowRight className="w-6 h-6" />
            </motion.button>
          </form>
        </motion.div>

        {/* Mensaje final con humor */}
        <motion.p
          className="mt-8 text-gray-600 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 3.2 }}
        >
          *Respondemos rápido, pero no tanto como para parecer desesperados
        </motion.p>
      </div>

      {/* Transición suave hacia la siguiente sección */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-gray-100 to-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </section>
  );
};

export default SpectacularCTASection;