import React, { useState } from 'react';
import RecordingButton from '../ButtonRecording';
import { SpeakerHigh } from '@phosphor-icons/react';

import './index.scss';

const RECORDING_TRAINER_DATA = {
  phrase: 'Woher kommst du',
  image: 'https://picsum.photos/200'
};

const App = (): JSX.Element => {
  const [feedback, setFeedback] = useState('');

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
            <div className="phrase-icon"><SpeakerHigh weight="bold" /></div>
            <div className="phrase-text">{RECORDING_TRAINER_DATA.phrase}</div>
          </div>
          <div id="feedback-container">{ feedback }</div>
        </div>
        <RecordingButton
          phraseToRecord={RECORDING_TRAINER_DATA.phrase}
          setFeedback={ setFeedback }
        />
      </div>
    </main>
  );
}

export default App;
