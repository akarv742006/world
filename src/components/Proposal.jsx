import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Proposal = ({ onYes }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showRetryModal, setShowRetryModal] = useState(false);
    const [noBtnPosition, setNoBtnPosition] = useState({ x: 0, y: 0 });
    const [jumpCount, setJumpCount] = useState(0);

    // WhatsApp Message Logic
    const sendWhatsapp = (msg) => {
        const encodedMsg = encodeURIComponent(msg);
        window.location.href = `https://wa.me/?text=${encodedMsg}`;
        onYes(); // Trigger celebration
    };

    // Runaway "No" Button Logic
    const handleNoClick = (e) => {
        // Prevent default action
        e.preventDefault();

        if (jumpCount < 3) {
            // Jump logic: Move to a random position within a reasonable range
            // We use fixed larger formatting to ensure it jumps enough to be annoying/fun
            const randomX = Math.floor(Math.random() * 200) - 100; // -100 to 100
            const randomY = Math.floor(Math.random() * 200) - 100; // -100 to 100

            setNoBtnPosition({ x: randomX, y: randomY });
            setJumpCount(prev => prev + 1);
        } else {
            // After 3 jumps, surrender and show the "Why Me?" modal
            setShowRetryModal(true);
            setNoBtnPosition({ x: 0, y: 0 }); // Reset position
            setJumpCount(0); // Reset count logic if needed for later
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 text-center relative overflow-hidden">

            {/* ECG Background (Visible when open) */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
                >
                    <div className="ecg-bg w-full h-32 ecg-active"></div>
                </motion.div>
            )}

            {/* The Cinematic Title */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 2 }}
                className="absolute top-10 md:top-20 z-10 w-full"
            >
                <h1 className="text-xl md:text-3xl font-cinzel text-gold-gradient tracking-widest uppercase mb-2">
                    Happy Birthday &<br />Happy Valentine’s Day!
                </h1>
                <p className="text-xs md:text-sm text-hotpink/80 font-cinzel tracking-[0.2em] animate-pulse">
                    (To my Favorite Person 🎂❤️)
                </p>
            </motion.div>

            {/* The Realistic Velvet Box */}
            <motion.div
                className="cursor-pointer relative z-20 mt-16 md:mt-0"
                onClick={() => setIsOpen(true)}
                whileHover={{ scale: 1.02 }}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                {/* Box Container */}
                <div className={`relative w-64 h-64 md:w-80 md:h-80 transition-all duration-1000 ${isOpen ? 'translate-y-24' : ''}`}>

                    {/* Lid (Top Half) */}
                    <motion.div
                        className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-red-900 to-red-950 rounded-t-[3rem] shadow-2xl origin-bottom z-30 flex items-center justify-center border-t border-l border-r border-red-800"
                        animate={{ rotateX: isOpen ? 110 : 0 }}
                        transition={{ duration: 1.5, type: "spring", stiffness: 40 }}
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        <div className="w-full h-2 bg-gold-400 opacity-20 absolute bottom-4"></div>
                        {!isOpen && <span className="text-gold-300 font-cinzel text-xs tracking-[0.3em] opacity-70 mt-12">Tap to Open</span>}
                    </motion.div>

                    {/* Base (Bottom Half) */}
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-red-950 to-black rounded-b-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-20 border-b border-l border-r border-red-900 flex items-center justify-center">

                        {/* Ring Cushion */}
                        <div className="w-3/4 h-2/3 bg-black/40 rounded-full blur-md absolute top-2"></div>

                        {/* The Ring */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0, y: 20 }}
                            animate={{ scale: isOpen ? 1 : 0, opacity: isOpen ? 1 : 0, y: isOpen ? -30 : 20 }}
                            transition={{ delay: 0.5, duration: 1, type: "spring" }}
                            className="relative z-40"
                        >
                            {/* Simple CSS Ring Representation */}
                            <div className="w-16 h-16 border-4 border-gold-300 rounded-full shadow-[0_0_25px_#FFD700] relative bg-transparent">
                                {/* Diamond */}
                                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rotate-45 shadow-[0_0_30px_white] animate-pulse"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* The Content & Question */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-2 md:mt-16 z-30 relative w-full px-4 max-w-4xl mx-auto pb-10"
                >
                    <div className="text-sm md:text-base font-lato text-cream/90 italic mb-8 leading-relaxed drop-shadow-md space-y-4 text-left md:text-center bg-black/60 p-6 rounded-lg border border-gold-600/30 backdrop-blur-sm shadow-[0_0_30px_rgba(0,0,0,0.8)]">
                        <p><strong className="text-gold-400">The Tech & Life Connection:</strong><br />
                            "Naan oru CSE student-a binary and logic-a mattum dhaan nambitu irundhen. Aana oru Biomedical Engineer-a nee en life-kulla vandhappo dhaan, logic-a vida 'Emotions' and 'Heartbeat' evlo mukkiyam nu purinjithu."</p>

                        <p><strong className="text-gold-400">My Growth & You:</strong><br />
                            "Neenga paakira indha website-a naan dhaan create pannen. Naan 5 freelance orders mudichu, oru developer-a grow aagradhukku pinnaadi, unkitta pesuna andha positive talks oru periya support-a irundhurukku."</p>

                        <p><strong className="text-gold-400">The Proposal:</strong><br />
                            "Ippo pre-final year-la namma career shape aayitu irukku. Naan build panra ella software-laiyum nee oru 'Fixed Variable'-a eppovumae irukkanum nu aasa paduren."</p>

                        <p className="font-bold text-center mt-4">
                            "Birthday gift-a unakku indha website-a kudukuraen. Ennoda life-a unakku gift-a thara aasa paduraen."
                        </p>
                    </div>

                    <h2 className="text-2xl md:text-4xl font-cinzel text-gold-gradient mb-8 drop-shadow-lg leading-tight">
                        Will you be my Valentine<br />and Life Partner forever?
                    </h2>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full relative min-h-[100px]">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px #FF1493" }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => sendWhatsapp("I Love You Too, Akash! ❤️💍")}
                            className="w-full md:w-auto bg-gradient-to-r from-hotpink to-pink-600 text-white px-8 py-3 rounded-full text-lg font-cinzel tracking-widest shadow-[0_0_20px_#FF1493] uppercase font-bold border border-pink-400 z-50"
                        >
                            YES! ❤️
                        </motion.button>

                        <motion.button
                            animate={{ x: noBtnPosition.x, y: noBtnPosition.y }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full md:w-auto bg-transparent text-gold-400 px-6 py-3 rounded-full text-sm md:text-base font-cinzel tracking-widest uppercase border border-gold-600/50 hover:bg-gold-600/20 text-center transition-all z-40"
                            onClick={handleNoClick}
                            onMouseEnter={handleNoClick}
                        // On mobile, onClick handles it. On desktop, hover handles it.
                        >
                            {jumpCount > 0 ? "No" : "No"} {/* Can change text if needed */}
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full md:w-auto bg-transparent text-gray-500/80 px-4 py-2 rounded-full text-xs font-lato uppercase hover:text-white transition-all underline z-30"
                            onClick={() => sendWhatsapp("Yes, but treat venum! 🍫😉")}
                        >
                            (Treat Only? 🍫)
                        </motion.button>
                    </div>
                </motion.div>
            )}

            {/* Smart No Modal */}
            <AnimatePresence>
                {showRetryModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4"
                        onClick={() => setShowRetryModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 50 }}
                            className="bg-gradient-to-b from-[#1a0505] to-black border border-red-900/50 p-6 md:p-10 max-w-lg w-full text-left shadow-[0_0_50px_rgba(255,0,0,0.1)] rounded-2xl relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setShowRetryModal(false)}
                                className="absolute top-4 right-4 text-gray-500 hover:text-white"
                            >
                                ✕
                            </button>

                            <h3 className="text-2xl md:text-3xl font-cinzel text-red-500 mb-2">Wait! 🛑</h3>
                            <p className="text-cream/60 font-lato italic mb-6">Decision edukkura munnadi, idhaiyum konjam yosi...</p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="text-2xl">🚀</div>
                                    <div>
                                        <h4 className="text-gold-400 font-cinzel text-sm tracking-widest mb-1">Growth Mindset</h4>
                                        <p className="text-cream/80 text-sm font-light">Pre-final year-layae 5 professional projects mudicha oru hardworking developer naan.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="text-2xl">🤝</div>
                                    <div>
                                        <h4 className="text-gold-400 font-cinzel text-sm tracking-widest mb-1">Support System</h4>
                                        <p className="text-cream/80 text-sm font-light">CSE and Biomedical logic-a connect panra maari, unga career-ku eppovumae oru support-a iruppen.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="text-2xl">♾️</div>
                                    <div>
                                        <h4 className="text-gold-400 font-cinzel text-sm tracking-widest mb-1">Consistency</h4>
                                        <p className="text-cream/80 text-sm font-light">Coding-la logic maaralaam, aana un mela vachirukkira anbu eppovumae 'Constant' dhaan.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="text-2xl">🦁</div>
                                    <div>
                                        <h4 className="text-gold-400 font-cinzel text-sm tracking-widest mb-1">Responsible</h4>
                                        <p className="text-cream/80 text-sm font-light">Student-a irukkum bodhae earn panna arambichu, career-la clear-aana vision vachirukura aalu.</p>
                                    </div>
                                </div>
                            </div>

                            <p className="text-center text-cream/90 font-cinzel mt-8 mb-6 text-sm">
                                "Innum oru vaati yosichu paaru... Unakku 'No' solla manasu varudha?"
                            </p>

                            <button
                                onClick={() => setShowRetryModal(false)}
                                className="w-full bg-gold-600 text-black py-3 rounded-lg font-cinzel font-bold uppercase tracking-widest hover:bg-gold-500 transition-colors"
                            >
                                Okay, Let me rethink 💭
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Proposal;
