<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useQuizStore } from "../store/quiz";
import QuizList from "./QuizList.vue";

const remarkMessage = ref("");

const quizStore = useQuizStore();

onMounted(() => {
  generateRemarkMessage();
});

function generateRemarkMessage() {
  const correctAnswers = quizStore.quizResult?.correct_answers;

  if (correctAnswers === undefined) {
    return;
  }

  if (correctAnswers === 25) {
    remarkMessage.value = "Damn! You're an expert at this. Good Job!";
  } else if (correctAnswers >= 20 && correctAnswers < 25) {
    remarkMessage.value = "Not bad, not bad at all. I'm impressed!";
  } else if (correctAnswers >= 15 && correctAnswers < 20) {
    remarkMessage.value = "I mean it's alright. Bang average though!";
  } else {
    remarkMessage.value = "I'm guessing you're a beginner. Keep on learning!";
  }
}
</script>

<template>
  <div class="row g-0 h-100 justify-content-center align-items-center">
    <div class="col-12 col-md-10 col-lg-8 col-xl-6 shadow p-3">
      <div class="row g-0">
        <div class="col-12 mt-2 text-center">
          <div class="fw-bold h5">Quiz Completed...!!</div>

          <div>
            Total Questions:
            <strong>{{ quizStore.quizResult?.total_questions }}</strong>
          </div>

          <div>
            Correct Answers:
            <strong>{{ quizStore.quizResult?.correct_answers }}</strong>
          </div>

          <div>
            Incorrect Answers:
            <strong>{{ quizStore.quizResult?.incorrect_answers }}</strong>
          </div>

          <div>
            Unanswered Questions:
            <strong>{{ quizStore.quizResult?.unanswered_questions }}</strong>
          </div>
        </div>

        <div class="col-12 mt-4 text-center">
          Remark:
          <div class="fw-bold">{{ remarkMessage }}</div>

          <button
            type="button"
            class="btn btn-sm btn-primary mt-3"
            @click="quizStore.showAnswers"
          >
            Check Answers
          </button>

          <div class="divider mt-4"></div>
          <div class="mt-4 h6 text-center fw-bold">Fancy Another One?</div>
        </div>
      </div>

      <div class="col-12 mt-4">
        <QuizList :from-quiz-result="true" />
      </div>
    </div>
  </div>
</template>
