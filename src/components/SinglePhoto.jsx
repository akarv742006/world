import React from 'react';
import photo1 from '../assets/images/photo1.jpeg';

const SinglePhoto = ({ onNext }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] w-full py-10 fade-in">
            {/* Main Photo Frame */}
            <div className="w-full max-w-sm mb-12 relative z-10 p-3 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.5)] rotate-1 hover:rotate-0 transition-transform duration-500">
                <img
                    src={photo1}
                    alt="Us"
                    className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
                />
                <p className="font-cinzel text-[10px] text-gray-400 mt-2 text-center tracking-widest uppercase">The First Chapter</p>
            </div>

            {/* Action Area */}
            <div className="mt-8 flex justify-center w-full px-4">
                <div
                    className="border border-gold-500/50 bg-black/80 p-4 rounded-xl shadow-[0_0_30px_rgba(212,175,55,0.2)] w-full max-w-xs cursor-pointer hover:border-gold-400 transition-all active:scale-95"
                    onClick={onNext}
                >
                    <button
                        className="btn-neon px-8 py-4 rounded-full font-cinzel font-bold uppercase tracking-[0.2em] w-full text-sm"
                    >
                        Ask The Question
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SinglePhoto;
