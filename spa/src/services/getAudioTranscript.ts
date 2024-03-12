import axios from 'axios';
import type { AudioTranscriptionInput, TranscriptionPiece } from './types';

const getAudioTranscription = async ({ text_to_record, learner_recording }: AudioTranscriptionInput) => {
  try {
    const response = await axios
      .post('http://localhost:3000/get-audio-transcription',{
        text_to_record: text_to_record,
        learner_recording: learner_recording
      })
      .then((response: { data: Array<TranscriptionPiece> }) => response.data);
    return response;
  } catch (error) {
    throw(error);
  }
};

export default getAudioTranscription;
