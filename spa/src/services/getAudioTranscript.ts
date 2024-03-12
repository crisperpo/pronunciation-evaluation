import axios from 'axios';
import type { AudioTranscriptionInput, TranscriptionPiece } from './types';

const getAudioTranscription = ({ text_to_record, learner_recording }: AudioTranscriptionInput) => {
  axios
    .get(`http://localhost:3000/get-audio-transcription?text_to_record=${text_to_record}&learner_recording=${learner_recording}`)
    .then((response: { data: Array<TranscriptionPiece> }) => response.data);
};

export default getAudioTranscription;
