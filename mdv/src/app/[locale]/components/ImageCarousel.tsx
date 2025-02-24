"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface CarouselProps{
    images: string[];
}

export default function ImageCarousel( {images}:CarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative  md:w-[400px] md:h-[400px]  lg:w-[800px] lg:h-[500px] overflow-hidden rounded-lg shadow-lg">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt="Sliding Image"
          className="w-full h-full object-cover rounded-lg"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>
    </div>
  );
}
