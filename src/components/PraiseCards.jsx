import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Heart, Sparkle } from 'lucide-react';
import herPhoto from '../assets/images/photo4.jpeg';

const PraiseCards = ({ onNext }) => {
    const cards = [
        {
            icon: <Zap className="text-yellow-400" />,
            title: "The Genius",
            desc: "Biomedical field logic-a neenga handle panra vidham... it's just amazing. Unga intelligence and working style pathu naan neraya thadava perumai patturukaen."
        },
        {
            icon: <Shield className="text-blue-400" />,
            title: "My Safe Place",
            desc: "Endha kasta-maana situation-ah irundhalum, unkitta pesuna ellamae sariyaayidum. Neenga oru engineering student mattum illa, namma bond-ukku neenga thara andha mental support vera level."
        },
        {
            icon: <Heart className="text-red-400" />,
            title: "Pure Soul",
            desc: "Unga kitta irukkira andha honesty dhaan unga real royalty. Yarukkum fake-a irukka theriyadha unga character-a naan eppovumae admire panraen."
        },
        {
            icon: <Sparkle className="text-pink-400" />,
            title: "Inspiration",
            desc: "Career-layum life-layum neenga evlo clear-a irukeenga nu paakum bodhu, enakkum oru periya push kidaikkudhu. You are the engine of my growth."
        }
    ];

    return (
        <div className="py-20 px-4 w-full flex flex-col items-center bg-black/20 backdrop-blur-sm">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-5xl font-cinzel text-gold-gradient mb-6">More Than Just Words</h2>
                <p className="text-cream/50 text-sm italic mb-10">"Praise panra vishayangal mudiyadhu, list perusu..."</p>

                {/* Her Photo - Elegance */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="mb-12 flex justify-center"
                >
                    <div className="p-2 border border-gold-600/30 rounded-2xl bg-black/40">
                        <img
                            src={herPhoto}
                            alt="Elegance"
                            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl"
                        />
                    </div>
                </motion.div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-black/60 border border-gold-600/20 p-8 rounded-3xl hover:border-gold-500/50 transition-all shadow-2xl"
                    >
                        <div className="mb-4">{card.icon}</div>
                        <h3 className="text-xl font-cinzel text-gold-300 mb-2 uppercase">{card.title}</h3>
                        <p className="text-cream/70 text-sm leading-relaxed">{card.desc}</p>
                    </motion.div>
                ))}
            </div>

            <motion.button
                onClick={onNext}
                className="mt-16 btn-neon px-12 py-4 rounded-full font-cinzel font-bold text-xs tracking-widest uppercase hover:scale-105 transition-all"
            >
                Continue The Pride...
            </motion.button>
        </div>
    );
};

export default PraiseCards;
