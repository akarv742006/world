import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = ({ children }) => {
    const [showDedication, setShowDedication] = useState(false);

    return (
        <div className="flex flex-col min-h-screen text-cream overflow-hidden">
            {/* Minimal Luxury Navbar */}
            <nav className="w-full py-6 px-8 flex justify-between items-center fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
                <div className="text-xl font-cinzel font-bold tracking-[0.2em] text-gold-400">
                    Akash & Asvitha
                </div>
                <div className="hidden md:block w-32 h-px bg-gold-600/30"></div>
            </nav>

            {/* Main Content Area */}
            <main className="flex-grow flex items-center justify-center p-4 md:p-8 w-full relative z-10 mt-16 md:mt-20 min-h-[80vh]">
                <div className="w-full max-w-5xl flex flex-col items-center justify-center">
                    <AnimatePresence mode="wait">
                        {children}
                    </AnimatePresence>
                </div>
            </main>

            {/* Footer with Easter Egg */}
            <footer className="w-full py-6 relative z-50 flex justify-center opacity-70 hover:opacity-100 transition-opacity">
                <button
                    onClick={() => setShowDedication(true)}
                    className="text-gold-600 text-xl font-cinzel tracking-widest hover:text-gold-400 animate-pulse p-2"
                    title="Developer Dedication"
                >
                    ∞
                </button>
            </footer>

            {/* Dedication Modal */}
            <AnimatePresence>
                {showDedication && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
                        onClick={() => setShowDedication(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-[#1a0000] border border-gold-500/30 p-8 max-w-md text-center shadow-[0_0_50px_rgba(212,175,55,0.2)]"
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

                            <button
                                onClick={() => setShowDedication(false)}
                                className="mt-8 text-xs text-gray-500 uppercase tracking-widest hover:text-white"
                            >
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Cinematic Noise Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        </div>
    );
};

export default Layout;
