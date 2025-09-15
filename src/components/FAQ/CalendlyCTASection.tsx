import React from 'react';
import { motion } from 'motion/react';
import { Zap, Clock, Target, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CalendlyCTASectionProps {
  isInView: boolean;
}

const CalendlyCTASection: React.FC<CalendlyCTASectionProps> = ({ isInView }) => {
  const navigate = useNavigate();

  const handleStartOnboarding = () => {
    navigate('/onboarding');
  };

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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center relative">
          {/* Badge inicial con energía */}
          <motion.div
            className="inline-flex items-center gap-2 bg-[#7252A5] text-white px-4 py-2 rounded-full mb-4 text-sm font-bold"
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: isInView ? 1 : 0, rotate: isInView ? 0 : -10 }}
            transition={{ duration: 0.8, delay: 3.4, type: "spring" }}
          >
            <Zap className="w-4 h-4" />
            ¡ASEGURÁ TU MEET!
          </motion.div>

          {/* Título principal súper directo */}
          <motion.h3
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 leading-tight"
            style={{ fontFamily: 'Codec Pro, sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 3.6 }}
          >
            ¿Querés una{' '}
            <motion.span
              className="relative inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 4 }}
            >
              <span className="text-[#D4F225] relative z-10">charla estratégica</span>
              <motion.div
                className="absolute inset-0 bg-[#D4F225]/20 rounded-lg transform -skew-x-12"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isInView ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 4 }}
              />
            </motion.span>
            <br />
            <span className="text-[#7252A5]">GRATIS</span> de 30 minutos?
          </motion.h3>
          
          {/* Subtítulo directo y agresivo */}
          <motion.p
            className="text-xl sm:text-2xl text-gray-700 font-bold mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 3.8 }}
          >
            Completá este formulario y conseguí tu{' '}
            <span className="text-[#F2AE1F] font-black">análisis personalizado</span> YA
          </motion.p>

          <motion.p
            className="text-lg text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 4 }}
          >
            No pierdas más tiempo - te damos una estrategia concreta para TU negocio
          </motion.p>
        </div>

        {/* Features de la charla */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 4.2 }}
        >
          {[
            { 
              icon: Clock, 
              text: "30 minutos intensivos", 
              color: "#D4F225",
              description: "Directo al grano"
            },
            { 
              icon: Target, 
              text: "Estrategia personalizada", 
              color: "#7252A5",
              description: "Para TU industria"
            },
            { 
              icon: Zap, 
              text: "Plan de acción concreto", 
              color: "#759CCF",
              description: "Que podés implementar"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 text-center"
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${item.color}20` }}
              >
                <item.icon className="w-6 h-6" style={{ color: item.color }} />
              </div>
              <div>
                <span className="font-bold text-gray-900 block">{item.text}</span>
                <span className="text-sm text-gray-600">{item.description}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA principal gigante hacia onboarding */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ 
            opacity: isInView ? 1 : 0, 
            scale: isInView ? 1 : 0.95 
          }}
          transition={{ duration: 1, delay: 4.5 }}
        >
          {/* Contenedor principal del CTA */}
          <div className="bg-gradient-to-br from-[#7252A5] via-[#759CCF] to-[#7252A5] rounded-3xl p-1 shadow-2xl">
            <div className="bg-white rounded-[22px] p-8 sm:p-12 text-center">
              
              {/* Título del CTA */}
              <motion.h4
                className="text-2xl sm:text-3xl font-black text-gray-900 mb-4"
                style={{ fontFamily: 'Codec Pro, sans-serif' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 4.8 }}
              >
                ¡No te quedes afuera!
              </motion.h4>

              <motion.p
                className="text-lg text-gray-600 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ duration: 0.6, delay: 5 }}
              >
                Sólo te toma <strong>3 minutos</strong> completar el formulario
              </motion.p>

              {/* Botón principal súper llamativo */}
              <motion.button
                onClick={handleStartOnboarding}
                className="group relative inline-flex items-center gap-3 bg-[#D4F225] hover:bg-[#c4e520] text-gray-900 px-8 py-4 rounded-2xl font-black text-xl transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 5.2 }}
              >
                {/* Efecto de brillo */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                  initial={{ x: '-100%' }}
                  animate={{ x: '200%' }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                />
                
                <span className="relative z-10">¡QUIERO MI CHARLA GRATIS!</span>
                <ChevronRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              {/* Incentivo adicional */}
              <motion.p
                className="text-sm text-gray-500 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ duration: 0.6, delay: 5.4 }}
              >
                ⚡ Sin compromisos - Solo estrategia pura
              </motion.p>
            </div>
          </div>

          {/* Elementos flotantes de urgencia */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`urgency-${i}`}
              className="absolute w-3 h-3 rounded-full"
              style={{
                backgroundColor: ['#D4F225', '#7252A5', '#759CCF'][i % 3],
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 2) * 60}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </motion.div>

        {/* Disclaimer final */}
        <motion.p
          className="text-center text-sm text-gray-500 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 5.6 }}
        >
          🔒 Tus datos están seguros - Solo los usamos para preparar tu charla personalizada
        </motion.p>
      </div>

      {/* Línea conectora hacia la siguiente sección */}
      <motion.div
        className="absolute -bottom-8 sm:-bottom-10 left-1/2 transform -translate-x-1/2 w-px h-6 sm:h-8 bg-gradient-to-t from-gray-300 to-transparent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isInView ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 5.8 }}
      />
    </motion.div>
  );
};

export default CalendlyCTASection;