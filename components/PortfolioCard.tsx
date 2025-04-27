import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export function PortfolioCard({ item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const imageRef = useRef(null);
  const scrollInterval = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    if (isHovered && imageRef.current && !isTouchDevice) {
      imageRef.current.scrollTop = 0;
      const totalHeight = imageRef.current.scrollHeight - imageRef.current.clientHeight;
      const duration = 15000;
      const steps = 100;
      const stepSize = totalHeight / steps;
      let currentStep = 0;
      scrollInterval.current = setInterval(() => {
        if (imageRef.current && currentStep < steps) {
          imageRef.current.scrollTop += stepSize;
          currentStep++;
        } else if (imageRef.current) {
          imageRef.current.scrollTop = 0;
          currentStep = 0;
        }
      }, duration / steps);
    } else if (scrollInterval.current) {
      clearInterval(scrollInterval.current);
    }
    return () => {
      if (scrollInterval.current) {
        clearInterval(scrollInterval.current);
      }
    };
  }, [isHovered, isTouchDevice]);

  return (
    <>
      <div
        className="relative group rounded-2xl overflow-hidden w-full aspect-[4/3] cursor-pointer min-h-[340px] md:min-h-[420px] lg:min-h-[500px] xl:min-h-[560px]"
        onMouseEnter={() => !isTouchDevice && setIsHovered(true)}
        onMouseLeave={() => !isTouchDevice && setIsHovered(false)}
        onClick={() => setIsExpanded(true)}
        onTouchStart={() => isTouchDevice && setIsHovered(true)}
        onTouchEnd={() => isTouchDevice && setIsHovered(false)}
      >
        <div ref={imageRef} className="absolute inset-0 overflow-auto scrollbar-hide">
          {!imgError ? (
            <Image
              src={item.images[0]}
              alt={`${item.title} screenshot`}
              width={1200}
              height={5000}
              className="w-full"
              priority={false}
              loading="lazy"
              quality={isTouchDevice ? 60 : 80}
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-red-200 text-red-800 font-bold">Image not found</div>
          )}
        </div>
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${isTouchDevice ? (isHovered ? 'opacity-100' : 'opacity-0') : 'opacity-0 group-hover:opacity-100'}`} />
        <div className={`absolute bottom-0 left-0 right-0 p-6 text-white transition-transform duration-300 ${isTouchDevice ? (isHovered ? 'translate-y-0' : 'translate-y-8') : 'translate-y-8 group-hover:translate-y-0'}`}>
          <span className="inline-block rounded bg-primary px-2 py-1 text-xs font-semibold uppercase tracking-wider mb-2">
            {item.category}
          </span>
          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
          <p className="text-sm text-white/80">{item.description}</p>
        </div>
      </div>
      {/* Expanded modal logic can be added here if needed */}
    </>
  );
} 