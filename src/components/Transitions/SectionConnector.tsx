import React from 'react';
import { motion } from 'motion/react';
import { getTransitionConfig, TIMING_CONFIG } from '@/utils/Transitions/transitionConfig';

interface SectionConnectorProps {
  fromSection: string;
  toSection: string;
  isVisible?: boolean;
}

const SectionConnector: React.FC<SectionConnectorProps> = ({
  fromSection,
  toSection,
  isVisible = true
}) => {
  const config = getTransitionConfig(fromSection, toSection);
  const { theme, type } = config;

  // Componente de partículas conectoras
  const ConnectingParticles: React.FC = () => (
    <div className="absolute top-0 left-0 w-full overflow-hidden">
      {[...Array(theme.particleCount)].map((_, i) => (
        <motion.div
          key={`${fromSection}-${toSection}-particle-${i}`}
          className={`absolute rounded-full opacity-20`}
          style={{
            width: theme.particleSize,
            height: theme.particleSize,
            backgroundColor: theme.colors[i % theme.colors.length],
            left: `${8 + (i * 100) / theme.particleCount}%`,
            top: i % 2 === 0 ? '-10px' : '-5px',
          }}
          animate={{
            y: [0, 40, 80, 120, 160],
            opacity: [0.2, 0.4, 0.3, 0.15, 0],
            scale: [1, 1.3, 1, 0.8, 0.5],
          }}
          transition={{
            duration: theme.duration,
            repeat: Infinity,
            delay: i * 0.3,
            ease: TIMING_CONFIG.defaultEase,
          }}
        />
      ))}
    </div>
  );

  // Componente de onda SVG
  const WaveTransition: React.FC = () => (
    <svg
      viewBox="0 0 1440 120"
      className={`w-full ${theme.height}`}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id={`${fromSection}-${toSection}-gradient`} x1="0%" y1="0%" x2="100%" y2="0%">
          {theme.colors.map((color, index) => (
            <stop 
              key={index}
              offset={`${(index * 100) / (theme.colors.length - 1)}%`} 
              stopColor={color}
              stopOpacity={index === 0 || index === theme.colors.length - 1 ? 0.1 : 0.2}
            />
          ))}
        </linearGradient>
      </defs>
      <motion.path
        d="M0,40 C360,100 720,20 1080,60 C1260,30 1350,50 1440,40 L1440,120 L0,120 Z"
        fill={`url(#${fromSection}-${toSection}-gradient)`}
        initial={{ pathLength: 0, fillOpacity: 0 }}
        animate={isVisible ? { pathLength: 1, fillOpacity: 1 } : {}}
        transition={{ 
          pathLength: { duration: 2, ease: TIMING_CONFIG.defaultEase },
          fillOpacity: { duration: 1, delay: 0.5 }
        }}
      />
    </svg>
  );

  // Componente geométrico
  const GeometricTransition: React.FC = () => (
    <div className={`relative w-full ${theme.height} overflow-hidden`}>
      {/* Líneas conectoras principales */}
      <motion.div
        className="absolute top-1/3 left-0 w-full h-px"
        style={{ 
          background: `linear-gradient(90deg, transparent, ${theme.colors[0]}40, transparent)`
        }}
        initial={{ scaleX: 0 }}
        animate={isVisible ? { scaleX: 1 } : {}}
        transition={{ duration: 2, delay: 0.5 }}
      />
      
      <motion.div
        className="absolute bottom-1/3 left-0 w-full h-px"
        style={{ 
          background: `linear-gradient(90deg, transparent, ${theme.colors[1] || theme.colors[0]}30, transparent)`
        }}
        initial={{ scaleX: 0 }}
        animate={isVisible ? { scaleX: 1 } : {}}
        transition={{ duration: 2.5, delay: 1 }}
      />

      {/* Elementos geométricos conectores */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full"
          style={{
            backgroundColor: theme.colors[i % theme.colors.length],
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 2) * 40}%`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={isVisible ? { 
            scale: [0, 1.2, 1], 
            opacity: [0, 0.6, 0.3] 
          } : {}}
          transition={{ 
            duration: 1, 
            delay: 0.7 + i * 0.2,
            repeat: Infinity,
            repeatDelay: 3
          }}
        />
      ))}
    </div>
  );

  // Componente orgánico (partículas + líneas curvas)
  const OrganicTransition: React.FC = () => (
    <div className={`relative w-full ${theme.height} overflow-hidden`}>
      {/* Líneas curvas orgánicas */}
      <svg
        viewBox="0 0 1440 80"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,20 Q360,60 720,30 T1440,40"
          stroke={theme.colors[0]}
          strokeWidth="1"
          fill="none"
          opacity="0.3"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : {}}
          transition={{ duration: 3, ease: TIMING_CONFIG.defaultEase }}
        />
        <motion.path
          d="M0,50 Q480,10 960,45 T1440,25"
          stroke={theme.colors[1] || theme.colors[0]}
          strokeWidth="1"
          fill="none"
          opacity="0.2"
          initial={{ pathLength: 0 }}
          animate={isVisible ? { pathLength: 1 } : {}}
          transition={{ duration: 3.5, delay: 0.5, ease: TIMING_CONFIG.defaultEase }}
        />
      </svg>

      {/* Partículas orgánicas */}
      {[...Array(theme.particleCount)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: theme.particleSize + Math.sin(i) * 2,
            height: theme.particleSize + Math.sin(i) * 2,
            backgroundColor: theme.colors[i % theme.colors.length],
            left: `${5 + (i * 90) / theme.particleCount}%`,
            top: `${30 + Math.sin(i * 0.5) * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: theme.duration,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );

  // Renderizar el tipo de transición correspondiente
  const renderTransition = () => {
    switch (type) {
      case 'wave':
        return <WaveTransition />;
      case 'geometric':
        return <GeometricTransition />;
      case 'organic':
        return <OrganicTransition />;
      case 'particles':
      default:
        return (
          <div className={`relative w-full ${theme.height}`}>
            <ConnectingParticles />
          </div>
        );
    }
  };

  return (
    <div className={`relative ${theme.overlap} z-10`}>
      {renderTransition()}
      
      {/* Línea conectora central sutil */}
      <motion.div
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-px"
        style={{ 
          background: `linear-gradient(90deg, transparent, ${theme.colors[0]}60, transparent)`
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isVisible ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1.5 }}
      />
    </div>
  );
};

export default SectionConnector;