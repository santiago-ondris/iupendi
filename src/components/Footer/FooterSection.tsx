import React from 'react';
import { motion } from 'motion/react';
import {
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Heart,
} from 'lucide-react';
import { useInView } from '@/utils/useInView';

const UnifiedFooterSection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const navigationLinks = [
    { name: 'Inicio', href: '#hero', icon: '🏠' },
    { name: 'Servicios', href: '#core-services', icon: '⚡' },
    { name: 'Clientes', href: '#brands', icon: '🤝' },
    { name: 'FAQ', href: '#faq', icon: '❓' },
    { name: 'Contacto', href: '#super-cta', icon: '💬' },
  ];

  const socialLinks = [
    { Icon: Instagram, href: '#', label: 'Instagram', color: '#E4405F' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn', color: '#0077B5' },
    { Icon: Twitter, href: '#', label: 'Twitter', color: '#1DA1F2' },
  ];

  const contactInfo = [
    { Icon: Mail, text: 'hola@iupendigital.com', href: 'mailto:hola@iupendigital.com' },
    { Icon: Phone, text: '+54 9 11 1234-5678', href: 'tel:+5491112345678' },
    { Icon: MapPin, text: 'Sidney, y en todo el mundo', href: '#' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      ref={ref}
      id="footer"
      className="relative bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 text-gray-900 overflow-hidden"
      style={{ marginTop: '-180px', paddingTop: '24px' }} // Overlap con CTA
    >
      {/* Elementos que llegan desde CTA */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`from-cta-${i}`}
            className="absolute w-2 h-2 rounded-full opacity-15"
            style={{
              backgroundColor: ['#D4F225', '#7252A5', '#759CCF', '#F2AE1F'][i % 4],
              left: `${5 + i * 6}%`,
              top: '-20px',
            }}
            animate={{
              y: [0, 80, 160, 240],
              opacity: [0.15, 0.3, 0.2, 0],
              scale: [1, 1.4, 1, 0.7],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Elementos decorativos de fondo finales */}
      <div className="absolute inset-0">
        {/* Gradientes radiales de cierre */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-[#D4F225]/20 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-24 h-24 bg-[#7252A5]/20 transform rotate-45"
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Líneas conectoras finales */}
        <motion.div
          className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4F225]/25 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isInView ? 1 : 0 }}
          transition={{ duration: 3, delay: 1 }}
        />
        
        <motion.div
          className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#7252A5]/20 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isInView ? 1 : 0 }}
          transition={{ duration: 3.5, delay: 1.5 }}
        />

        {/* Gradiente de cierre atmosférico */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-500/10 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 2, delay: 2 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Línea conectora desde CTA */}
        <motion.div
          className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-px h-12 bg-gradient-to-b from-gray-500 to-transparent"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: isInView ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        />

        {/* Sección principal del footer con marco */}
        <motion.div
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Marco decorativo principal */}
          <motion.div
            className="absolute -inset-8 border-2 border-gray-400/20 rounded-3xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: isInView ? 0.3 : 0, scale: isInView ? 1 : 0.95 }}
            transition={{ duration: 1, delay: 0.8 }}
          />

          {/* Logo principal con conexiones */}
          <motion.div
            className="mb-8 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Conectores hacia el logo */}
            <motion.div
              className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-px h-6 bg-gradient-to-b from-gray-400 to-transparent"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: isInView ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            />

            <div className="flex justify-center items-center mb-4">
              <motion.div
                className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl border-2 border-gray-300 relative overflow-hidden"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                {/* Efecto de brillo en el logo */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4F225]/30 to-transparent -skew-x-12"
                  initial={{ x: '-100%' }}
                  animate={{ x: '200%' }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
                />
                <span
                  className="text-3xl font-black text-[#7252A5] relative z-10"
                  style={{ fontFamily: 'Codec Pro, sans-serif' }}
                >
                  I
                </span>
              </motion.div>
            </div>

            <motion.h3
              className="text-4xl md:text-5xl font-black text-gray-900 mb-2"
              style={{ fontFamily: 'Codec Pro, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              IUPENDI DIGITAL
            </motion.h3>

            <motion.p
              className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Agencia de marketing digital que conecta, crea y convierte
            </motion.p>

            {/* Líneas conectoras laterales */}
            <motion.div
              className="absolute top-1/2 -left-12 w-8 h-px bg-gradient-to-r from-transparent to-gray-400"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            />
            <motion.div
              className="absolute top-1/2 -right-12 w-8 h-px bg-gradient-to-l from-transparent to-gray-400"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isInView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            />
          </motion.div>

          {/* Redes sociales con efectos premium */}
          <motion.div
            className="flex justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {socialLinks.map(({ Icon, href, label, color }, index) => (
              <motion.a
                key={label}
                href={href}
                className="w-14 h-14 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-600 shadow-lg relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.15, 
                  y: -8,
                  backgroundColor: color,
                  borderColor: color,
                  color: 'white'
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
              >
                {/* Efecto de onda en hover */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: color }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                />
                <Icon className="w-6 h-6 relative z-10" />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA final con marco especial */}
          <motion.div
            className="mb-16 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            {/* Marco especial para el CTA final */}
            <motion.div
              className="absolute -inset-4 border border-[#D4F225]/30 rounded-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 0.5 : 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            />

            <motion.button
              className="bg-gradient-to-r from-[#7252A5] to-[#6341a0] hover:from-[#6341a0] hover:to-[#5a3899] text-white font-bold py-4 px-8 rounded-full text-lg flex items-center gap-3 mx-auto transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Efectos múltiples de brillo */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4F225]/30 to-transparent skew-x-12"
                initial={{ x: '100%' }}
                animate={{ x: '-200%' }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 5, delay: 1 }}
              />
              <span className="relative z-10">Empezar proyecto</span>
              <ArrowRight className="w-5 h-5 relative z-10" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Navegación y contacto con conectores */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 mb-16 border-t border-gray-400/30 pt-16 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          {/* Conector central */}
          <motion.div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gradient-to-b from-gray-400 to-transparent"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: isInView ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
          />

          {/* Links de navegación mejorados */}
          <div className="relative">
            <motion.div
              className="absolute -top-4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isInView ? 1 : 0 }}
              transition={{ duration: 1, delay: 2.4 }}
            />
            
            <h4
              className="text-xl font-bold mb-6 text-gray-900"
              style={{ fontFamily: 'Codec Pro, sans-serif' }}
            >
              Navegación
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {navigationLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-600 hover:text-[#7252A5] transition-colors duration-300 text-left font-medium flex items-center gap-2 group"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
                  transition={{ duration: 0.6, delay: 2.6 + index * 0.1 }}
                >
                  <span className="group-hover:scale-110 transition-transform duration-200">
                    {link.icon}
                  </span>
                  {link.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Información de contacto mejorada */}
          <div className="relative">
            <motion.div
              className="absolute -top-4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isInView ? 1 : 0 }}
              transition={{ duration: 1, delay: 2.6 }}
            />
            
            <h4
              className="text-xl font-bold mb-6 text-gray-900"
              style={{ fontFamily: 'Codec Pro, sans-serif' }}
            >
              Contacto
            </h4>
            <div className="space-y-4">
              {contactInfo.map(({ Icon, text, href }, index) => (
                <motion.a
                  key={text}
                  href={href}
                  className="flex items-center gap-3 text-gray-600 hover:text-[#7252A5] transition-colors duration-300 group"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
                  transition={{ duration: 0.6, delay: 2.8 + index * 0.1 }}
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  <span>{text}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Copyright con elementos finales */}
        <motion.div
          className="text-center border-t border-gray-400/30 pt-8 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 3 }}
        >
          {/* Conector final */}
          <motion.div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-4 bg-gradient-to-b from-gray-400 to-transparent"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: isInView ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 3.2 }}
          />

          <p className="text-gray-500 text-sm">
            IUPENDI DIGITAL © 2025. Diseñado con{' '}
            <motion.span
              className="inline-flex items-center mx-1"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
            >
              <Heart className="w-4 h-4 text-[#D4F225] fill-current" />
            </motion.span>{' '}
            en Córdoba
          </p>
        </motion.div>
      </div>

      {/* Firma final espectacular */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#D4F225] via-[#759CCF] to-[#F2AE1F]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isInView ? 1 : 0 }}
        transition={{ duration: 3, delay: 3.5 }}
      />

      {/* Partículas finales que se desvanecen */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`final-particles-${i}`}
            className="absolute w-1 h-1 rounded-full"
            style={{
              backgroundColor: ['#D4F225', '#7252A5', '#759CCF', '#F2AE1F'][i % 4],
              left: `${i * 5}%`,
              top: '95%',
            }}
            animate={{
              y: [0, -100, -200, -300],
              opacity: [0.3, 0.6, 0.3, 0],
              scale: [1, 1.5, 0.8, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default UnifiedFooterSection;