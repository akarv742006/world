import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const reasons = [
    { title: "Your Soul", desc: "Pure, radiant, and endlessly kind." },
    { title: "Your Beauty", desc: "Eclipsing the stars themselves." },
    { title: "Your Laughter", desc: "My favorite melody." },
    { title: "Your Strength", desc: "The pillar of my world." },
    { title: "Us", desc: "A destiny written in the stars." }
];

const Reasons = ({ onNext }) => {
    const [index, setIndex] = useState(0);

    const nextReason = () => {
        if (index < reasons.length - 1) {
            setIndex(index + 1);
        } else {
            onNext();
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 w-full">
            <h2 className="text-3xl md:text-5xl font-cinzel text-gold-400 mb-12 drop-shadow-md tracking-wider">
                Why I Love You
            </h2>

            <div className="relative w-full max-w-lg h-96 flex items-center justify-center perspective-1000">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, rotateY: 90 }}
                        animate={{ opacity: 1, rotateY: 0 }}
                        exit={{ opacity: 0, rotateY: -90 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="text-center p-8 md:p-14 bg-gradient-to-br from-black/80 to-burgundy-900/80 backdrop-blur-md border border-gold-600/50 shadow-[0_0_40px_rgba(212,175,55,0.15)] rounded-sm w-full absolute cursor-pointer flex flex-col items-center justify-center h-full"
                        onClick={nextReason}
                    >
                        <div className="absolute inset-2 border border-gold-500/20 pointer-events-none"></div>

                        <div className="flex-grow flex flex-col justify-center">
                            <h3 className="text-2xl md:text-3xl font-cinzel text-gold-200 mb-6">
                                {index + 1}. {reasons[index].title}
                            </h3>
                            <p className="text-lg md:text-xl text-cream/90 font-lato font-light italic">
                                {reasons[index].desc}
                            </p>
                        </div>

                        {/* Boxed Action Area */}
                        <div className="mt-6 w-full flex justify-center">
                            <div className="border border-gold-500/50 bg-black/60 backdrop-blur-md p-3 rounded-xl shadow-[0_0_15px_rgba(212,175,55,0.2)] w-auto inline-block">
                                <button className="btn-neon px-8 py-2 rounded-full font-cinzel font-bold text-sm tracking-widest hover:scale-105 transition-transform whitespace-nowrap">
                                    {index < reasons.length - 1 ? 'Next Reason' : 'Continue'}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Progress Indicators */}
            <div className="flex gap-4 mt-16">
                {reasons.map((_, i) => (
                    <div
                        key={i}
                        className={`w-2 h-2 rotate-45 transition-all duration-500 ${i === index ? 'bg-gold-500 scale-150 shadow-[0_0_10px_#FFD700]' : 'bg-burgundy-700'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Reasons;
