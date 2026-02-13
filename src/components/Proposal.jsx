import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Proposal = ({ onYes }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showRethinkModal, setShowRethinkModal] = useState(false);
    const [noBtnPosition, setNoBtnPosition] = useState({ x: 0, y: 0 });
    const [jumpCount, setJumpCount] = useState(0);

    // WhatsApp Message Logic
    const sendWhatsapp = (msg) => {
        const encodedMsg = encodeURIComponent(msg);
        window.location.href = `https://wa.me/916379762186?text=${encodedMsg}`;
        onYes(); // Trigger celebration
    };

    // Aggressive Runaway "No" Button Logic
    const handleNoHover = () => {
        // Increase range for a more "impossible to catch" feel
        // We use a combination of viewport-relative and pixel offsets
        const rangeX = window.innerWidth > 768 ? 400 : 200;
        const rangeY = window.innerHeight > 768 ? 300 : 150;

        const randomX = Math.floor(Math.random() * rangeX) - (rangeX / 2);
        const randomY = Math.floor(Math.random() * rangeY) - (rangeY / 2);

        setNoBtnPosition({ x: randomX, y: randomY });
        setJumpCount(prev => prev + 1);
    };

    const handleNoClick = (e) => {
        e.preventDefault();
        setShowRethinkModal(true);
        // Reset position when modal shows so it's not stuck in a weird spot
        setNoBtnPosition({ x: 0, y: 0 });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 text-center relative overflow-hidden">

            {/* ECG Background (Biomedical Touch) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.3 }}
                        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
                    >
                        <div className="ecg-bg w-full h-32 ecg-active"></div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* The Cinematic Title */}
            <motion.div
                animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
                transition={{ duration: 1 }}
                className="absolute top-10 md:top-20 z-10 w-full"
            >
                <h1 className="text-xl md:text-3xl font-cinzel text-gold-gradient tracking-widest uppercase mb-2">
                    Happy Birthday &<br />Happy Valentine’s Day!
                </h1>
                <p className="text-xs md:text-sm text-pink-500/80 font-cinzel tracking-[0.2em] animate-pulse">
                    (To my Favorite Person 🎂❤️)
                </p>
            </motion.div>

            {/* The Realistic Velvet Box */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: isOpen ? 100 : 0 }}
                transition={{ duration: 1.5 }}
                className="cursor-pointer relative z-20 mt-16 md:mt-0"
                onClick={() => setIsOpen(true)}
            >
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                    {/* Lid */}
                    <motion.div
                        animate={{ rotateX: isOpen ? 110 : 0 }}
                        transition={{ duration: 1.5, type: "spring", stiffness: 40 }}
                        style={{ transformStyle: 'preserve-3d', transformOrigin: 'bottom' }}
                        className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-red-900 to-red-950 rounded-t-[3rem] shadow-2xl z-30 flex items-center justify-center border-t border-l border-r border-red-800"
                    >
                        {!isOpen && <span className="text-gold-300 font-cinzel text-xs tracking-[0.3em] opacity-70 mt-12">Tap to Open</span>}
                    </motion.div>

                    {/* Base with Ring */}
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-red-950 to-black rounded-b-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-20 border-b border-l border-r border-red-900 flex items-center justify-center">
                        <div className="w-3/4 h-2/3 bg-black/40 rounded-full blur-md absolute top-2"></div>
                        <motion.div
                            initial={{ scale: 0, y: 20 }}
                            animate={{ scale: isOpen ? 1 : 0, y: isOpen ? -40 : 20 }}
                            transition={{ delay: 0.5, type: "spring" }}
                            className="relative z-40"
                        >
                            <div className="w-16 h-16 border-4 border-yellow-300 rounded-full shadow-[0_0_25px_#FFD700] relative bg-transparent">
                                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rotate-45 shadow-[0_0_30px_white] animate-pulse"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* The Main Dialogue */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="mt-2 md:mt-16 z-30 relative w-full px-4 max-w-4xl mx-auto pb-10"
                    >
                        <div className="text-sm md:text-base font-lato text-cream/90 italic mb-8 leading-relaxed space-y-4 bg-black/60 p-6 rounded-lg border border-gold-600/30 backdrop-blur-sm shadow-2xl">
                            <p className="font-lato">"Innikki unakku birthday, ulagathukku Valentines Day. Aana enakku, namma friendship 'Next Level' (Version 2.0)-ku pora oru special day."</p>

                            <p><strong className="text-gold-400">The Tech & Life Connection:</strong><br />
                                "Naan oru CSE student-a binary and logic-a mattum dhaan nambitu irundhen. Aana oru Biomedical Engineer-a nee en life-kulla vandhappo dhaan, logic-a vida 'Emotions' and 'Heartbeat' evlo mukkiyam nu purinjithu."</p>

                            <p><strong className="text-gold-400">My Growth & You:</strong><br />
                                "Neenga paakira indha website-a naan dhaan create pannen. Naan 5 freelance orders mudichu, oru developer-a grow aagradhukku pinnaadi, unkitta pesuna andha small positive talks oru periya support-a irundhurukku."</p>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-cinzel text-gold-gradient mb-8 drop-shadow-lg leading-tight">
                            Will you be my Valentine<br />and Life Partner forever?
                        </h2>

                        <div className="flex flex-col md:flex-row gap-6 justify-center items-center w-full relative min-h-[120px]">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => sendWhatsapp("I Love You Too, Akash! ❤️💍")}
                                className="w-full md:w-auto bg-gradient-to-r from-pink-500 to-pink-600 text-white px-10 py-4 rounded-full text-lg font-cinzel tracking-widest shadow-[0_0_20px_#FF1493] uppercase font-bold border border-pink-400 z-50"
                            >
                                YES! ❤️
                            </motion.button>

                            {/* Runaway "No" Button */}
                            <motion.button
                                animate={{ x: noBtnPosition.x, y: noBtnPosition.y }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                onMouseEnter={handleNoHover}
                                onClick={handleNoClick}
                                className="w-full md:w-auto bg-black/40 text-gold-500/60 px-8 py-3 rounded-full text-sm font-cinzel tracking-widest uppercase border border-gold-600/30 hover:bg-gold-600/10 transition-colors z-40"
                            >
                                No
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Smart Rethink Modal (The High-Value Card) */}
            <AnimatePresence>
                {showRethinkModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4"
                        onClick={() => setShowRethinkModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="bg-gradient-to-b from-[#1a0505] to-black border-2 border-gold-600/50 p-8 md:p-12 max-w-xl w-full text-left shadow-[0_0_100px_rgba(212,175,55,0.2)] rounded-3xl relative overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Decorative Background Icon */}
                            <div className="absolute -top-10 -right-10 text-gold-600/5 text-[150px] font-cinzel pointer-events-none">V</div>

                            <h3 className="text-2xl md:text-3xl font-cinzel text-gold-400 mb-6 font-bold leading-tight">
                                Wait! Decision edukkura munnadi,<br />idhaiyum konjam yosi...
                            </h3>

                            <p className="text-cream/70 font-lato italic mb-8 text-sm md:text-base leading-relaxed">
                                "Neenga 'No' sonnalum, namma friendship eppovumae dhaan. Aana, unga partner-a vara pora indha <strong className="text-gold-400">Akash</strong> pathi kila irukira vishayangala neenga therinjukanum:"
                            </p>

                            <div className="space-y-6 mb-10">
                                <div className="flex gap-4 items-start">
                                    <div className="w-10 h-10 rounded-lg bg-gold-600/20 flex items-center justify-center text-gold-400 flex-shrink-0">🚀</div>
                                    <div>
                                        <h4 className="text-gold-200 font-cinzel text-sm tracking-widest mb-1">Growth Mindset</h4>
                                        <p className="text-cream/50 text-xs leading-relaxed">Pre-final year-layae 5 professional projects-a (including medical systems) mudicha oru hardworking developer naan.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start">
                                    <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 flex-shrink-0">🧬</div>
                                    <div>
                                        <h4 className="text-blue-200 font-cinzel text-sm tracking-widest mb-1">Support System</h4>
                                        <p className="text-cream/50 text-xs leading-relaxed">CSE and Biomedical logic-a connect panra maari, unga career and life-ku eppovumae oru support-a naan iruppen.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start">
                                    <div className="w-10 h-10 rounded-lg bg-pink-600/20 flex items-center justify-center text-pink-400 flex-shrink-0">⚓</div>
                                    <div>
                                        <h4 className="text-pink-200 font-cinzel text-sm tracking-widest mb-1">Consistency</h4>
                                        <p className="text-cream/50 text-xs leading-relaxed">Coding-la logic maaralaam, aana un mela vachirukkira anbu eppovumae 'Constant' dhaan.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start">
                                    <div className="w-10 h-10 rounded-lg bg-green-600/20 flex items-center justify-center text-green-400 flex-shrink-0">💼</div>
                                    <div>
                                        <h4 className="text-green-200 font-cinzel text-sm tracking-widest mb-1">Responsible</h4>
                                        <p className="text-cream/50 text-xs leading-relaxed">Student-a irukkum bodhae earn panna arambichu, career-la clear-aana vision vachirukura aalu naan.</p>
                                    </div>
                                </div>
                            </div>

                            <p className="text-gold-200 font-cinzel text-center text-lg mb-8 italic">
                                Innum oru vaati yosichu paaru...<br />Unakku 'No' solla manasu varudha?
                            </p>

                            <button
                                onClick={() => setShowRethinkModal(false)}
                                className="w-full bg-gold-600 text-black py-4 rounded-xl font-cinzel font-bold uppercase tracking-[0.2em] hover:bg-gold-500 transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)] active:scale-95"
                            >
                                Okay, let me rethink 💭
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Proposal;
