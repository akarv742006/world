import React from 'react';
import photo1 from '../assets/images/photo1.jpeg';

const SinglePhoto = ({ onNext }) => {
    return (
        <div className="flex flex-col items-center justify-center w-full py-16 px-4 fade-in">
            {/* Classic Polarid Frame */}
            <div
                className="bg-white p-4 pb-12 shadow-[0_15px_45px_rgba(0,0,0,0.6)] rotate-2 hover:rotate-0 transition-all duration-700 cursor-pointer group mb-12"
                onClick={onNext}
            >
                <div className="overflow-hidden bg-gray-100">
                    <img
                        src={photo1}
                        alt="The One"
                        className="w-full max-w-[300px] h-auto grayscale group-hover:grayscale-0 transition-all duration-1000"
                    />
                </div>
                <p className="mt-6 font-cinzel text-xs text-gray-500 tracking-[0.2em] font-bold">
                    Chapter I: Us
                </p>
            </div>

            {/* Action Button */}
            <div className="w-full max-w-xs p-2 bg-black/40 backdrop-blur-sm rounded-2xl border border-gold-500/20">
                <button
                    onClick={onNext}
                    className="btn-neon w-full py-4 rounded-xl font-cinzel font-bold text-sm tracking-widest uppercase hover:scale-[1.02] active:scale-95 transition-all"
                >
                    Continue Journey
                </button>
            </div>
        </div>
    );
};

export default SinglePhoto;
