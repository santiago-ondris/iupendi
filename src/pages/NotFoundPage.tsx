import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Home, Search, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const floatingShapes = [
    { type: 'circle', color: 'bg-[#D4F225]/15', size: 'w-24 h-24', delay: 0 },
    { type: 'circle', color: 'bg-[#7252A5]/12', size: 'w-32 h-32', delay: 1 },
    { type: 'circle', color: 'bg-[#759CCF]/10', size: 'w-20 h-20', delay: 0.5 },
    { type: 'square', color: 'bg-[#F2AE1F]/12', size: 'w-16 h-16', delay: 0.8 },
  ];

  const handleGoHome = () => {
    navigate('/');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex flex-col justify-center items-center px-6 py-8 overflow-hidden relative">
      
      {/* Figuras flotantes de fondo */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {floatingShapes.map((shape, i) => (
          <motion.div
            key={i}
            className={`absolute ${shape.size} ${
              shape.type === 'circle' 
                ? `${shape.color} rounded-full` 
                : `${shape.color} transform rotate-45`
            }`}
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
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
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        
        {/* Número 404 grande */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ 
            duration: 1.2, 
            delay: 0.3,
            type: "spring",
            stiffness: 100
          }}
        >
          <h1 
            className="text-8xl sm:text-9xl md:text-[12rem] lg:text-[14rem] font-black text-[#6E787D] leading-none relative"
            style={{ fontFamily: 'Codec Pro, sans-serif' }}
          >
            4
            <span className="text-[#7252A5]">0</span>
            <span className="text-[#D4F225]">4</span>
            
            {/* Elementos decorativos */}
            <motion.div
              className="absolute -top-8 -right-8 w-6 h-6 bg-[#D4F225]/40 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-4 h-4 bg-[#759CCF]/40 rounded-full"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
            />
          </h1>
        </motion.div>

        {/* Mensaje principal */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4"
            style={{ fontFamily: 'Codec Pro, sans-serif' }}
          >
            {t('notFound.title')}
            <motion.span
              className="inline-block text-[#7252A5] ml-2"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 2 }}
            >
              😅
            </motion.span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-2">
          {t('notFound.subtitle')}
          </p>
          <p className="text-lg text-gray-500">
          {t('notFound.description')}
          </p>
        </motion.div>

        {/* Subtítulo con humor */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 inline-block">
            <p className="text-gray-700 text-lg">
            {t('notFound.message')}
              <motion.span
                className="inline-block ml-2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: 3 }}
              >
                😉
              </motion.span>
            </p>
          </div>
        </motion.div>

        {/* Botones de acción */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          {/* Botón principal - Ir al inicio */}
          <motion.button
            onClick={handleGoHome}
            className="bg-gradient-to-r from-[#D4F225] to-[#c4e520] hover:from-[#c4e520] hover:to-[#b4d50f] text-gray-900 font-bold px-8 py-4 rounded-full text-lg flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Efecto de brillo */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
              initial={{ x: '-100%' }}
              animate={{ x: '200%' }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            />
            <Home className="w-5 h-5 relative z-10" />
            <span className="relative z-10">{t('notFound.buttons.goHome')}</span>
          </motion.button>

          {/* Botón secundario - Volver atrás */}
          <motion.button
            onClick={handleGoBack}
            className="bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-[#7252A5] text-gray-700 hover:text-[#7252A5] font-bold px-8 py-4 rounded-full text-lg flex items-center gap-3 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ArrowLeft className="w-5 h-5" />
            {t('notFound.buttons.goBack')}
          </motion.button>
        </motion.div>

        {/* Links útiles */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <p className="text-gray-600 mb-4">{t('notFound.links.helpText')}</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="/#core-services"
              className="inline-flex items-center gap-2 text-[#7252A5] hover:text-[#6341a0] font-medium transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
            >
              <Search className="w-4 h-4" />
              {t('notFound.links.services')}
            </motion.a>
            
            <span className="text-gray-400">•</span>
            
            <motion.a
              href="mailto:hola@iupendigital.com"
              className="inline-flex items-center gap-2 text-[#7252A5] hover:text-[#6341a0] font-medium transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
            >
              <Mail className="w-4 h-4" />
              {t('notFound.links.contact')}
            </motion.a>
          </div>
        </motion.div>

        {/* Mensaje final con humor */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.4 }}
        >
          <p className="text-sm text-gray-500">
          {t('notFound.disclaimer')}
            <motion.span
              className="inline-block"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 1, repeat: Infinity, delay: 4 }}
            >
              😜
            </motion.span>
          </p>
        </motion.div>
      </div>

      {/* Partículas flotantes adicionales */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 rounded-full opacity-20"
            style={{
              backgroundColor: ['#D4F225', '#7252A5', '#759CCF'][i % 3],
              left: `${10 + i * 15}%`,
              top: '90%',
            }}
            animate={{
              y: [0, -100, -200, -300],
              opacity: [0.2, 0.4, 0.2, 0],
              scale: [1, 1.3, 0.8, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 1.2,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default NotFoundPage;