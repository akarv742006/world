import React from 'react';
import { motion } from 'framer-motion';
import { Medal, Heart, Sparkles, GraduationCap, Star, ShieldCheck } from 'lucide-react';
import aboutImg from '../assets/images/about_her.png';
import personalPhoto from '../assets/images/photo3.jpeg';
import photo from '../assets/images/photo2.jpeg';

const AboutHer = ({ onNext }) => {
    const qualities = [
        {
            icon: <GraduationCap className="text-blue-400" />,
            title: "The Healer (Biomedical)",
            desc: "Neenga oru Biomedical Engineer. Naan logic and building-a pathi yosippen, aana neenga oru life-a care panreenga. Indha society-ku unga service romba mukkiyam. I am so proud of your profession."
        },
        {
            icon: <Heart className="text-pink-400" />,
            title: "Kind Soul & Empathy",
            desc: "Yarukkum kasta pada koodadhu nu yosikkira unga anbu... idhu dhaan unga real getthu. Unga kitta irukkira andha kindness dhaan ennai kooda oru better person-a mathudhu."
        },
        {
            icon: <Star className="text-gold-400" />,
            title: "The Rare Diamond",
            desc: "Chinna vishayathulayum sandhosha padura unga simple character romba rare. High expectations illaama, unmaiyaana anbukku neenga kudukura importance ungala vera level unique-a aakudhu."
        },
        {
            icon: <ShieldCheck className="text-green-400" />,
            title: "Strength & Maturity",
            desc: "Problems-a kooda smile-oda face panna therinjavanga neenga. Unga kitta irukira andha clarity and maturity dhaan namma friendship-a ivlo years 'Constant'-a handle panna kaaranam."
        }
    ];

    return (
        <div className="py-20 px-4 w-full flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl md:text-5xl font-cinzel text-gold-gradient mb-4 uppercase tracking-[0.2em]">Why You're My Pride</h2>
                <p className="text-cream/60 font-lato italic text-sm">"Azhagu mattum illa, unmaiyaana anbu dhaan unga getthu..."</p>
                <div className="mt-6 w-24 h-px bg-gold-600/30 mx-auto"></div>
            </motion.div>

            {/* Cinematic Image Section */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mb-16 relative group"
            >
                <div className="absolute -inset-4 bg-gold-600/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                <div className="flex flex-col md:flex-row gap-6 items-center">
                    <img
                        src={aboutImg}
                        alt="Biomedical Theme"
                        className="w-full max-w-[200px] h-auto rounded-3xl shadow-xl border border-gold-600/20 relative z-10"
                    />
                    <div className="w-px h-24 bg-gold-600/20 hidden md:block"></div>
                    <img
                        src={personalPhoto}
                        alt="Her Excellence"
                        className="w-full max-w-[200px] h-auto rounded-3xl shadow-xl border border-gold-600/20 relative z-10 object-cover"
                    />
                </div>
                <div className="mt-6 text-center">
                    <p className="text-[10px] font-cinzel text-gold-500/60 tracking-[0.4em] uppercase">Built on Respect & Admiration</p>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
                {qualities.map((q, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 }}
                        className="bg-black/40 backdrop-blur-md border border-gold-600/20 p-8 rounded-2xl hover:border-gold-500/40 transition-all group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            {q.icon}
                        </div>
                        <div className="mb-6 p-3 bg-gold-600/10 w-fit rounded-xl group-hover:scale-110 transition-transform">
                            {q.icon}
                        </div>
                        <h3 className="text-xl font-cinzel text-gold-300 mb-3 uppercase tracking-wider">{q.title}</h3>
                        <p className="text-cream/70 text-sm font-light leading-relaxed">
                            {q.desc}
                        </p>
                    </motion.div>
                ))}

                {/* Her Photo - Birthday Highlight */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    className="mb-8 relative flex justify-center w-full md:col-span-2"
                >
                    <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-gold-500/50 shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                        <img
                            src={photo}
                            alt="Birthday Queen"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
                        />
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="mt-20"
            >
                <button
                    onClick={onNext}
                    className="btn-neon px-12 py-4 rounded-xl font-cinzel font-bold text-xs tracking-[0.4em] uppercase hover:scale-105 active:scale-95 transition-all shadow-lg"
                >
                    Final Chapter
                </button>
            </motion.div>
        </div>
    );
};

export default AboutHer;
