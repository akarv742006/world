import React, { useState, useEffect, Component } from 'react';
import Welcome from './components/Welcome.jsx';
import Proposal from './components/Proposal.jsx';
import Gallery from './components/Gallery.jsx';
import Wishes from './components/Wishes.jsx';
import SinglePhoto from './components/SinglePhoto.jsx';
import LoveLetter from './components/LoveLetter.jsx';
import Reasons from './components/Reasons.jsx';
import Timeline from './components/Timeline.jsx';
import Promises from './components/Promises.jsx';
import AboutHer from './components/AboutHer.jsx';
import Layout from './components/Layout.jsx';
import confetti from 'canvas-confetti';

// Reliable Error Boundary
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) { return { hasError: true, error: error.message }; }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-black text-white text-center">
          <h2 className="text-xl font-cinzel text-red-500 mb-4">A Cinematic Glitch Occurred</h2>
          <p className="text-xs text-gray-500 mb-6">{this.state.error}</p>
          <button onClick={() => window.location.reload()} className="btn-neon px-8 py-2 rounded-full text-[10px]">Retry</button>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  const [stage, setStage] = useState('wishes');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [stage]);

  const next = (s) => setStage(s);

  const renderContent = () => {
    switch (stage) {
      case 'wishes': return <Wishes onNext={() => next('about')} />;
      case 'about': return <AboutHer onNext={() => next('reasons')} />;
      case 'reasons': return <Reasons onNext={() => next('promises')} />;
      case 'promises': return <Promises onNext={() => next('proposal')} />;
      case 'proposal': return <Proposal onYes={() => {
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
      case 'celebration': return <Gallery />;
      default: return <Wishes onNext={() => next('about')} />;
    }
  };

  return (
    <Layout>
      <ErrorBoundary key={stage}>
        <div id="app-content-root" className="w-full flex flex-col items-center">
          {renderContent()}
        </div>
      </ErrorBoundary>
    </Layout>
  );
}

export default App;
