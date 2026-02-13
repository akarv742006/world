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
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("Current Stage changed to:", stage);
  }, [stage]);

  const next = (s) => {
    try {
      setStage(s);
    } catch (e) {
      console.error("Transition Error:", e);
      setError(e.message);
    }
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8 text-white bg-red-900">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Something went wrong</h1>
          <p>{error}</p>
          <button onClick={() => window.location.reload()} className="mt-4 underline">Reload Page</button>
        </div>
      </div>
    );
  }

  // Pure Component Mapping for stability
  const renderContent = () => {
    if (stage === 'welcome') return <Welcome onStart={() => next('loveletter')} />;
    if (stage === 'loveletter') return <LoveLetter onNext={() => next('timeline')} />;
    if (stage === 'timeline') return <Timeline onNext={() => next('reasons')} />;
    if (stage === 'reasons') return <Reasons onNext={() => next('promises')} />;
    if (stage === 'promises') return <Promises onNext={() => next('wishes')} />;
    if (stage === 'wishes') return <Wishes onNext={() => next('photo')} />;
    if (stage === 'photo') return <SinglePhoto onNext={() => next('proposal')} />;
    if (stage === 'proposal') return <Proposal onYes={() => {
      next('celebration');
      setTimeout(() => {
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#B76E79', '#D4AF37', '#FFF']
        });
      }, 500);
    }} />;
    if (stage === 'celebration') return <Gallery />;

    return <Welcome onStart={() => next('loveletter')} />;
  };

  return (
    <Layout>
      <div id="content-boundary" className="w-full flex flex-col items-center">
        {renderContent()}
      </div>
    </Layout>
  );
}

export default App;
