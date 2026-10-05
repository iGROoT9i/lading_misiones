import { ArrowDown, ArrowUpRight, Heart, MapPin } from 'lucide-react';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import type { PointerEvent } from 'react';

export default function Hero() {
  const reducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 65, damping: 22 });
  const y = useSpring(pointerY, { stiffness: 65, damping: 22 });
  const leavesX = useTransform(x, value => value * -1.6);
  const leavesY = useTransform(y, value => value * -1.6);
  const move = (event: PointerEvent<HTMLElement>) => {
    if (reducedMotion || event.pointerType !== 'mouse') return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 10);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 8);
  };

  return (
    <section id="inicio" className="mission-hero" aria-labelledby="hero-title" onPointerMove={move} onPointerLeave={() => { pointerX.set(0); pointerY.set(0); }}>
      <svg className="hero-canopy" viewBox="0 0 700 700" fill="none" aria-hidden="true">
        <path d="M690 12Q526 124 435 423M651 49Q516 16 442 67Q534 96 625 75M595 98Q466 78 390 144Q487 157 577 121M550 150Q416 154 368 232Q479 215 531 177M511 207Q399 232 378 316Q464 277 495 235M473 269Q405 314 407 392Q458 338 465 301" fill="currentColor" />
        <path d="M663 44Q684 125 624 197Q618 104 640 65M604 90Q626 196 564 265Q561 159 583 113M555 147Q574 253 520 317Q514 228 539 176M510 209Q526 307 478 370Q477 290 495 238" fill="currentColor" />
      </svg>
      <div className="hero-layout">
        <div className="hero-copy">
          <span className="eyebrow"><span className="eyebrow-dot" /> FE QUE SE CONVIERTE EN ACCIÓN</span>
          <h1 id="hero-title">El amor de Dios,<br />en <em>cada acción.</em></h1>
          <p>Juntos llevamos esperanza, cuidado y nuevas oportunidades a las comunidades que más lo necesitan.</p>
          <div className="hero-actions">
            <a href="#donar" className="button button-gold">Únete a la misión <ArrowUpRight size={19} /></a>
            <a href="#impacto" className="button button-outline">Conoce nuestro trabajo <ArrowDown size={17} /></a>
          </div>
          <div className="hero-location"><MapPin size={16} /> Desde Loreto, con amor para el Perú.</div>
        </div>
        <div className="hero-photo">
          <motion.div className="hero-photo-surface" style={{ x: reducedMotion ? 0 : x, y: reducedMotion ? 0 : y }}>
            <div className="hero-photo-mask">
              <img className="hero-scene-extension" src="/images/hero-loreto-environment.webp" alt="" aria-hidden="true" width="1536" height="1536" />
              <div className="hero-original-frame">
              <img src="/images/fe-en-accion-105.webp" alt="Encuentro de la misión con las familias de la comunidad" fetchPriority="high" width="1040" height="780" />
              </div>
            </div>
          </motion.div>
          <svg className="hero-brush-edge" viewBox="0 0 1000 900" preserveAspectRatio="none" aria-hidden="true"><defs><filter id="gold-brush"><feTurbulence type="fractalNoise" baseFrequency=".028 .075" numOctaves="3" seed="12" result="grain"/><feDisplacementMap in="SourceGraphic" in2="grain" scale="24" xChannelSelector="R" yChannelSelector="G"/></filter></defs><path filter="url(#gold-brush)" d="M225 -30 C135 10 163 71 107 133 S53 235 76 294 S24 394 57 469 S33 563 87 647 S110 744 183 792 S290 847 387 914" fill="none" stroke="#f5c66f" strokeWidth="2.4" strokeDasharray="2 8 12 17" opacity=".5" /></svg>
          <motion.svg className="hero-foreground" viewBox="0 0 280 300" fill="none" aria-hidden="true" style={{ x: reducedMotion ? 0 : leavesX, y: reducedMotion ? 0 : leavesY }}>
            <path d="M286 298Q160 176 171 29M257 268Q166 264 111 222Q201 221 240 245M224 227Q132 218 87 167Q177 182 211 207M200 181Q116 166 75 109Q157 128 192 159M180 132Q112 104 98 52Q161 84 176 110M174 84Q134 40 144 0Q178 49 174 84" fill="currentColor" />
            <path d="M250 259Q270 173 247 121Q219 197 235 244M212 214Q236 129 211 78Q186 160 200 197M187 167Q209 84 185 37Q167 111 180 144M176 120Q190 61 171 12Q160 76 174 100" fill="currentColor" />
          </motion.svg>
          <div className="photo-caption"><span className="caption-icon"><Heart size={22} /></span><span><strong>Una misión. Muchas vidas.</strong><small>Servimos con fe, cercanía y compromiso.</small></span></div>
          <span className="photo-label"><MapPin size={15} /> LORETO · PERÚ</span>
        </div>
      </div>
      <div className="mission-strip"><span>Un mismo propósito, distintas formas de servir.</span><div><span>Fe y formación</span><i /><span>Ayuda social</span><i /><span>Salud y bienestar</span></div></div>
      <svg className="hero-river-scene" viewBox="0 0 1100 200" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 117Q120 91 229 116T482 109T722 116T1100 101L1100 200H0Z" fill="#031b2d" />
        <path d="M0 148Q181 127 355 145T693 138T1100 148M94 167Q289 155 483 166T833 162" stroke="#5c8b98" strokeWidth="2" opacity=".5" />
        <g fill="#031b2d"><path d="M115 124L119 44H124L128 124M120 48Q79 17 58 41Q84 37 118 57M122 46Q151 10 181 27Q151 30 125 57M120 47Q96 4 77 19Q99 23 119 53M124 47Q151 34 160 62Q139 47 124 54M121 49Q92 49 83 73Q108 54 121 56" /><path d="M474 120L479 68H483L488 120M480 69Q449 47 431 62Q456 60 479 77M482 70Q503 45 525 56Q503 61 484 78M481 72Q466 39 451 47Q470 52 480 76" /><path d="M285 109L323 84L360 109Z M294 109H351V141H294Z M624 113L666 88L705 113Z M633 113H696V142H633Z" /></g>
      </svg>
      <svg className="hero-river" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
        <defs><filter id="river-paper"><feTurbulence type="fractalNoise" baseFrequency=".04 .09" numOctaves="2" seed="3" result="grain"/><feDisplacementMap in="SourceGraphic" in2="grain" scale="5" xChannelSelector="R" yChannelSelector="G"/></filter></defs>
        <path filter="url(#river-paper)" d="M0 45 C195 79 377 5 602 28 S969 74 1167 33 S1362 31 1440 21 L1440 80 L0 80Z" fill="var(--color-brand-light)" />
        <path d="M0 36 C195 70 377 -4 602 19 S969 65 1167 24 S1362 22 1440 12" stroke="#f5b544" strokeWidth="1" opacity=".5" vectorEffect="non-scaling-stroke" />
      </svg>
    </section>
  );
}
