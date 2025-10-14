import React from 'react';
import { motion } from 'motion/react';

interface BlobShape {
  type: string;
  color: string;
  size: string;
  delay: number;
  stroke: number;
}

interface FloatingBlobsProps {
  shapes: BlobShape[];
  showExtendingElements?: boolean;
}

const FloatingBlobs: React.FC<FloatingBlobsProps> = ({ 
  shapes, 
  showExtendingElements = false 
}) => {
  const getBlobPath = (type: string): string => {
    const paths: Record<string, string> = {
      blob1: "M20,50 C20,20 40,0 60,10 C80,0 100,20 90,40 C100,60 80,80 60,90 C40,100 20,80 20,50Z",
      blob2: "M30,20 C50,0 70,10 85,30 C100,50 90,70 75,85 C50,100 30,90 15,70 C0,50 10,30 30,20Z",
      blob3: "M25,15 C45,5 65,15 80,35 C95,55 85,75 70,90 C50,100 30,95 15,75 C0,55 5,35 25,15Z",
      blob4: "M35,10 C55,0 75,20 90,40 C100,60 80,80 60,85 C40,90 20,70 15,50 C10,30 15,20 35,10Z",
      blob5: "M40,5 C60,0 80,15 95,35 C100,55 90,75 70,85 C50,95 30,80 20,60 C10,40 20,20 40,5Z",
      blob6: "M30,25 C50,15 70,25 85,45 C95,65 80,85 60,90 C40,85 25,65 20,45 C15,25 10,35 30,25Z"
    };
    return paths[type] || paths.blob1;
  };

  return (
    <>
      {shapes.map((shape, i) => (
        <motion.div
          key={`blob-${i}`}
          className={`absolute ${shape.size}`}
          style={{
            left: `${5 + Math.random() * 90}%`,
            top: `${5 + Math.random() * 90}%`,
            zIndex: 1,
          }}
          animate={{
            y: [0, -60, 0],
            x: [0, Math.random() * 50 - 25, 0],
            rotate: [0, 120, 240, 360],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        >
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            style={{
              filter: `drop-shadow(0 4px 12px ${shape.color}30)`,
            }}
          >
            <path
              d={getBlobPath(shape.type)}
              fill="none"
              stroke={shape.color}
              strokeWidth={shape.stroke}
              opacity="0.6"
            />
            <path
              d={getBlobPath(shape.type)}
              fill={`${shape.color}08`}
            />
          </svg>
        </motion.div>
      ))}

      {showExtendingElements && [...Array(6)].map((_, i) => (
        <motion.div
          key={`extending-${i}`}
          className="absolute w-3 h-3 rounded-full opacity-30"
          style={{
            backgroundColor: ['#D4F225', '#7252A5', '#759CCF'][i % 3],
            left: `${20 + i * 15}%`,
            top: '80%',
          }}
          animate={{
            y: [0, 100, 200, 300],
            opacity: [0.3, 0.6, 0.4, 0],
            scale: [1, 1.2, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "easeOut",
          }}
        />
      ))}
    </>
  );
};

export default React.memo(FloatingBlobs);