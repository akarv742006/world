import React from 'react';
import { motion } from 'framer-motion';
import photo from '../assets/images/photo1.jpeg';
import herPhoto from '../assets/images/photo4.jpeg';

const DeepAppreciation = ({ onNext }) => {
    return (
        <div className="py-20 px-4 w-full flex flex-col items-center justify-center min-h-[80vh] text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="max-w-3xl bg-gradient-to-b from-black/80 to-transparent p-10 rounded-[3rem] border border-gold-600/10 shadow-3xl backdrop-blur-md"
            >
                <span className="text-gold-500 font-cinzel text-[10px] tracking-[0.5em] uppercase mb-10 block">Chapter of Devotion</span>

                {/* Heartfelt Moment Photo */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.8 }}
                    className="mb-10 w-full h-48 md:h-64 rounded-2xl overflow-hidden shadow-2xl border border-gold-600/20"
                >
                    <img
                        src={photo}
                        alt="Deep Memory"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2000ms]"
                    />
                </motion.div>

                <h2 className="text-3xl md:text-5xl font-cinzel text-gold-gradient mb-4">More Than Just Words</h2>
                <p className="text-cream/50 text-sm italic mb-8">"Praise panra vishayangal mudiyadhu, list perusu..."</p>

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

                <div className="space-y-6 text-cream/70 font-lato text-sm md:text-base leading-relaxed mb-10 italic">
                    <p>"Ungala pathi yosikkum bodhu, enakku career mathira illa... namma life mathirayae oru perumai irukku. Oru biomedical student-a neenga vera level things achieved pannitu irukeenga. Student stage-layae ivlo clarity and responsibility unga kitta irukkira vishayam romba perusu."</p>
                    <p>"Unga character, unga kindness, and unga maturity... idhu ellamae namma friendship-a eppovumae 'Success' ah vachirukkum nu naan namburaen."</p>
                </div>

                <div className="w-16 h-px bg-gold-600/30 mx-auto mb-10"></div>

                <button
                    onClick={onNext}
                    className="btn-neon px-12 py-4 rounded-full font-cinzel font-bold text-xs tracking-[0.3em] uppercase hover:scale-110 active:scale-95 transition-all bg-gold-600 !text-black border-none"
                >
                    The Reveal
                </button>
            </motion.div>
        </div>
    );
};

export default DeepAppreciation;
