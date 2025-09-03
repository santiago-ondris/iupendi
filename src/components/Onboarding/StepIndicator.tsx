import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import type { StepIndicatorProps } from '@/utils/onboarding/types';

const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep,
  totalSteps,
  steps,
  onStepClick
}) => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          const isCompleted = step.isCompleted;
          const isPast = stepNumber < currentStep;
          const isClickable = onStepClick && (isPast || isCompleted || isActive);

          return (
            <React.Fragment key={step.id}>
              {/* Círculo del paso */}
              <motion.div
                className={`relative flex items-center justify-center transition-all duration-300 ${
                  isClickable ? 'cursor-pointer' : 'cursor-default'
                }`}
                onClick={() => isClickable && onStepClick?.(index)}
                whileHover={isClickable ? { scale: 1.1 } : {}}
                whileTap={isClickable ? { scale: 0.95 } : {}}
              >
                {/* Círculo de fondo */}
                <motion.div
                  className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 flex items-center justify-center relative overflow-hidden ${
                    isActive
                      ? 'border-[#7252A5] bg-[#7252A5] text-white'
                      : isCompleted
                      ? 'border-[#D4F225] bg-[#D4F225] text-gray-900'
                      : 'border-gray-300 bg-white text-gray-500'
                  }`}
                  animate={{
                    scale: isActive ? [1, 1.05, 1] : 1,
                  }}
                  transition={{
                    duration: 2,
                    repeat: isActive ? Infinity : 0,
                    ease: "easeInOut"
                  }}
                >
                  {/* Contenido del círculo */}
                  <motion.div
                    initial={false}
                    animate={{
                      scale: isCompleted ? [0, 1.2, 1] : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {isCompleted ? (
                      <Check className="w-5 h-5 sm:w-6 sm:h-6" />
                    ) : (
                      <span className="text-sm sm:text-base font-bold">
                        {stepNumber}
                      </span>
                    )}
                  </motion.div>

                  {/* Efecto de pulso para el paso activo */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-[#7252A5]"
                      animate={{
                        scale: [1, 1.4],
                        opacity: [0.8, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut"
                      }}
                    />
                  )}
                </motion.div>

                {/* Tooltip con información del paso */}
                <motion.div
                  className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded-lg whitespace-nowrap opacity-0 pointer-events-none"
                  whileHover={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isClickable ? 0 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {step.title}
                  {/* Flecha del tooltip */}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                </motion.div>
              </motion.div>

              {/* Línea conectora */}
              {index < totalSteps - 1 && (
                <motion.div
                  className="w-4 sm:w-8 md:w-12 h-0.5 relative"
                  initial={false}
                >
                  {/* Línea base */}
                  <div className="w-full h-full bg-gray-300 rounded-full" />
                  
                  {/* Línea de progreso */}
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-[#D4F225] rounded-full"
                    initial={{ width: '0%' }}
                    animate={{
                      width: stepNumber < currentStep ? '100%' : '0%'
                    }}
                    transition={{ duration: 0.5, delay: stepNumber < currentStep ? 0.1 : 0 }}
                  />
                </motion.div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Información del paso actual (móvil) */}

    </div>
  );
};

export default StepIndicator;