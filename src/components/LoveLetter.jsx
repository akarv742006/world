import React from 'react';

const LoveLetter = ({ onNext }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-20 px-4 w-full fade-in">
            <div className="bg-[#fdfbf7] p-8 md:p-16 max-w-2xl w-full shadow-[20px_20px_60px_rgba(0,0,0,0.5)] border-l-8 border-gold-600 relative overflow-hidden">
                {/* Vintage Paper Texture Overlay */}
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/parchment.png')]"></div>

                <div className="relative z-10">
                    <div className="flex justify-between items-center mb-12">
                        <span className="font-cinzel text-burgundy-900 font-bold border-b-2 border-gold-500 pb-1">To: Asvitha</span>
                        <span className="text-gray-400 font-lato text-sm">Feb 14, 2026</span>
                    </div>

                    <div className="space-y-6 font-lato text-burgundy-900 leading-relaxed text-lg italic md:text-xl">
                        <p>Dearest,</p>
                        <p>
                            They say engineering is all about systems and logic. But when I met you,
                            I realized that the most powerful system in the world is the one
                            that connects two souls.
                        </p>
                        <p>
                            You aren't just a part of my life; you are the core operating system
                            that makes everything else run perfectly. Your smile is my favorite
                            UI, and your presence is the only variable that truly matters.
                        </p>
                        <p>
                            Happy Birthday to the most amazing person I know.
                            Today, I want to show you exactly why you mean
                            the world to me.
                        </p>
                    </div>

                    <div className="mt-16 flex flex-col items-end">
                        <div className="w-32 h-px bg-burgundy-900/20 mb-4"></div>
                        <p className="font-cinzel text-burgundy-900 font-bold">Forever Yours,</p>
                        <p className="font-cinzel text-gold-600 text-2xl mt-2">Akash</p>
                    </div>
                </div>
            </div>

            <div className="mt-12 w-full max-w-xs">
                <button
                    onClick={onNext}
                    className="btn-neon w-full py-4 rounded-full font-cinzel font-bold uppercase tracking-widest text-xs"
                >
                    Turn The Page
                </button>
            </div>
        </div>
    );
};

export default LoveLetter;
