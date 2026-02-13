import React from 'react';
import { motion } from 'framer-motion';
import photo1 from '../assets/images/photo1.jpeg';

const SinglePhoto = ({ onNext }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] w-full py-10">
            {/* Main Photo Container */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="w-full max-w-sm mb-8 relative z-10"
            >
                <div className="p-2 bg-white/5 border border-gold-500/30 rounded-lg shadow-2xl">
                    <img
                        src={photo1}
                        alt="Special Moment"
                        className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out rounded-sm"
                    />
                </div>
            </motion.div>

            {/* Content Text */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="text-gold-200/80 font-cinzel text-xs tracking-[0.3em] uppercase mb-12 text-center px-4"
            >
                Every picture tells a story, but ours is my favorite.
            </motion.p>

            {/* Action Area */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="flex justify-center w-full px-4"
            >
                <div
                    className="border border-gold-500/50 bg-black/60 backdrop-blur-md p-4 rounded-xl shadow-[0_0_20px_rgba(212,175,55,0.2)] w-full max-w-xs cursor-pointer group hover:border-gold-400 transition-colors"
                    onClick={onNext}
                >
                    <button
                        className="btn-neon px-8 py-3 rounded-full font-cinzel font-bold uppercase tracking-[0.2em] w-full group-hover:scale-105 transition-transform"
                    >
                        Ask The Question
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default SinglePhoto;
