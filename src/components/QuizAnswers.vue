<script setup lang="ts">
import { useQuizStore } from "../store/quiz";

const optionsType = ["A", "B", "C", "D"];

const quizStore = useQuizStore();

function highlightCorrectAnswers(questionIdx: number, optionIdx: number) {
  const correctAnswerIdx = quizStore.quizQuestions[questionIdx].correct_answer;
  return correctAnswerIdx === optionIdx;
}

function highlightInCorrectAnswers(questionIdx: number, optionIdx: number) {
  const correctAnswerIdx = quizStore.quizQuestions[questionIdx].correct_answer;
  const selectedOptionIdx = quizStore.quizAnswers[questionIdx];

  if (correctAnswerIdx !== selectedOptionIdx) {
    return selectedOptionIdx === optionIdx;
  }
  return false;
}
</script>

<template>
  <div
    class="row g-0 h-100 justify-content-center align-items-center py-4 pt-md-0"
  >
    <div class="col-12 shadow px-3 py-4">
      <div class="row g-0">
        <div class="col-12 col-md-8 order-2 order-md-1 mt-4 mt-md-0">
          <div class="row g-0">
            <div class="col-12 quiz-body">
              <div
                class="row g-0 mb-4"
                v-for="(q, questionIdx) in quizStore.quizQuestions"
                :key="q.question"
              >
                <div class="col-12 fw-bold">
                  Q.{{ questionIdx + 1 }}. {{ q.question }}
                </div>

                <div class="col-12 mt-2" v-if="q.code" v-html="q.code"></div>

                <div
                  class="col-12 col-md-6"
                  v-for="(option, optionIdx) in q.options"
                  :key="optionIdx"
                >
                  <div
                    class="row g-0 option mt-3 px-2 py-2"
                    :class="{
                      correct_option: highlightCorrectAnswers(
                        questionIdx,
                        optionIdx
                      ),
                      incorrect_option: highlightInCorrectAnswers(
                        questionIdx,
                        optionIdx
                      )
                    }"
                  >
                    <div class="col-1">{{ optionsType[optionIdx] }}:</div>
                    <div class="col-11">{{ option }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-4 order-1 order-md-2 ps-md-4">
          <div class="row g-0">
            <div class="col-12 col-sm-6 col-md-12">
              <div class="d-flex">
                <div class="correct_option py-1 px-3 me-2"></div>
                Correct Option
              </div>

              <div class="d-flex mt-2">
                <div class="incorrect_option py-1 px-3 me-2"></div>
                Incorrect Option
              </div>
            </div>

            <div class="col-12 col-sm-6 col-md-12 mt-4 mt-sm-0 mt-md-4">
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
                <strong>
                  {{ quizStore.quizResult?.unanswered_questions }}
                </strong>
              </div>
            </div>
          </div>

          <div class="text-center mt-4">
            <button
              type="button"
              class="btn btn-primary btn-sm"
              @click="quizStore.$reset()"
            >
              Try another Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.quiz-body {
  height: 320px;
  overflow-y: scroll;
}

.option {
  border: 1px solid #dfdfdf;
}

.correct_option {
  background-color: #74ff8b;
}

.incorrect_option {
  background-color: #ff6f6f;
}
</style>
