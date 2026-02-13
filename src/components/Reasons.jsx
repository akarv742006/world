import React from 'react';

const Reasons = ({ onNext }) => {
    const reasons = [
        { id: '01', title: "The Way You Smile", text: "It's the only thing that can instantly turn my worst day into my best one." },
        { id: '02', title: "Your Kind Heart", text: "The way you care for everyone around you inspires me to be a better man." },
        { id: '03', title: "Our Connection", text: "How we can talk for hours or sit in silence, and it's always perfect." },
        { id: '04', title: "Your Strength", text: "Watching you handle life's challenges with such grace makes me so proud." }
    ];

    return (
        <div className="py-20 px-4 w-full flex flex-col items-center fade-in">
            <h2 className="text-3xl md:text-5xl font-cinzel text-gold-400 mb-16 tracking-widest text-center">
                Why It's Always You
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
                {reasons.map((reason, index) => (
                    <div
                        key={index}
                        className="velvet-box p-8 border border-gold-700/30 hover:border-gold-500/60 transition-colors"
                    >
                        <span className="text-gold-600 font-cinzel text-lg mb-4 block tracking-tighter">{reason.id}</span>
                        <h3 className="text-xl font-cinzel text-gold-200 mb-4">{reason.title}</h3>
                        <p className="text-cream/60 font-lato font-light leading-relaxed">
                            {reason.text}
                        </p>
                    </div>
                ))}
            </div>

            <button
                onClick={onNext}
                className="mt-16 btn-neon px-12 py-4 rounded-full font-cinzel font-bold uppercase tracking-widest text-sm"
            >
                There's More
            </button>
        </div>
    );
};

export default Reasons;
