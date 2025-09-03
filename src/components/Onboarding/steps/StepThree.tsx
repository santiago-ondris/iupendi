import React from 'react';
import { motion } from 'motion/react';
import { 
  Facebook, 
  Search, 
  TrendingUp, 
  Tv, 
  Radio, 
  Newspaper, 
  MoreHorizontal, 
  X,
  ArrowRight 
} from 'lucide-react';
import type { StepProps, MarketingType } from '@/utils/onboarding/types';

const StepThree: React.FC<StepProps> = ({
  data,
  onUpdate,
  onNext,
  isLastStep
}) => {
  const handleMarketingToggle = (marketingType: MarketingType) => {
    const currentMarketing = data.currentMarketing || [];
    
    if (currentMarketing.includes(marketingType)) {
      // Remover si ya está seleccionado
      const updated = currentMarketing.filter(item => item !== marketingType);
      onUpdate({ currentMarketing: updated });
    } else {
      // Agregar si no está seleccionado
      onUpdate({ currentMarketing: [...currentMarketing, marketingType] });
    }
  };

  const marketingOptions = [
    {
      id: 'facebook-ads',
      value: 'facebook-ads' as MarketingType,
      label: 'Facebook Ads',
      icon: Facebook,
      description: 'Meta, Instagram, WhatsApp',
      color: '#1877F2',
      category: 'digital'
    },
    {
      id: 'google-ads',
      value: 'google-ads' as MarketingType,
      label: 'Google Ads',
      icon: Search,
      description: 'Search, Display, YouTube',
      color: '#4285F4',
      category: 'digital'
    },
    {
      id: 'seo',
      value: 'seo' as MarketingType,
      label: 'SEO',
      icon: TrendingUp,
      description: 'Posicionamiento orgánico',
      color: '#7252A5',
      category: 'digital'
    },
    {
      id: 'television',
      value: 'television' as MarketingType,
      label: 'Televisión',
      icon: Tv,
      description: 'TV abierta y cable',
      color: '#F2AE1F',
      category: 'traditional'
    },
    {
      id: 'radio',
      value: 'radio' as MarketingType,
      label: 'Radio',
      icon: Radio,
      description: 'AM/FM y streaming',
      color: '#759CCF',
      category: 'traditional'
    },
    {
      id: 'newspaper',
      value: 'newspaper' as MarketingType,
      label: 'Prensa Escrita',
      icon: Newspaper,
      description: 'Diarios y revistas',
      color: '#6E787D',
      category: 'traditional'
    },
    {
      id: 'other',
      value: 'other' as MarketingType,
      label: 'Otros',
      icon: MoreHorizontal,
      description: 'Influencers, eventos, etc.',
      color: '#D4F225',
      category: 'other'
    },
    {
      id: 'none',
      value: 'none' as MarketingType,
      label: 'Ninguno',
      icon: X,
      description: 'No hago marketing aún',
      color: '#EF4444',
      category: 'none'
    }
  ];

  const digitalOptions = marketingOptions.filter(opt => opt.category === 'digital');
  const traditionalOptions = marketingOptions.filter(opt => opt.category === 'traditional');
  const otherOptions = marketingOptions.filter(opt => ['other', 'none'].includes(opt.category));

  const selectedCount = data.currentMarketing?.length || 0;
  const hasNone = data.currentMarketing?.includes('none');

  // Si selecciona "Ninguno", limpia las demás opciones
  const handleNoneSelection = () => {
    if (hasNone) {
      onUpdate({ currentMarketing: [] });
    } else {
      onUpdate({ currentMarketing: ['none'] });
    }
  };

  // Si selecciona otra opción mientras "Ninguno" está activo, quita "Ninguno"
  const handleOtherSelection = (marketingType: MarketingType) => {
    if (hasNone && marketingType !== 'none') {
      onUpdate({ currentMarketing: [marketingType] });
    } else {
      handleMarketingToggle(marketingType);
    }
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
        <h2 
          className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-3"
          style={{ fontFamily: 'Codec Pro, sans-serif' }}
        >
          ¿Qué tipo de <span className="text-[#7252A5]">marketing</span>{' '}
          <br className="sm:hidden" />
          estás usando actualmente?
        </h2>
        
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg mx-auto">
          Seleccioná todas las opciones que apliquen
        </p>

        {/* Contador de selecciones */}
        {selectedCount > 0 && (
          <motion.div
            className="inline-flex items-center gap-2 mt-3 px-3 py-1.5 bg-[#7252A5]/10 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-2 h-2 bg-[#7252A5] rounded-full" />
            <span className="text-sm font-medium text-[#7252A5]">
              {selectedCount} {selectedCount === 1 ? 'canal seleccionado' : 'canales seleccionados'}
            </span>
          </motion.div>
        )}
      </motion.div>

      {/* Canales Digitales */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
          <div className="w-3 h-3 bg-[#D4F225] rounded-full" />
          Canales Digitales
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {digitalOptions.map((option, index) => {
            const Icon = option.icon;
            const isSelected = data.currentMarketing?.includes(option.value) || false;
            
            return (
              <motion.button
                key={option.id}
                onClick={() => handleOtherSelection(option.value)}
                disabled={hasNone && !isSelected}
                className={`p-4 rounded-xl border-2 transition-all duration-300 text-left group ${
                  isSelected
                    ? 'border-[#7252A5] bg-[#7252A5]/5 shadow-md'
                    : hasNone
                    ? 'border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed'
                    : 'border-gray-200 bg-white hover:border-[#7252A5]/30 hover:bg-gray-50 shadow-sm hover:shadow-md'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={!hasNone ? { scale: 1.02 } : {}}
                whileTap={!hasNone ? { scale: 0.98 } : {}}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      isSelected ? 'text-white' : 'text-gray-600'
                    }`}
                    style={{
                      backgroundColor: isSelected ? option.color : '#f3f4f6'
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{option.label}</h4>
                    <p className="text-sm text-gray-600">{option.description}</p>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 ${
                    isSelected 
                      ? 'border-[#7252A5] bg-[#7252A5]' 
                      : 'border-gray-300'
                  }`}>
                    {isSelected && (
                      <motion.div
                        className="w-full h-full rounded-full bg-white scale-50"
                        initial={{ scale: 0 }}
                        animate={{ scale: 0.5 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* Canales Tradicionales */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
          <div className="w-3 h-3 bg-[#F2AE1F] rounded-full" />
          Canales Tradicionales
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {traditionalOptions.map((option, index) => {
            const Icon = option.icon;
            const isSelected = data.currentMarketing?.includes(option.value) || false;
            
            return (
              <motion.button
                key={option.id}
                onClick={() => handleOtherSelection(option.value)}
                disabled={hasNone && !isSelected}
                className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                  isSelected
                    ? 'border-[#F2AE1F] bg-[#F2AE1F]/5 shadow-md'
                    : hasNone
                    ? 'border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed'
                    : 'border-gray-200 bg-white hover:border-[#F2AE1F]/30 hover:bg-gray-50 shadow-sm hover:shadow-md'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={!hasNone ? { scale: 1.02 } : {}}
                whileTap={!hasNone ? { scale: 0.98 } : {}}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      isSelected ? 'text-white' : 'text-gray-600'
                    }`}
                    style={{
                      backgroundColor: isSelected ? option.color : '#f3f4f6'
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 text-sm">{option.label}</h4>
                    <p className="text-xs text-gray-600">{option.description}</p>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* Otras opciones */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {otherOptions.map((option, index) => {
            const Icon = option.icon;
            const isSelected = data.currentMarketing?.includes(option.value) || false;
            const isNoneOption = option.value === 'none';
            
            return (
              <motion.button
                key={option.id}
                onClick={() => isNoneOption ? handleNoneSelection() : handleOtherSelection(option.value)}
                className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                  isSelected
                    ? `border-[${option.color === '#EF4444' ? '#EF4444' : '#D4F225'}] bg-[${option.color === '#EF4444' ? '#EF4444' : '#D4F225'}]/5 shadow-md`
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50 shadow-sm hover:shadow-md'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      isSelected ? 'text-white' : 'text-gray-600'
                    }`}
                    style={{
                      backgroundColor: isSelected ? option.color : '#f3f4f6'
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{option.label}</h4>
                    <p className="text-sm text-gray-600">{option.description}</p>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Botón de continuar */}
      <motion.div
        className="flex justify-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: selectedCount > 0 ? 1 : 0.3 }}
        transition={{ duration: 0.3 }}
      >
        <motion.button
          onClick={() => {
            onNext();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          disabled={selectedCount === 0}
          className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 ${
            selectedCount > 0
              ? 'bg-[#D4F225] hover:bg-[#c4e520] text-gray-900 shadow-md hover:shadow-lg'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
          whileHover={selectedCount > 0 ? { scale: 1.05 } : {}}
          whileTap={selectedCount > 0 ? { scale: 0.95 } : {}}
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
          📊 Seleccioná todas las que estés usando actualmente
        </p>
      </motion.div>
    </div>
  );
};

export default StepThree;