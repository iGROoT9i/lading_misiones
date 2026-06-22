import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, HeartPulse, Baby, Utensils, Users } from 'lucide-react';

export default function Objetivos() {
  const objectives = [
    {
      icon: BookOpen,
      title: 'Evangelización y Discipulado',
      desc: 'Predicar y expandir el evangelio, guiando a la congregación en principios bíblicos y promoviendo la enseñanza teológica para formar líderes y ministros.',
      colorClass: 'bg-brand-primary/30 text-brand-accent',
      delay: 0,
    },
    {
      icon: GraduationCap,
      title: 'Educación Integral',
      desc: 'Auspiciar y promover centros educativos de nivel inicial, primaria, secundaria y superior no estatal para elevar el índice educacional de la población.',
      colorClass: 'bg-blue-500/20 text-blue-400',
      delay: 0.1,
    },
    {
      icon: HeartPulse,
      title: 'Salud y Campañas Médicas',
      desc: 'Realizar campañas médicas y evangelísticas en la región de Loreto, pueblos jóvenes y asentamientos humanos, llevando atención a quienes más lo necesitan.',
      colorClass: 'bg-green-500/20 text-green-400',
      delay: 0.2,
    },
    {
      icon: Baby,
      title: 'Protección a Vulnerables',
      desc: 'Proteger a poblaciones en extrema pobreza: madres solteras, gestantes, niños huérfanos y personas de la tercera edad mediante asistencia directa.',
      colorClass: 'bg-red-500/20 text-red-400',
      delay: 0,
    },
    {
      icon: Utensils,
      title: 'Comedores y Sostenimiento',
      desc: 'Desarrollar programas de comedores públicos y generar áreas de auto sostenimiento económico para financiar proyectos de ayuda social de forma lícita.',
      colorClass: 'bg-amber-500/20 text-amber-400',
      delay: 0.1,
    },
    {
      icon: Users,
      title: 'Fortalecimiento Familiar',
      desc: 'Ayudar a la consolidación de la familia peruana mediante programas de orientación matrimonial y familiar, mejorando el tejido social y moral.',
      colorClass: 'bg-purple-500/20 text-purple-400',
      delay: 0.2,
    },
  ];

  return (
    <section id="objetivos" className="py-24 bg-brand-dark relative overflow-hidden scroll-mt-20">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-primary/20 to-transparent"></div>
      <div className="absolute -left-20 top-20 w-72 h-72 bg-brand-accent rounded-full mix-blend-multiply filter blur-[100px] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-2 block">
            Nuestros Estatutos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Líneas de Acción Institucional</h2>
          <p className="text-slate-400 max-w-3xl text-lg">
            De acuerdo a nuestros fines y objetivos, trabajamos incansablemente a nivel local, regional
            (especialmente en Loreto) y nacional en las siguientes áreas clave:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectives.map((obj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: obj.delay }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors"
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${obj.colorClass}`}>
                <obj.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{obj.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{obj.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
