import React, { useState } from 'react';
import RecordingButton from '../ButtonRecording';
import getTrainerData from '../../services/getTrainerData';
import { SpeakerHigh } from '@phosphor-icons/react';

import './index.scss';

const App = (): JSX.Element => {
  const [feedback, setFeedback] = useState('');
  const recordingTrainerData = getTrainerData();

  return (
    <main id="main-content-container">
      <div>
        <h2>Listen, then say it out loud</h2>
        <div id="image-container">
          <img src={recordingTrainerData.image} />
        </div>
      </div>
      <div id="recording-container">
        <div>
          <div id="phrase-container" >
            <div className="phrase-icon"><SpeakerHigh weight="bold" /></div>
            <div className="phrase-text">{recordingTrainerData.phrase}</div>
          </div>
          <div id="feedback-container">{ feedback }</div>
        </div>
        <RecordingButton
          phraseToRecord={recordingTrainerData.phrase}
          setFeedback={ setFeedback }
        />
      </div>
    </main>
  );
}

export default App;
