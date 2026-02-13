import React from 'react';
import { motion } from 'framer-motion';

const Welcome = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="mb-8 text-center"
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
          className="wax-seal mx-auto mb-8 shadow-[0_0_30px_rgba(104,6,6,0.3)]"
        >A&A</motion.div>

        <h1 className="text-4xl md:text-7xl font-cinzel text-gold-gradient tracking-[0.1em] mb-4 drop-shadow-2xl">
          The Archive of Love
        </h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="w-48 h-px bg-gold-600/40 mx-auto mb-4"
        ></motion.div>

        <p className="text-gold-600/60 font-cinzel text-xs md:text-sm tracking-[0.4em] uppercase">
          Vol. I: Our Story
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="w-full max-w-xs p-4 bg-black/40 backdrop-blur-md rounded-2xl border border-gold-500/20 shadow-2xl mt-8"
      >
        <button
          onClick={onStart}
          className="btn-neon w-full py-4 rounded-xl font-cinzel font-bold text-sm tracking-[0.2em] uppercase transition-all hover:scale-[1.02] active:scale-95"
        >
          Enter Gallery
        </button>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 2, duration: 2 }}
        className="mt-16 text-cream font-lato text-[10px] tracking-widest italic"
      >
        Specifically curated for Asvitha
      </motion.p>
    </div>
  );
};

export default Welcome;
