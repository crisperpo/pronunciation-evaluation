export interface AudioTranscriptionInput {
  text_to_record: string;
  learner_recording: string;
}

export interface AudioEvaluationInput {
  text_to_record: string;
  learner_recording: string;
  sr_transcript_of_learner_recording: string;
}

export interface TranscriptionPiece {
  text_to_record: string;
  learner_recording: string;
  sr_transcript_of_learner_recording: string;
}
export interface Evaluation {
  score: number;
  feedback: string;
}
