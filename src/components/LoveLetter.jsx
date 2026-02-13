import React from 'react';
import { motion } from 'framer-motion';

const LoveLetter = ({ onNext }) => {
    const lines = [
        "My Dearest Love,",
        "In the vastness of time,",
        "Finding you was my destiny.",
        "You are the grace in my step,",
        "The fire in my soul,",
        "And the peace in my heart.",
        "I promise to honor you,",
        "Cherish you,",
        "And love you, eternally."
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-6 py-20 w-full">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className="bg-[#1C1C1C] p-8 md:p-16 max-w-2xl w-full relative shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-gold-700/30"
            >
                {/* Gold Frame Corners */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-gold-500"></div>
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-gold-500"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-gold-500"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gold-500"></div>

                <div className="space-y-6 text-center pb-8">
                    {lines.map((line, index) => (
                        <motion.p
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`text-lg md:text-2xl text-cream font-lato leading-loose ${index === 0 || index === lines.length - 1 ? 'font-cinzel text-gold-300 text-3xl' : 'font-light italic'}`}
                        >
                            {line}
                        </motion.p>
                    ))}
                </div>

                {/* Boxed Action Area */}
                <div className="mt-12 flex justify-center w-full">
                    <div className="border border-gold-500/50 bg-black/60 backdrop-blur-md p-4 rounded-xl shadow-[0_0_20px_rgba(212,175,55,0.2)] w-full max-w-xs flex justify-center">
                        <button
                            onClick={onNext}
                            className="btn-neon px-8 py-3 rounded-full font-cinzel font-bold uppercase tracking-[0.2em] w-full hover:scale-105 transition-transform"
                        >
                            Turn Page
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default LoveLetter;
