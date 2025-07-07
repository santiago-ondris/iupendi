import React from 'react';
import { motion } from 'motion/react';
import ScrollProgress from '@/components/Cursor&Scroll/ScrollProgres';
import Header from '@/components/Hero/Header';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  // Figuras flotantes globales con más presencia pero menos invasivas
  const globalFloatingShapes = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    type: Math.random() > 0.7 ? 'circle' : 'square',
    color: ['#D4F225', '#7252A5', '#759CCF', '#F2AE1F', '#E7E8CF'][i % 5],
    size: Math.random() * 35 + 15, // Tamaños: 15-50px
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: Math.random() * 0.25 + 0.05, // Opacidad: 0.05-0.3
    delay: Math.random() * 8,
  }));

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden relative">
      <ScrollProgress />
      
      {/* Header Principal */}
      <Header />
      
      {/* Figuras flotantes globales - más sutiles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {globalFloatingShapes.map((shape) => (
          <motion.div
            key={shape.id}
            className={`absolute ${
              shape.type === 'circle' ? 'rounded-full' : 'rotate-45'
            }`}
            style={{
              backgroundColor: shape.color,
              width: shape.size,
              height: shape.size,
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              opacity: shape.opacity,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 25 - 12.5, 0],
              rotate: shape.type === 'square' ? [45, 225, 45] : [0, 360, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 8, // 10-18 segundos
              repeat: Infinity,
              delay: shape.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content con padding top para el header */}
      <main className="relative z-10">
        {children}
      </main>

      {/* Indicador de scroll global sutil */}
      <motion.div
        className="fixed bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4F225]/30 to-transparent z-20"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 2 }}
      />
    </div>
  );
};

export default MainLayout;