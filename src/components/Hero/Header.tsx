import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LanguageSelector';
import { gtmEvent, GTM_EVENTS } from '@/utils/gtm';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navigationItems = [
    { id: 'hero', label: t('navigation.home') },
    { id: 'core-services', label: t('navigation.services') },
    { id: 'brands', label: t('navigation.clients') },
    { id: 'faq', label: t('navigation.faq') },
    { id: 'super-cta', label: t('navigation.contact') },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handlePhoneCall = () => {
    gtmEvent(GTM_EVENTS.WHATSAPP_CLICK, { location: 'navbar' });
    window.open('https://wa.link/o1y9sk', '_blank');
  };

  return (
    <>
      <motion.header
        className={`relative z-50 ${className}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        style={{
          background: 'linear-gradient(to bottom right, rgb(249 250 251), rgb(249 250 251), white)'
        }}
      >
        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`
          }}
        />

        {/* Gradient mesh */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, rgba(114, 82, 165, 0.06) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(212, 242, 37, 0.04) 0%, transparent 50%)
            `
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between h-16 sm:h-20">

              {/* Teléfono + Selector de idioma - Desktop */}
              <motion.div
                className="hidden md:flex items-center gap-4"
                whileHover={{ scale: 1.05 }}
              >
                <motion.button
                  onClick={handlePhoneCall}
                  className="flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 text-gray-700 hover:bg-white/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">{t('navigation.phone')}</span>
                </motion.button>

                {/* Selector de idioma */}
                <LanguageSelector />
              </motion.div>

              <motion.div
                className="flex-1 flex justify-center md:flex-none"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  onClick={() => scrollToSection('hero')}
                  className="flex flex-col items-center group"
                >
                  <motion.div className="relative" transition={{ duration: 0.6 }}>
                    <img
                      src="/logo4.svg"
                      alt="Iupendi Digital"
                      className="h-16 md:h-22 transition-all duration-300 opacity-90 hover:opacity-100"
                    />
                  </motion.div>
                </button>
              </motion.div>

              <motion.div className="flex items-center">
                <motion.button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="relative p-2 rounded-full transition-all duration-300 text-gray-700 hover:bg-white/20"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.div
                    animate={{ rotate: isMenuOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                  </motion.div>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.div
              className="fixed top-16 sm:top-20 right-4 sm:right-6 z-50 bg-white/95 backdrop-blur-md border border-gray-200/50 rounded-2xl shadow-xl min-w-[220px] overflow-hidden"
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            >
              <div className="bg-gradient-to-r from-[#7252A5]/10 to-[#D4F225]/10 p-4 border-b border-gray-100">
                <p className="text-sm font-semibold text-gray-700">{t('navigation.home')}</p>
              </div>

              <div className="p-2">
                {navigationItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full flex items-center gap-3 px-4 py-3 text-left text-gray-700 hover:bg-[#7252A5]/10 hover:text-[#7252A5] rounded-xl transition-all duration-200 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-[#D4F225] rounded-full opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.2 }}
                    />
                    <span className="font-medium">{item.label}</span>
                  </motion.button>
                ))}

                {/* Selector de idioma en mobile + Teléfono */}
                <motion.div
                  className="md:hidden mt-2 pt-2 border-t border-gray-100 space-y-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {/* Selector de idioma para mobile */}
                  <div className="px-4 py-2">
                    <p className="text-xs text-gray-500 mb-2">Idioma / Language</p>
                    <LanguageSelector />
                  </div>

                  {/* Teléfono para mobile */}
                  <motion.button
                    onClick={handlePhoneCall}
                    className="w-full flex items-center gap-3 px-4 py-3 text-left text-[#7252A5] hover:bg-[#7252A5]/10 rounded-xl transition-all duration-200 group font-medium"
                    whileHover={{ x: 5 }}
                  >
                    <Phone className="w-4 h-4" />
                    <span>{t('navigation.phone')}</span>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;