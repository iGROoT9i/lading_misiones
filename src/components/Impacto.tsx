import { motion, type Variants } from 'framer-motion';
import { Globe } from 'lucide-react';

export default function Impacto() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section id="impacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">Áreas de Impacto</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Nuestro trabajo se extiende a través de múltiples frentes, llevando ayuda espiritual,
            educativa, de salud y asistencia social según nuestros estatutos.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]"
        >
          {/* Caja 1: Desarrollo Integral (Grande) */}
          <motion.div variants={itemVariants} className="md:col-span-2 relative rounded-[2rem] overflow-hidden group">
            <img
              src="/images/desarrollo-integral-3.jpeg"
              alt="Educación"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <span className="inline-block px-3 py-1 bg-brand-accent text-brand-dark text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                Educación y Nutrición
              </span>
              <h3 className="text-3xl font-bold text-white mb-2">Desarrollo Integral</h3>
              <p className="text-slate-200 opacity-0 group-hover:opacity-100 transition-all duration-500 max-w-lg transform translate-y-4 group-hover:translate-y-0">
                Promovemos centros educativos, teológicos y comedores públicos para nutrir mente, cuerpo y espíritu, elevando el índice educacional.
              </p>
            </div>
          </motion.div>

          {/* Caja 2: Salud (Pequeña) */}
          <motion.div variants={itemVariants} className="relative rounded-[2rem] overflow-hidden group">
            <img
              src="/images/bienestar-medico-1.jpeg"
              alt="Salud Médica"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <span className="inline-block px-3 py-1 bg-brand-primary text-white text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                Salud
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">Bienestar Médico</h3>
              <p className="text-slate-200 text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                Campañas médicas gratuitas en la región de Loreto y pueblos jóvenes necesitados.
              </p>
            </div>
          </motion.div>

          {/* Caja 3: Ayuda Social (Pequeña) */}
          <motion.div variants={itemVariants} className="relative rounded-[2rem] overflow-hidden group">
            <img
              src="/images/ayuda-social-2.jpeg"
              alt="Ayuda Social"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <span className="inline-block px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                Asistencia
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">Ayuda Social Activa</h3>
              <p className="text-slate-200 text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                Protección a madres solteras, huérfanos y ancianos en extrema pobreza.
              </p>
            </div>
          </motion.div>

          {/* Caja 4: Estadísticas (Grande) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 relative rounded-[2rem] overflow-hidden bg-brand-dark p-10 flex flex-col justify-center"
          >
            <div className="absolute -right-20 -top-20 opacity-5">
              <Globe className="w-[350px] h-[350px] text-white" />
            </div>
            <div className="grid sm:grid-cols-2 gap-8 relative z-10">
              <div>
                <h4 className="text-6xl font-bold text-brand-accent mb-2">Miles+</h4>
                <p className="text-slate-300 text-lg">
                  De vidas impactadas anualmente a través de evangelización y apoyo social a nivel regional y nacional.
                </p>
              </div>
              <div>
                <h4 className="text-6xl font-bold text-brand-accent mb-2">100%</h4>
                <p className="text-slate-300 text-lg">
                  De las donaciones se destinan directamente a proyectos sin fines de lucro y sostenimiento de programas.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
