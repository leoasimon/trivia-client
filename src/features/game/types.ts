export interface Question {
  question: string;
  correctAnswer: string;
  answers: string[];
}

export interface SinglePlayerGame {
  questions: Question[];
  score: number;
}
