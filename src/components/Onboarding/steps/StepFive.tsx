import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Instagram, Facebook, Globe, Hash, ArrowRight } from 'lucide-react';
import type { StepProps } from '@/utils/onboarding/types';

const StepFive: React.FC<StepProps> = ({
  data,
  onUpdate,
  onNext,
  isLastStep
}) => {
  const [channels, setChannels] = useState({
    instagram: data.stepFive?.instagram || '',
    facebook: data.stepFive?.facebook || '',
    website: data.stepFive?.website || '',
    other: data.stepFive?.other || ''
  });

  const handleChannelChange = (channel: string, value: string) => {
    const updatedChannels = { ...channels, [channel]: value };
    setChannels(updatedChannels);
    onUpdate({ stepFive: updatedChannels });
  };

  const hasAtLeastOneChannel = Object.values(channels).some(value => value.trim() !== '');

  const channelFields = [
    {
      id: 'instagram',
      label: 'Instagram',
      icon: Instagram,
      placeholder: 'usuario',
      description: 'Tu perfil o página de Instagram',
      color: '#E4405F',
      prefix: '@'
    },
    {
      id: 'facebook',
      label: 'Facebook',
      icon: Facebook,
      placeholder: 'facebook.com/tupagina',
      description: 'Tu página o perfil de Facebook',
      color: '#1877F2',
      prefix: ''
    },
    {
      id: 'website',
      label: 'Sitio Web',
      icon: Globe,
      placeholder: 'https://tusitio.com',
      description: 'Tu página web o landing',
      color: '#7252A5',
      prefix: ''
    },
    {
      id: 'other',
      label: 'Otro Canal',
      icon: Hash,
      placeholder: 'TikTok @usuario, LinkedIn, etc.',
      description: 'Cualquier otro canal digital, si no tenes, escribí "No tengo"',
      color: '#D4F225',
      prefix: ''
    }
  ];

  return (
    <div className="flex flex-col h-full">
      
      {/* Header del paso */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 
          className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3"
          style={{ fontFamily: 'Codec Pro, sans-serif' }}
        >
          ¡Casi terminamos! 🎉
        </h2>
        
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg mx-auto mb-4">
          Contanos sobre tus canales digitales actuales
        </p>

        {/* Subtitle con aclaración */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="w-2 h-2 bg-blue-500 rounded-full" />
          <p className="text-sm text-blue-700 font-medium">
            Todos los campos son opcionales - agregá los que tengas
          </p>
        </motion.div>
      </motion.div>

      {/* Pregunta principal */}
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h3 
          className="text-xl sm:text-2xl font-bold text-gray-900 mb-2"
          style={{ fontFamily: 'Codec Pro, sans-serif' }}
        >
          ¿Cuáles son tus canales digitales?
        </h3>
        <p className="text-sm text-gray-500">
          Esto nos ayuda a analizar tu presencia actual
        </p>
      </motion.div>

      {/* Formulario de canales */}
      <motion.div
        className="space-y-5 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {channelFields.map((field, index) => {
          const Icon = field.icon;
          const value = channels[field.id as keyof typeof channels];
          const hasValue = value.trim() !== '';
          
          return (
            <motion.div
              key={field.id}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            >
              <div className={`relative rounded-2xl border-2 transition-all duration-300 ${
                hasValue 
                  ? 'border-[#7252A5] bg-[#7252A5]/5 shadow-md' 
                  : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
              }`}>
                
                {/* Header del campo */}
                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div 
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-white`}
                      style={{ backgroundColor: field.color }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{field.label}</h4>
                      <p className="text-sm text-gray-600">{field.description}</p>
                    </div>
                    {hasValue && (
                      <motion.div
                        className="w-6 h-6 bg-[#7252A5] rounded-full flex items-center justify-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Input del campo */}
                <div className="p-4">
                  <div className="relative">
                    {field.prefix && (
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">
                        {field.prefix}
                      </span>
                    )}
                    <input
                      type="text"
                      value={value}
                      onChange={(e) => handleChannelChange(field.id, e.target.value)}
                      placeholder={field.placeholder}
                      className={`w-full ${field.prefix ? 'pl-8' : 'pl-3'} pr-3 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#7252A5] focus:ring-2 focus:ring-[#7252A5]/20 transition-all duration-200 bg-gray-50 focus:bg-white`}
                    />
                  </div>
                </div>

                {/* Indicador visual de completado */}
                {hasValue && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      background: `linear-gradient(45deg, ${field.color}10, transparent, ${field.color}10)`,
                      backgroundSize: '200% 200%'
                    }}
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.3 }}
                  />
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Estado de progreso */}
      {hasAtLeastOneChannel && (
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span className="text-sm font-medium text-green-700">
              ¡Perfecto! Ya podés continuar
            </span>
          </div>
        </motion.div>
      )}

      {/* Spacer */}
      <div className="flex-1" />

      {/* Botón de continuar */}
      <motion.div
        className="flex justify-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: hasAtLeastOneChannel ? 1 : 0.3 }}
        transition={{ duration: 0.3 }}
      >
        <motion.button
          onClick={() => {
            onNext();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          disabled={!hasAtLeastOneChannel}
          className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 ${
            hasAtLeastOneChannel
              ? 'bg-[#D4F225] hover:bg-[#c4e520] text-gray-900 shadow-md hover:shadow-lg'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
          whileHover={hasAtLeastOneChannel ? { scale: 1.05 } : {}}
          whileTap={hasAtLeastOneChannel ? { scale: 0.95 } : {}}
        >
          {isLastStep ? 'Finalizar' : 'Continuar'}
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </motion.div>

      {/* Mensaje de ayuda */}
      <motion.div
        className="text-center mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <p className="text-xs text-gray-500">
          🔗 Completá al menos un canal para continuar
        </p>
      </motion.div>
    </div>
  );
};

export default StepFive;