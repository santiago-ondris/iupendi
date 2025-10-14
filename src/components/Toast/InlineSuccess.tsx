import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useTranslation } from 'react-i18next';

interface InlineSuccessProps {
  message?: string;
  onComplete?: () => void;
  duration?: number;
}

const InlineSuccess: React.FC<InlineSuccessProps> = ({ 
  message = '¡Recibido!',
  onComplete,
  duration = 4000 
}) => {

  const { t } = useTranslation(); 
  
  useEffect(() => {
    const colors = ['#D4F225', '#7252A5', '#FFFFFF'];
    
    confetti({
      particleCount: 50,
      angle: 90,
      spread: 60,
      origin: { x: 0.5, y: 0.6 },
      colors: colors,
      ticks: 150,
      gravity: 1.2,
      scalar: 0.8,
      drift: 0,
      shapes: ['circle', 'square']
    });

    if (onComplete) {
      const timer = setTimeout(onComplete, duration);
      return () => clearTimeout(timer);
    }
  }, [onComplete, duration]);

  return (
    <motion.div
      className="w-full bg-white/95 backdrop-blur-sm border-2 border-[#D4F225] rounded-full px-8 py-5 flex items-center justify-center gap-4 shadow-xl"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }}
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 400, 
          damping: 15,
          delay: 0.1 
        }}
      >
        <CheckCircle 
          className="w-8 h-8 text-[#7252A5]" 
          strokeWidth={2.5}
        />
      </motion.div>

      <motion.div
        className="flex flex-col items-start"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <span 
          className="text-gray-900 font-bold text-lg"
          style={{ fontFamily: 'Codec Pro, sans-serif' }}
        >
          {message}
        </span>
        <span className="text-gray-600 text-sm">
          {t('toast.grax')}
        </span>
      </motion.div>
    </motion.div>
  );
};

export default InlineSuccess;