import React from 'react';
import { motion } from 'motion/react';
import { DollarSign, TrendingUp, Zap, Crown, Rocket, ArrowRight } from 'lucide-react';
import type { StepProps, BudgetRange } from '@/utils/onboarding/types';

const StepFour: React.FC<StepProps> = ({
  data,
  onUpdate,
  onNext,
  isLastStep
}) => {
  const handleBudgetSelect = (budget: BudgetRange) => {
    onUpdate({ monthlyBudget: budget });
  };

  const budgetOptions = [
    {
      id: 'under-5k',
      value: 'under-5k' as BudgetRange,
      label: 'Menos de $5k',
      range: 'USD mensuales',
      description: 'Perfecto para empezar',
      icon: DollarSign,
      color: '#759CCF',
      gradient: 'from-[#759CCF] to-[#6589c1]',
      category: 'starter',
      // features: ['Ideal para emprendimientos', 'Estrategias básicas']
    },
    {
      id: '5k-10k',
      value: '5k-10k' as BudgetRange,
      label: '$5k - $10k',
      range: 'USD mensuales',
      description: 'Crecimiento constante',
      icon: TrendingUp,
      color: '#D4F225',
      gradient: 'from-[#D4F225] to-[#c4e520]',
      category: 'growth',
      // features: ['Múltiples canales', 'Optimización activa']
    },
    {
      id: '10k-20k',
      value: '10k-20k' as BudgetRange,
      label: '$10k - $20k',
      range: 'USD mensuales',
      description: 'Escalamiento serio',
      icon: Zap,
      color: '#F2AE1F',
      gradient: 'from-[#F2AE1F] to-[#e09d0e]',
      category: 'scale',
      // features: ['Campañas avanzadas', 'A/B testing intensivo']
    },
    {
      id: '20k-35k',
      value: '20k-35k' as BudgetRange,
      label: '$20k - $35k',
      range: 'USD mensuales',
      description: 'Alto rendimiento',
      icon: Crown,
      color: '#7252A5',
      gradient: 'from-[#7252A5] to-[#6341a0]',
      category: 'premium',
      // features: ['Estrategia integral', 'Equipo dedicado']
    },
    {
      id: '35k-50k',
      value: '35k-50k' as BudgetRange,
      label: '$35k - $50k',
      range: 'USD mensuales',
      description: 'Dominancia de mercado',
      icon: Rocket,
      color: '#EF4444',
      gradient: 'from-[#EF4444] to-[#dc2626]',
      category: 'enterprise',
      // features: ['Omnicanalidad', 'Resultados garantizados']
    },
    {
      id: '50k-plus',
      value: '50k-plus' as BudgetRange,
      label: 'Más de $50k',
      range: 'USD mensuales',
      description: 'Sin límites',
      icon: Crown,
      color: '#8B5CF6',
      gradient: 'from-[#8B5CF6] to-[#7C3AED]',
      category: 'unlimited',
      // features: ['Todo incluído', 'Acceso VIP']
    }
  ];

  const getPopularBadge = (category: string) => {
    return category === 'growth' || category === 'scale';
  };

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
          ¿Cuál es tu <span className="text-[#F2AE1F]">presupuesto</span>{' '}
          <br className="sm:hidden" />
          mensual de marketing?
        </h2>
        
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg mx-auto mb-4">
          Esto nos ayuda a recomendarte las mejores estrategias dentro de tu rango
        </p>

        {/* Disclaimers */}
        {/* <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="w-2 h-2 bg-blue-500 rounded-full" />
          <p className="text-sm text-blue-700 font-medium">
            Primera sesión orientativa en caso de dudas
          </p>
        </motion.div> */}
      </motion.div>

      {/* Grid de opciones de presupuesto */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {budgetOptions.map((option, index) => {
          const Icon = option.icon;
          const isSelected = data.monthlyBudget === option.value;
          const isPopular = getPopularBadge(option.category);
          
          return (
            <motion.button
              key={option.id}
              onClick={() => handleBudgetSelect(option.value)}
              className={`relative p-6 rounded-2xl border-2 transition-all duration-300 text-left group overflow-hidden ${
                isSelected
                  ? 'border-[#F2AE1F] shadow-xl scale-105'
                  : 'border-gray-200 bg-white hover:border-[#F2AE1F]/30 hover:shadow-lg hover:scale-102 shadow-sm'
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Badge "Popular" */}
              {isPopular && (
                <motion.div
                  className="absolute -top-2 -right-2 bg-[#D4F225] text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow-md"
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                >
                  Popular
                </motion.div>
              )}

              {/* Fondo gradiente animado */}
              <motion.div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${option.gradient}`}
                initial={false}
                animate={{
                  opacity: isSelected ? 0.1 : 0
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Contenido */}
              <div className="relative z-10">
                {/* Header con icono y precio */}
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${
                      isSelected ? 'shadow-lg' : 'group-hover:shadow-md'
                    }`}
                    style={{ backgroundColor: option.color }}
                    animate={{
                      scale: isSelected ? [1, 1.1, 1] : 1,
                      rotate: isSelected ? [0, 5, -5, 0] : 0
                    }}
                    transition={{ 
                      duration: 0.5,
                      repeat: isSelected ? Infinity : 0,
                      repeatDelay: 2
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>

                  {/* Indicador de selección */}
                  <motion.div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      isSelected 
                        ? 'border-[#F2AE1F] bg-[#F2AE1F]' 
                        : 'border-gray-300 group-hover:border-[#F2AE1F]/50'
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
                </div>

                {/* Información del rango */}
                <div className="mb-4">
                  <h3 className="text-xl font-black text-gray-900 mb-1">
                    {option.label}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{option.range}</p>
                  <p className="text-sm font-medium text-gray-700">
                    {option.description}
                  </p>
                </div>

                {/* Features */}
                {/* <div className="space-y-2">
                  {option.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.8 + index * 0.1 + featureIndex * 0.05 }}
                    >
                      <div 
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: option.color }}
                      />
                      <span className="text-xs text-gray-600">{feature}</span>
                    </motion.div>
                  ))}
                </div> */}

                {/* Efecto de selección */}
                {isSelected && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
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
                    whileInView={{ opacity: 0.3 }}
                  />
                )}
              </div>
            </motion.button>
          );
        })}
      </motion.div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Información adicional */}
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full">
          <div className="w-2 h-2 bg-[#7252A5] rounded-full" />
          <p className="text-sm text-gray-600">
            💡 No te preocupes, podemos ajustar según los resultados
          </p>
        </div>
      </motion.div>

      {/* Botón de continuar */}
      <motion.div
        className="flex justify-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: data.monthlyBudget ? 1 : 0.3 }}
        transition={{ duration: 0.3 }}
      >
        <motion.button
          onClick={() => {
            onNext();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          disabled={!data.monthlyBudget}
          className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 ${
            data.monthlyBudget
              ? 'bg-[#D4F225] hover:bg-[#c4e520] text-gray-900 shadow-md hover:shadow-lg'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
          whileHover={data.monthlyBudget ? { scale: 1.05 } : {}}
          whileTap={data.monthlyBudget ? { scale: 0.95 } : {}}
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
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <p className="text-xs text-gray-500">
          🎯 Rangos orientativos - podemos crear un plan personalizado
        </p>
      </motion.div>
    </div>
  );
};

export default StepFour;