import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Nosotros from './components/Nosotros';
import Impacto from './components/Impacto';
import Objetivos from './components/Objetivos';
import Galeria from './components/Galeria';
import Footer from './components/Footer';

function App() {
  return (
    <MotionConfig reducedMotion="user">
    <div className="min-h-screen">
      <a href="#contenido" className="skip-link">Saltar al contenido</a>
      <Navbar />
      <main id="contenido">
      <Hero />
      <Nosotros />
      <Impacto />
      <Objetivos />
      <Galeria />
      <Footer />
      </main>
    </div>
    </MotionConfig>
  );
}

export default App;
