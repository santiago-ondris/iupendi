import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

const CustomCursor: React.FC = () => {
  // Valores crudos del ratón
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Suavizado con spring para seguir al ratón
  const springConfig = { damping: 20, stiffness: 150 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="custom-cursor"
      // Usamos translateX/Y para posicionarlo
      style={{ translateX: cursorX, translateY: cursorY }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.15 }}
    />
  );
};

export default CustomCursor;
