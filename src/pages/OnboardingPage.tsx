import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import OnboardingContainer from '@/components/Onboarding/OnboardingContainer';
import { useTranslation } from 'react-i18next';

const OnboardingPage: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('onboarding.pageTitle');
    
    return () => {
      document.title = t('onboarding.common.siteTitle');
    };
  }, [t]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      {/* Meta tags dinámicos para SEO */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Componente principal */}
        <OnboardingContainer />
      </motion.div>

      {/* Estilos específicos para esta página */}
      <style>{`
        /* Ocultar scrollbar en esta página para experiencia más limpia */
        body {
          overflow-x: hidden;
        }
        
        /* Asegurar que no haya scroll horizontal */
        .onboarding-page {
          width: 100vw;
          max-width: 100%;
        }
        
        /* Animaciones suaves para transiciones */
        * {
          scroll-behavior: smooth;
        }
        
        /* Mejoras de performance para las animaciones */
        .motion-div {
          backface-visibility: hidden;
          perspective: 1000px;
        }
        
        /* Focus states mejorados para accesibilidad */
        button:focus-visible {
          outline: 2px solid #7252A5;
          outline-offset: 2px;
        }
        
        input:focus-visible {
          outline: 2px solid #D4F225;
          outline-offset: 2px;
        }
        
        /* Evitar zoom en inputs en iOS */
        @media screen and (max-width: 640px) {
          input[type="text"],
          input[type="email"],
          input[type="search"],
          select,
          textarea {
            font-size: 16px;
          }
        }
        
        /* Mejorar el tap target en móviles */
        @media (hover: none) and (pointer: coarse) {
          button {
            min-height: 44px;
            min-width: 44px;
          }
        }
        
        /* Animación personalizada para el fade in */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        /* Loading state personalizado */
        .loading-spinner {
          width: 20px;
          height: 20px;
          border: 2px solid #f3f3f3;
          border-top: 2px solid #7252A5;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        /* Hover states mejorados */
        .hover-lift:hover {
          transform: translateY(-2px);
          transition: transform 0.2s ease-out;
        }
        
        /* Gradientes suaves para backgrounds */
        .gradient-bg {
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
        }
        
        /* Sombras consistentes */
        .shadow-card {
          box-shadow: 
            0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
        }
        
        .shadow-card-hover {
          box-shadow: 
            0 4px 6px rgba(0, 0, 0, 0.07),
            0 1px 3px rgba(0, 0, 0, 0.08);
        }
        
        .shadow-card-active {
          box-shadow: 
            0 10px 20px rgba(0, 0, 0, 0.15),
            0 3px 6px rgba(0, 0, 0, 0.10);
        }
        
        /* Estados de disabled mejorados */
        .disabled {
          opacity: 0.6;
          cursor: not-allowed;
          pointer-events: none;
        }
        
        /* Texto selectable mejorado */
        .select-none {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        
        /* Mejoras para touch devices */
        .touch-manipulation {
          touch-action: manipulation;
        }
        
        /* Border radius consistente */
        .rounded-card {
          border-radius: 1rem;
        }
        
        .rounded-button {
          border-radius: 9999px;
        }
        
        /* Transiciones globales suaves */
        .transition-all-smooth {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Estados de focus mejorados */
        .focus-ring:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(114, 82, 165, 0.1);
        }
        
        /* Mejoras de contraste para accesibilidad */
        .text-high-contrast {
          color: #1a202c;
        }
        
        .text-medium-contrast {
          color: #4a5568;
        }
        
        .text-low-contrast {
          color: #718096;
        }
        
        /* Loading states */
        .pulse-animation {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .5;
          }
        }
        
        /* Mejoras de performance */
        .will-change-transform {
          will-change: transform;
        }
        
        .will-change-auto {
          will-change: auto;
        }
        
        /* Smooth scrolling mejorado */
        html {
          scroll-behavior: smooth;
        }
        
        /* Prevenir flash of content */
        .no-flash {
          opacity: 0;
          animation: fadeIn 0.3s ease-in-out 0.1s forwards;
        }
        
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default OnboardingPage;