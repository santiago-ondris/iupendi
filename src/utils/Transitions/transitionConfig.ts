export interface TransitionTheme {
    colors: string[];
    particleCount: number;
    duration: number;
    height: string;
    overlap: string;
    particleSize: number;
  }
  
  export interface SectionTransition {
    from: string;
    to: string;
    theme: TransitionTheme;
    type: 'wave' | 'particles' | 'geometric' | 'organic';
  }
  
  // Colores principales de la marca
  export const BRAND_COLORS = {
    lime: '#D4F225',
    purple: '#7252A5', 
    blue: '#759CCF',
    orange: '#F2AE1F',
    gray: '#6E787D',
    cream: '#E7E8CF'
  } as const;
  
  // Configuración de transiciones optimizadas
  export const TRANSITION_CONFIG: Record<string, SectionTransition> = {
    'hero-to-services': {
      from: 'hero',
      to: 'core-services',
      type: 'organic',
      theme: {
        colors: [BRAND_COLORS.lime, BRAND_COLORS.purple, BRAND_COLORS.blue],
        particleCount: 8,
        duration: 6,
        height: 'h-12 md:h-16', // Reducido para menos scroll
        overlap: '-mb-12 md:-mb-16',
        particleSize: 3
      }
    },
    
    'services-to-brands': {
      from: 'core-services', 
      to: 'brands',
      type: 'wave',
      theme: {
        colors: [BRAND_COLORS.blue, BRAND_COLORS.lime],
        particleCount: 6,
        duration: 4,
        height: 'h-10 md:h-14',
        overlap: '-mb-10 md:-mb-14',
        particleSize: 2
      }
    },
  
    'brands-to-detailed': {
      from: 'brands',
      to: 'detailed-services', 
      type: 'geometric',
      theme: {
        colors: [BRAND_COLORS.purple, BRAND_COLORS.orange, BRAND_COLORS.blue],
        particleCount: 10,
        duration: 5,
        height: 'h-12 md:h-18',
        overlap: '-mb-12 md:-mb-18',
        particleSize: 2.5
      }
    },
  
    'detailed-to-faq': {
      from: 'detailed-services',
      to: 'faq',
      type: 'particles',
      theme: {
        colors: [BRAND_COLORS.lime, BRAND_COLORS.gray],
        particleCount: 12, 
        duration: 7,
        height: 'h-14 md:h-20',
        overlap: '-mb-14 md:-mb-20',
        particleSize: 2
      }
    },
  
    'faq-to-cta': {
      from: 'faq',
      to: 'super-cta',
      type: 'organic',
      theme: {
        colors: [BRAND_COLORS.purple, BRAND_COLORS.lime, BRAND_COLORS.blue],
        particleCount: 15,
        duration: 8,
        height: 'h-16 md:h-24',
        overlap: '-mb-16 md:-mb-24',
        particleSize: 2.5
      }
    },
  
    'cta-to-footer': {
      from: 'super-cta',
      to: 'footer',
      type: 'wave',
      theme: {
        colors: [BRAND_COLORS.gray, BRAND_COLORS.cream],
        particleCount: 20,
        duration: 10,
        height: 'h-18 md:h-32',
        overlap: '-mb-18 md:-mb-32',
        particleSize: 1.5
      }
    }
  };
  
  // Timing global mejorado
  export const TIMING_CONFIG = {
    // Duración base para transiciones de entrada
    sectionEntry: 0.8,
    // Delay entre fin de transición y entrada de sección
    transitionToSection: 0.3, 
    // Stagger entre elementos de la misma sección
    elementStagger: 0.15,
    // Duración de partículas conectoras
    particleFlow: 4,
    // Ease estándar para todas las transiciones
    defaultEase: "easeOut" as const
  };
  
  // Configuración de partículas flotantes por sección
  export const FLOATING_SHAPES_CONFIG = {
    hero: {
      count: 6,
      colors: [BRAND_COLORS.lime, BRAND_COLORS.purple, BRAND_COLORS.blue, BRAND_COLORS.orange],
      sizes: ['w-16 h-16', 'w-24 h-24', 'w-32 h-32', 'w-40 h-40'],
      opacity: [0.08, 0.12, 0.14, 0.10]
    },
    services: {
      count: 4,
      colors: [BRAND_COLORS.purple, BRAND_COLORS.blue],
      sizes: ['w-20 h-20', 'w-32 h-32'],
      opacity: [0.1, 0.15]
    },
    brands: {
      count: 5,
      colors: [BRAND_COLORS.lime, BRAND_COLORS.orange],
      sizes: ['w-16 h-16', 'w-24 h-24', 'w-36 h-36'],
      opacity: [0.12, 0.08, 0.10]
    },
    faq: {
      count: 6,
      colors: [BRAND_COLORS.purple, BRAND_COLORS.lime, BRAND_COLORS.blue, BRAND_COLORS.orange],
      sizes: ['w-32 h-32', 'w-48 h-48', 'w-64 h-64', 'w-80 h-80'],
      opacity: [0.12, 0.10, 0.14, 0.10]
    },
    cta: {
      count: 6,
      colors: [BRAND_COLORS.lime, BRAND_COLORS.purple, BRAND_COLORS.blue, BRAND_COLORS.orange],
      sizes: ['w-32 h-32', 'w-24 h-24', 'w-40 h-40', 'w-20 h-20', 'w-16 h-16', 'w-12 h-12'],
      opacity: [0.12, 0.10, 0.14, 0.10, 0.12, 0.10]
    }
  };
  
  // Utilidad para obtener configuración de transición
  export const getTransitionConfig = (fromSection: string, toSection: string): SectionTransition => {
    const key = `${fromSection}-to-${toSection}`;
    return TRANSITION_CONFIG[key] || TRANSITION_CONFIG['hero-to-services'];
  };
  
  // Utilidad para generar posiciones aleatorias consistentes
  export const generateShapePositions = (count: number, seed: string = '') => {
    const positions = [];
    for (let i = 0; i < count; i++) {
      // Usar el índice y seed para generar posiciones consistentes pero aleatorias
      const x = (Math.sin(i + seed.length) * 50 + 50) % 100;
      const y = (Math.cos(i + seed.length) * 50 + 50) % 100;
      positions.push({ x, y });
    }
    return positions;
  };