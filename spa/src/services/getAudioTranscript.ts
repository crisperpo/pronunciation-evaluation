import axios from 'axios';

const getAudioTranscription = () => {
  axios.get("http://localhost:3000/get-audio-transcription").then((response) => {
    console.log(response.data);
    return response.data;
  });
};

export default getAudioTranscription;
