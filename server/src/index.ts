import express from 'express';

const cors = require('cors');

const PORT = 3000;
const MOCK_TRANSCRIPTION_RESPONSE = [
  {
    text_to_record: 'interesting',
    learner_recording: 'interesting.wav',
    sr_transcript_of_learner_recording: 'Interesting.'
  },
  {
    text_to_record: 'won',
    learner_recording: 'won.wav',
    sr_transcript_of_learner_recording: 'One.'
  },
  {
    text_to_record: 'Today is the thirteenth of May, twenty twenty three.',
    learner_recording: 'today.wav',
    sr_transcript_of_learner_recording: 'Today is the 13th of May, 2023.'
  },
  {
    text_to_record: 'I like to watch Youtube.',
    learner_recording: 'youtube.wav',
    sr_transcript_of_learner_recording: 'I like to watch you too.'
  },
  {
    text_to_record: 'I have two and a half euros.',
    learner_recording: 'euros.wav',
    sr_transcript_of_learner_recording: 'I have a, I have €2.5.'
  }
];

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
