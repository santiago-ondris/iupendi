// src/components/FooterSectionLight.tsx
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
} from 'lucide-react';
import { useInView } from '@/utils/useInView';

const FooterSectionLight: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const navigationLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Servicios', href: '#core-services' },
    { name: 'Clientes', href: '#brands' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contacto', href: '#super-cta' },
  ];

  const socialLinks = [
    { Icon: Instagram, href: '#', label: 'Instagram' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
  ];

  const contactInfo = [
    { Icon: Mail, text: 'hola@iupendigital.com', href: 'mailto:hola@iupendigital.com' },
    { Icon: Phone, text: '+54 9 11 1234-5678', href: 'tel:+5491112345678' },
    { Icon: MapPin, text: 'Sydney, Australia, y en todo el mundo', href: '#' },
  ];

  return (
    <footer
      ref={ref}
      id="footer"
      className="relative bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 text-gray-900 overflow-hidden"
    >
      {/* Transición suave desde la sección anterior */}
      <motion.div
        className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-100 to-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1 }}
      />

      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-[#D4F225]/10 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-24 h-24 bg-[#7252A5]/10 transform rotate-45"
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Gradientes radiales sutiles */}
        <motion.div
          className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full opacity-5"
          style={{ 
            background: 'radial-gradient(circle, #759CCF 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Sección principal del footer */}
        <div className="text-center mb-16">
          {/* Logo principal */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex justify-center items-center mb-4">
              <motion.div
                className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-200"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <span
                  className="text-3xl font-black text-[#7252A5]"
                  style={{ fontFamily: 'Codec Pro, sans-serif' }}
                >
                  I
                </span>
              </motion.div>
            </div>

            <motion.h3
              className="text-4xl md:text-5xl font-black text-gray-900"
              style={{ fontFamily: 'Codec Pro, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              IUPENDI DIGITAL
            </motion.h3>

            <motion.p
              className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Agencia de marketing digital que conecta, crea y convierte
            </motion.p>
          </motion.div>

          {/* Redes sociales */}
          <motion.div
            className="flex justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {socialLinks.map(({ Icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                className="w-14 h-14 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:bg-[#D4F225] hover:border-[#D4F225] hover:text-black transition-all duration-300 text-gray-600 shadow-lg"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA final */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.button
              className="bg-gradient-to-r from-[#D4F225] to-[#c4e520] hover:from-[#c4e520] hover:to-[#b4d50f] text-black font-bold py-4 px-8 rounded-full text-lg flex items-center gap-3 mx-auto transition-all duration-300 shadow-xl hover:shadow-2xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Empezar proyecto <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>

        {/* Navegación y contacto */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 mb-16 border-t border-gray-300 pt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          {/* Links de navegación */}
          <div>
            <h4
              className="text-xl font-bold mb-6 text-gray-900"
              style={{ fontFamily: 'Codec Pro, sans-serif' }}
            >
              Navegación
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {navigationLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-[#7252A5] transition-colors duration-300 block font-medium"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
                  transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(link.href.substring(1));
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Información de contacto */}
          <div>
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
                  className="flex items-center gap-3 text-gray-600 hover:text-[#7252A5] transition-colors duration-300"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
                  transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                >
                  <Icon className="w-5 h-5" />
                  <span>{text}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="text-center border-t border-gray-300 pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
        >
          <p className="text-gray-500 text-sm">
            IUPENDI DIGITAL © 2025. Diseñado con{' '}
            <motion.span
              className="text-[#D4F225] inline-block"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
            >
              ♥
            </motion.span>{' '}
            en Córdoba
          </p>
        </motion.div>
      </div>

      {/* Firma final sutil */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4F225] via-[#7252A5] to-[#759CCF]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isInView ? 1 : 0 }}
        transition={{ duration: 2, delay: 2.5 }}
      />
    </footer>
  );
};

export default FooterSectionLight;