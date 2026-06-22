import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';
import imageManifest from '../imageManifest.json';

// Helper function to shuffle an array
const shuffleArray = (array: string[]) => {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

export default function Galeria() {
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setImages(shuffleArray(imageManifest));
  }, []);

  useEffect(() => {
    if (images.length === 0) return;

    // Change images every 5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 5;
        // If we reach the end, loop back to 0
        if (nextIndex >= images.length) {
          return 0;
        }
        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  // Get the current 5 images to display
  const currentImages = images.slice(currentIndex, currentIndex + 5);

  // If we don't have enough images yet, don't render the grid
  if (currentImages.length < 5 && images.length >= 5) return null;

  return (
    <section id="galeria" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">Fe en Acción</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg mb-8">
            Imágenes que capturan la esencia de nuestra labor diaria. Una muestra de nuestras misiones
            médicas, comedores y servicios en la comunidad. Contamos con un archivo de más de 50 imágenes documentando nuestro trabajo en la región.
          </p>
          <a
            href="https://www.facebook.com/Mc.HerederosdeDios"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1877F2] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#166fe5] hover:-translate-y-1 hover:shadow-lg transition-all shadow-md"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Ver Álbum Completo en Facebook
          </a>
        </motion.div>

        {/* 6-Spot Grid Layout (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          
          {/* Spot 1: Image 0 */}
          <GalleryImage src={currentImages[0]} />

          {/* Spot 2: The Quote (Fixed in the middle top) */}
          <div className="rounded-[2rem] overflow-hidden bg-brand-primary p-8 flex flex-col justify-center items-center text-center shadow-lg relative h-full">
            <Quote className="w-12 h-12 text-brand-accent/30 mb-4 absolute top-6 left-6" />
            <p className="text-xl md:text-2xl font-serif text-white italic mb-4 relative z-10">
              "El que es generoso prospera; el que reanima será reanimado."
            </p>
            <span className="text-brand-accent font-semibold text-sm tracking-widest uppercase relative z-10">
              Proverbios 11:25
            </span>
          </div>

          {/* Spot 3: Image 1 */}
          <GalleryImage src={currentImages[1]} />

          {/* Spot 4: Image 2 */}
          <GalleryImage src={currentImages[2]} />

          {/* Spot 5: Image 3 */}
          <GalleryImage src={currentImages[3]} />

          {/* Spot 6: Image 4 */}
          <GalleryImage src={currentImages[4]} />
          
        </div>
      </div>
    </section>
  );
}

// Component helper to handle the crossfade animation of individual images
function GalleryImage({ src }: { src: string }) {
  if (!src) return <div className="rounded-[2rem] bg-gray-200 animate-pulse h-full w-full"></div>;

  return (
    <div className="rounded-[2rem] overflow-hidden group relative shadow-sm hover:shadow-xl transition-all h-full w-full bg-slate-200">
      <AnimatePresence mode="wait">
        <motion.img
          key={src}
          src={`/images/${src}`}
          alt="Fe en Acción"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
        />
      </AnimatePresence>
    </div>
  );
}
