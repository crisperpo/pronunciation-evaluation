import React, { useState, Dispatch, SetStateAction } from 'react';
import { ArrowClockwise, Check, Microphone, Waveform } from '@phosphor-icons/react';
import getAudioTranscription from '../../services/getAudioTranscript';
import getAudioEvaluation from '../../services/getAudioEvaluation';

import './index.scss';

type ButtonRecordingProps = {
  phraseToRecord: string;
  setFeedback: Dispatch<SetStateAction<string>>;
};

const ButtonRecording = ({ phraseToRecord, setFeedback }: ButtonRecordingProps): JSX.Element => {
  const [status, setStatus]= useState('default');

  const handleClick = async () => {
    if(status === 'default'){
      setStatus('listening');
      const audioTranscription = await getAudioTranscription({
        text_to_record: phraseToRecord, learner_recording: 'mockRecording.mp3'
      });
      const audioEvaluation = await getAudioEvaluation(audioTranscription);
      setTimeout(function(){
        setFeedback(`${audioEvaluation.feedback}, your score is ${audioEvaluation.score}%`);
        setStatus('recordingCorrect');
      }, 500); 
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
