import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Floating Orbs Component
const FloatingOrbs = () => {
  const orbs = Array.from({ length: 15 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {orbs.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-brand-accent mix-blend-screen opacity-30 blur-xl"
          style={{
            width: Math.random() * 100 + 50 + 'px',
            height: Math.random() * 100 + 50 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
          }}
          animate={{
            y: [0, Math.random() * -100 - 50],
            x: [0, Math.random() * 100 - 50],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effect: moves down half as fast as you scroll
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <img
          src="/images/fe-en-accion-105.webp"
          alt="Misión de ayuda"
          className="w-full h-full object-cover object-center scale-110"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/50 to-brand-dark"></div>
      </motion.div>

      {/* Floating Light Particles */}
      <FloatingOrbs />

      {/* Main Content with Parallax & Fade out */}
      <motion.div
        style={{ y: textY, opacity }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16"
      >
        <motion.span 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-brand-accent font-semibold tracking-widest uppercase text-sm mb-4 block"
        >
          Asociación Misión de Cristo Herederos de Dios
        </motion.span>
        
        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
          Transformando Vidas <br />{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-yellow-200">
            con el Amor de Dios
          </span>
        </h1>
        
        <p className="text-base md:text-xl text-slate-200 mb-10 max-w-3xl mx-auto font-light leading-relaxed px-2">
          Somos una organización comprometida en demostrar el amor de Dios de manera tangible:
          evangelizando, formando líderes y llevando ayuda integral a las comunidades más vulnerables del Perú.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#impacto"
            className="bg-brand-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-800 transition-all shadow-[0_0_20px_rgba(30,58,138,0.5)] hover:shadow-[0_0_30px_rgba(30,58,138,0.8)]"
          >
            Conoce Nuestro Impacto
          </a>
          <a
            href="#donar"
            className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-brand-dark transition-all"
          >
            Únete a la Misión
          </a>
        </div>
      </motion.div>
    </section>
  );
}
