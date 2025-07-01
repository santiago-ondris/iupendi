import React from 'react';
import { motion } from 'motion/react';
import FAQCardLight from './FAQCardLight';
import { useInView } from '@/utils/useInView';
import {
  faqSectionVariants,
  faqHeaderVariants,
  ctaVariants
} from '@/utils/FAQ/faqAnimations';

const faqData = [
  {
    id: 'results-time',
    question: '¿Cuánto tiempo tardamos en ver resultados?',
    answer: 'Los primeros resultados los puedes ver en las primeras 2-4 semanas, pero los resultados más significativos y sostenibles los verás entre los 3-6 meses. Todo depende de tu industria, competencia y el estado actual de tu presencia digital.',
    highlight: '⚡',
    accentColor: 'bg-[#D4F225] hover:bg-[#c4e520]'
  },
  {
    id: 'investment-required',
    question: '¿Cuál es la inversión necesaria para empezar?',
    answer: 'Nuestros planes se adaptan a diferentes presupuestos, desde startups hasta empresas consolidadas. La inversión inicial incluye estrategia, implementación y gestión mensual. Te damos una propuesta personalizada después de conocer tus objetivos específicos.',
    highlight: '💰',
    accentColor: 'bg-[#7252A5] hover:bg-[#6341a0]'
  },
  {
    id: 'what-makes-different',
    question: '¿Qué nos hace diferentes de otras agencias?',
    answer: 'No somos una agencia más. Nos involucramos de verdad en tu negocio, conocemos a tu audiencia como si fuera nuestra, y creamos estrategias que realmente funcionan. Además, siempre te mantenemos informado con reportes claros y honestos.',
    highlight: '🚀',
    accentColor: 'bg-[#759CCF] hover:bg-[#6589c1]'
  },
  {
    id: 'services-included',
    question: '¿Qué incluyen exactamente sus servicios?',
    answer: 'Dependiendo del plan, incluimos estrategia digital completa, gestión de redes sociales, campañas publicitarias, creación de contenido, desarrollo web, SEO, email marketing y análisis de resultados. Todo lo que necesitas para dominar el mundo digital.',
    highlight: '📦',
    accentColor: 'bg-[#F2AE1F] hover:bg-[#e09d0e]'
  },
  {
    id: 'support-communication',
    question: '¿Cómo funciona la comunicación y el soporte?',
    answer: 'Tendrás acceso directo a tu account manager dedicado, reportes mensuales detallados, reuniones de seguimiento regulares y un canal de comunicación directo para resolver cualquier duda. Creemos en la transparencia total.',
    highlight: '💬',
    accentColor: 'bg-[#D4F225] hover:bg-[#c4e520]'
  }
];

const FAQSectionLight: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section 
      ref={ref}
      id="faq"
      className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      {/* Transición suave desde la sección anterior */}
      <motion.div
        className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-gray-100 to-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      />

      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradientes radiales sutiles */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-5"
          style={{ 
            background: 'radial-gradient(circle, #D4F225 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full opacity-5"
          style={{ 
            background: 'radial-gradient(circle, #7252A5 0%, transparent 70%)',
          }}
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Elementos geométricos decorativos */}
        <motion.div
          className="absolute top-1/3 right-16 w-6 h-6 rounded-full bg-[#D4F225]/20"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 left-16 w-4 h-4 bg-[#759CCF]/20 rotate-45"
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6"
        variants={faqSectionVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header principal */}
        <motion.div
          className="text-center mb-16"
          variants={faqHeaderVariants}
        >
          {/* Badge superior */}
          <motion.div
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-6 py-3 mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="w-2 h-2 bg-[#D4F225] rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm font-medium text-gray-700 tracking-wider uppercase">
              Preguntas Frecuentes
            </span>
          </motion.div>

          {/* Título principal */}
          <motion.h2 
            className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-6 leading-none"
            style={{ fontFamily: 'Codec Pro, sans-serif' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block">TÚ PREGUNTAS,</span>
            <span className="block">
              <span className="text-[#7252A5]">NOSOTROS</span>
              <br />
              <span className="text-[#D4F225]">RESPONDEMOS</span>
              <motion.span
                className="inline-block text-[#759CCF] ml-4"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                ❓
              </motion.span>
            </span>
          </motion.h2>
          
          {/* Subtítulo */}
          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Las respuestas que necesitas para tomar la{' '}
            <span className="text-[#7252A5] font-semibold">mejor decisión</span>{' '}
            para tu negocio
          </motion.p>
        </motion.div>

        {/* Grid de FAQ Cards */}
        <motion.div 
          className="space-y-6"
          variants={faqSectionVariants}
        >
          {faqData.map((faq, index) => (
            <motion.div
              key={faq.id}
              variants={faqHeaderVariants}
              custom={index}
            >
              <FAQCardLight {...faq} index={index} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA integrado */}
        <motion.div
          className="mt-20 text-center"
          variants={ctaVariants}
        >
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 md:p-12 shadow-xl">
            <motion.h3
              className="text-3xl md:text-4xl font-black text-gray-900 mb-4"
              style={{ fontFamily: 'Codec Pro, sans-serif' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              ¿Tienes una pregunta específica?
            </motion.h3>
            
            <motion.p
              className="text-gray-600 mb-8 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Nuestro equipo está listo para resolver todas tus dudas
            </motion.p>
            
            <motion.button
              className="bg-gradient-to-r from-[#D4F225] to-[#c4e520] hover:from-[#c4e520] hover:to-[#b4d50f] text-gray-900 font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              Habla con nosotros
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      {/* Transición suave hacia la siguiente sección */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-b from-white to-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </section>
  );
};

export default FAQSectionLight;