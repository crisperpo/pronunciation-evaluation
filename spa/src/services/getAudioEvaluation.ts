import axios from 'axios';
import type { Evaluation } from './types';

const getAudioEvaluation = () => {
  axios
    .get("http://localhost:3000/get-audio-evaluation")
    .then((response: { data: Evaluation}) => response.data);
};

export default getAudioEvaluation;
