import createGlobe from 'cobe';
import { useEffect, useRef } from 'react';

export default function Globe3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 700,
      height: 700,
      phi: 0,
      theta: 0.3, // Tilt
      dark: 1, // 1 is fully dark
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      // Color matching your brand (slate-900 / blue-800 mix)
      baseColor: [0.06, 0.09, 0.16], 
      // Marker color matching your brand-accent (amber/gold)
      markerColor: [0.96, 0.62, 0.04], 
      glowColor: [0.1, 0.2, 0.5],
      markers: [
        // Coordinates for Loreto, Peru
        { location: [-3.74, -73.25], size: 0.1 }
      ],
      onRender: (state: any) => {
        state.phi = phi;
        phi += 0.005; // Rotation speed
      },
    } as any);

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div style={{ width: '100%', maxWidth: '350px', aspectRatio: '1/1' }} className="flex items-center justify-center opacity-40 mx-auto">
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: '100%', display: 'block' }}
      />
    </div>
  );
}
