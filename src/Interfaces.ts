export interface QuizInfo {
  code: string;
  image: string;
  name: string;
}

export interface QuizQuestions {
  question: string;
  code: string;
  options: [];
  correct_answer: number;
}

export interface QuizResult {
  correct_answers: number;
  incorrect_answers: number;
  unanswered_questions: number;
  total_questions: number;
}
