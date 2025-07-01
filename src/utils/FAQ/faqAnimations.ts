import { type Variants } from 'motion/react';

// Animación del contenedor principal
export const faqSectionVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.15,
      delayChildren: 0.3,
    }
  }
};

// Animación del header
export const faqHeaderVariants: Variants = {
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

// Animación de las FAQ cards
export const faqCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      type: "spring",
      stiffness: 120,
    }
  },
  hover: {
    y: -5,
    scale: 1.02,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 400,
    }
  }
};

// Animación del contenido interno de las cards
export const faqContentVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
};

// Animación del botón expandir/contraer
export const faqButtonVariants: Variants = {
  hidden: {
    scale: 0,
    rotate: -180,
  },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 200,
    }
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.2,
    }
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
    }
  }
};

// Animación del texto de la pregunta
export const questionVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    }
  }
};

// Animación del contenido expandible
export const expandedContentVariants: Variants = {
  hidden: {
    height: 0,
    opacity: 0,
  },
  visible: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    }
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    }
  }
};

// Animación del texto de respuesta
export const answerVariants: Variants = {
  hidden: {
    y: -10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 0.1,
    }
  },
  exit: {
    y: -10,
    opacity: 0,
    transition: {
      duration: 0.2,
    }
  }
};

// Animación de la barra de acento
export const accentBarVariants: Variants = {
  hidden: {
    scaleX: 0,
  },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    }
  }
};

// Animación del CTA final
export const ctaVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
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