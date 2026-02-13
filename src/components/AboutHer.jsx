import React from 'react';
import { motion } from 'framer-motion';
import { Medal, Heart, Sparkles, GraduationCap } from 'lucide-react';
import aboutImg from '../assets/images/about_her.png';

const AboutHer = ({ onNext }) => {
    const qualities = [
        {
            icon: <GraduationCap className="text-blue-400" />,
            title: "The Healer",
            desc: "Neenga oru Biomedical Engineer. Naan logic and building-a pathi yosippen, aana neenga oru life-a care panreenga. Adhu dhaan ellathaiyum vida periya perumai."
        },
        {
            icon: <Heart className="text-pink-400" />,
            title: "Kind Soul",
            desc: "Yarukkum kasta pada koodadhu nu yosikkira unga anbu, andha chinna chinna helpers... idhu dhaan unga azhagai vida unga real getthu."
        },
        {
            icon: <Medal className="text-gold-400" />,
            title: "The Constant Support",
            desc: "Ennoda freelance journeys-la, projects kasta-ma irukira appo, 'Akash, unnala mudiyum' nu sonna andha oru varthai dhaan enna inga kondu vandhirukku."
        },
        {
            icon: <Sparkles className="text-yellow-400" />,
            title: "Simple & Sweet",
            desc: "Chinna vishayathulayum sandhosha padura unga character, high expectations illaama namma friendship-ku neenga kudukura importance... neenga eppovumae special dhaan."
        }
    ];

    return (
        <div className="py-20 px-4 w-full flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl md:text-5xl font-cinzel text-gold-gradient mb-4">Why You're My Pride</h2>
                <p className="text-cream/60 font-lato italic">"Azhagu mattum illa, unmaiyaana anbu dhaan unga getthu..."</p>
                <div className="mt-6 w-24 h-px bg-gold-600/30 mx-auto"></div>
            </motion.div>

            {/* Cinematic Image Section */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mb-16 relative group"
            >
                <div className="absolute -inset-4 bg-gold-600/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                <img
                    src={aboutImg}
                    alt="Biomedical Theme"
                    className="w-full max-w-md h-auto rounded-3xl shadow-[0_0_50px_rgba(212,175,55,0.3)] border border-gold-600/20 relative z-10"
                    onError={(e) => {
                        console.error("AboutHer: Image load failed");
                        e.target.style.display = 'none';
                    }}
                />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
                {qualities.map((q, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="bg-black/40 backdrop-blur-md border border-gold-600/20 p-8 rounded-2xl hover:border-gold-500/40 transition-all group"
                    >
                        <div className="mb-6 p-3 bg-gold-600/10 w-fit rounded-xl group-hover:scale-110 transition-transform">
                            {q.icon}
                        </div>
                        <h3 className="text-xl font-cinzel text-gold-300 mb-3">{q.title}</h3>
                        <p className="text-cream/70 text-sm font-light leading-relaxed">
                            {q.desc}
                        </p>
                    </motion.div>
                ))}
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
                    className="btn-neon px-12 py-4 rounded-full font-cinzel font-bold text-xs tracking-[0.3em] uppercase hover:scale-105 active:scale-95 transition-all"
                >
                    There's One More Thing...
                </button>
            </motion.div>
        </div>
    );
};

export default AboutHer;
