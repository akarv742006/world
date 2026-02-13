import React from 'react';
import { motion } from 'framer-motion';

const Wishes = ({ onNext }) => {
    return (
        <div className="flex flex-col items-center justify-center px-4 text-center w-full max-w-3xl min-h-screen">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="bg-black/40 p-12 md:p-20 border-double border-4 border-gold-600/40 relative"
            >
                {/* Decorative Flourishes */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 text-gold-500/30 text-4xl">⚜️</div>

                <div className="space-y-6 mb-12 mt-8">
                    <span className="text-sm font-cinzel uppercase text-gold-400 tracking-[0.3em]">A Royal Celebration</span>
                    <h2 className="text-5xl md:text-7xl font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-gold-200 via-gold-400 to-gold-200 pb-2">
                        Happy Birthday
                    </h2>
                </div>

                <p className="text-xl md:text-2xl font-lato font-light leading-loose text-cream/90 mb-16 px-4">
                    "To the queen of my heart.<br />
                    May your day be as magnificent as the love we share.<br />
                    Today, I celebrate you."
                </p>

                {/* Boxed Action Area */}
                <div className="pt-4 w-full flex justify-center">
                    <div className="border border-gold-500/50 bg-black/60 backdrop-blur-md p-4 rounded-xl shadow-[0_0_20px_rgba(212,175,55,0.2)] w-full max-w-xs md:max-w-md">
                        <button
                            onClick={onNext}
                            className="btn-neon px-8 py-3 rounded-full font-cinzel font-bold uppercase tracking-[0.2em] w-full hover:bg-gold-400 hover:text-black transition-colors"
                        >
                            Proceed to The Gallery
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Wishes;
