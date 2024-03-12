import React, { useState } from 'react';
import { ArrowClockwise, Check, Microphone, Waveform } from '@phosphor-icons/react';

import './index.scss';

const ButtonRecording = (): JSX.Element => {
  const [status, setStatus]= useState('default');
  const handleClick = () => {
    if(status === 'default') setStatus('listening');
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
