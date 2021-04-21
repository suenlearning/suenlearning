<template>
  <main class="main__view">
    <div>progress bar</div>
    <!-- <ul>
      <li>{{ numbers[0].first }}</li>
      <li>{{ numbers[0].second }}</li>
      <li><input type="text" v-model.number="numbers[0].answer" /></li>
    </ul> -->
    <ul>
      <li
        v-for="(number, index) in numbers"
        :key="index"
        v-show="index === currentProblem"
      >
        <ul>
          <li>{{ numbers[index].first }}</li>
          <li>{{ numbers[index].second }}</li>
          <li><input type="text" v-model.number="numbers[index].answer" /></li>
        </ul>
      </li>
    </ul>
    <BaseButton
      classModifier="next"
      icon="angle-double-right"
      @click="nextProblem"
      >Next</BaseButton
    >
  </main>
</template>

<script>
export default {
  data() {
    return {
      numbers: [
        { first: 2345, second: 1203, result: 3548, answer: null },
        { first: 1122, second: 6633, result: 7755, answer: null }
      ],
      currentProblem: 0
    }
  },
  methods: {
    nextProblem() {
      return (this.currentProblem += 1)
    }
  }
}
</script>

<style scoped>
.main__view {
  flex-direction: column;
}
</style>
