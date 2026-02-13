import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import herFinalPhoto from '../assets/images/photo5.jpeg';

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

    // Runaway "No" Button Logic
    const handleNoHover = () => {
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
        setNoBtnPosition({ x: 0, y: 0 });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 text-center relative overflow-hidden">

            {/* ECG Background */}
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

            {/* Cinematic Title */}
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

            {/* Velvet Box */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: isOpen ? 100 : 0 }}
                transition={{ duration: 1.5 }}
                className="cursor-pointer relative z-20 mt-16 md:mt-0"
                onClick={() => setIsOpen(true)}
            >
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                    <motion.div
                        animate={{ rotateX: isOpen ? 110 : 0 }}
                        transition={{ duration: 1.5, type: "spring", stiffness: 40 }}
                        style={{ transformStyle: 'preserve-3d', transformOrigin: 'bottom' }}
                        className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-red-900 to-red-950 rounded-t-[3rem] shadow-2xl z-30 flex items-center justify-center border-t border-l border-r border-red-800"
                    >
                        {!isOpen && <span className="text-gold-300 font-cinzel text-xs tracking-[0.3em] opacity-70 mt-12">Tap to Open</span>}
                    </motion.div>

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

            {/* Final Cinematic Dialogue with more Pride/Praise */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="mt-2 md:mt-16 z-30 relative w-full px-4 max-w-4xl mx-auto pb-10"
                    >
                        <div className="text-xs md:text-sm font-lato text-cream/90 italic mb-8 leading-relaxed space-y-4 bg-black/60 p-6 rounded-lg border border-gold-600/30 backdrop-blur-sm shadow-2xl text-left">
                            <p className="border-l-2 border-gold-500 pl-4 py-1 bg-gold-900/10">
                                <strong className="text-gold-400 font-cinzel text-[10px] tracking-widest">CHAPTER FINAL: THE REAL PRIDE</strong><br />
                                "Unna pathi perumaiya sollanum na... neenga oru mass-ana structure. Oru side-la Biomedical Engineering-la life-a care panreenga, innoru side-la namma friendship-ku neenga kudukura andha maturity and value... idhu dhaan unga real royalty."
                            </p>

                            <p><strong className="text-gold-400">The Tech & Life Connection:</strong><br />
                                "Naan oru CSE student-a binary and logic-a mattum dhaan nambitu irundhen. Aana oru Biomedical Engineer-a nee en life-kulla vandhappo dhaan, logic-a vida 'Emotions' and 'Heartbeat' evlo mukkiyam nu purinjithu."</p>

                            <p><strong className="text-gold-400">My Growth & You:</strong><br />
                                "Neenga paakira indha website-a naan dhaan create pannen. Naan 5 freelance orders mudichu, oru developer-a grow aagradhukku pinnaadi, unkitta pesuna andha small positive talks oru periya support-a irundhurukku. Nee illama indha effort ivlo azhaga vandhurukaadhu."</p>

                            <p><strong className="text-gold-400">The Proposal:</strong><br />
                                "Ippo pre-final year-la namma career shape aayitu irukku. Naan build panra ella software-laiyum nee oru 'Fixed Variable'-a eppovumae irukkanum nu aasa paduren. Birthday gift-a unakku ippo indha website-a kudukuraen. Ennoda life-a unakku gift-a thara aasa paduraen."</p>

                            {/* The Final Visual Touch */}
                            <div className="mt-6 flex justify-center">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.5 }}
                                    className="p-1 border border-pink-500/30 rounded-xl"
                                >
                                    <img
                                        src={herFinalPhoto}
                                        alt="My Everything"
                                        className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-lg shadow-2xl"
                                    />
                                </motion.div>
                            </div>
                        </div>

                        <h2 className="text-2xl md:text-4xl font-cinzel text-gold-gradient mb-8 drop-shadow-lg leading-tight">
                            Will you be my Valentine<br />and Life Partner forever?
                        </h2>

                        <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full relative min-h-[100px]">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => sendWhatsapp("I Love You Too, Akash! ❤️💍")}
                                className="w-full md:w-auto bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-3 rounded-full text-lg font-cinzel tracking-widest shadow-[0_0_20px_#FF1493] uppercase font-bold border border-pink-400 z-50 transition-all"
                            >
                                YES! ❤️
                            </motion.button>

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

            {/* Smart Rethink Modal */}
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
                            className="bg-gradient-to-b from-[#1a0505] to-black border-2 border-gold-600/50 p-8 md:p-12 max-w-xl w-full text-left shadow-2xl rounded-3xl relative overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h3 className="text-2xl md:text-3xl font-cinzel text-gold-400 mb-6 font-bold leading-tight uppercase tracking-widest">
                                Wait! Rethink for a Moment
                            </h3>
                            <p className="text-cream/80 font-lato italic mb-8 leading-relaxed">
                                "Neenga 'No' sonnalum, namma friendship epovumae constant dhaan. Aana, unga potential partner-a ivlo sincere effort eduka koodiya oru aala neenga miss panna koodadhu nu thonudhu. Take your time!"
                            </p>
                            <button onClick={() => setShowRethinkModal(false)} className="w-full bg-gold-600 text-black py-4 rounded-xl font-cinzel font-bold uppercase tracking-widest hover:bg-gold-500 transition-colors">
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
