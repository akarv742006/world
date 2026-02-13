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
    console.log("Current Stage:", stage);
  }, [stage]);

  const next = (s) => setStage(s);

  const renderContent = () => {
    switch (stage) {
      case 'welcome': return <Welcome onStart={() => next('loveletter')} />;
      case 'loveletter': return <LoveLetter onNext={() => next('timeline')} />;
      case 'timeline': return <Timeline onNext={() => next('reasons')} />;
      case 'reasons': return <Reasons onNext={() => next('promises')} />;
      case 'promises': return <Promises onNext={() => next('wishes')} />;
      case 'wishes': return <Wishes onNext={() => next('photo')} />;
      case 'photo': return <SinglePhoto onNext={() => next('proposal')} />;
      case 'proposal': return <Proposal onYes={() => {
        next('celebration');
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#B76E79', '#D4AF37', '#FFF']
        });
      }} />;
      case 'celebration': return (
        <div className="w-full fade-in">
          <Gallery />
        </div>
      );
      default: return <Welcome onStart={() => next('loveletter')} />;
    }
  };

  return (
    <Layout>
      <div className="w-full min-h-[80vh] flex flex-col items-center">
        {renderContent()}
      </div>
    </Layout>
  );
}

export default App;
