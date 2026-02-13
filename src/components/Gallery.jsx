import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import photo1 from '../assets/images/photo1.jpeg';
import photo2 from '../assets/images/photo2.jpeg';
import photo3 from '../assets/images/photo3.jpeg';
import photo4 from '../assets/images/photo4.jpeg';
import photo5 from '../assets/images/photo5.jpeg';

const photos = [
    { src: photo1, label: "Memory 1" },
    { src: photo2, label: "Memory 2" },
    { src: photo3, label: "Memory 3" },
    { src: photo4, label: "Memory 4" },
    { src: photo5, label: "Memory 5" }
];

const Gallery = () => {
    return (
        <div className="py-20 px-4 w-full min-h-screen flex flex-col items-center relative z-10">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-6xl font-cinzel text-gold-400 mb-6 tracking-wide drop-shadow-lg">The Collection</h2>
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="w-32 h-px bg-gradient-to-r from-transparent via-gold-600 to-transparent mx-auto"
                ></motion.div>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-8 md:gap-12 max-w-7xl">
                {photos.map((photo, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 }}
                        className="relative group cursor-pointer"
                    >
                        {/* Frame */}
                        <div className="p-4 bg-[#111] border border-gold-700/50 shadow-2xl transition-all duration-700 group-hover:border-gold-400 group-hover:scale-105 group-hover:shadow-gold-500/20">
                            <div className="overflow-hidden relative w-64 h-80 md:w-80 md:h-96 bg-black flex items-center justify-center">
                                <img
                                    src={photo.src}
                                    alt={photo.label}
                                    className="w-full h-full object-cover block transition-all duration-1000 grayscale group-hover:grayscale-0"
                                    loading="lazy"
                                    onError={(e) => {
                                        console.error(`Gallery: Failed to load ${photo.label}`, photo.src);
                                        e.target.parentElement.innerHTML = '<div class="p-4 text-center text-gold-700 text-[10px]">Resource Error</div>';
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-700"></div>
                            </div>
                        </div>

                        {/* Label */}
                        <motion.div
                            className="mt-4 text-center opacity-40 group-hover:opacity-100 transition-opacity duration-700"
                        >
                            <p className="text-[10px] font-cinzel text-gold-500 tracking-[0.3em] uppercase">{photo.label}</p>
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mt-32 mb-12"
            >
                <p className="text-[10px] uppercase tracking-[0.6em] text-gold-700 font-cinzel">
                    Our infinity begins here
                </p>
                <div className="mt-4 text-[8px] text-gray-700 font-mono tracking-widest">∞</div>
            </motion.div>
        </div>
    );
};

export default Gallery;
