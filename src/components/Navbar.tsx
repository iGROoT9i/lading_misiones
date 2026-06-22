import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Impacto', href: '#impacto' },
    { name: 'Galería', href: '#galeria' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    // Small delay allows the mobile menu to close before scrolling
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-white/95 shadow-[0_4px_30px_rgba(0,0,0,0.05)] backdrop-blur-xl border-white/20'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <img 
              src="/images/logo.webp" 
              alt="Herederos de Dios Logo" 
              className="w-14 h-14 object-cover rounded-full bg-white shadow-md border-2 border-white/10"
            />
            <span
              className={`hidden sm:block font-heading font-bold text-xl tracking-tight transition-colors ${
                isScrolled ? 'text-brand-dark' : 'text-white'
              }`}
            >
              Herederos de Dios
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className={`relative group transition-colors font-medium text-sm tracking-wide ${
                  isScrolled ? 'text-slate-600 hover:text-brand-primary' : 'text-slate-200 hover:text-white'
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#donar"
              onClick={(e) => handleSmoothScroll(e, '#donar')}
              className="bg-brand-accent text-brand-dark px-6 py-2.5 rounded-full font-semibold hover:bg-yellow-400 hover:scale-105 transition-all shadow-lg text-sm"
            >
              Hacer una Donación
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`focus:outline-none transition-colors ${
                isScrolled ? 'text-brand-dark' : 'text-white'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col shadow-inner">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="block px-3 py-3 text-slate-800 font-medium hover:bg-slate-50 hover:text-brand-accent rounded-lg"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#donar"
                onClick={(e) => handleSmoothScroll(e, '#donar')}
                className="block px-3 py-3 text-brand-dark bg-brand-accent font-semibold rounded-lg text-center mt-4"
              >
                Hacer una Donación
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
