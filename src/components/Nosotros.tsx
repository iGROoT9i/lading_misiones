import { motion, type Variants } from 'framer-motion';
import { Eye, Heart } from 'lucide-react';

export default function Nosotros() {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: custom * 0.1, ease: "easeOut" },
    }),
  };

  return (
    <section id="nosotros" className="relative z-20 -mt-10 md:-mt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 md:mb-24">
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={cardVariants}
          className="glass-card rounded-3xl p-10 hover-lift bg-white/85 backdrop-blur-xl border border-white/30 shadow-xl"
        >
          <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
            <Eye className="w-8 h-8 text-brand-primary" />
          </div>
          <h3 className="text-2xl font-bold text-brand-dark mb-4">Nuestra Visión</h3>
          <p className="text-slate-600 leading-relaxed">
            Equipar y Formar Líderes, cumpliendo los propósitos para extender el reino de Dios. Buscamos ser
            una luz de esperanza que guíe a las comunidades hacia un desarrollo espiritual y social sostenible.
          </p>
        </motion.div>

        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={cardVariants}
          className="glass-card rounded-3xl p-10 hover-lift bg-white/85 backdrop-blur-xl border border-white/30 shadow-xl"
        >
          <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center mb-6">
            <Heart className="w-8 h-8 text-brand-accent" />
          </div>
          <h3 className="text-2xl font-bold text-brand-dark mb-4">Nuestra Misión</h3>
          <p className="text-slate-600 leading-relaxed">
            Transformar vidas, evangelizando, formando discípulos, ministros y ministerios, cumpliendo el gran
            mandamiento y demostrando el amor de Dios de una manera tangible en cada acción.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
