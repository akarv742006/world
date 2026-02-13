import React from 'react';

import photo1 from '../assets/images/photo1.jpeg';
import photo2 from '../assets/images/photo2.jpeg';
import photo3 from '../assets/images/photo3.jpeg';
import photo4 from '../assets/images/photo4.jpeg';
import photo5 from '../assets/images/photo5.jpeg';

const photos = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5
];

const Gallery = () => {
    return (
        <div className="py-20 px-4 w-full min-h-screen flex flex-col items-center relative z-10 fade-in">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-cinzel text-gold-400 mb-6 tracking-wide">The Collection</h2>
                <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold-600 to-transparent mx-auto"></div>
            </div>

            <div className="flex flex-wrap justify-center gap-8 md:gap-12 max-w-7xl">
                {photos.map((photo, index) => (
                    <div
                        key={index}
                        className="relative group cursor-pointer fade-in"
                        style={{ animationDelay: `${index * 0.2}s` }}
                    >
                        {/* Frame */}
                        <div className="p-4 bg-[#111] border border-gold-700/50 shadow-[0_10px_40px_rgba(0,0,0,0.8)] transition-all duration-700 group-hover:border-gold-400 group-hover:scale-105 group-hover:shadow-[0_20px_60px_rgba(212,175,55,0.2)]">
                            <div className="overflow-hidden relative w-64 h-80 md:w-80 md:h-96 transition-all duration-1000 ease-in-out">
                                <img
                                    src={photo}
                                    alt={`Memory ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-700"></div>
                            </div>
                        </div>

                        {/* Label */}
                        <div className="mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                            <p className="text-xs font-cinzel text-gold-500 tracking-[0.2em] uppercase">Memory {index + 1}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-32 mb-12">
                <p className="text-xs uppercase tracking-[0.4em] text-gold-700 font-cinzel">
                    And many more to come
                </p>
            </div>
        </div>
    );
};

export default Gallery;
