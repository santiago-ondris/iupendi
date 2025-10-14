import React from 'react';
import { motion } from 'motion/react';

interface Shape {
  type: 'circle' | 'square';
  color: string;
  size: string;
  delay: number;
}

interface FloatingShapesProps {
  shapes: Shape[];
}

const FloatingShapes: React.FC<FloatingShapesProps> = ({ shapes }) => {
  return (
    <>
      {shapes.map((shape, i) => (
        <motion.div
          key={`shape-${i}`}
          className={`absolute ${shape.size} ${
            shape.type === 'circle' 
              ? `${shape.color} rounded-full` 
              : `${shape.color} transform rotate-45`
          }`}
          style={{
            left: `${5 + Math.random() * 90}%`,
            top: `${5 + Math.random() * 90}%`,
            zIndex: 1,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 30 - 15, 0],
            rotate: shape.type === 'square' ? [45, 225, 45] : [0, 360, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10 + Math.random() * 6,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
};

export default React.memo(FloatingShapes);