import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Nosotros from './components/Nosotros';
import Impacto from './components/Impacto';
import Objetivos from './components/Objetivos';
import Galeria from './components/Galeria';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Nosotros />
      <Impacto />
      <Objetivos />
      <Galeria />
      <Footer />
    </div>
  );
}

export default App;
