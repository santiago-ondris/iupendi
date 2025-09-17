import React from 'react';
import { motion } from 'motion/react';
import { Package, Wrench, ArrowRight } from 'lucide-react';
import type { StepProps, BusinessType } from '@/utils/onboarding/types';
import { useTranslation } from 'react-i18next';

const StepOne: React.FC<StepProps> = ({
  data,
  onUpdate,
  onNext,
  isLastStep
}) => {
  const handleSelection = (businessType: BusinessType) => {
    onUpdate({ businessType });
  };
  const { t } = useTranslation();

  const options = [
    {
      id: 'product',
      value: 'product' as BusinessType,
      label: t('onboarding.stepOne.options.product.label'),
      icon: Package,
      description: t('onboarding.stepOne.options.product.description'),
      color: '#7252A5'
    },
    {
      id: 'service',
      value: 'service' as BusinessType,
      label: t('onboarding.stepOne.options.service.label'),
      icon: Wrench,
      description: t('onboarding.stepOne.options.service.description'),
      color: '#D4F225'
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
        {/* Título principal */}
        <h2 
          className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3"
          style={{ fontFamily: 'Codec Pro, sans-serif' }}
        >
          {t('onboarding.stepOne.title')}
        </h2>
        
        {/* Subtítulo */}
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-md mx-auto">
          {t('onboarding.stepOne.subtitle')}
        </p>
      </motion.div>

      {/* Pregunta principal */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 
          className="text-xl sm:text-2xl font-bold text-gray-900 mb-2"
          style={{ fontFamily: 'Codec Pro, sans-serif' }}
        >
          {t('onboarding.stepOne.question')}
        </h3>
        <p className="text-sm text-gray-500">
          {t('onboarding.stepOne.helpText')}
        </p>
      </motion.div>

      {/* Opciones */}
      <motion.div
        className="flex-1 flex flex-col gap-4 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {options.map((option, index) => {
          const Icon = option.icon;
          const isSelected = data.businessType === option.value;
          
          return (
            <motion.button
              key={option.id}
              onClick={() => handleSelection(option.value)}
              className={`relative p-6 sm:p-8 rounded-2xl border-2 transition-all duration-300 text-left group overflow-hidden ${
                isSelected
                  ? 'border-[#7252A5] bg-[#7252A5]/5 shadow-lg'
                  : 'border-gray-200 bg-white hover:border-[#7252A5]/30 hover:bg-gray-50 shadow-sm hover:shadow-md'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Efecto de fondo animado */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle at center, ${option.color}10 0%, transparent 70%)`
                }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Contenido */}
              <div className="relative z-10 flex items-center gap-4">
                {/* Icono */}
                <motion.div
                  className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center ${
                    isSelected ? 'bg-[#7252A5] text-white' : 'bg-gray-100 text-gray-600 group-hover:bg-[#7252A5]/10'
                  }`}
                  animate={{
                    backgroundColor: isSelected ? '#7252A5' : undefined,
                    scale: isSelected ? [1, 1.1, 1] : 1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                </motion.div>

                {/* Texto */}
                <div className="flex-1">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                    {option.label}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600">
                    {option.description}
                  </p>
                </div>

                {/* Indicador de selección */}
                <motion.div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    isSelected 
                      ? 'border-[#7252A5] bg-[#7252A5]' 
                      : 'border-gray-300 group-hover:border-[#7252A5]/50'
                  }`}
                  animate={{
                    scale: isSelected ? [1, 1.2, 1] : 1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {isSelected && (
                    <motion.div
                      className="w-2 h-2 bg-white rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.div>

                {/* Flecha que aparece al seleccionar */}
                {isSelected && (
                  <motion.div
                    className="ml-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <ArrowRight className="w-5 h-5 text-[#7252A5]" />
                  </motion.div>
                )}
              </div>

              {/* Borde brillante en hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-transparent"
                style={{
                  background: `linear-gradient(45deg, ${option.color}20, transparent, ${option.color}20)`,
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
                whileHover={{ opacity: isSelected ? 0.5 : 0.3 }}
              />
            </motion.button>
          );
        })}
      </motion.div>

      {/* Botón de continuar manual (por si no quiere auto-avanzar) */}
      <motion.div
        className="flex justify-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: data.businessType ? 1 : 0.3 }}
        transition={{ duration: 0.3 }}
      >
        <motion.button
          onClick={() => {
            onNext();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          disabled={!data.businessType}
          className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 ${
            data.businessType
              ? 'bg-[#D4F225] hover:bg-[#c4e520] text-gray-900 shadow-md hover:shadow-lg'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
          whileHover={data.businessType ? { scale: 1.05 } : {}}
          whileTap={data.businessType ? { scale: 0.95 } : {}}
        >
          {isLastStep ? t('onboarding.common.finish') : t('onboarding.common.continue')}
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default StepOne;