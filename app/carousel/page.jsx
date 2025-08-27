'use client'

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react"

const slides = [
  '/video1.mp4',
  '/video2.mp4',
  '/video3.mp4',
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hoverSide, setHoverSide] = useState(null); // 'left' | 'right' | null
  const timeoutRef = useRef(null);
  const progressRef = useRef(null);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  // Auto-slide
  useEffect(() => {
    startProgress();
    timeoutRef.current = setTimeout(nextSlide, 5000);

    return () => {
      clearTimeout(timeoutRef.current);
      resetProgress();
    };
  }, [current]);

  const startProgress = () => {
    if (progressRef.current) {
      progressRef.current.style.transition = 'width 5s linear';
      progressRef.current.style.width = '100%';
    }
  };

  const resetProgress = () => {
    if (progressRef.current) {
      progressRef.current.style.transition = 'none';
      progressRef.current.style.width = '0%';
    }
  };

  // Track cursor within carousel
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCursorPos({ x, y });

    setHoverSide(x < rect.width / 2 ? 'left' : 'right');
  };

  const handleClick = () => {
    if (hoverSide === 'left') prevSlide();
    else if (hoverSide === 'right') nextSlide();
  };

  return (
    <div
      className="relative w-screen h-screen mx-auto overflow-hidden rounded-lg shadow-lg cursor-none"
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.32 }}
          className="w-full h-screen relative"
        >
          <video
            src={slides[current]}
            alt="slide"
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
          />
        </motion.div>
      </AnimatePresence>

      {/* Dynamic Arrow */}
      {/* {hoverSide && (
        <motion.div
          style={{
            top: cursorPos.y - 100,
            left: cursorPos.x,
          }}
          className="absolute w-8 h-8 border-b-4 border-r-4 border-white z-20 pointer-events-none"
          animate={{ rotate: hoverSide === 'left' ? 135 : -45 }}
        />
      )} */}

      {hoverSide && (
        <motion.div
          style={{
            top: cursorPos.y - 100,
            left: cursorPos.x,
          }}
          className="absolute z-50 pointer-events-none -translate-x-1/2 -translate-y-1/2"
        >
          {hoverSide === 'left' ? (
            <ArrowLeftIcon size={140} weight="light" color="white" />
          ) : (
            <ArrowRightIcon size={140} weight="light" color="white" />
          )}
        </motion.div>
      )}
    </div>
  );
}
