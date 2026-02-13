import React from 'react';
import { Heart, Stars, ShieldCheck, Flame } from 'lucide-react';

const Promises = ({ onNext }) => {
    const pData = [
        { icon: <Heart className="text-pink-500" />, title: "Endless Love", text: "I promise to love you more with every passing heartbeat, through every peak and valley." },
        { icon: <ShieldCheck className="text-blue-500" />, title: "Unwavering Support", text: "As a developer and your partner, I promise to troubleshoot every life bug we face, together." },
        { icon: <Flame className="text-orange-500" />, title: "Everlasting Spark", text: "I promise to keep the fire of our romance alive, celebrating you not just today, but every day." },
        { icon: <Stars className="text-yellow-500" />, title: "Shared Dreams", text: "I promise to build our future with the same passion I have for my most ambitious projects." }
    ];

    return (
        <div className="py-20 px-4 w-full flex flex-col items-center fade-in">
            <h2 className="text-3xl md:text-5xl font-cinzel text-gold-gradient mb-12 text-center">My Vows to You</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
                {pData.map((p, index) => (
                    <div
                        key={index}
                        className="cute-card flex items-center gap-6 border-l-4 border-l-gold-500 bg-white/5"
                    >
                        <div className="p-3 bg-black/40 rounded-full">{p.icon}</div>
                        <div>
                            <h3 className="text-lg font-cinzel text-gold-300 mb-1">{p.title}</h3>
                            <p className="text-cream/70 text-sm font-light leading-relaxed">{p.text}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 w-full max-w-xs">
                <button
                    onClick={onNext}
                    className="btn-neon w-full py-4 rounded-full font-cinzel font-bold uppercase tracking-widest text-xs"
                >
                    Continue Journey
                </button>
            </div>
        </div>
    );
};

export default Promises;
