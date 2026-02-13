import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Stars, ShieldCheck, Flame } from 'lucide-react';

const Promises = ({ onNext }) => {
    const pData = [
        { icon: <Heart className="text-pink-500" />, title: "Endless Respect", text: "Neenga unga field-la (Biomedical) evlo dedication-a irukkureengalo, adhae dedication-a naan ippo panni irukkira indha gift and ennoda caring-la kooda neenga eppovumae kaanlaam." },
        { icon: <ShieldCheck className="text-blue-500" />, title: "Lifelong Support", text: "As a developer, namma life-la varra endha technical problem-a irundhalum, partner-a naan unga koodavae iruppen." },
        { icon: <Flame className="text-orange-500" />, title: "Constant Friendship", text: "Decision edhuvaga irundhalum, namma 'Friendship' eppovumae oru constant variable dhaan. Adhula entha 'Change' um varaadhu." },
        { icon: <Stars className="text-yellow-500" />, title: "Shared Future", text: "Ennoda career and visions ellathulayum, ungalaiyum oru part-a paaka dhaan naan eppovumae aasa paduraen." }
    ];

    return (
        <div className="py-20 px-4 w-full flex flex-col items-center">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-cinzel text-gold-gradient mb-12 text-center"
            >
                My Vows to You
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
                {pData.map((p, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="cute-card flex items-center gap-6 border-l-4 border-l-gold-500 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
                    >
                        <div className="p-3 bg-black/40 rounded-full shadow-inner">{p.icon}</div>
                        <div>
                            <h3 className="text-lg font-cinzel text-gold-300 mb-1">{p.title}</h3>
                            <p className="text-cream/70 text-sm font-light leading-relaxed">{p.text}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="mt-16 w-full max-w-xs"
            >
                <button
                    onClick={onNext}
                    className="btn-neon w-full py-4 rounded-full font-cinzel font-bold uppercase tracking-widest text-xs hover:scale-105 active:scale-95 transition-all"
                >
                    Final Chapter
                </button>
            </motion.div>
        </div>
    );
};

export default Promises;
