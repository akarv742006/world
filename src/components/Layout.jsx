import React, { useState } from 'react';

const Layout = ({ children }) => {
    const [showDedication, setShowDedication] = useState(false);

    return (
        <div className="flex flex-col min-h-screen text-cream overflow-hidden relative bg-[#1a0000]">
            {/* Minimal Luxury Navbar */}
            <nav className="w-full py-6 px-8 flex justify-between items-center fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm shadow-xl">
                <div className="text-xl font-cinzel font-bold tracking-[0.2em] text-gold-400">
                    Akash & Asvitha
                </div>
                <div className="hidden md:block w-32 h-px bg-gold-600/30"></div>
            </nav>

            {/* Main Content Area */}
            <main className="flex-grow flex items-center justify-center p-4 md:p-8 w-full relative z-10 mt-16 md:mt-20 min-h-[80vh]">
                <div className="w-full max-w-5xl flex flex-col items-center justify-center">
                    {children}
                </div>
            </main>

            {/* Footer with Easter Egg */}
            <footer className="w-full py-6 relative z-50 flex justify-center opacity-70 hover:opacity-100 transition-opacity">
                <button
                    onClick={() => setShowDedication(true)}
                    className="text-gold-600 text-xl font-cinzel tracking-widest hover:text-gold-400 p-2"
                >
                    ∞
                </button>
            </footer>

            {/* Dedication Modal */}
            {showDedication && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 transition-all duration-300"
                    onClick={() => setShowDedication(false)}
                >
                    <div
                        className="bg-[#2D0202] border border-gold-500/30 p-8 max-w-md text-center shadow-[0_0_80px_rgba(0,0,0,1)] rounded-xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3 className="text-gold-400 font-cinzel text-xl mb-4">Developer's Note</h3>
                        <p className="text-cream font-lato italic mb-6 leading-relaxed">
                            "I build websites for many clients, but for the most important project of my life—my future—I dedicated this page entirely to you.<br /><br />
                            <strong>Asvitha</strong>, you are my eternal Home Page."
                        </p>
                        <p className="text-gold-600 font-cinzel text-sm tracking-widest mt-8">
                            - Love, Akash
                        </p>
                    </div>
                </div>
            )}

            {/* Removed external noise overlay to rule out loading issues */}
            <div className="fixed inset-0 pointer-events-none opacity-5 z-0 bg-black/20"></div>
        </div>
    );
};

export default Layout;
