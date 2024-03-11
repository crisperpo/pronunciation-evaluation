import React, { useEffect } from 'react';
import getAudioTranscript from './services/getAudioTranscript'
import './App.css';

function App() {
  useEffect(() => {
    getAudioTranscript();
  }, []);

  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
