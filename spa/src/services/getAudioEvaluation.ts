import axios from 'axios';
import type { AudioEvaluationInput, Evaluation } from './types';

const getAudioEvaluation = (transcriptionPieces: Array<AudioEvaluationInput>) => {
  try {
    return axios
      .post('http://localhost:3000/get-audio-evaluation', {
        transcriptionPieces: transcriptionPieces
      })
      .then((response: { data: Evaluation}) => response.data);
  } catch (error) {
    throw(error);
  }
};

export default getAudioEvaluation;
