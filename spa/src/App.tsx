import React from 'react';

import './App.css';

const RECORDING_TRAINER_DATA = {
  phrase: 'Woher kommst du',
  image: 'https://picsum.photos/200'
};

function App() {
  return (
    <main id="main-content-container">
      <h1>Listen, then say it out loud</h1>
      <div className='image-container'>
        <img src={RECORDING_TRAINER_DATA.image} />
      </div>
      <div id="recording-container">
        <div>{RECORDING_TRAINER_DATA.phrase}</div>
        <button>Mic</button>
      </div>
    </main>
  );
}

export default App;
