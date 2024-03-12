import express from 'express';
import mockTranscriptionResponse from './mockTranscriptionResponse';

const cors = require('cors');

const PORT = 3000;

const app = express();

app.use(express.json());

app.use(cors({
  origin:"*",
  methods:['GET']
}));

app.get('/get-audio-transcription', (req, res) => {
  console.log('Getting audio transcription...');
  console.log('Text to record:', req.query.text_to_record);
  console.log('Learner recording:', req.query.learner_recording);
  res.send(MOCK_TRANSCRIPTION_RESPONSE);
});

app.get('/get-audio-evaluation', (req, res) => {
  console.log('Getting audio evaluation...');
  console.log('Text to record:', req.query.text_to_record);
  console.log('Learner recording:', req.query.learner_recording);
  console.log('Transcript of learner recording:', req.query.learner_recording);
  res.send({
    score: 90,
    feedback: 'Well done'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
