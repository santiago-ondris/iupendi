import React, { useState, useCallback } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, X } from 'lucide-react';
import StepIndicator from './StepIndicator';
import StepOne from './steps/StepOne';
import StepTwo from './steps/StepTwo';
import StepThree from './steps/StepThree';
import StepFour from './steps/StepFour';
import StepFive from './steps/StepFive';
import StepSix from './steps/StepSix';
import StepSeven from './steps/StepSeven';
import type { OnboardingData, StepInfo } from '@/utils/onboarding/types';

const OnboardingContainer: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState<OnboardingData>({
    businessType: null,
    country: null,
    currentMarketing: [],
    monthlyBudget: null,
    stepFive: undefined,
    stepSix: undefined,
    stepSeven: undefined,
  });

  // Configuración de pasos
  const steps: StepInfo[] = [
    {
      id: 1,
      title: '¿Qué vendes?',
      subtitle: 'Productos o servicios',
      isRequired: true,
      isCompleted: data.businessType !== null,
    },
    {
      id: 2,
      title: 'Ubicación',
      subtitle: 'País de tu negocio',
      isRequired: true,
      isCompleted: data.country !== null,
    },
    {
      id: 3,
      title: 'Marketing Actual',
      subtitle: 'Canales que usas',
      isRequired: true,
      isCompleted: data.currentMarketing.length > 0,
    },
    {
      id: 4,
      title: 'Presupuesto',
      subtitle: 'Inversión mensual',
      isRequired: true,
      isCompleted: data.monthlyBudget !== null,
    },
    {
      id: 5,
      title: 'Canales Digitales',
      subtitle: 'Tus redes y sitio web',
      isRequired: true,
      isCompleted: !!(data.stepFive && Object.values(data.stepFive).some(v => v?.trim())),
    },
    {
      id: 6,
      title: 'Datos Personales',
      subtitle: 'Información de contacto',
      isRequired: true,
      isCompleted: !!(data.stepSix && data.stepSix.firstName && data.stepSix.lastName && data.stepSix.email && data.stepSix.phone),
    },
    {
      id: 7,
      title: 'Agendar Reunión',
      subtitle: 'Sesión de estrategia',
      isRequired: false, 
      isCompleted: !!(data.stepSeven && data.stepSeven.hasScheduled),
      isCalendly: true, // Marcar como paso especial
    },
  ];

  // Actualizar datos del formulario
  const handleUpdateData = useCallback((updates: Partial<OnboardingData>) => {
    setData(prev => ({ ...prev, ...updates }));
  }, []);

  // Navegar al siguiente paso
  const handleNext = useCallback(() => {
    if (currentStep < steps.length) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Último paso completado - redirigir al home
      console.log('Onboarding completado exitosamente:', data);
      navigate('/');
    }
  }, [currentStep, steps.length, data, navigate]);

  // Navegar al paso anterior
  const handlePrev = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  }, [currentStep]);

  // Navegar a un paso específico (click en indicador)
  const handleStepClick = useCallback((stepIndex: number) => {
    // Solo permitir navegar a pasos completados o al siguiente paso disponible
    const targetStep = stepIndex + 1;
    const canNavigate = targetStep <= currentStep || 
      (targetStep === currentStep + 1 && steps[currentStep - 1]?.isCompleted);
    
    if (canNavigate) {
      setCurrentStep(targetStep);
    }
  }, [currentStep, steps]);

  // Cerrar y volver al home
  const handleClose = useCallback(() => {
    navigate('/');
  }, [navigate]);

  // Renderizar el paso actual
  const renderCurrentStep = () => {
    const stepProps = {
      data,
      onUpdate: handleUpdateData,
      onNext: handleNext,
      onPrev: handlePrev,
      isFirstStep: currentStep === 1,
      isLastStep: currentStep === steps.length,
    };

    switch (currentStep) {
      case 1:
        return <StepOne {...stepProps} />;
      case 2:
        return <StepTwo {...stepProps} />;
      case 3:
        return <StepThree {...stepProps} />;
      case 4:
        return <StepFour {...stepProps} />;
      case 5:
        return <StepFive {...stepProps} />;
      case 6:
        return <StepSix {...stepProps} />;  
      case 7:
        return <StepSeven 
          {...stepProps} 
          userPersonalData={data.stepSix}
        />;  
      default:
        return <StepOne {...stepProps} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4 py-8 relative overflow-hidden">
      
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-5"
            style={{
              backgroundColor: ['#D4F225', '#7252A5', '#759CCF', '#F2AE1F'][i % 4],
              width: `${20 + Math.random() * 60}px`,
              height: `${20 + Math.random() * 60}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Header con logo y botón cerrar */}
      <motion.div
        className="w-full max-w-4xl flex justify-between items-center mb-8 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
      {/* Logo clickeable */}
      <motion.button 
        className="relative" 
        transition={{ duration: 0.6 }}
        onClick={() => navigate('/')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img
          src="/logo4.svg"
          alt="Iupendi Digital"
          className="h-16 md:h-22 transition-all duration-300 opacity-90 hover:opacity-100 cursor-pointer"
        />
      </motion.button>

        {/* Botón cerrar */}
        <motion.button
          onClick={handleClose}
          className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 shadow-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <X className="w-5 h-5" />
        </motion.button>
      </motion.div>

      {/* Indicador de pasos */}
      <motion.div
        className="mb-8 relative z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <StepIndicator
          currentStep={currentStep}
          totalSteps={steps.length}
          steps={steps}
          onStepClick={handleStepClick}
        />
      </motion.div>

      {/* Contenedor principal del formulario */}
      <motion.div
        className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden relative z-10"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {/* Barra de progreso superior */}
        <div className="w-full h-1 bg-gray-100 relative overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#7252A5] to-[#D4F225]"
            initial={{ width: '0%' }}
            animate={{ width: `${(currentStep / steps.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Contenido del paso actual */}
        <div className="p-6 sm:p-8 md:p-12 min-h-[400px] flex flex-col">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            {renderCurrentStep()}
          </motion.div>
        </div>

        {/* Footer con navegación */}
        <div className="px-6 sm:px-8 md:px-12 pb-6 sm:pb-8 md:pb-12 flex justify-between items-center">
          {/* Botón Anterior */}
          <motion.button
            onClick={handlePrev}
            disabled={currentStep === 1}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-200 ${
              currentStep === 1
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
            whileHover={currentStep !== 1 ? { scale: 1.05 } : {}}
            whileTap={currentStep !== 1 ? { scale: 0.95 } : {}}
          >
            <ArrowLeft className="w-4 h-4" />
            Anterior
          </motion.button>

          {/* Contador de pasos */}
          <span className="text-sm text-gray-500 font-medium">
            {currentStep} de 7
          </span>

          {/* El botón Siguiente se renderiza dentro de cada componente Step */}
        </div>
      </motion.div>
    </div>
  );
};

export default OnboardingContainer;