<script setup lang="ts">
import Header from "./components/Header.vue";
import QuizList from "./components/QuizList.vue";
import QuizIntro from "./components/QuizIntro.vue";
import Quiz from "./components/Quiz.vue";
import QuizResult from "./components/QuizResult.vue";
import Footer from "./components/Footer.vue";
import QuizAnswers from "./components/QuizAnswers.vue";
import { useQuizStore } from "./store/quiz";

const quizStore = useQuizStore();
</script>

<template>
  <Header />

  <main class="container h-100">
    <div
      class="row g-0 h-100 justify-content-center align-items-center"
      v-if="quizStore.initialQuizUIState"
    >
      <div
        class="col-12 col-md-10 col-lg-8 col-xxl-6 shadow px-3 py-4"
        v-if="!quizStore.showQuizIntroUIState"
      >
        <div class="row-g-0">
          <div class="col-12 text-center">
            <span class="h4 fw-bold">Welcome to Quizzerr...!!</span>
            <div class="divider mt-3"></div>
          </div>

          <div class="col-12 mt-3 text-center">
            <div>Are you a computer science guy?</div>
            <div>
              If so, take our trivia quiz and see whether you can get a perfect
              score.
            </div>
          </div>

          <div class="col-12 mt-3">
            <QuizList />
          </div>
        </div>
      </div>

      <QuizIntro v-else />
    </div>

    <Quiz v-if="quizStore.isQuizStarted" />

    <QuizResult v-if="quizStore.isQuizCompleted" />

    <QuizAnswers v-if="quizStore.checkAnswerState" />
  </main>

  <Footer />
</template>

<style>
main {
  flex-grow: 1;
}
</style>
