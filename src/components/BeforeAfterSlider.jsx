import { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowLeftRight } from 'lucide-react';

export const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  
  // Messy room
  const imageBefore = "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80";
  // Clean room
  const imageAfter = "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80";

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const x = clientX - containerRect.left;
    const percentage = Math.max(0, Math.min(100, (x / containerRect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handlePointerMove = useCallback((e) => {
    if (!isDragging) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    handleMove(clientX);
  }, [isDragging, handleMove]);

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handlePointerMove);
      window.addEventListener('touchmove', handlePointerMove, { passive: false });
      window.addEventListener('mouseup', handlePointerUp);
      window.addEventListener('touchend', handlePointerUp);
    } else {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);
      window.removeEventListener('touchend', handlePointerUp);
    }

    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);
      window.removeEventListener('touchend', handlePointerUp);
    };
  }, [isDragging, handlePointerMove, handlePointerUp]);

  const handlePointerDown = (e) => {
    setIsDragging(true);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    handleMove(clientX);
  };

  return (
    <div className="my-12">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold font-heading text-brand-navy dark:text-white mb-2 transition-colors">See the Difference</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm">Drag the slider to see our verified house maids in action.</p>
      </div>

      <div 
        ref={containerRef}
        className="relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-xl cursor-ew-resize select-none border border-slate-200 dark:border-white/10"
        onMouseDown={handlePointerDown}
        onTouchStart={handlePointerDown}
      >
        {/* BEFORE IMAGE (Messy) - Full width in background */}
        <div className="absolute inset-0 bg-slate-200">
          <img 
            src={imageBefore} 
            alt="Messy room before cleaning" 
            className="w-full h-full object-cover object-center pointer-events-none"
            draggable="false"
          />
          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            Before
          </div>
        </div>

        {/* AFTER IMAGE (Clean) - Clipped via width */}
        <div 
          className="absolute inset-0 bg-slate-100 z-10 overflow-hidden shadow-[2px_0_10px_rgba(0,0,0,0.2)]"
          style={{ width: `${sliderPosition}%` }}
        >
          <img 
            src={imageAfter} 
            alt="Sparkling clean room" 
            className="w-full h-full object-cover object-center pointer-events-none min-w-[max(100vw,800px)]"
            style={{ width: containerRef.current ? containerRef.current.offsetWidth + 'px' : '100vw', maxWidth: 'none' }}
            draggable="false"
          />
          <div className="absolute top-4 left-4 bg-green-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            After
          </div>
        </div>

        {/* DRAG HANDLE */}
        <div 
          className="absolute top-0 bottom-0 z-20 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] transform -translate-x-1/2"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border border-slate-200 cursor-ew-resize">
            <ArrowLeftRight className="w-5 h-5 text-brand-navy" />
          </div>
        </div>
      </div>
    </div>
  );
};
