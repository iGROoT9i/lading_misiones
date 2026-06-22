import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Eye, Heart } from 'lucide-react';
import React, { type MouseEvent } from 'react';

// 3D Interactive Card Component
const TiltCard = ({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for the 3D rotation
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  // Map mouse position to rotation angles
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      style={{ perspective: 1000 }}
      className="h-full w-full"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`relative h-full transition-shadow duration-300 ${className}`}
      >
        {/* Inner content pushed forward in 3D space */}
        <div 
          style={{ transform: "translateZ(40px)" }} 
          className="h-full w-full pointer-events-none"
        >
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Nosotros() {
  return (
    <section id="nosotros" className="relative z-20 -mt-10 md:-mt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 md:mb-24 scroll-mt-32">
      <div className="grid md:grid-cols-2 gap-8 md:gap-10">
        
        {/* Visión Card */}
        <TiltCard 
          delay={0}
          className="glass-card rounded-[2.5rem] p-10 lg:p-12 bg-white/80 backdrop-blur-2xl border border-white/50 shadow-2xl hover:shadow-blue-900/20"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mb-8 shadow-inner">
            <Eye className="w-8 h-8 text-brand-primary" />
          </div>
          <h3 className="text-3xl font-bold text-brand-dark mb-4 tracking-tight">Nuestra Visión</h3>
          <p className="text-slate-600 text-lg leading-relaxed font-light">
            Equipar y Formar Líderes, cumpliendo los propósitos para extender el reino de Dios. Buscamos ser
            una luz de esperanza que guíe a las comunidades hacia un desarrollo espiritual y social sostenible.
          </p>
        </TiltCard>

        {/* Misión Card */}
        <TiltCard 
          delay={0.2}
          className="glass-card rounded-[2.5rem] p-10 lg:p-12 bg-white/80 backdrop-blur-2xl border border-white/50 shadow-2xl hover:shadow-amber-500/20"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center mb-8 shadow-inner">
            <Heart className="w-8 h-8 text-brand-accent" />
          </div>
          <h3 className="text-3xl font-bold text-brand-dark mb-4 tracking-tight">Nuestra Misión</h3>
          <p className="text-slate-600 text-lg leading-relaxed font-light">
            Transformar vidas, evangelizando, formando discípulos, ministros y ministerios, cumpliendo el gran
            mandamiento y demostrando el amor de Dios de una manera tangible en cada acción.
          </p>
        </TiltCard>

      </div>
    </section>
  );
}
