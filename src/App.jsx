import React, { useState, useEffect } from 'react';
import Welcome from './components/Welcome';
import Proposal from './components/Proposal';
import Gallery from './components/Gallery';
import Wishes from './components/Wishes';
import SinglePhoto from './components/SinglePhoto';
import LoveLetter from './components/LoveLetter';
import Reasons from './components/Reasons';
import Timeline from './components/Timeline';
import Promises from './components/Promises';
import Layout from './components/Layout';
import Confetti from 'react-confetti';
import { motion } from 'framer-motion';

function App() {
  const [stage, setStage] = useState('welcome');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [stage]);

  const handleStart = () => setStage('loveletter');
  const handleLoveLetterNext = () => setStage('timeline');
  const handleTimelineNext = () => setStage('reasons');
  const handleReasonsNext = () => setStage('promises');
  const handlePromisesNext = () => setStage('wishes');
  const handleWishesNext = () => setStage('photo');
  const handlePhotoNext = () => setStage('proposal');
  const handleYes = () => setStage('celebration');

  return (
    <Layout stage={stage}>
      {stage === 'welcome' && (
        <motion.div key="welcome" exit={{ opacity: 0 }} className="h-full w-full flex items-center justify-center">
          <Welcome onStart={handleStart} />
        </motion.div>
      )}

      {stage === 'loveletter' && (
        <motion.div key="loveletter" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full">
          <LoveLetter onNext={handleLoveLetterNext} />
        </motion.div>
      )}

      {stage === 'timeline' && (
        <motion.div key="timeline" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full flex justify-center">
          <Timeline onNext={handleTimelineNext} />
        </motion.div>
      )}

      {stage === 'reasons' && (
        <motion.div key="reasons" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full">
          <Reasons onNext={handleReasonsNext} />
        </motion.div>
      )}

      {stage === 'promises' && (
        <motion.div key="promises" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full flex justify-center">
          <Promises onNext={handlePromisesNext} />
        </motion.div>
      )}

      {stage === 'wishes' && (
        <motion.div key="wishes" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full flex justify-center">
          <Wishes onNext={handleWishesNext} />
        </motion.div>
      )}

      {stage === 'photo' && (
        <motion.div key="photo" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full flex justify-center">
          <SinglePhoto onNext={handlePhotoNext} />
        </motion.div>
      )}

      {stage === 'proposal' && (
        <motion.div key="proposal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full flex justify-center">
          <Proposal onYes={handleYes} />
        </motion.div>
      )}

      {stage === 'celebration' && (
        <motion.div key="celebration" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full">
          <Confetti recycle={false} numberOfPieces={500} gravity={0.1} colors={['#B76E79', '#D4AF37', '#FFF']} />
          <div className="animate-fade-in w-full">
            <Gallery />
          </div>
        </motion.div>
      )}
    </Layout>
  );
}

export default App;
