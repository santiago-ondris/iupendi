// src/components/FAQSection.tsx
import React from 'react';
import { motion } from 'motion/react';
import FAQCard from './FAQCard';
import { useInView } from '../utils/useInView';
import { faqData } from '../utils/faqData';

const FAQSection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section 
      ref={ref}
      className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-gray-800 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Header principal */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight"
            style={{ fontFamily: 'Codec Pro, sans-serif' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Tú preguntas,{' '}
            <span className="text-[#D4F225]">nosotros</span>
            <br />
            respondemos
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Las respuestas que necesitas para tomar la mejor decisión para tu negocio
          </motion.p>
        </motion.div>

        {/* Grid de FAQ Cards */}
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30, scale: isInView ? 1 : 0.95 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.8 + (index * 0.1),
                type: "spring",
                stiffness: 100
              }}
            >
              <FAQCard {...faq} />
            </motion.div>
          ))}
        </div>

        {/* CTA integrado */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
            <motion.h3
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: 'Codec Pro, sans-serif' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              ¿Tienes una pregunta específica?
            </motion.h3>
            
            <motion.p
              className="text-gray-300 mb-6 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              Nuestro equipo está listo para resolver todas tus dudas
            </motion.p>
            
            <motion.button
              className="bg-[#D4F225] hover:bg-[#c4e520] text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              Habla con nosotros
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Elementos decorativos */}
      <motion.div
        className="absolute top-20 right-20 w-6 h-6 bg-[#D4F225]/20 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-32 left-16 w-4 h-4 bg-[#7252A5]/20 transform rotate-45"
        animate={{
          rotate: [45, 225, 45],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
};

export default FAQSection;