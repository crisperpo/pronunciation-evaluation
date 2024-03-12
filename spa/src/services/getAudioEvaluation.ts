import axios from 'axios';
import type { AudioEvaluationInput, Evaluation } from './types';

const getAudioEvaluation = (transcriptionPieces: Array<AudioEvaluationInput>) => {
  try {
    const { text_to_record, learner_recording, sr_transcript_of_learner_recording } = transcriptionPieces[0];
    return axios
      .get(`http://localhost:3000/get-audio-evaluation?text_to_record=${text_to_record}&learner_recording=${learner_recording}&sr_transcript_of_learner_recording=${sr_transcript_of_learner_recording}`)
      .then((response: { data: Evaluation}) => response.data);
  } catch (error) {
    throw(error);
  }
};

export default getAudioEvaluation;
