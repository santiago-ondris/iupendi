import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Globe } from 'lucide-react';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <motion.div 
      className="flex items-center gap-2"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Icono opcional */}
      <Globe className="w-4 h-4 text-gray-500" />
      
      {/* Botón Español */}
      <motion.button
        onClick={() => changeLanguage('es')}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
          i18n.language === 'es'
            ? 'bg-[#D4F225] text-gray-900 shadow-md'
            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ES
      </motion.button>

      {/* Separador visual */}
      <div className="w-px h-4 bg-gray-300" />

      {/* Botón Inglés */}
      <motion.button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
          i18n.language === 'en'
            ? 'bg-[#D4F225] text-gray-900 shadow-md'
            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        EN
      </motion.button>
    </motion.div>
  );
};

export default LanguageSelector;