import axios from 'axios';
import type { TranscriptionPiece } from './types';

const getAudioTranscription = () => {
  axios
    .get('http://localhost:3000/get-audio-transcription')
    .then((response: { data: Array<TranscriptionPiece> }) => response.data);
};

export default getAudioTranscription;
