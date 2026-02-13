import React, { useEffect } from 'react';

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
    useEffect(() => {
        console.log("Gallery component mounted");
    }, []);

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
                        className="relative group cursor-pointer fade-in-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        {/* Frame */}
                        <div className="p-4 bg-[#111] border border-gold-700/50 shadow-2xl transition-all duration-700 group-hover:border-gold-400 group-hover:scale-105">
                            <div className="overflow-hidden relative w-64 h-80 md:w-80 md:h-96">
                                <img
                                    src={photo.src}
                                    alt={photo.label}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                                    onError={(e) => {
                                        console.error(`Gallery: Failed to load ${photo.label}`);
                                        e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gold-600">Image Missing</div>';
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-0 transition-opacity duration-700"></div>
                            </div>
                        </div>

                        {/* Label */}
                        <div className="mt-4 text-center opacity-60 group-hover:opacity-100 transition-opacity duration-700">
                            <p className="text-[10px] font-cinzel text-gold-500 tracking-[0.3em] uppercase">{photo.label}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-32 mb-12">
                <p className="text-[10px] uppercase tracking-[0.5em] text-gold-700 font-cinzel">
                    Our infinity begins here
                </p>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .fade-in-up {
                    animation: fadeInUp 1s ease-out forwards;
                }
            ` }} />
        </div>
    );
};

export default Gallery;
