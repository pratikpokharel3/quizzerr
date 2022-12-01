import { defineStore } from "pinia";
import { QuizInfo, QuizQuestions, QuizResult } from "../Interfaces";

export const useQuizStore = defineStore("quiz", {
  state: () => ({
    initialQuizUIState: true,
    showQuizIntroUIState: false,
    selectedQuizInfo: null as QuizInfo | null,
    quizQuestions: [] as QuizQuestions[],
    quizAnswers: [] as number[],
    isQuizStarted: false,
    isQuizCompleted: false,
    quizResult: null as QuizResult | null,
    checkAnswerState: false
  }),
  actions: {
    async handleQuizIntroUI(quiz: QuizInfo, type?: string) {
      this.selectedQuizInfo = quiz;
      this.showQuizIntroUIState = true;

      if (type === "fromResult") {
        this.quizResult = null;
        this.isQuizCompleted = false;
        this.quizAnswers = [];
        this.quizQuestions = [];
        this.initialQuizUIState = true;
      }
    },
    async startQuiz() {
      const code = this.selectedQuizInfo?.code;
      const q = await import(`../quiz/${code}_questions.ts`);
      const { questions } = q;

      this.quizQuestions = questions;
      this.isQuizStarted = true;
      this.initialQuizUIState = false;
      this.showQuizIntroUIState = false;
    },
    calculateResult() {
      const total_questions = this.quizQuestions.length;

      let correct_answers = 0;
      let incorrect_answers = 0;
      let unanswered_questions = 0;

      for (let i = 0; i < total_questions; i++) {
        if (this.quizAnswers[i] === -1) {
          unanswered_questions++;
          continue;
        }

        if (this.quizQuestions[i].correct_answer === this.quizAnswers[i]) {
          correct_answers++;
        } else {
          incorrect_answers++;
        }
      }

      this.selectedQuizInfo = null;
      this.isQuizStarted = false;
      this.isQuizCompleted = true;

      this.quizResult = {
        correct_answers,
        incorrect_answers,
        unanswered_questions,
        total_questions
      };
    },
    showAnswers() {
      this.isQuizCompleted = false;
      this.checkAnswerState = true;
    }
  }
});
