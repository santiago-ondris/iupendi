import { type Variants } from 'motion';

export const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      when: 'beforeChildren',
    },
  },
};

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 80, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 20,
    },
  },
};

export const iconVariants: Variants = {
  hidden: { scale: 0, rotate: -180 },
  visible: { scale: 1, rotate: 0, transition: { duration: 0.6 } },
};

export const subtitleVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } },
};

export const titleVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } },
};

export const descriptionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.6 } },
};

export const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.8 } },
};

export const ratingVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, delay: 1.0 } },
};
