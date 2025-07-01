import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

interface FAQCardProps {
  id: string;
  question: string;
  answer: string;
  highlight?: string;
  accentColor: string;
}

const FAQCard: React.FC<FAQCardProps> = ({
  question,
  answer,
  highlight,
  accentColor
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden cursor-pointer"
      whileHover={{ 
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        scale: 1.01
      }}
      transition={{ duration: 0.3 }}
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* Header de la card */}
      <div className="p-6 md:p-8">
        <div className="flex items-center justify-between">
          <div className="flex-1 mr-4">
            <motion.h3
              className="text-xl md:text-2xl font-bold text-white leading-tight"
              style={{ fontFamily: 'Codec Pro, sans-serif' }}
              layout
            >
              {question}
              {highlight && (
                <span className={`ml-2 ${accentColor.replace('bg-', 'text-').replace('hover:bg-', '').split(' ')[0]}`}>
                  {highlight}
                </span>
              )}
            </motion.h3>
          </div>
          
          {/* Botón expandir/contraer */}
          <motion.div
            className={`w-12 h-12 ${accentColor} rounded-full flex items-center justify-center flex-shrink-0`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ rotate: isOpen ? 180 : 0 }}
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
                  <Minus className="w-6 h-6 text-black" />
                </motion.div>
              ) : (
                <motion.div
                  key="plus"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Plus className="w-6 h-6 text-black" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Contenido expandible */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-8 pb-6 md:pb-8">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="border-t border-white/10 pt-6"
              >
                <p className="text-gray-300 text-lg leading-relaxed">
                  {answer}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Barra de acento que aparece en hover */}
      <motion.div
        className={`h-1 ${accentColor} origin-left`}
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
};

export default FAQCard;