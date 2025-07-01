import React from 'react';
import { motion } from 'motion/react';
import FAQCardLight from './FAQCardLight';
import { useInView } from '@/utils/useInView';
import {
  faqSectionVariants,
  faqHeaderVariants,
  ctaVariants
} from '@/utils/FAQ/faqAnimations';
import { FAQToCTATransition } from '../OrganicTransitions';

const UnifiedFAQSection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

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

  return (
    <>
      <section 
        ref={ref}
        id="faq"
        className="relative py-20 bg-gradient-to-b from-gray-50 via-slate-50 to-gray-100 overflow-hidden"
        style={{ marginTop: '-60px', paddingTop: '84px' }} // Overlap con Brands/DetailedServices
      >
        {/* Elementos que llegan desde la sección anterior */}
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`from-detailed-${i}`}
              className="absolute w-2 h-2 rounded-full opacity-15"
              style={{
                backgroundColor: ['#D4F225', '#7252A5', '#759CCF', '#F2AE1F'][i % 4],
                left: `${10 + i * 8}%`,
                top: '-15px',
              }}
              animate={{
                y: [0, 40, 80, 120],
                opacity: [0.15, 0.3, 0.2, 0],
                scale: [1, 1.2, 0.9, 0.7],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeOut",
              }}
            />
          ))}
        </div>

        {/* Elementos decorativos de fondo conectados */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradientes radiales evolutivos */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-5"
            style={{ 
              background: 'radial-gradient(circle, #7252A5 0%, transparent 70%)',
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.05, 0.12, 0.05],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full opacity-5"
            style={{ 
              background: 'radial-gradient(circle, #D4F225 0%, transparent 70%)',
            }}
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.05, 0.12, 0.05],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
          />

          {/* Líneas conectoras que cruzan la sección */}
          <motion.div
            className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#7252A5]/10 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isInView ? 1 : 0 }}
            transition={{ duration: 3, delay: 1 }}
          />
          
          <motion.div
            className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4F225]/10 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isInView ? 1 : 0 }}
            transition={{ duration: 3.5, delay: 1.5 }}
          />

          {/* Elementos geométricos conectados */}
          <motion.div
            className="absolute top-1/3 right-16 w-6 h-6 rounded-full bg-[#D4F225]/15"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.15, 0.4, 0.15],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.div
            className="absolute bottom-1/3 left-16 w-4 h-4 bg-[#759CCF]/15 rotate-45"
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
          {/* Header principal con conexiones visuales */}
          <motion.div
            className="text-center mb-16 relative"
            variants={faqHeaderVariants}
          >
            {/* Línea conectora desde la sección anterior */}
            <motion.div
              className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-px h-6 bg-gradient-to-b from-gray-300 to-transparent"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: isInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />

            {/* Badge superior con marco conector */}
            <motion.div
              className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full px-6 py-3 mb-8 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Línea superior animada */}
              <motion.div
                className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#7252A5] via-[#D4F225] to-[#759CCF]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isInView ? 1 : 0 }}
                transition={{ duration: 1.5, delay: 0.8 }}
              />
              
              <motion.div
                className="w-2 h-2 bg-[#7252A5] rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-medium text-gray-700 tracking-wider uppercase">
                Preguntas Frecuentes
              </span>
              
              {/* Conectores laterales */}
              <motion.div
                className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-6 h-px bg-gradient-to-r from-transparent to-gray-300"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isInView ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              />
              <motion.div
                className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-6 h-px bg-gradient-to-l from-transparent to-gray-300"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isInView ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              />
            </motion.div>

            {/* Título principal con efectos conectores */}
            <motion.h2 
              className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-6 leading-none relative"
              style={{ fontFamily: 'Codec Pro, sans-serif' }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
              transition={{ duration: 0.8, delay: 0.6 }}
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
              
              {/* Elementos decorativos conectores */}
              <motion.div
                className="absolute -right-6 top-1/4 w-3 h-3 bg-[#D4F225]/30 rounded-full"
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.h2>
            
            {/* Subtítulo con líneas conectoras */}
            <motion.div
              className="flex items-center justify-center gap-4 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div
                className="hidden md:block w-16 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isInView ? 1 : 0 }}
                transition={{ duration: 1, delay: 1.2 }}
              />
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed text-center">
                Las respuestas que necesitas para tomar la{' '}
                <span className="text-[#7252A5] font-semibold">mejor decisión</span>{' '}
                para tu negocio
              </p>
              <motion.div
                className="hidden md:block w-16 h-px bg-gradient-to-l from-transparent via-gray-300 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isInView ? 1 : 0 }}
                transition={{ duration: 1, delay: 1.2 }}
              />
            </motion.div>
          </motion.div>

          {/* Grid de FAQ Cards con conectores */}
          <motion.div 
            className="space-y-6 relative"
            variants={faqSectionVariants}
          >
            {/* Línea conectora central vertical */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent"
              style={{ height: '80%', top: '10%' }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: isInView ? 1 : 0 }}
              transition={{ duration: 2, delay: 1.5 }}
            />

            {faqData.map((faq, index) => (
              <motion.div
                key={faq.id}
                variants={faqHeaderVariants}
                custom={index}
                className="relative"
              >
                {/* Conectores hacia la línea central */}
                <motion.div
                  className={`absolute top-1/2 ${index % 2 === 0 ? 'right-1/2' : 'left-1/2'} w-8 h-px bg-gradient-to-${index % 2 === 0 ? 'l' : 'r'} from-gray-200 to-transparent`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isInView ? 1 : 0 }}
                  transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                />
                <FAQCardLight {...faq} index={index} />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA integrado con conexiones */}
          <motion.div
            className="mt-20 text-center relative"
            variants={ctaVariants}
          >
            {/* Línea conectora desde las FAQs */}
            <motion.div
              className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gradient-to-b from-gray-300 to-transparent"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: isInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 2.5 }}
            />

            <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
              {/* Fondo animado */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#7252A5]/5 via-transparent to-[#D4F225]/5"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              
              <motion.h3
                className="text-3xl md:text-4xl font-black text-gray-900 mb-4 relative z-10"
                style={{ fontFamily: 'Codec Pro, sans-serif' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 2.7 }}
              >
                ¿Tienes una pregunta específica?
              </motion.h3>
              
              <motion.p
                className="text-gray-600 mb-8 text-lg relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 2.9 }}
              >
                Nuestro equipo está listo para resolver todas tus dudas
              </motion.p>
              
              <motion.button
                className="bg-gradient-to-r from-[#7252A5] to-[#6341a0] hover:from-[#6341a0] hover:to-[#5a3899] text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 relative z-10 overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 3.1 }}
              >
                {/* Efecto de brillo */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                  initial={{ x: '-100%' }}
                  animate={{ x: '200%' }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                />
                <span className="relative z-10">Habla con nosotros</span>
              </motion.button>
            </div>

            {/* Línea conectora hacia la siguiente sección */}
            <motion.div
              className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gradient-to-t from-gray-300 to-transparent"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: isInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 3.3 }}
            />
          </motion.div>
        </motion.div>

        {/* Elementos que fluyen hacia CTA */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`flow-to-cta-${i}`}
              className="absolute w-2 h-2 rounded-full opacity-15"
              style={{
                backgroundColor: ['#7252A5', '#D4F225', '#759CCF'][i % 3],
                left: `${8 + i * 7}%`,
                top: '90%',
              }}
              animate={{
                y: [0, 50, 100, 150, 200],
                opacity: [0.15, 0.3, 0.25, 0.1, 0],
                scale: [1, 1.2, 0.9, 0.7, 0.5],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      </section>

      {/* Transición orgánica hacia CTA */}
      <FAQToCTATransition />
    </>
  );
};

export default UnifiedFAQSection;