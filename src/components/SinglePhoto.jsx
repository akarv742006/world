import React, { useEffect } from 'react';
import photo1 from '../assets/images/photo1.jpeg';

const SinglePhoto = ({ onNext }) => {
    useEffect(() => {
        console.log("SinglePhoto component mounted");
    }, []);

    const handleNext = (e) => {
        e.preventDefault();
        console.log("SinglePhoto: Continue button clicked");
        onNext();
    };

    return (
        <div className="flex flex-col items-center justify-center w-full py-12 px-4 shadow-inner fade-in">
            {/* Minimal Frame */}
            <div
                className="bg-white p-3 pb-10 shadow-2xl rotate-1 hover:rotate-0 transition-all duration-700 cursor-pointer border border-gold-500/20 mb-8"
                onClick={handleNext}
            >
                <div className="overflow-hidden bg-gray-50 border border-black/5">
                    <img
                        src={photo1}
                        alt="Memories"
                        className="w-full max-w-[280px] h-auto grayscale hover:grayscale-0 transition-all duration-1000"
                        onError={(e) => {
                            console.error("Image failed to load in SinglePhoto");
                            e.target.style.display = 'none';
                        }}
                    />
                </div>
                <p className="mt-4 font-cinzel text-[10px] text-gray-400 tracking-[0.3em] font-bold text-center">
                    I: THE BEGINNING
                </p>
            </div>

            {/* Robust Button */}
            <button
                onClick={handleNext}
                className="btn-neon px-8 py-3 rounded-xl font-cinzel font-bold text-xs tracking-[0.3em] uppercase w-full max-w-xs shadow-lg"
            >
                Ask The Question
            </button>
        </div>
    );
};

export default SinglePhoto;
