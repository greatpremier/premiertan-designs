'use client';

import { useState } from 'react';

const Canvas = () => {
  const [zoom, setZoom] = useState(100);

  const handleZoomIn = () => setZoom(z => Math.min(200, z + 10));
  const handleZoomOut = () => setZoom(z => Math.max(10, z - 10));

  return (
    <div className="flex-1 flex flex-col items-center justify-center h-full w-full">
      <div
        className="bg-card shadow-lg rounded-lg relative overflow-hidden w-full"
        style={{
            aspectRatio: '4 / 3',
            transform: `scale(${zoom / 100})`,
            transformOrigin: 'center center',
            maxWidth: '800px'
        }}
      >
        {/* Placeholder for design canvas */}
        <div className="absolute top-[5%] left-[5%] text-[clamp(1rem,5vw,2.5rem)] font-bold font-headline text-foreground/80 select-none">
          Your Design Title
        </div>
        <div className="absolute top-[18%] left-[5%] text-[clamp(0.5rem,2vw,1rem)] text-foreground/60 select-none">
          Some subtitle or descriptive text
        </div>
        <div className="absolute bottom-[5%] right-[5%] w-[25%] h-[25%] bg-primary/20 rounded-full"></div>
        <div className="absolute bottom-[12%] right-[12%] w-[20%] h-[20%] bg-accent/20 rounded-lg -rotate-12"></div>
      </div>
       <div className="fixed bottom-4 right-1/2 translate-x-1/2 z-10">
        <div className="flex items-center gap-2 bg-card p-1.5 rounded-lg shadow-md border">
          <button onClick={handleZoomOut} className="px-2 py-1 rounded-md hover:bg-muted">-</button>
          <span className="text-sm font-medium w-12 text-center">{zoom}%</span>
          <button onClick={handleZoomIn} className="px-2 py-1 rounded-md hover:bg-muted">+</button>
        </div>
      </div>
    </div>
  );
};

export default Canvas;
