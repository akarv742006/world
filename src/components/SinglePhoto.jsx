import photo1 from '../assets/images/photo1.jpeg';

const SinglePhoto = ({ onNext }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] w-full">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="w-full max-w-sm mb-12"
            >
                <img
                    src={photo1}
                    alt="Her"
                    className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out shadow-2xl shadow-gray-200"
                />
            </motion.div>

            {/* Boxed Action Area */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="mt-8 flex justify-center w-full px-4"
            >
                <div className="border border-gold-500/50 bg-black/60 backdrop-blur-md p-4 rounded-xl shadow-[0_0_20px_rgba(212,175,55,0.2)] w-full max-w-xs cursor-pointer" onClick={onNext}>
                    <button
                        className="btn-neon px-8 py-3 rounded-full font-cinzel font-bold uppercase tracking-[0.2em] w-full hover:scale-105 transition-transform"
                    >
                        Ask The Question
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default SinglePhoto;
