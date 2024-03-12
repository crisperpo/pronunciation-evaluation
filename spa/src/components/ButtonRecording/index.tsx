import React, { useState } from 'react';
import { ArrowClockwise, Check, Microphone, Waveform } from '@phosphor-icons/react';
import getAudioTranscription from '../../services/getAudioTranscript';
import getAudioEvaluation from '../../services/getAudioEvaluation';

import './index.scss';
import { TranscriptionPiece } from '../../services/types';

type ButtonRecordingProps = {
  phraseToRecord: string;
};

const ButtonRecording = ({ phraseToRecord }: ButtonRecordingProps): JSX.Element => {
  const [status, setStatus]= useState('default');
  const handleClick = async () => {
    if(status === 'default'){
      setStatus('listening');
      const audioTranscription = await getAudioTranscription({
        text_to_record: phraseToRecord, learner_recording: 'mockRecording.mp3'
      });
      const audioEvaluation = await getAudioEvaluation(audioTranscription);
      console.log('audioEvaluation=', audioEvaluation);
    }
  };

  return (
    <button className="ButtonRecording" onClick={ handleClick }>
      {(() => {
        switch (status) {
          case 'default':
            return <Microphone size="32" />;
          case 'listening':
            return <Waveform size="32" />;
          case 'recordingCorrect':
            return <Check size="32" />;
          case 'recordingIncorrect':
            return <ArrowClockwise size="32" />;
          default:
            return null;
        }
      })()}
    </button>
  );
};

export default ButtonRecording;
