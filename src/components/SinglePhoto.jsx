import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import photo1 from '../assets/images/photo1.jpeg';

const SinglePhoto = ({ onNext }) => {
    useEffect(() => {
        console.log("SinglePhoto component mounted");
    }, []);

    const handleNext = (e) => {
        e.preventDefault();
        onNext();
    };

    return (
        <div className="flex flex-col items-center justify-center w-full py-12 px-4">
            {/* Cinematic Polaroid Frame */}
            <motion.div
                initial={{ opacity: 0, rotate: -5, scale: 0.9 }}
                animate={{ opacity: 1, rotate: 1, scale: 1 }}
                transition={{ duration: 1, type: "spring" }}
                whileHover={{ rotate: 0, scale: 1.02 }}
                className="bg-white p-3 pb-12 shadow-[0_20px_60px_rgba(0,0,0,0.6)] cursor-pointer border border-gold-500/20 mb-12 relative group"
                onClick={handleNext}
            >
                <div className="overflow-hidden bg-gray-100 flex items-center justify-center min-h-[300px] w-full border border-black/5 relative">
                    <img
                        src={photo1}
                        alt="Memories"
                        className="w-full max-w-[300px] h-auto block transition-all duration-1000"
                        loading="eager"
                        onError={(e) => {
                            console.error("SinglePhoto: Image load error", photo1);
                            e.target.parentElement.innerHTML = '<div class="p-8 text-center text-red-800 text-xs font-bold">IMAGE RESOURCE FAILED TO LOAD</div>';
                        }}
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700"></div>
                </div>
                <div className="mt-6">
                    <p className="font-cinzel text-[10px] text-gray-400 tracking-[0.4em] font-bold text-center">
                        CHAPTER I: THE BEGINNING
                    </p>
                </div>

                {/* Decorative Pin */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-gold-600 rounded-full shadow-lg border-2 border-gold-400 flex items-center justify-center">
                    <div className="w-2 h-2 bg-gold-200 rounded-full"></div>
                </div>
            </motion.div>

            {/* Robust Button */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="w-full max-w-xs"
            >
                <button
                    onClick={handleNext}
                    className="btn-neon px-8 py-4 rounded-xl font-cinzel font-bold text-xs tracking-[0.3em] uppercase w-full shadow-lg hover:bg-gold-500 hover:text-black transition-all"
                >
                    Continue Journey
                </button>
            </motion.div>
        </div>
    );
};

export default SinglePhoto;
