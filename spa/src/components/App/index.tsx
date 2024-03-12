import React from 'react';

import './index.css';

const RECORDING_TRAINER_DATA = {
  phrase: 'Woher kommst du',
  image: 'https://picsum.photos/200'
};

const App = (): JSX.Element => {
  return (
    <main id="main-content-container">
      <div>
        <h2>Listen, then say it out loud</h2>
        <div id="image-container">
          <img src={RECORDING_TRAINER_DATA.image} />
        </div>
      </div>
      <div id="recording-container">
        <div>
          <div id="phrase-container" >
            {RECORDING_TRAINER_DATA.phrase}
          </div>
          <div id="feedback-container">"Well done"</div>
        </div>
        <button>Mic</button>
      </div>
    </main>
  );
}

export default App;
