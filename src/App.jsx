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
import Layout from './components/Layout.jsx';
import confetti from 'canvas-confetti';

// Class-based Error Boundary for reliable production catching
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error.message };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[50vh] flex flex-col items-center justify-center p-8 bg-black/80 border-2 border-red-600 rounded-3xl m-4 text-white">
          <h2 className="text-2xl font-cinzel mb-4 text-red-500">A Runtime Crash Occurred</h2>
          <p className="font-lato text-sm text-gray-300 mb-6 bg-red-950/50 p-4 rounded-lg border border-red-900 w-full text-center overflow-auto max-h-40">
            {this.state.error}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="btn-neon px-8 py-2 rounded-full text-xs"
          >
            Restart Application
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  const [stage, setStage] = useState('welcome');

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("STAGE_CHANGE:", stage);
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
      case 'proposal': return <Proposal onYes={() => next('celebration')} />;
      case 'celebration': return <Gallery />;
      default: return <Welcome onStart={() => next('loveletter')} />;
    }
  };

  return (
    <Layout>
      {/* Diagnostic Stage Indicator (Visible in production for debugging) */}
      <div className="fixed top-2 right-2 z-[9999] bg-black/60 border border-gold-500/30 text-[8px] md:text-[10px] text-gold-500/50 px-2 py-1 rounded-md pointer-events-none font-mono">
        STAGE: {stage.toUpperCase()}
      </div>

      <ErrorBoundary key={stage}>
        <div id="app-content-root" className="w-full flex flex-col items-center">
          {renderContent()}
        </div>
      </ErrorBoundary>
    </Layout>
  );
}

export default App;
