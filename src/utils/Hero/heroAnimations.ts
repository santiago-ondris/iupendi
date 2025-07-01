import { type Variants } from 'motion/react';

// Animación del logo - caída en seco desde arriba
export const logoVariants: Variants = {
  hidden: {
    y: -200,
    opacity: 0,
    scale: 0.5,
    rotateX: -90,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      mass: 1,
      delay: 0.2,
    }
  }
};

// Animación del título principal con efectos por palabra
export const titleContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.8,
    }
  }
};

export const titleWordVariants: Variants = {
  hidden: {
    y: 100,
    opacity: 0,
    rotateX: -90,
    scale: 0.8,
  },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
      mass: 1,
    }
  }
};

// Animación especial para palabras destacadas
export const highlightWordVariants: Variants = {
  hidden: {
    y: 100,
    opacity: 0,
    scale: 0.5,
    rotateY: -180,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 10,
      mass: 1.2,
    }
  }
};

// Animación del asterisco con rebote
export const asteriskVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
    rotate: -180,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 8,
      delay: 1.8,
    }
  },
  float: {
    y: [0, -8, 0],
    rotate: [0, 10, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }
  }
};

// Animación del subtítulo
export const subtitleVariants: Variants = {
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
      delay: 1.4,
      ease: "easeOut",
    }
  }
};

// Animación del formulario
export const formVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 1.8,
      ease: "easeOut",
    }
  }
};

// Animación del disclaimer y reviews
export const disclaimerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 2.2,
      ease: "easeOut",
    }
  }
};

// Animación del scroll indicator (ahora apunta a las cards)
export const scrollIndicatorVariants: Variants = {
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
      duration: 0.8,
      delay: 2.6,
      ease: "easeOut",
    }
  },
  bounce: {
    y: [0, 12, 0],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut",
    }
  }
};