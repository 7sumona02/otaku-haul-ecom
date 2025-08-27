'use client'

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react"

const slides = [
  'https://raw.githubusercontent.com/7sumona02/otaku-haul-ecom/main/public/video1.mp4',
  'https://raw.githubusercontent.com/7sumona02/otaku-haul-ecom/main/public/video2.mp4',
  'https://raw.githubusercontent.com/7sumona02/otaku-haul-ecom/main/public/video3.mp4',
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
      className="fixed top-0 w-screen h-screen mx-auto overflow-hidden rounded-lg shadow-lg cursor-none"
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0,  scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
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
            top: cursorPos.y,
            left: cursorPos.x,
          }}
          transition={{
    type: 'spring',
    stiffness: 300,
    damping: 20,
  }}
          className="absolute z-60 pointer-events-none -translate-x-1/2 -translate-y-1/2"

        >
          {hoverSide === 'left' ? (
            <ArrowLeftIcon size={140} weight='thin' color="white" />
          ) : (
            <ArrowRightIcon size={140} weight='thin' color="white" />
          )}
        </motion.div>
      )}

      <div className='w-screen h-screen bg-black z-40 opacity-35 absolute top-0'></div>

      <div className='z-50 absolute top-1/2 px-20 content-section'>
        <div className='text-7xl font-medium text-white tracking-tighter'>Welcome to <br /> Otaku Haul</div>
        <div className='text-lg text-white mt-4 max-w-sm leading-tight tracking-tight'>
          Otaku Haul is a platform that allows you to buy and sell anime merchandise.
        </div>
        <div className='max-w-sm bg-white/50 backdrop-blur-lg px-6 py-2 rounded-lg w-fit text-black font-medium mt-6 cursor-pointer tracking-tight'>
          View Store
        </div>
      </div>

       <div className='z-50 absolute bottom-5 right-0 px-20 category-section'>
       <div className='grid grid-cols-2 gap-3'>
        <div className='h-28 w-36 rounded-lg bg-black overflow-hidden group relative'>
          <img src='https://i.pinimg.com/1200x/ae/41/74/ae4174a14c8c0600b91216785b416e21.jpg' alt='' className='w-full h-full object-cover group-hover:scale-120 group-hover:opacity-60 transition-all duration-300' />
          <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300'>
            <div className='text-white text-xl font-medium tracking-tight'>Cosplay</div>
          </div>
        </div>
        <div className='h-28 w-36 rounded-lg bg-black overflow-hidden group relative'>
          <img src='https://i.pinimg.com/736x/16/ca/a9/16caa985d11400dccca13ecfc39f024c.jpg' alt='' className='w-full h-full object-cover group-hover:scale-120 group-hover:opacity-60 transition-all duration-300' />
          <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300'>
            <div className='text-white text-xl font-medium tracking-tight'>Accessories</div>
          </div>
        </div>
        <div className='h-28 w-36 rounded-lg bg-black overflow-hidden group relative'>
          <img src='https://i.pinimg.com/1200x/08/84/9d/08849dcf45d4f94fa0bd36f94d85e9dd.jpg' alt='' className='w-full h-full object-cover group-hover:scale-120 group-hover:opacity-60 transition-all duration-300' />
          <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300'>
            <div className='text-white text-xl font-medium tracking-tight'>Decor</div>
          </div>
        </div>
        <div className='h-28 w-36 rounded-lg bg-black overflow-hidden group relative'>
          <img src='https://i.pinimg.com/736x/18/0d/55/180d55cae6ab6793a4a164bf83fa7630.jpg' alt='' className='w-full h-full object-cover group-hover:scale-120 group-hover:opacity-60 transition-all duration-300' />
          <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300'>
            <div className='text-white text-xl font-medium tracking-tight'>Explore more</div>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
}
