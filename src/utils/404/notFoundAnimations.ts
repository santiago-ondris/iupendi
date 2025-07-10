import { type Variants } from 'motion/react';

// Animación del número 404 principal
export const numberVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.3,
    rotateY: -180,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15,
      mass: 1.2,
      delay: 0.3
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 300
    }
  }
};

// Animación de los elementos de texto
export const textVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

// Animación de los botones
export const buttonVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      type: "spring",
      stiffness: 150
    }
  },
  hover: {
    scale: 1.05,
    y: -3,
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 400
    }
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1
    }
  }
};

// Animación de elementos flotantes
export const floatingVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: (i: number) => ({
    opacity: [0, 0.6, 0.6],
    scale: [0, 1.2, 1],
    y: [0, -30, 0],
    x: [0, Math.random() * 20 - 10, 0],
    transition: {
      duration: 8 + i * 2,
      repeat: Infinity,
      delay: i * 0.5,
      ease: "easeInOut",
    }
  })
};

// Animación de partículas
export const particleVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: (i: number) => ({
    opacity: [0, 0.4, 0.2, 0],
    scale: [0, 1.3, 1, 0.5],
    y: [0, -100, -200, -300],
    transition: {
      duration: 8,
      repeat: Infinity,
      delay: i * 1.2,
      ease: "easeOut",
    }
  })
};

// Animación del contenedor principal
export const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    }
  }
};

// Animación de elementos decorativos
export const decorativeVariants: Variants = {
  hidden: {
    scale: 0,
    rotate: -180,
  },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15
    }
  },
  pulse: {
    scale: [1, 1.3, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Animación de efectos de brillo
export const shineVariants: Variants = {
  hidden: {
    x: '-100%',
    opacity: 0,
  },
  visible: {
    x: '200%',
    opacity: [0, 1, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatDelay: 3,
      ease: "easeInOut",
    }
  }
};