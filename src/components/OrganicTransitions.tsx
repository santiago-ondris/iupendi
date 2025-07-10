// import React from 'react';
// import { motion } from 'motion/react';

// // 1. Hero → CoreServices
// export const HeroToServicesTransition: React.FC = () => (
//   <div className="relative -mb-20 z-0">
//     <div className="w-full h-10 md:h-14 lg:h-18 overflow-hidden">
//       {[...Array(8)].map((_, i) => (
//         <motion.div
//           key={`hero-connector-${i}`}
//           className="absolute w-2 h-2 rounded-full opacity-20"
//           style={{
//             backgroundColor: ['#D4F225', '#7252A5', '#759CCF'][i % 3],
//             left: `${15 + i * 10}%`,
//             top: '10%',
//           }}
//           animate={{
//             y: [0, 30, 60, 90],
//             opacity: [0.2, 0.4, 0.3, 0],
//             scale: [1, 1.2, 0.9, 0.7],
//           }}
//           transition={{
//             duration: 4,
//             repeat: Infinity,
//             delay: i * 0.5,
//             ease: "easeOut",
//           }}
//         />
//       ))}
//     </div>

//     <motion.div
//       className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"
//       initial={{ scaleX: 0 }}
//       animate={{ scaleX: 1 }}
//       transition={{ duration: 1, delay: 2 }}
//     />
//   </div>
// );

// // 2. CoreServices → Brands
// export const ServicesToBrandsTransition: React.FC = () => (
//   <div className="relative -mb-16 z-10">
//     <svg
//       viewBox="0 0 1440 100"
//       className="w-full h-16 md:h-20 lg:h-24"
//       preserveAspectRatio="none"
//     >
//       <defs>
//         <linearGradient id="servicesToBrands" x1="0%" y1="0%" x2="100%" y2="0%">
//           <stop offset="0%" stopColor="white" />
//           <stop offset="50%" stopColor="#f9fafb" />
//           <stop offset="100%" stopColor="#f8fafc" />
//         </linearGradient>
//       </defs>
//       <motion.path
//         d="M0,20 C240,80 480,0 720,40 C960,80 1200,0 1440,60 L1440,100 L0,100 Z"
//         fill="url(#servicesToBrands)"
//         initial={{ pathLength: 0 }}
//         whileInView={{ pathLength: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 2 }}
//       />
//     </svg>
//   </div>
// );

// // 3. Brands → DetailedServices
// export const BrandsToDetailedServicesTransition: React.FC = () => (
//   <div className="relative -mb-20 z-10">
//     <svg
//       viewBox="0 0 1440 140"
//       className="w-full h-18 md:h-28 lg:h-35"
//       preserveAspectRatio="none"
//     >
//       <defs>
//         <linearGradient id="brandsToDetailed" x1="0%" y1="0%" x2="100%" y2="0%">
//           <stop offset="0%" stopColor="#f8fafc" />
//           <stop offset="30%" stopColor="#f1f5f9" />
//           <stop offset="70%" stopColor="#f8fafc" />
//           <stop offset="100%" stopColor="white" />
//         </linearGradient>
//       </defs>
//       <motion.path
//         d="M0,140 C360,30 720,90 1080,50 C1260,20 1350,40 1440,30 L1440,140 Z"
//         fill="url(#brandsToDetailed)"
//         initial={{ pathLength: 0 }}
//         whileInView={{ pathLength: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1, delay: 0.3 }}
//       />
//     </svg>
//   </div>
// );

// // 4. DetailedServices → FAQ
// export const DetailedServicesToFAQTransition: React.FC = () => (
//   <div className="relative -mb-20 z-10">
//     <svg
//       viewBox="0 0 1440 160"
//       className="w-full h-20 md:h-32 lg:h-40"
//       preserveAspectRatio="none"
//     >
//       <defs>
//         <linearGradient id="detailedToFaq" x1="0%" y1="0%" x2="100%" y2="0%">
//           <stop offset="0%" stopColor="white" />
//           <stop offset="25%" stopColor="#f8fafc" />
//           <stop offset="50%" stopColor="#f1f5f9" />
//           <stop offset="75%" stopColor="#e2e8f0" />
//           <stop offset="100%" stopColor="#f1f5f9" />
//         </linearGradient>
//       </defs>
//       <motion.path
//         d="M0,160 C360,20 720,100 1080,40 C1260,10 1350,30 1440,20 L1440,160 Z"
//         fill="url(#detailedToFaq)"
//         initial={{ pathLength: 0 }}
//         whileInView={{ pathLength: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 2, delay: 0.5 }}
//       />
//     </svg>
//   </div>
// );

// // 5. FAQ → CTA
// export const FAQToCTATransition: React.FC = () => (
//   <div className="relative -mb-24 z-10">
//     <svg
//       viewBox="0 0 1440 200"
//       className="w-full h-24 md:h-40 lg:h-50"
//       preserveAspectRatio="none"
//     >
//       <defs>
//         <linearGradient id="faqToCta" x1="0%" y1="0%" x2="100%" y2="0%">
//           <stop offset="0%" stopColor="#f1f5f9" />
//           <stop offset="25%" stopColor="#e2e8f0" />
//           <stop offset="50%" stopColor="#f8fafc" />
//           <stop offset="75%" stopColor="#f1f5f9" />
//           <stop offset="100%" stopColor="#e2e8f0" />
//         </linearGradient>
//       </defs>
//       <motion.path
//         d="M0,200 C240,40 480,120 720,60 C960,20 1200,80 1440,40 L1440,200 Z"
//         fill="url(#faqToCta)"
//         initial={{ pathLength: 0 }}
//         whileInView={{ pathLength: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 2.5 }}
//       />
//     </svg>
//   </div>
// );

// // 6. CTA → Footer
// export const CTAToFooterTransition: React.FC = () => (
//   <div className="relative -mb-50 z-10">
//     <svg
//       viewBox="0 0 1440 180"
//       className="w-full h-20 md:h-36 lg:h-45"
//       preserveAspectRatio="none"
//     >
//       <defs>
//         <linearGradient id="ctaToFooter" x1="0%" y1="0%" x2="0%" y2="100%">
//           <stop offset="0%" stopColor="#e2e8f0" />
//           <stop offset="30%" stopColor="#f1f5f9" />
//           <stop offset="60%" stopColor="#e5e7eb" />
//           <stop offset="100%" stopColor="#d1d5db" />
//         </linearGradient>
//       </defs>
//       <motion.path
//         d="M0,0 C480,120 960,60 1440,100 L1440,180 L0,180 Z"
//         fill="url(#ctaToFooter)"
//         initial={{ pathLength: 0 }}
//         whileInView={{ pathLength: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 2 }}
//       />
//     </svg>
//   </div>
// );

// // Elementos conectores que fluyen entre secciones
// export const FlowingElements: React.FC = () => (
//   <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
//     {/* Líneas conectoras sutiles que cruzan toda la experiencia */}
//     <motion.div
//       className="absolute top-1/5 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4F225]/15 to-transparent"
//       initial={{ scaleX: 0 }}
//       animate={{ scaleX: 1 }}
//       transition={{ duration: 6, delay: 4 }}
//     />
    
//     <motion.div
//       className="absolute top-2/5 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#7252A5]/12 to-transparent"
//       initial={{ scaleX: 0 }}
//       animate={{ scaleX: 1 }}
//       transition={{ duration: 7, delay: 6 }}
//     />
    
//     <motion.div
//       className="absolute top-3/5 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#759CCF]/12 to-transparent"
//       initial={{ scaleX: 0 }}
//       animate={{ scaleX: 1 }}
//       transition={{ duration: 6.5, delay: 8 }}
//     />

//     <motion.div
//       className="absolute top-4/5 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F2AE1F]/10 to-transparent"
//       initial={{ scaleX: 0 }}
//       animate={{ scaleX: 1 }}
//       transition={{ duration: 5.5, delay: 10 }}
//     />

//     {/* Figuras que cruzan todas las secciones */}
//     {[...Array(12)].map((_, i) => (
//       <motion.div
//         key={i}
//         className="absolute w-2 h-2 rounded-full opacity-15"
//         style={{
//           backgroundColor: ['#D4F225', '#7252A5', '#759CCF', '#F2AE1F'][i % 4],
//           left: `${8 + i * 8}%`,
//           top: `${15 + Math.sin(i) * 25}%`,
//         }}
//         animate={{
//           y: [0, -150, -300, -450, -600],
//           opacity: [0, 0.15, 0.3, 0.15, 0],
//           scale: [1, 1.2, 1, 0.8, 0.5],
//         }}
//         transition={{
//           duration: 15 + i * 2,
//           repeat: Infinity,
//           delay: i * 4,
//           ease: "linear",
//         }}
//       />
//     ))}

//     {/* Partículas adicionales para más conexión */}
//     {[...Array(8)].map((_, i) => (
//       <motion.div
//         key={`extra-${i}`}
//         className="absolute w-1 h-1 rounded-full opacity-20"
//         style={{
//           backgroundColor: ['#D4F225', '#7252A5'][i % 2],
//           left: `${20 + i * 10}%`,
//           top: `${30 + Math.cos(i) * 20}%`,
//         }}
//         animate={{
//           x: [0, 50, -30, 0],
//           y: [0, -80, -160, -240],
//           opacity: [0.2, 0.4, 0.2, 0],
//           rotate: [0, 180, 360],
//         }}
//         transition={{
//           duration: 12,
//           repeat: Infinity,
//           delay: i * 1.5 + 5,
//           ease: "easeInOut",
//         }}
//       />
//     ))}
//   </div>
// );