import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Heart, Smartphone, Building } from 'lucide-react';

export default function Footer() {
  return (
    <>
      {/* DONAR SECTION */}
      <section id="donar" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark"></div>
        {/* Background Decorative Elements */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-primary rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-4xl mx-auto px-4 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">¿Sientes el llamado a ayudar?</h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Sé un canal de bendición hoy mismo. Tu contribución nos permite seguir recibiendo donaciones para
            extender nuestra labor social, mantener comedores y llevar esperanza a la población de Loreto y todo el
            país.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-brand-accent text-brand-dark px-10 py-5 rounded-full font-bold text-lg hover:bg-yellow-400 hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-3">
              <Heart className="w-6 h-6 fill-current" /> Hacer una Donación
            </button>
            <a href="https://wa.me/51910348794" target="_blank" rel="noopener noreferrer" className="bg-transparent border border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3">
              <Smartphone className="w-6 h-6 text-green-400" /> Contáctanos
            </a>
          </div>

          <div className="mt-12 inline-block bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-left">
            <p className="text-slate-300 text-sm uppercase tracking-wider mb-2 font-semibold">
              Cuentas Bancarias / Yape
            </p>
            <p className="text-white flex items-center gap-2 mb-2">
              <Building className="text-brand-accent w-5 h-5" /> BCP: 191-0000000-0-00
            </p>
            <p className="text-white flex items-center gap-2">
              <Smartphone className="text-brand-accent w-5 h-5" /> Yape: 910 348 794 (Elias La Torre Murayari)
            </p>
          </div>
        </motion.div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="bg-[#0b1121] py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/images/logo.webp" 
                  alt="Herederos de Dios Logo" 
                  className="w-12 h-12 object-cover rounded-full bg-white shadow-md"
                />
                <span className="font-heading font-bold text-lg text-white">Herederos de Dios</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                Trabajando incansablemente para llevar amor, esperanza y ayuda práctica a las comunidades vulnerables,
                formando líderes para el Reino de Dios.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#nosotros" className="hover:text-brand-accent transition-colors">Nuestra Visión y Misión</a></li>
                <li><a href="#impacto" className="hover:text-brand-accent transition-colors">Áreas de Acción</a></li>
                <li><a href="#galeria" className="hover:text-brand-accent transition-colors">Galería de Proyectos</a></li>
                <li><a href="#donar" className="hover:text-brand-accent transition-colors">Ser Voluntario</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contacto</h4>
              <ul className="space-y-4 text-sm text-slate-400 mb-6">
                <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-brand-accent"/> Calle Bellavista Mz B. Lt 19, Nauta</li>
                <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-brand-accent"/> mc.herederos2026@hotmail.com</li>
                <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-brand-accent"/> +51 910 348 794</li>
              </ul>
              
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/Mc.HerederosdeDios" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white/5 hover:bg-[#1877F2] p-2.5 rounded-full transition-all text-slate-300 hover:text-white shadow-lg hover:shadow-[#1877F2]/50 hover:-translate-y-1"
                  aria-label="Síguenos en Facebook"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © 2024 Asociación Misión de Cristo Herederos de Dios. Todos los derechos reservados.
            </p>
            <div className="flex gap-4 text-sm text-slate-500">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Partida Registral N° 11178414</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
