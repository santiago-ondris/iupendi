export interface FAQData {
    id: string;
    question: string;
    answer: string;
    highlight?: string;
    accentColor: string;
  }
  
  export const faqData: FAQData[] = [
    {
      id: 'results-time',
      question: '¿Cuánto tiempo tardamos en ver resultados?',
      answer: 'Los primeros resultados los puedes ver en las primeras 2-4 semanas, pero los resultados más significativos y sostenibles los verás entre los 3-6 meses. Todo depende de tu industria, competencia y el estado actual de tu presencia digital.',
      highlight: '⚡',
      accentColor: 'bg-[#D4F225] hover:bg-[#c4e520]'
    },
    {
      id: 'investment-required',
      question: '¿Cuál es la inversión necesaria para empezar?',
      answer: 'Nuestros planes se adaptan a diferentes presupuestos, desde startups hasta empresas consolidadas. La inversión inicial incluye estrategia, implementación y gestión mensual. Te damos una propuesta personalizada después de conocer tus objetivos específicos.',
      highlight: '💰',
      accentColor: 'bg-[#7252A5] hover:bg-[#6341a0]'
    },
    {
      id: 'what-makes-different',
      question: '¿Qué nos hace diferentes de otras agencias?',
      answer: 'No somos una agencia más. Nos involucramos de verdad en tu negocio, conocemos a tu audiencia como si fuera nuestra, y creamos estrategias que realmente funcionan. Además, siempre te mantenemos informado con reportes claros y honestos.',
      highlight: '🚀',
      accentColor: 'bg-[#759CCF] hover:bg-[#6589c1]'
    },
    {
      id: 'services-included',
      question: '¿Qué incluyen exactamente sus servicios?',
      answer: 'Dependiendo del plan, incluimos estrategia digital completa, gestión de redes sociales, campañas publicitarias, creación de contenido, desarrollo web, SEO, email marketing y análisis de resultados. Todo lo que necesitas para dominar el mundo digital.',
      highlight: '📦',
      accentColor: 'bg-[#F2AE1F] hover:bg-[#e09d0e]'
    },
    {
      id: 'support-communication',
      question: '¿Cómo funciona la comunicación y el soporte?',
      answer: 'Tendrás acceso directo a tu account manager dedicado, reportes mensuales detallados, reuniones de seguimiento regulares y un canal de comunicación directo para resolver cualquier duda. Creemos en la transparencia total.',
      highlight: '💬',
      accentColor: 'bg-[#D4F225] hover:bg-[#c4e520]'
    }
  ];