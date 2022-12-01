<script setup lang="ts">
import { ref, onMounted } from "vue";
import { quizList } from "../quiz/quiz.js";
import { useQuizStore } from "../store/quiz";
import { QuizInfo } from "../Interfaces";

const props = defineProps({
  fromQuizResult: {
    type: Boolean,
    default: false
  }
});

const randomQuizList = ref<QuizInfo[]>([]);

const quizStore = useQuizStore();

onMounted(() => {
  if (props.fromQuizResult) {
    randomizeQuizList();
    return;
  }

  randomQuizList.value = quizList;
});

function handleQuizIntroUI(quiz: QuizInfo) {
  if (props.fromQuizResult) {
    quizStore.handleQuizIntroUI(quiz, "fromResult");
    return;
  }

  quizStore.handleQuizIntroUI(quiz);
}

function randomizeQuizList() {
  let indices: number[] = [];

  do {
    const idx = Math.floor(Math.random() * quizList.length);

    if (indices.includes(idx)) {
      continue;
    }

    indices.push(idx);
    randomQuizList.value.push(quizList[idx]);
  } while (randomQuizList.value.length != 4);
}
</script>

<template>
  <div class="row g-0">
    <div
      class="col-3 quiz text-center py-3"
      v-for="item in randomQuizList"
      :key="item.code"
      @click="handleQuizIntroUI(item)"
    >
      <img
        width="40"
        height="40"
        :src="item.image"
        :alt="`${item.name} Logo`"
      />

      <div class="mt-2">{{ item.name }}</div>
    </div>
  </div>
</template>

<style scoped>
.quiz:hover {
  cursor: pointer;
  border: 1px solid #dfdfdf;
}
</style>
