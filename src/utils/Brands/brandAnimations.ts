import { type Variants } from 'motion/react';

// Animación del contenedor principal
export const sectionContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    }
  }
};

// Animación del carrusel wrapper
export const carouselWrapperVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 50,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1.2,
      type: "spring",
      stiffness: 100,
      damping: 15,
    }
  }
};

// Animación individual de cada logo
export const logoVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    y: 30,
  },
  visible: {
    opacity: 0.7,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      type: "spring",
      stiffness: 150,
    }
  },
  hover: {
    opacity: 1,
    scale: 1.15,
    y: -8,
    transition: {
      duration: 0.4,
      type: "spring",
      stiffness: 300,
    }
  }
};

// Animación del efecto de brillo que cruza los logos
export const shineVariants: Variants = {
  hidden: {
    x: '-100%',
    opacity: 0,
  },
  visible: {
    x: '200%',
    opacity: [0, 1, 0],
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    }
  }
};

// Animación de las partículas flotantes
export const particleVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: (i: number) => ({
    opacity: [0, 0.3, 0],
    scale: [0, 1, 0],
    x: [0, Math.random() * 100 - 50],
    y: [0, Math.random() * -100 - 50],
    transition: {
      duration: 4 + Math.random() * 2,
      repeat: Infinity,
      delay: i * 0.8,
      ease: "easeOut",
    }
  })
};

// Animación del gradiente de fondo
export const backgroundGradientVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2,
      ease: "easeOut",
    }
  },
  float: {
    scale: [1, 1.1, 1],
    opacity: [0.3, 0.5, 0.3],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }
  }
};

// Animación de elementos decorativos
export const decorativeVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
    rotate: -180,
  },
  visible: {
    opacity: 0.4,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 200,
    }
  },
  pulse: {
    scale: [1, 1.3, 1],
    opacity: [0.4, 0.7, 0.4],
    rotate: [0, 180, 360],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }
  }
};