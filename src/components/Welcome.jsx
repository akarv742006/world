import React from 'react';
import { motion } from 'framer-motion';

const Welcome = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6 w-full min-h-screen relative overflow-hidden">

      {/* Decorative Border */}
      <div className="absolute inset-4 md:inset-10 border border-gold-600/30 pointer-events-none"></div>
      <div className="absolute inset-6 md:inset-12 border border-gold-600/10 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="max-w-3xl w-full z-10 flex flex-col items-center"
      >
        <span className="text-xs md:text-sm lg:text-base uppercase tracking-[0.3em] md:tracking-[0.5em] text-gold-300 mb-6 md:mb-8 block font-cinzel">
          Happy Birthday, Asvitha
        </span>

        <h1 className="text-5xl md:text-8xl lg:text-9xl font-cinzel text-transparent bg-clip-text bg-gradient-to-b from-gold-100 to-gold-600 mb-8 md:mb-12 drop-shadow-2xl">
          Us.
        </h1>

        <p className="text-base md:text-xl lg:text-2xl font-lato font-light text-cream/80 mb-12 md:mb-16 max-w-xs md:max-w-lg leading-relaxed italic px-4">
          "We do not remember days, we remember moments."
        </p>

        {/* Wax Seal Button */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="wax-seal group cursor-pointer relative mt-8 flex flex-col items-center"
        >
          <span className="text-5xl text-gold-500 drop-shadow-md pb-2">❦</span>
          <span className="absolute -bottom-16 text-sm text-gold-400 font-cinzel tracking-widest opacity-100 animate-pulse whitespace-nowrap bg-black/50 px-4 py-1 rounded-full border border-gold-600/30">
            Click to Open
          </span>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Welcome;
