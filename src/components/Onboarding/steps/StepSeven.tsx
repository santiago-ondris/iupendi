import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Zap, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import type { StepSevenProps } from '@/utils/onboarding/types';

const StepSeven: React.FC<StepSevenProps> = ({
  data,
  onUpdate,
  onNext,
  userPersonalData,
  onCalendlyScheduled
}) => {
  const [hasScheduled, setHasScheduled] = useState(data.stepSeven?.hasScheduled || false);

  // Cargar script de Calendly (IGUAL que CalendlyCTASection)
  useEffect(() => {
    // Solo cargar si no existe ya
    const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }

    // Listener para eventos de Calendly
    const handleCalendlyEvent = (e: any) => {
      if (e.data.event && e.data.event === 'calendly.event_scheduled') {
        const scheduledData = {
          hasScheduled: true,
          scheduledAt: new Date().toISOString(),
          meetingType: 'strategy' as const,
          notes: `Reunión programada desde onboarding por ${userPersonalData?.firstName} ${userPersonalData?.lastName}`
        };
        
        setHasScheduled(true);
        onUpdate({ stepSeven: scheduledData });
        onCalendlyScheduled?.(scheduledData);
      }
    };

    window.addEventListener('message', handleCalendlyEvent);

    return () => {
      // Solo cleanup del listener, NO del script
      window.removeEventListener('message', handleCalendlyEvent);
    };
  }, [onUpdate, onCalendlyScheduled, userPersonalData]);

  const handleFinishOnboarding = () => {
    console.log('Onboarding completado:', data);
    onNext();
  };

  return (
    <div className="flex flex-col h-full">
      
      {/* Header del paso */}
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Badge de éxito */}
        <motion.div
          className="inline-flex items-center gap-2 bg-[#7252A5] text-white px-6 py-3 rounded-full mb-4 relative overflow-hidden"
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
            initial={{ x: '-100%' }}
            animate={{ x: '200%' }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          />
          <Zap className="w-5 h-5 relative z-10" />
          <span className="font-bold text-sm tracking-wider uppercase relative z-10">
            ¡ÚLTIMO PASO!
          </span>
        </motion.div>

        <h2 
          className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3"
          style={{ fontFamily: 'Codec Pro, sans-serif' }}
        >
          ¡Perfecto {userPersonalData?.firstName}! 🎉 
          <span className="text-[#7252A5]"> Ahora programemos</span>
          <br />
          <span className="text-[#D4F225]">tu sesión estratégica</span>
        </h2>
        
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Reservá tu sesión de estrategia <strong>100% gratuita</strong> de 30 minutos 
          y veamos cómo podemos hacer explotar tu negocio 🚀
        </p>
      </motion.div>

      {/* Features rápidas */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {[
          { icon: Clock, text: "30 minutos", color: "#D4F225" },
          { icon: Calendar, text: "100% gratis", color: "#7252A5" },
          { icon: ArrowRight, text: "Estrategia personalizada", color: "#759CCF" }
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

      {/* Calendly embebido - IGUAL que CalendlyCTASection */}
      <motion.div
        className="flex-1 relative mb-6"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        {/* Marco del Calendly */}
        <div className="bg-white rounded-2xl p-2 border-2 border-gray-200 shadow-inner">
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/santiagonicolas2001/charla-gratis-iupendi-30min"
            style={{ minWidth: '100%', height: '600px' }}
          />
        </div>

        {/* Mensaje de éxito si ya programó */}
        {hasScheduled && (
          <motion.div
            className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center p-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                ¡Reunión programada con éxito! 🎉
              </h3>
              <p className="text-gray-600 mb-4">
                Te enviaremos toda la información por email
              </p>
              <motion.button
                onClick={handleFinishOnboarding}
                className="inline-flex items-center gap-2 bg-[#D4F225] hover:bg-[#c4e520] text-gray-900 px-6 py-3 rounded-full font-bold transition-all duration-300 shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Finalizar proceso
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Navegación */}
      <motion.div
        className="flex justify-between items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >

        {/* Botón continuar/finalizar */}
        <motion.button
          onClick={hasScheduled ? handleFinishOnboarding : undefined}
          disabled={!hasScheduled}
          className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 ${
            hasScheduled
              ? 'bg-[#D4F225] hover:bg-[#c4e520] text-gray-900 shadow-md hover:shadow-lg'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
          whileHover={hasScheduled ? { scale: 1.05 } : {}}
          whileTap={hasScheduled ? { scale: 0.95 } : {}}
        >
          {hasScheduled ? (
            <>
              Finalizar proceso
              <CheckCircle className="w-4 h-4" />
            </>
          ) : (
            <>
              Programá tu reunión arriba
              <Calendar className="w-4 h-4" />
            </>
          )}
        </motion.button>
      </motion.div>

      {/* Mensaje de ayuda */}
      <motion.div
        className="text-center mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <p className="text-xs text-gray-500">
          📧 Recibirás un email de confirmación con todos los detalles
        </p>
      </motion.div>
    </div>
  );
};

export default StepSeven;