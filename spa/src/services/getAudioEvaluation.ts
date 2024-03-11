import axios from 'axios';

const getAudioEvaluation = () => {
  axios.get("http://localhost:3000/get-audio-evaluation").then((response) => {
    console.log(response.data);
    return response.data;
  });
};

export default getAudioEvaluation;
