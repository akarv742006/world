import React from 'react';
import { motion } from 'framer-motion';

const Timeline = ({ onNext }) => {
    const events = [
        { date: "First Met", title: "The Spark", desc: "When the CSE logic encountered Biomedical grace." },
        { date: "The Connection", title: "Pesum Pozhudhu", desc: "Andha positive talks dhaan enna innum grow panna vachithu." },
        { date: "Growth", title: "Sustaining Love", desc: "Building my freelance career with you as my 'Fixed Variable'." },
        { date: "Today", title: "The Archive", desc: "Creating this project to celebrate the most important person in my life." }
    ];

    return (
        <div className="py-20 px-4 w-full max-w-4xl flex flex-col items-center">
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-cinzel text-center text-gold-gradient mb-20 tracking-widest"
            >
                Our Timeline
            </motion.h2>

            <div className="relative border-l-2 border-gold-600/30 ml-4 md:ml-0 md:pl-0 w-full">
                {events.map((event, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.3, duration: 0.8 }}
                        className="mb-16 ml-8 relative w-full lg:w-3/4"
                    >
                        {/* Timeline Dot */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: index * 0.3 + 0.4 }}
                            className="absolute -left-[41px] top-1 w-5 h-5 bg-gold-500 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.8)] border-4 border-black"
                        ></motion.div>

                        <div className="bg-black/40 p-6 md:p-8 rounded-xl border border-gold-600/20 shadow-xl backdrop-blur-sm hover:border-gold-500/40 transition-colors">
                            <span className="text-gold-500 font-cinzel text-xs tracking-widest uppercase mb-2 block">{event.date}</span>
                            <h3 className="text-2xl font-cinzel text-gold-100 mb-4">{event.title}</h3>
                            <p className="text-cream/60 font-lato font-light leading-relaxed">{event.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex justify-center mt-12 w-full"
            >
                <button
                    onClick={onNext}
                    className="btn-neon px-12 py-4 rounded-full font-cinzel font-bold uppercase tracking-[0.2em] text-xs hover:scale-105 transition-transform"
                >
                    Look Back Further
                </button>
            </motion.div>
        </div>
    );
};

export default Timeline;
