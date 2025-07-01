// src/components/FAQCardLight.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import {
  faqCardVariants,
  faqContentVariants,
  faqButtonVariants,
  questionVariants,
  expandedContentVariants,
  answerVariants,
  accentBarVariants
} from '@/utils/FAQ/faqAnimations';

interface FAQCardLightProps {
  id: string;
  question: string;
  answer: string;
  highlight?: string;
  accentColor: string;
  index: number;
}

const FAQCardLight: React.FC<FAQCardLightProps> = ({
  question,
  answer,
  highlight,
  accentColor,
  index
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Extraer el color base para las animaciones
  const colorClass = accentColor.split(' ')[0]; // bg-[#D4F225]
  const colorValue = colorClass.replace('bg-[', '').replace(']', ''); // #D4F225

  return (
    <motion.div
      className="group relative"
      variants={faqCardVariants}
      whileHover="hover"
      custom={index}
    >
      {/* Card principal */}
      <motion.div
        className="bg-white border border-gray-200 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          boxShadow: isOpen 
            ? `0 20px 40px rgba(0,0,0,0.1), 0 0 0 2px ${colorValue}20`
            : undefined
        }}
      >
        {/* Header de la card */}
        <motion.div
          className="p-6 md:p-8"
          variants={faqContentVariants}
        >
          <div className="flex items-center justify-between">
            {/* Icono y pregunta */}
            <div className="flex items-start gap-4 flex-1 mr-4">
              {/* Icono decorativo */}
              <motion.div
                className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1"
                style={{ backgroundColor: `${colorValue}15` }}
                variants={faqButtonVariants}
              >
                <HelpCircle 
                  className="w-6 h-6" 
                  style={{ color: colorValue }}
                />
              </motion.div>

              {/* Texto de la pregunta */}
              <motion.div
                className="flex-1"
                variants={questionVariants}
              >
                <h3
                  className="text-xl md:text-2xl font-bold text-gray-900 leading-tight group-hover:text-gray-700 transition-colors duration-300"
                  style={{ fontFamily: 'Codec Pro, sans-serif' }}
                >
                  {question}
                  {highlight && (
                    <motion.span
                      className="ml-2 text-2xl"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.3, type: "spring" }}
                    >
                      {highlight}
                    </motion.span>
                  )}
                </h3>
              </motion.div>
            </div>
            
            {/* Botón expandir/contraer */}
            <motion.div
              className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 border-2 transition-all duration-300"
              style={{ 
                borderColor: colorValue,
                backgroundColor: isOpen ? colorValue : 'transparent'
              }}
              variants={faqButtonVariants}
              whileHover="hover"
              whileTap="tap"
              animate={{ 
                rotate: isOpen ? 180 : 0,
                backgroundColor: isOpen ? colorValue : 'transparent'
              }}
              transition={{ duration: 0.3 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="minus"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Minus className="w-5 h-5 text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="plus"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Plus className="w-5 h-5" style={{ color: colorValue }} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>

        {/* Contenido expandible */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={expandedContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="overflow-hidden"
            >
              <div className="px-6 md:px-8 pb-6 md:pb-8">
                <motion.div
                  variants={answerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="border-t border-gray-100 pt-6 ml-16"
                >
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {answer}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Barra de acento que aparece en hover */}
        <motion.div
          className="h-1 origin-left"
          style={{ backgroundColor: colorValue }}
          variants={accentBarVariants}
          initial="hidden"
          whileHover="visible"
        />
      </motion.div>

      {/* Efecto de resplandor en hover */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 -z-10"
        style={{
          background: `radial-gradient(circle at center, ${colorValue}10 0%, transparent 70%)`,
        }}
        initial={{ scale: 0.8 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default FAQCardLight;