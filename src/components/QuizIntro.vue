<script setup lang="ts">
import { useQuizStore } from "../store/quiz";

const quizStore = useQuizStore();
</script>

<template>
  <div class="col-12 col-lg-8 col-lg-10 col-xl-8 shadow px-3 py-4">
    <div class="row g-0">
      <div class="col-12 col-md-5 section-one pb-3 pb-md-0">
        <div class="row g-0">
          <div class="col-12 d-flex align-items-center">
            <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M13.78 15.3L19.78 21.3L21.89 19.14L15.89 13.14L13.78 15.3M17.5 10.1C17.11 10.1 16.69 10.05 16.36 9.91L4.97 21.25L2.86 19.14L10.27 11.74L8.5 9.96L7.78 10.66L6.33 9.25V12.11L5.63 12.81L2.11 9.25L2.81 8.55H5.62L4.22 7.14L7.78 3.58C8.95 2.41 10.83 2.41 12 3.58L9.89 5.74L11.3 7.14L10.59 7.85L12.38 9.63L14.2 7.75C14.06 7.42 14 7 14 6.63C14 4.66 15.56 3.11 17.5 3.11C18.09 3.11 18.61 3.25 19.08 3.53L16.41 6.2L17.91 7.7L20.58 5.03C20.86 5.5 21 6 21 6.63C21 8.55 19.45 10.1 17.5 10.1Z"
              />
            </svg>
            <span class="ms-3 fw-bold">
              {{ quizStore.selectedQuizInfo?.name }} Quiz
            </span>
          </div>

          <div class="col-12 d-flex align-items-center mt-2">
            <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M3,3H9V7H3V3M15,10H21V14H15V10M15,17H21V21H15V17M13,13H7V18H13V20H7L5,20V9H7V11H13V13Z"
              />
            </svg>
            <span class="ms-3 fw-bold"> 25 multiple choice questions </span>
          </div>

          <div class="col-12 d-flex align-items-center mt-2">
            <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 20C16.4 20 20 16.4 20 12S16.4 4 12 4 4 7.6 4 12 7.6 20 12 20M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M17 11.5V13H11V7H12.5V11.5H17Z"
              />
            </svg>
            <span class="ms-3 fw-bold">5 minutes for all questions</span>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-7 section-two ps-md-4 mt-3 mt-md-0">
        <div class="row g-0">
          <div class="col-12 h6 fw-bold">Before you start:</div>

          <div class="col-12">
            <ul>
              <li>
                You must complete this quiz in
                <strong>one single session.</strong>
              </li>
              <li>
                <strong>Result</strong> will be displayed only after quiz is
                completed.
              </li>
              <li>Don't try to <strong>cheat!</strong> Be honest.</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col-12 text-center mt-4">
        <button
          type="button"
          class="btn btn-sm btn-primary"
          @click="quizStore.startQuiz"
        >
          Start Quiz
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
ul {
  padding-left: 1rem;
}

.section-one {
  border-bottom: 1px solid #dfdfdf;
}

@media (min-width: 768px) {
  .section-one {
    border-bottom: none;
  }

  .section-two {
    border-left: 1px solid #dfdfdf;
  }
}
</style>
