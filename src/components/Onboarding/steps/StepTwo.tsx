import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, MapPin, ArrowRight, ChevronDown } from 'lucide-react';
import type { StepProps, Country } from '@/utils/onboarding/types';
import { COUNTRIES } from '@/utils/onboarding/types';
import { useTranslation } from 'react-i18next';

const StepTwo: React.FC<StepProps> = ({
  data,
  onUpdate,
  onNext,
  isLastStep
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const featuredCountries: Country[] = ['AR', 'US', 'ES', 'MX', 'CO', 'CL'];

  const filteredCountries = Object.entries(COUNTRIES).filter(([_, name]) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCountrySelect = (country: Country) => {
    onUpdate({ country });
    setIsDropdownOpen(false);
    setSearchTerm('');
  };

  const { t } = useTranslation();

  const selectedCountryName = data.country ? COUNTRIES[data.country] : null;

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
{          t('onboarding.stepTwo.title')}
        </h2>
        
        {/* Subtítulo */}
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg mx-auto">
{          t('onboarding.stepTwo.subtitle')}
        </p>
      </motion.div>

      {/* Pregunta principal */}
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 
          className="text-xl sm:text-2xl font-bold text-gray-900 mb-2"
          style={{ fontFamily: 'Codec Pro, sans-serif' }}
        >
{          t('onboarding.stepTwo.question')}
        </h3>
      </motion.div>

      {/* Selector principal tipo dropdown */}
      <motion.div
        className="relative mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className={`w-full p-4 sm:p-5 rounded-2xl border-2 transition-all duration-300 text-left flex items-center justify-between ${
            data.country
              ? 'border-[#D4F225] bg-[#D4F225]/5 shadow-md'
              : 'border-gray-200 bg-white hover:border-gray-300 shadow-sm hover:shadow-md'
          }`}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              data.country ? 'bg-[#D4F225] text-gray-900' : 'bg-gray-100 text-gray-500'
            }`}>
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">
                {selectedCountryName || t('onboarding.stepTwo.selectPlaceholder')}
              </p>
              <p className="text-sm text-gray-500">
                {selectedCountryName ? t('onboarding.stepTwo.selectedLabel') : t('onboarding.stepTwo.clickToChoose')}
              </p>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isDropdownOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-5 h-5 text-gray-500" />
          </motion.div>
        </motion.button>

        {/* Dropdown con países */}
        {isDropdownOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-2xl shadow-xl z-20 max-h-80 overflow-hidden"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {/* Buscador */}
            <div className="p-4 border-b border-gray-100">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder={t('onboarding.stepTwo.searchPlaceholder')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-[#D4F225] transition-colors"
                />
              </div>
            </div>

            {/* Lista de países */}
            <div className="max-h-60 overflow-y-auto">
              {filteredCountries.map(([countryCode, countryName]) => {
                const isFeatured = featuredCountries.includes(countryCode as Country);
                
                return (
                  <motion.button
                    key={countryCode}
                    onClick={() => handleCountrySelect(countryCode as Country)}
                    className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors flex items-center gap-3 ${
                      isFeatured ? 'bg-[#D4F225]/5' : ''
                    }`}
                    whileHover={{ backgroundColor: '#f9fafb' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`w-2 h-2 rounded-full ${
                      isFeatured ? 'bg-[#D4F225]' : 'bg-gray-300'
                    }`} />
                    <span className="font-medium text-gray-900">{countryName}</span>
                    {isFeatured && (
                      <span className="ml-auto text-xs text-[#7252A5] font-medium">
                        {t('onboarding.stepTwo.popularLabel')}
                      </span>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Países destacados como shortcuts */}
      {!isDropdownOpen && (
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-sm text-gray-600 mb-3 text-center">
            {t('onboarding.stepTwo.popularCountries')}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {featuredCountries.map((countryCode) => (
              <motion.button
                key={countryCode}
                onClick={() => handleCountrySelect(countryCode)}
                className={`p-3 rounded-xl border transition-all duration-200 text-sm font-medium ${
                  data.country === countryCode
                    ? 'border-[#D4F225] bg-[#D4F225]/10 text-[#7252A5]'
                    : 'border-gray-200 bg-white hover:border-[#D4F225]/50 hover:bg-gray-50 text-gray-700'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.8 }}
              >
                {COUNTRIES[countryCode]}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Spacer para empujar el botón hacia abajo */}
      <div className="flex-1" />

      {/* Botón de continuar */}
      <motion.div
        className="flex justify-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: data.country ? 1 : 0.3 }}
        transition={{ duration: 0.3 }}
      >
        <motion.button
          onClick={() => {
            onNext();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          disabled={!data.country}
          className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 ${
            data.country
              ? 'bg-[#D4F225] hover:bg-[#c4e520] text-gray-900 shadow-md hover:shadow-lg'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
          whileHover={data.country ? { scale: 1.05 } : {}}
          whileTap={data.country ? { scale: 0.95 } : {}}
        >
          {isLastStep ? t('onboarding.common.finish') : t('onboarding.common.continue')}
          <ArrowRight className="w-4 h-4" />
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
{          t('onboarding.stepTwo.helpMessage')}
        </p>
      </motion.div>
    </div>
  );
};

export default StepTwo;