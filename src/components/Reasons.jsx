import React from 'react';
import { motion } from 'framer-motion';

const Reasons = ({ onNext }) => {
    const reasons = [
        { id: '01', title: "Incomparable Strength", text: "Life-la chinna chinna signals-a kooda romba azhaga handle panna ungala paathu naan eppovumae viyandhrukaen." },
        { id: '02', title: "Heart of Gold", text: "Yarukkum theriyaama neenga panra andha chinna chinna help-um, care-um... idhu dhaan ungala oru Biomedical Engineer-a vida periya 'Life-Healer'-a aakudhu." },
        { id: '03', title: "The Intelligence", text: "Logic and math-a thandi, manasaiyum life-aiyum purinjikira unga intelligence dhaan namma friendship-a ivlo constant-a vachirukku." },
        { id: '04', title: "Your Smile", text: "Coding-la varra errors-a kooda marakka vaikura oru magic unga sirippula irukku. Adhu eppovumae irukanum." }
    ];

    return (
        <div className="py-20 px-4 w-full flex flex-col items-center">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-cinzel text-gold-400 mb-16 tracking-widest text-center"
            >
                What Makes You Special
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
                {reasons.map((reason, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="velvet-box p-8 border border-gold-700/30 hover:border-gold-500/60 transition-all duration-500 bg-white/5 backdrop-blur-sm shadow-xl"
                    >
                        <span className="text-gold-600 font-cinzel text-lg mb-4 block tracking-tighter">{reason.id}</span>
                        <h3 className="text-xl font-cinzel text-gold-200 mb-4">{reason.title}</h3>
                        <p className="text-cream/60 font-lato font-light leading-relaxed">
                            {reason.text}
                        </p>
                    </motion.div>
                ))}
            </div>

            <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                onClick={onNext}
                className="mt-16 btn-neon px-12 py-4 rounded-full font-cinzel font-bold uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all"
            >
                Wait, There's More
            </motion.button>
        </div>
    );
};

export default Reasons;
