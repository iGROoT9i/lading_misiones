import createGlobe from 'cobe';
import { useEffect, useRef } from 'react';

export default function Globe3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: 700,
      height: 700,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.1, 0.2, 0.4],
      markerColor: [1, 0.8, 0.1],
      glowColor: [0.2, 0.3, 0.6],
      markers: [{ location: [-3.74, -73.25], size: 0.1 }],
    });
    let frame = 0;
    let previousTime = 0;
    let phi = 0;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const animate = (time: number) => {
      if (previousTime) phi += Math.min(time - previousTime, 50) * 0.0003;
      previousTime = time;
      globe.update({ phi });
      frame = requestAnimationFrame(animate);
    };
    let visible = false;
    const syncAnimation = () => {
      cancelAnimationFrame(frame);
      previousTime = 0;
      if (visible && !preference.matches && !document.hidden) frame = requestAnimationFrame(animate);
    };
    const observer = new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      syncAnimation();
    });
    observer.observe(canvas);
    preference.addEventListener('change', syncAnimation);
    document.addEventListener('visibilitychange', syncAnimation);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      preference.removeEventListener('change', syncAnimation);
      document.removeEventListener('visibilitychange', syncAnimation);
      globe.destroy();
    };
  }, []);

  return (
    <div aria-hidden="true" className="w-[350px] max-w-full aspect-square opacity-60">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
