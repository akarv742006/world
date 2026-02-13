import React from 'react';
import { motion } from 'framer-motion';

const promises = [
    { text: "I promise to always listen to your dreams.", icon: "👂" },
    { text: "I promise to be your biggest cheerleader.", icon: "📣" },
    { text: "I promise to share my fries with you.", icon: "🍟" },
    { text: "I promise to love you, even on bad hair days.", icon: "💇‍♀️" },
    { text: "I promise to hold your hand through everything.", icon: "🤝" }
];

const Promises = ({ onNext }) => {
    return (
        <div className="w-full max-w-4xl px-4 py-8">
            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-4xl md:text-5xl text-center mb-10 text-pink-500 font-hand"
            >
                My Vows to You
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {promises.map((promise, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.03, rotate: index % 2 === 0 ? 1 : -1 }}
                        className="cute-card p-6 bg-white flex items-center gap-4 border-l-8 border-l-pink-300"
                    >
                        <span className="text-4xl">{promise.icon}</span>
                        <p className="text-lg text-gray-600 font-hand font-bold leading-tight">
                            {promise.text}
                        </p>
                    </motion.div>
                ))}
            </div>

            <div className="text-center">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onNext}
                    className="btn-primary px-10 py-3"
                >
                    The Big Question ❓
                </motion.button>
            </div>
        </div>
    );
};

export default Promises;
