import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effect: moves down half as fast as you scroll
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/images/fe-en-accion-105.webp"
          alt="Misión de Cristo"
          className="w-full h-full object-cover opacity-60"
        />
        {/* Modern dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/50 to-brand-dark"></div>
      </motion.div>

      {/* Main Content with Parallax & Fade out */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-16 pointer-events-auto"
      >
        <motion.span 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-block py-1 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-accent text-sm font-semibold tracking-widest uppercase mb-8"
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
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#impacto"
            className="w-full sm:w-auto px-8 py-4 bg-brand-primary text-white rounded-full font-bold text-lg hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-brand-primary/30"
          >
            Nuestro Impacto
          </a>
          <a
            href="#donar"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/10 hover:border-white transition-all duration-300"
          >
            Únete a la Misión
          </a>
        </div>
      </motion.div>

    </section>
  );
}
