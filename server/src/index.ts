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

app.post('/get-audio-transcription', (req, res) => {
  console.log('Getting audio transcription...');
  console.log('Text to record:', req.body.text_to_record);
  console.log('Learner recording:', req.body.learner_recording);
  res.send(mockTranscriptionResponse);
});

app.post('/get-audio-evaluation', (req, res) => {
  console.log('Getting audio evaluation...');
  console.log('Transcription text to evaluate:', req.body.transcriptionPieces);
  res.send({
    score: 90,
    feedback: 'Well done'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
