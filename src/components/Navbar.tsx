import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const links = [
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Nuestro impacto', href: '#impacto' },
  { name: 'Fe en acción', href: '#galeria' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [open]);

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Navegación principal">
        <a className="brand" href="#inicio" onClick={() => setOpen(false)} aria-label="Misión de Cristo, inicio">
          <img src="/images/mision-de-cristo.jpg" width="64" height="64" alt="Logo de Misión de Cristo Herederos de Dios" />
          <span><strong>Misión de Cristo</strong><small>HEREDEROS DE DIOS</small></span>
        </a>
        <div className="desktop-links">
          {links.map(link => <a key={link.href} href={link.href}>{link.name}</a>)}
          <a className="button button-gold nav-donate" href="#donar">Quiero ayudar <ArrowUpRight size={17} /></a>
        </div>
        <button className="menu-toggle" type="button" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && <div className="mobile-links" id="mobile-navigation">
        {links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.name}</a>)}
        <a className="button button-gold" href="#donar" onClick={() => setOpen(false)}>Quiero ayudar <ArrowUpRight size={17} /></a>
      </div>}
    </header>
  );
}
