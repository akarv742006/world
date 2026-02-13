import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
    { date: "First Met", title: "The Beginning", icon: "👋", description: "The day our worlds collided." },
    { date: "First Date", title: "Coffee & Spark", icon: "☕", description: "Nervous smiles and endless talks." },
    { date: "First Trip", title: "Adventure Time", icon: "✈️", description: "Making memories across miles." },
    { date: "Today", title: "A New Chapter", icon: "💝", description: "Celebrating us, right here, right now." }
];

const Timeline = ({ onNext }) => {
    return (
        <div className="w-full max-w-2xl px-4 py-8">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl text-center mb-12 text-pink-500 font-hand"
            >
                Our Journey
            </motion.h2>

            <div className="relative border-l-4 border-pink-200 ml-4 md:ml-10 space-y-12 pb-12">
                {milestones.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="relative pl-8 md:pl-12"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute -left-[14px] top-0 w-6 h-6 bg-white border-4 border-pink-400 rounded-full" />

                        <div className="cute-card p-6 bg-white rotate-0 hover:rotate-1 transition-transform">
                            <div className="flex items-start justify-between mb-2">
                                <span className="text-sm font-bold text-pink-400 uppercase tracking-widest bg-pink-50 px-2 py-1 rounded-md">
                                    {item.date}
                                </span>
                                <span className="text-2xl">{item.icon}</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-700 mb-1">{item.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="text-center mt-8">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onNext}
                    className="btn-primary"
                >
                    Continue Journey ➡️
                </motion.button>
            </div>
        </div>
    );
};

export default Timeline;
