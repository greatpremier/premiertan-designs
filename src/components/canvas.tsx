'use client';

import { useState } from 'react';

const Canvas = () => {
  const [zoom, setZoom] = useState(100);

  const handleZoomIn = () => setZoom(z => Math.min(200, z + 10));
  const handleZoomOut = () => setZoom(z => Math.max(10, z - 10));

  return (
    <div className="flex-1 flex flex-col items-center justify-center h-full">
      <div
        className="bg-card shadow-lg rounded-lg relative overflow-hidden"
        style={{ width: '800px', height: '600px', transform: `scale(${zoom / 100})` }}
      >
        {/* Placeholder for design canvas */}
        <div className="absolute top-10 left-10 text-5xl font-bold font-headline text-gray-800 select-none">
          Your Design Title
        </div>
        <div className="absolute top-32 left-10 text-lg text-gray-600 select-none">
          Some subtitle or descriptive text
        </div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent/20 rounded-lg -rotate-12"></div>
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
