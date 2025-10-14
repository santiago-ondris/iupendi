import React, { useState } from 'react';
import { motion } from 'motion/react';
import { User, Mail, Phone, Building, Check, ArrowRight, Calendar } from 'lucide-react';
import type { StepProps } from '@/utils/onboarding/types';
import { useTranslation } from 'react-i18next';
import { sendFormularioLead } from '@/utils/sheets';

const StepSix: React.FC<StepProps> = ({
  data,
  onUpdate,
  onNext}) => {
  const [personalData, setPersonalData] = useState({
    firstName: data.stepSix?.firstName || '',
    lastName: data.stepSix?.lastName || '',
    email: data.stepSix?.email || '',
    phone: data.stepSix?.phone || '',
    company: data.stepSix?.company || '',
    hasNoCompany: data.stepSix?.hasNoCompany || false
  });

  const { t } = useTranslation();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    let processedValue = value;
    
    if (field === 'phone' && typeof value === 'string') {
      processedValue = formatPhoneNumber(value);
    }
    
    const updatedData = { ...personalData, [field]: processedValue };
    
    if (field === 'hasNoCompany' && value === true) {
      updatedData.company = '';
    }
    if (field === 'company' && typeof value === 'string' && value.trim() !== '') {
      updatedData.hasNoCompany = false;
    }
    
    setPersonalData(updatedData);
    onUpdate({ stepSix: updatedData });
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const formatPhoneNumber = (value: string) => {
    return value.replace(/[^0-9\s\-\(\)\+]/g, '');
  };
  // Validación de campos obligatorios
  const requiredFields = ['firstName', 'lastName', 'email', 'phone'];
  const isFormValid = requiredFields.every(field => {
    const value = personalData[field as keyof typeof personalData]?.toString().trim();
    if (field === 'email') {
      return value !== '' && isValidEmail(value);
    }
    if (field === 'phone') {
      return value !== '' && value.length >= 8; // Mínimo 8 dígitos
    }
    return value !== '';
  });


  const handleSubmit = async () => {
    if (!isFormValid) return;
    
    setIsSubmitting(true);
    
    // Enviar a Google Sheets
    await sendFormularioLead({
      firstName: personalData.firstName,
      lastName: personalData.lastName,
      email: personalData.email,
      phone: personalData.phone,
      company: personalData.company,
      instagram: data.stepFive?.instagram,
      facebook: data.stepFive?.facebook,
      website: data.stepFive?.website,
      other: data.stepFive?.other
    });
    
    setIsSubmitting(false);
    onNext();
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
{          t('onboarding.stepSix.title')}
        </h2>
        
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-4">
        {t('onboarding.stepSix.subtitle')}
        </p>

        {/* Disclaimer */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Calendar className="w-4 h-4 text-gray-500" />
          <p className="text-sm text-gray-600 font-medium">
          {t('onboarding.stepSix.calendarNote')}
          </p>
        </motion.div>
      </motion.div>

      {/* Formulario de datos personales */}
      <motion.div
        className="space-y-5 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {/* Nombre y Apellido - Fila */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Nombre */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <label className="block text-sm font-semibold text-gray-700 mb-2">
            {t('onboarding.stepSix.firstName')}
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={personalData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                placeholder={t('onboarding.stepSix.placeholders.firstName')}
                className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 transition-all duration-200 ${
                  personalData.firstName.trim() 
                    ? 'border-[#7252A5] bg-[#7252A5]/5' 
                    : 'border-gray-200 focus:border-[#7252A5] focus:ring-2 focus:ring-[#7252A5]/20'
                } bg-white focus:outline-none`}
              />
            </div>
          </motion.div>

          {/* Apellido */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <label className="block text-sm font-semibold text-gray-700 mb-2">
            {t('onboarding.stepSix.lastName')}
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={personalData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                placeholder={t('onboarding.stepSix.placeholders.lastName')}
                className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 transition-all duration-200 ${
                  personalData.lastName.trim() 
                    ? 'border-[#7252A5] bg-[#7252A5]/5' 
                    : 'border-gray-200 focus:border-[#7252A5] focus:ring-2 focus:ring-[#7252A5]/20'
                } bg-white focus:outline-none`}
              />
            </div>
          </motion.div>
        </div>

        {/* Email */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <label className="block text-sm font-semibold text-gray-700 mb-2">
          {t('onboarding.stepSix.email')}
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              value={personalData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder={t('onboarding.stepSix.placeholders.email')}
              className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 transition-all duration-200 ${
                personalData.email.trim() 
                  ? 'border-[#7252A5] bg-[#7252A5]/5' 
                  : 'border-gray-200 focus:border-[#7252A5] focus:ring-2 focus:ring-[#7252A5]/20'
              } bg-white focus:outline-none`}
            />
            {personalData.email.trim() && !isValidEmail(personalData.email) && (
              <p className="text-red-500 text-sm mt-1 ml-10">
                {t('onboarding.stepSix.validation.email')}
              </p>
            )}
          </div>
        </motion.div>

        {/* Teléfono */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <label className="block text-sm font-semibold text-gray-700 mb-2">
          {t('onboarding.stepSix.phone')}
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="tel"
              value={personalData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder={t('onboarding.stepSix.placeholders.phone')}
              className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 transition-all duration-200 ${
                personalData.phone.trim() 
                  ? 'border-[#7252A5] bg-[#7252A5]/5' 
                  : 'border-gray-200 focus:border-[#7252A5] focus:ring-2 focus:ring-[#7252A5]/20'
              } bg-white focus:outline-none`}
            />
            {personalData.phone.trim() && personalData.phone.length < 8 && (
              <p className="text-red-500 text-sm mt-1 ml-10">
                {t('onboarding.stepSix.validation.phone')}
              </p>
            )}
          </div>
        </motion.div>

        {/* Empresa */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <label className="block text-sm font-semibold text-gray-700 mb-2">
          {t('onboarding.stepSix.company')}
          </label>
          <div className="relative">
            <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={personalData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              placeholder={t('onboarding.stepSix.placeholders.company')}
              disabled={personalData.hasNoCompany}
              className={`w-full pl-10 pr-4 py-3 rounded-xl border-2 transition-all duration-200 ${
                personalData.hasNoCompany 
                  ? 'bg-gray-100 border-gray-200 cursor-not-allowed opacity-50' 
                  : personalData.company.trim() 
                    ? 'border-[#7252A5] bg-[#7252A5]/5' 
                    : 'border-gray-200 focus:border-[#7252A5] focus:ring-2 focus:ring-[#7252A5]/20 bg-white'
              } focus:outline-none`}
            />
          </div>

          {/* Checkbox "No tengo empresa" */}
          <motion.label
            className="flex items-center gap-3 mt-3 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative">
              <input
                type="checkbox"
                checked={personalData.hasNoCompany}
                onChange={(e) => handleInputChange('hasNoCompany', e.target.checked)}
                className="sr-only"
              />
              <div className={`w-5 h-5 rounded border-2 transition-all duration-200 ${
                personalData.hasNoCompany 
                  ? 'bg-[#7252A5] border-[#7252A5]' 
                  : 'border-gray-300 hover:border-[#7252A5]/50'
              }`}>
                {personalData.hasNoCompany && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-center h-full"
                  >
                    <Check className="w-3 h-3 text-white" />
                  </motion.div>
                )}
              </div>
            </div>
            <span className="text-sm text-gray-600 font-medium">
            {t('onboarding.stepSix.noCompany')}
            </span>
          </motion.label>
        </motion.div>
      </motion.div>

      {/* Estado de validación */}
      {isFormValid && (
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full">
            <Check className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium text-green-700">
              {t('onboarding.stepSix.readyMessage')}
            </span>
          </div>
        </motion.div>
      )}

      {/* Spacer */}
      <div className="flex-1" />

      {/* Botón de finalizar */}
      <motion.div
        className="flex justify-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: isFormValid ? 1 : 0.3 }}
        transition={{ duration: 0.3 }}
      >
        <motion.button
          onClick={handleSubmit}
          disabled={!isFormValid || isSubmitting}
          className={`flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
            isFormValid && !isSubmitting
              ? 'bg-[#D4F225] hover:bg-[#c4e520] text-gray-900 shadow-lg hover:shadow-xl'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
          whileHover={isFormValid && !isSubmitting ? { scale: 1.05 } : {}}
          whileTap={isFormValid && !isSubmitting ? { scale: 0.95 } : {}}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-gray-600 border-t-transparent rounded-full animate-spin" />
              {t('onboarding.stepSix.loading')}
            </>
          ) : (
            <>
              {t('onboarding.stepSix.submitButton')}
              <ArrowRight className="w-5 h-5" />
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
          {t('onboarding.stepSix.privacyNote')}
        </p>
      </motion.div>
    </div>
  );
};

export default StepSix;