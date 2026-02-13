import React from 'react';
import { motion } from 'framer-motion';

const LoveLetter = ({ onNext }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-20 px-4 w-full">
            <motion.div
                initial={{ opacity: 0, rotateY: -20, perspective: 1000 }}
                animate={{ opacity: 1, rotateY: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{ transformStyle: 'preserve-3d' }}
                className="bg-[#fdfbf7] p-8 md:p-16 max-w-2xl w-full shadow-[20px_20px_60px_rgba(0,0,0,0.5)] border-l-8 border-gold-600 relative overflow-hidden"
            >
                {/* Vintage Paper Texture Overlay */}
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/parchment.png')]"></div>

                <div className="relative z-10 font-lato text-burgundy-900 leading-relaxed italic">
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex justify-between items-center mb-12"
                    >
                        <span className="font-cinzel font-bold border-b-2 border-gold-500 pb-1">To: Asvitha</span>
                        <span className="text-gray-400 text-sm">Feb 14, 2026</span>
                    </motion.div>

                    <div className="space-y-6 text-lg md:text-xl">
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>Dearest,</motion.p>
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}>
                            They say engineering is all about systems and logic. But when I met you,
                            I realized that the most powerful system in the world is the one
                            that connects two souls.
                        </motion.p>
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4 }}>
                            You aren't just a part of my life; you are the core operating system
                            that makes everything else run perfectly. Your smile is my favorite
                            UI, and your presence is the only variable that truly matters.
                        </motion.p>
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.0 }}>
                            Happy Birthday to the most amazing person I know.
                            Today, I want to show you exactly why you mean
                            the world to me.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 3.6 }}
                        className="mt-16 flex flex-col items-end"
                    >
                        <div className="w-32 h-px bg-burgundy-900/20 mb-4"></div>
                        <p className="font-cinzel font-bold">Forever Yours,</p>
                        <p className="font-cinzel text-gold-600 text-2xl mt-2">Akash</p>
                    </motion.div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4.2 }}
                className="mt-12 w-full max-w-xs"
            >
                <button
                    onClick={onNext}
                    className="btn-neon w-full py-4 rounded-full font-cinzel font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform"
                >
                    Turn The Page
                </button>
            </motion.div>
        </div>
    );
};

export default LoveLetter;
