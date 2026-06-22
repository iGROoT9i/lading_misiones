import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/fe-en-accion-105.jpeg"
          alt="Misión de ayuda"
          className="w-full h-full object-cover object-center scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/70 via-brand-dark/50 to-brand-dark/90"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.5, 0, 0, 1] }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16"
      >
        <span className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-4 block">
          Asociación Misión de Cristo
        </span>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
          Transformando Vidas <br />{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-yellow-200">
            con el Amor de Dios
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
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
