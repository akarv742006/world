import React from 'react';

const Wishes = ({ onNext }) => {
    const handleNext = (e) => {
        e.preventDefault();
        console.log("Wishes: Proceed button clicked");
        onNext();
    };

    return (
        <div className="flex flex-col items-center justify-center px-4 text-center w-full max-w-3xl min-h-[80vh] fade-in">
            <div className="bg-black/60 p-8 md:p-16 border-double border-4 border-gold-600/40 relative shadow-2xl">
                {/* Decorative Flourishes */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 text-gold-500/30 text-2xl">⚜️</div>

                <div className="space-y-4 mb-10 mt-6">
                    <span className="text-[10px] font-cinzel uppercase text-gold-400 tracking-[0.4em]">A Royal Celebration</span>
                    <h2 className="text-4xl md:text-6xl font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-gold-100 via-gold-400 to-gold-100 pb-2">
                        Happy Birthday
                    </h2>
                </div>

                <p className="text-lg md:text-xl font-lato font-light leading-relaxed text-cream/90 mb-12 px-2 italic">
                    "To the queen of my heart. May your day be as magnificent as the love we share. Today, I celebrate you."
                </p>

                {/* Secure Action Area */}
                <div className="flex justify-center w-full">
                    <button
                        onClick={handleNext}
                        className="btn-neon px-10 py-4 rounded-full font-cinzel font-bold uppercase tracking-[0.2em] w-full max-w-xs hover:scale-105 transition-transform border-gold-500"
                    >
                        Proceed to The Gallery
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Wishes;
