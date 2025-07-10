import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, Zap, Clock, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface CalendlyCTASectionProps {
  isInView: boolean;
}

const CalendlyCTASection: React.FC<CalendlyCTASectionProps> = ({ isInView }) => {
  const { t } = useTranslation();

  // Cargar script de Calendly
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <motion.div
      className="mt-16 sm:mt-20 relative"
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      animate={{ 
        opacity: isInView ? 1 : 0, 
        y: isInView ? 0 : 60,
        scale: isInView ? 1 : 0.9
      }}
      transition={{ 
        duration: 1, 
        delay: 3,
        type: "spring",
        stiffness: 100
      }}
    >
      {/* Línea conectora desde las FAQs */}
      <motion.div
        className="absolute -top-8 sm:-top-10 left-1/2 transform -translate-x-1/2 w-px h-6 sm:h-8 bg-gradient-to-b from-gray-300 to-transparent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isInView ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 3.2 }}
      />

      {/* Contenedor principal con diseño moderno */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-gray-50 to-white border-2 border-gray-100 shadow-2xl">
        
        {/* Efectos de fondo animados */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradiente animado de fondo */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#7252A5]/5 via-transparent to-[#D4F225]/5"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Partículas de energía */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full opacity-20"
              style={{
                backgroundColor: ['#7252A5', '#D4F225', '#759CCF'][i % 3],
                left: `${10 + i * 10}%`,
                top: `${20 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [0, -20, 0],
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}

          {/* Líneas de energía convergentes */}
          <motion.div
            className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4F225]/30 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isInView ? 1 : 0 }}
            transition={{ duration: 2, delay: 3.5 }}
          />
          <motion.div
            className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#7252A5]/20 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isInView ? 1 : 0 }}
            transition={{ duration: 2.5, delay: 4 }}
          />
        </div>

        {/* Contenido principal */}
        <div className="relative z-10 p-8 sm:p-12">
          
          {/* Header con actitud */}
          <div className="text-center mb-8">
            
            {/* Badge agresivo */}
            <motion.div
              className="inline-flex items-center gap-2 bg-[#7252A5] text-white px-6 py-3 rounded-full mb-6 relative overflow-hidden"
              initial={{ scale: 0, rotate: -10 }}
              animate={{ 
                scale: isInView ? 1 : 0, 
                rotate: isInView ? 0 : -10 
              }}
              transition={{ duration: 0.6, delay: 3.4, type: "spring" }}
            >
              {/* Efecto de brillo */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              />
              
              <Zap className="w-5 h-5 relative z-10" />
              <span className="font-bold text-sm tracking-wider uppercase relative z-10">
               {t('calendlyCta.badge')}
              </span>
            </motion.div>

            {/* Título agresivo */}
            <motion.h3
              className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight"
              style={{ fontFamily: 'Codec Pro, sans-serif' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 3.6 }}
            >
              {t('calendlyCta.titlePart1')}{' '}
              <span className="text-[#7252A5] relative">
                {t('calendlyCta.titleHighlight')}
                {/* Subrayado animado */}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 bg-[#D4F225]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isInView ? 1 : 0 }}
                  transition={{ duration: 0.8, delay: 4 }}
                />
              </span>
              {t('calendlyCta.titlePart2')}
            </motion.h3>
            
            {/* Subtítulo directo */}
            <motion.p
              className="text-xl sm:text-2xl text-gray-700 font-semibold mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 3.8 }}
            >
              {t('calendlyCta.subtitle')} <span className="text-[#D4F225] font-black">{t('calendlyCta.subtitleHighlight')}</span> {t('calendlyCta.subtitlePart2')}
            </motion.p>

            <motion.p
              className="text-lg text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 4 }}
            >
              {t('calendlyCta.description')}
            </motion.p>
          </div>

          {/* Features rápidas */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 4.2 }}
          >
            {[
              { icon: Clock, text: t('calendlyCta.features.time'), color: "#D4F225" },
              { icon: Calendar, text: t('calendlyCta.features.booking'), color: "#7252A5" },
              { icon: ArrowRight, text: t('calendlyCta.features.strategy'), color: "#759CCF" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-200/50"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${item.color}20` }}
                >
                  <item.icon className="w-5 h-5" style={{ color: item.color }} />
                </div>
                <span className="font-semibold text-gray-800">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Calendly embebido */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ 
              opacity: isInView ? 1 : 0, 
              scale: isInView ? 1 : 0.95 
            }}
            transition={{ duration: 1, delay: 4.5 }}
          >
            {/* Marco del Calendly */}
            <div className="bg-white rounded-2xl p-2 border-2 border-gray-200 shadow-inner">
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/santiagonicolas2001/charla-gratis-iupendi-30min"
                style={{ minWidth: '100%', height: '600px' }}
              />
            </div>

            {/* Botón de emergencia si Calendly no carga */}
            <motion.div
              className="absolute inset-0 bg-gray-100 rounded-2xl flex items-center justify-center calendly-fallback"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 5 }}
              style={{ display: 'none' }} // Se mostrará solo si Calendly no carga
            >
              <div className="text-center">
                <Calendar className="w-16 h-16 text-[#7252A5] mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Calendly se está cargando...
                </h4>
                <p className="text-gray-600 mb-4">
                  ¿No aparece? Escribinos directo:
                </p>
                <a 
                  href="mailto:hola@iupendigital.com"
                  className="inline-flex items-center gap-2 bg-[#7252A5] text-white px-6 py-3 rounded-full font-bold hover:bg-[#6341a0] transition-colors"
                >
                  hola@iupendigital.com
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Disclaimer con humor */}
          <motion.p
            className="text-center text-sm text-gray-500 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 5 }}
          >
            {t('calendlyCta.disclaimer')}
          </motion.p>
        </div>

        {/* Línea conectora hacia la siguiente sección */}
        <motion.div
          className="absolute -bottom-8 sm:-bottom-10 left-1/2 transform -translate-x-1/2 w-px h-6 sm:h-8 bg-gradient-to-t from-gray-300 to-transparent"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: isInView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 5.2 }}
        />
      </div>
    </motion.div>
  );
};

export default CalendlyCTASection;