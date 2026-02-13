import React, { useState, useEffect } from 'react';

const Proposal = ({ onYes }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showRetryModal, setShowRetryModal] = useState(false);
    const [noBtnPosition, setNoBtnPosition] = useState({ x: 0, y: 0 });
    const [jumpCount, setJumpCount] = useState(0);

    // WhatsApp Message Logic
    const sendWhatsapp = (msg) => {
        const encodedMsg = encodeURIComponent(msg);
        window.location.href = `https://wa.me/916379762186?text=${encodedMsg}`;
        onYes(); // Trigger celebration
    };

    // Runaway "No" Button Logic
    const handleNoClick = (e) => {
        e.preventDefault();
        if (jumpCount < 3) {
            const randomX = Math.floor(Math.random() * 200) - 100;
            const randomY = Math.floor(Math.random() * 200) - 100;
            setNoBtnPosition({ x: randomX, y: randomY });
            setJumpCount(prev => prev + 1);
        } else {
            setShowRetryModal(true);
            setNoBtnPosition({ x: 0, y: 0 });
            setJumpCount(0);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 text-center relative overflow-hidden fade-in">

            {/* ECG Background */}
            {isOpen && (
                <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none fade-in">
                    <div className="ecg-bg w-full h-32 ecg-active"></div>
                </div>
            )}

            {/* The Cinematic Title */}
            <div className={`absolute top-10 md:top-20 z-10 w-full transition-opacity duration-1000 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                <h1 className="text-xl md:text-3xl font-cinzel text-gold-gradient tracking-widest uppercase mb-2">
                    Happy Birthday &<br />Happy Valentine’s Day!
                </h1>
                <p className="text-xs md:text-sm text-pink-400 font-cinzel tracking-[0.2em] animate-pulse">
                    (To my Favorite Person 🎂❤️)
                </p>
            </div>

            {/* The Realistic Velvet Box */}
            <div
                className={`cursor-pointer relative z-20 mt-16 md:mt-0 transition-all duration-1000 ${isOpen ? 'translate-y-24' : ''}`}
                onClick={() => setIsOpen(true)}
            >
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                    {/* Lid */}
                    <div
                        className={`absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-red-900 to-red-950 rounded-t-[3rem] shadow-2xl origin-bottom z-30 flex items-center justify-center border-t border-l border-r border-red-800 transition-transform duration-1000 ${isOpen ? 'rotate-x-lid' : ''}`}
                    >
                        {!isOpen && <span className="text-gold-300 font-cinzel text-xs tracking-[0.3em] opacity-70 mt-12">Tap to Open</span>}
                    </div>

                    {/* Base */}
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-b from-red-950 to-black rounded-b-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-20 border-b border-l border-r border-red-900 flex items-center justify-center">
                        <div className="w-3/4 h-2/3 bg-black/40 rounded-full blur-md absolute top-2"></div>
                        {/* Ring */}
                        <div className={`transition-all duration-700 ${isOpen ? 'scale-100 opacity-100 -translate-y-[30px]' : 'scale-0 opacity-0'}`}>
                            <div className="w-16 h-16 border-4 border-yellow-300 rounded-full shadow-[0_0_25px_#FFD700] relative bg-transparent">
                                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rotate-45 shadow-[0_0_30px_white] animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* The Content & Question */}
            {isOpen && (
                <div className="mt-2 md:mt-16 z-30 relative w-full px-4 max-w-4xl mx-auto pb-10 fade-in">
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
                        <button
                            onClick={() => sendWhatsapp("I Love You Too, Akash! ❤️💍")}
                            className="w-full md:w-auto bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-3 rounded-full text-lg font-cinzel tracking-widest shadow-[0_0_20px_#FF1493] uppercase font-bold border border-pink-400 z-50 hover:scale-105 transition-transform"
                        >
                            YES! ❤️
                        </button>

                        <button
                            style={{ transform: `translate(${noBtnPosition.x}px, ${noBtnPosition.y}px)` }}
                            className="w-full md:w-auto bg-transparent text-gold-400 px-6 py-3 rounded-full text-sm md:text-base font-cinzel tracking-widest uppercase border border-gold-600/50 hover:bg-gold-600/20 text-center transition-all z-40"
                            onClick={handleNoClick}
                            onMouseEnter={handleNoClick}
                        >
                            No
                        </button>

                        <button
                            className="w-full md:w-auto bg-transparent text-gray-500/80 px-4 py-2 rounded-full text-xs font-lato uppercase hover:text-white transition-all underline z-30"
                            onClick={() => sendWhatsapp("Yes, but treat venum! 🍫😉")}
                        >
                            (Treat Only? 🍫)
                        </button>
                    </div>
                </div>
            )}

            {/* Smart No Modal */}
            {showRetryModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 fade-in" onClick={() => setShowRetryModal(false)}>
                    <div className="bg-gradient-to-b from-[#1a0505] to-black border border-red-900/50 p-6 md:p-10 max-w-lg w-full text-left shadow-[0_0_50px_rgba(255,0,0,0.1)] rounded-2xl relative" onClick={(e) => e.stopPropagation()}>
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
                            {/* ... Rest of the reasons (Simplified) ... */}
                        </div>
                        <button onClick={() => setShowRetryModal(false)} className="w-full bg-gold-600 text-black py-3 rounded-lg font-cinzel font-bold uppercase tracking-widest hover:bg-gold-500 transition-colors mt-8">
                            Okay, Let me rethink 💭
                        </button>
                    </div>
                </div>
            )}

            <style dangerouslySetInnerHTML={{
                __html: `
                .rotate-x-lid { transform: rotateX(110deg); }
            ` }} />
        </div>
    );
};

export default Proposal;
