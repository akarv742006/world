import React from 'react';
import { motion } from 'framer-motion';

const Wishes = ({ onNext }) => {
    const handleNext = (e) => {
        e.preventDefault();
        console.log("Wishes: Proceed button clicked");
        onNext();
    };

    return (
        <div className="flex flex-col items-center justify-center px-4 text-center w-full max-w-3xl min-h-[80vh]">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="bg-black/60 p-8 md:p-16 border-double border-4 border-gold-600/40 relative shadow-2xl backdrop-blur-sm"
            >
                {/* Decorative Flourishes */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ delay: 1 }}
                    className="absolute top-4 left-1/2 -translate-x-1/2 text-gold-500 text-2xl"
                >⚜️</motion.div>

                <div className="space-y-4 mb-10 mt-6">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-[10px] font-cinzel uppercase text-gold-400 tracking-[0.4em]"
                    >A Royal Celebration</motion.span>
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="text-4xl md:text-6xl font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-gold-100 via-gold-400 to-gold-100 pb-2"
                    >
                        Happy Birthday
                    </motion.h2>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="text-lg md:text-xl font-lato font-light leading-relaxed text-cream/90 mb-12 px-2 italic"
                >
                    "To the queen of my heart. May your day be as magnificent as the love we share. Today, I celebrate you."
                </motion.p>

                {/* Secure Action Area */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2 }}
                    className="flex justify-center w-full"
                >
                    <button
                        onClick={handleNext}
                        className="btn-neon px-10 py-4 rounded-full font-cinzel font-bold uppercase tracking-[0.2em] w-full max-w-xs hover:scale-105 active:scale-95 transition-all border-gold-500"
                    >
                        Proceed to The Story
                    </button>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Wishes;
