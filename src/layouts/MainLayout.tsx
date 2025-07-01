// src/layouts/MainLayout.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Home, Briefcase, Users, MessageCircle } from 'lucide-react';
import ScrollProgress from '@/components/Cursor&Scroll/ScrollProgres';
import CustomCursor from '@/components/Cursor&Scroll/CustomCursor';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'hero', label: 'Inicio', icon: Home },
    { id: 'core-services', label: 'Servicios', icon: Briefcase },
    { id: 'brands', label: 'Clientes', icon: Users },
    { id: 'contact', label: 'Contacto', icon: MessageCircle },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Figuras flotantes globales con más presencia
  const globalFloatingShapes = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    type: Math.random() > 0.6 ? 'circle' : 'square',
    color: ['#D4F225', '#7252A5', '#759CCF', '#F2AE1F', '#E7E8CF'][i % 5],
    size: Math.random() * 40 + 20, // Tamaños más grandes: 20-60px
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: Math.random() * 0.3 + 0.1, // Más opacidad: 0.1-0.4
    delay: Math.random() * 5,
  }));

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden relative">
      <CustomCursor />
      <ScrollProgress />
      {/* Figuras flotantes globales con más presencia */}
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
              y: [0, -50, 0],
              x: [0, Math.random() * 30 - 15, 0],
              rotate: shape.type === 'square' ? [45, 225, 45] : [0, 360, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 6, // 8-14 segundos
              repeat: Infinity,
              delay: shape.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Botón de menú sticky - esquina superior derecha */}
      <motion.button
        className="fixed top-6 right-6 z-50 bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 group"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <motion.div
          animate={{ rotate: isMenuOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </motion.div>
      </motion.button>

      {/* Menú desplegable */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed top-20 right-6 z-40 bg-white/95 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-2 shadow-xl min-w-[200px]"
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.button
                  key={item.id}
                  className="w-full flex items-center gap-3 px-4 py-3 text-left text-gray-700 hover:bg-gray-100 rounded-xl transition-all duration-200 group"
                  onClick={() => scrollToSection(item.id)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <IconComponent className="w-5 h-5 text-[#7252A5] group-hover:text-[#D4F225] transition-colors duration-200" />
                  <span className="font-medium">{item.label}</span>
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay para cerrar menú */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-black/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Main Content - sin padding top */}
      <main className="relative z-10">
        {children}
      </main>

      {/* Indicador de scroll global sutil */}
      <motion.div
        className="fixed bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4F225]/40 to-transparent z-20"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 2 }}
      />
    </div>
  );
};

export default MainLayout;