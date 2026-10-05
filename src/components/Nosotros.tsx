import { Eye, Heart } from 'lucide-react';

export default function Nosotros() {
  return (
    <section id="nosotros" className="about-section section-wrap">
      <div className="about-intro"><span className="eyebrow">NUESTRA RAZÓN DE SER</span><h2>La esperanza empieza<br />cuando nos acercamos.</h2><p>Somos la Asociación Misión de Cristo Herederos de Dios. Nuestra fe nos inspira a acompañar, formar y servir a las comunidades del Perú.</p><a href="#objetivos" className="text-link">Conoce lo que nos mueve <span aria-hidden="true">↗</span></a></div>
      <div className="about-cards">
        <article><span className="about-icon"><Eye size={24} /></span><h3>Nuestra visión</h3><p>Equipar y formar líderes para extender el reino de Dios. Ser una luz de esperanza que guíe a las comunidades hacia un desarrollo espiritual y social sostenible.</p></article>
        <article><span className="about-icon gold"><Heart size={24} /></span><h3>Nuestra misión</h3><p>Transformar vidas, evangelizando y formando discípulos, ministros y ministerios. Demostrar el amor de Dios de una manera tangible en cada acción.</p></article>
      </div>
    </section>
  );
}
