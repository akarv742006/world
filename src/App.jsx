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
import confetti from 'canvas-confetti';

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
  const handleYes = () => {
    setStage('celebration');
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#B76E79', '#D4AF37', '#FFF']
    });
  };

  return (
    <Layout stage={stage}>
      <div className="w-full flex flex-col items-center">
        {stage === 'welcome' && <Welcome onStart={handleStart} />}
        {stage === 'loveletter' && <LoveLetter onNext={handleLoveLetterNext} />}
        {stage === 'timeline' && <Timeline onNext={handleTimelineNext} />}
        {stage === 'reasons' && <Reasons onNext={handleReasonsNext} />}
        {stage === 'promises' && <Promises onNext={handlePromisesNext} />}
        {stage === 'wishes' && <Wishes onNext={handleWishesNext} />}
        {stage === 'photo' && <SinglePhoto onNext={handlePhotoNext} />}
        {stage === 'proposal' && <Proposal onYes={handleYes} />}
        {stage === 'celebration' && (
          <div className="w-full fade-in">
            <Gallery />
          </div>
        )}
      </div>
    </Layout>
  );
}

export default App;
