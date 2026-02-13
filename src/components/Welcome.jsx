import React from 'react';

const Welcome = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 w-full fade-in">
      <div className="mb-8">
        <div className="wax-seal mx-auto mb-6">A&A</div>
        <h1 className="text-4xl md:text-7xl font-cinzel text-gold-gradient tracking-[0.1em] mb-4">
          The Archive of Love
        </h1>
        <p className="text-gold-600/60 font-cinzel text-sm tracking-[0.4em] uppercase">
          Vol. I: Our Story
        </p>
      </div>

      <div className="w-full max-w-xs p-4 bg-black/40 backdrop-blur-md rounded-2xl border border-gold-500/20 shadow-2xl mt-8">
        <button
          onClick={onStart}
          className="btn-neon w-full py-4 rounded-xl font-cinzel font-bold text-sm tracking-[0.2em] uppercase transition-all"
        >
          Enter Gallery
        </button>
      </div>

      <p className="mt-12 text-cream/30 font-lato text-xs tracking-widest italic">
        Specifically curated for Asvitha
      </p>
    </div>
  );
};

export default Welcome;
