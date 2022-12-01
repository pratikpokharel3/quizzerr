<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { useQuizStore } from "../store/quiz";

const quizStore = useQuizStore();

const totalQuestions = quizStore.quizQuestions.length;
const optionsType = ["A", "B", "C", "D"];

const seconds = ref(60);
const minute = ref(4);
const timeInterval = ref(60);
const secondSuffixState = ref(false);

onMounted(() => {
  setCountdownTimer();

  for (let i = 0; i < totalQuestions; i++) {
    quizStore.quizAnswers.push(-1);
  }
});

watch(minute, () => {
  clearInterval(timeInterval.value);
  setCountdownTimer();
});

function setCountdownTimer() {
  seconds.value = 60;

  timeInterval.value = setInterval(() => {
    seconds.value -= 1;

    if (seconds.value < 10) {
      secondSuffixState.value = true;
    }

    if (seconds.value === 0) {
      clearInterval(timeInterval.value);
      secondSuffixState.value = false;

      if (minute.value === 0) {
        calculateResult();
        return;
      }

      minute.value -= 1;
    }
  }, 1000);
}

function handleSectionOption(questionIdx: number, optionIdx: number) {
  quizStore.quizAnswers[questionIdx] = optionIdx;
}

function calculateResult() {
  clearInterval(timeInterval.value);
  quizStore.calculateResult();
}
</script>

<template>
  <div class="row g-0 h-100 justify-content-center align-items-center">
    <div class="col-12 col-lg-8 shadow px-3 py-4">
      <div class="row g-0">
        <div class="col-12">
          <div class="row g-0">
            <div class="col-12 col-md-10">
              If you skip any question, it will be consider as unanswered
              question.
            </div>
            <div class="col-12 col-md-2 text-md-end mt-2 mt-md-0">
              0{{ minute }}:<template v-if="secondSuffixState">0</template
              >{{ seconds }}
            </div>
          </div>
          <div class="divider mt-2"></div>
        </div>

        <div class="col-12 quiz-body mt-3">
          <div
            class="row g-0 mb-4"
            v-for="(q, questionIdx) in quizStore.quizQuestions"
            :key="q.question"
          >
            <div class="col-12 d-flex fw-bold">
              <div>Q.{{ questionIdx + 1 }}.</div>
              <div class="ps-1">
                {{ q.question }}
              </div>
            </div>

            <div class="col-12 mt-2" v-if="q.code" v-html="q.code"></div>

            <div
              class="col-12 col-md-6 option px-2 py-2 mt-3"
              :class="{
                selected_option:
                  quizStore.quizAnswers[questionIdx] === optionIdx
              }"
              v-for="(option, optionIdx) in q.options"
              :key="optionIdx"
              @click="handleSectionOption(questionIdx, optionIdx)"
            >
              <div class="row g-0">
                <div class="col-1">{{ optionsType[optionIdx] }}:</div>
                <div class="col-11">{{ option }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 text-center text-lg-end mt-3">
          <button
            type="button"
            class="btn btn-primary btn-sm"
            @click="calculateResult"
          >
            Show Result
          </button>
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

.option:hover {
  cursor: pointer;
  background-color: #e9e9e9;
}

.selected_option {
  background-color: #e9e9e9;
}
</style>
