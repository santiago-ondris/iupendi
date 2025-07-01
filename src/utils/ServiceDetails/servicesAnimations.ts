import { type Variants } from 'motion/react';

// Animación del contenedor principal
export const sectionContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.15,
      delayChildren: 0.3,
    }
  }
};

// Animación del header de la sección
export const headerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      type: "spring",
      stiffness: 100,
    }
  }
};

// Animación de las service cards
export const serviceCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.8,
    rotateX: -15,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.7,
      type: "spring",
      stiffness: 120,
      damping: 15,
    }
  },
  hover: {
    y: -15,
    scale: 1.02,
    rotateX: 5,
    rotateY: 5,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 400,
    }
  }
};

// Animación del contenido interno de las cards
export const cardContentVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  },
  hover: {
    transition: {
      staggerChildren: 0.05,
    }
  }
};

// Animación del icono principal
export const iconVariants: Variants = {
  hidden: {
    scale: 0,
    rotate: -180,
    opacity: 0,
  },
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      type: "spring",
      stiffness: 200,
    }
  },
  hover: {
    scale: 1.2,
    rotate: 360,
    transition: {
      duration: 0.6,
    }
  }
};

// Animación del título del servicio
export const titleVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    }
  },
  hover: {
    x: 10,
    transition: {
      duration: 0.3,
    }
  }
};

// Animación de las características (features)
export const featureVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.4,
    }
  },
  hover: {
    x: 5,
    scale: 1.05,
    transition: {
      duration: 0.2,
    }
  }
};

// Animación del botón CTA
export const ctaVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
    }
  },
  hover: {
    scale: 1.1,
    y: -5,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 400,
    }
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
    }
  }
};

// Animación de elementos decorativos
export const decorativeVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 0.6,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.5,
    }
  },
  float: {
    y: [0, -10, 0],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }
  }
};

// Animación de partículas flotantes
export const particleVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: (i: number) => ({
    opacity: [0, 0.4, 0],
    scale: [0, 1, 0],
    x: [0, Math.random() * 100 - 50, Math.random() * 200 - 100],
    y: [0, Math.random() * -150 - 50, Math.random() * -300 - 100],
    transition: {
      duration: 3 + Math.random() * 2,
      repeat: Infinity,
      delay: i * 0.5,
      ease: "easeOut",
    }
  })
};