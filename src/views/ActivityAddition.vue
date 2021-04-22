<template>
  <main class="main__view">
    <div>progress bar</div>
    <ul>
      <li v-for="(number, index) in numbers" :key="index">
        <ul v-if="index === currentProblem">
          <li>{{ numbers[index].first }}</li>
          <li>{{ numbers[index].second }}</li>
          <li>
            <BaseInput
              v-model.number="numbers[index].digits[0]"
              type="number"
            />
          </li>
          <li>
            <BaseInput
              v-model.number="numbers[index].digits[1]"
              type="number"
            />
          </li>
          <li>
            <BaseInput
              v-model.number="numbers[index].digits[2]"
              type="number"
            />
          </li>
          <li>
            <BaseInput
              v-model.number="numbers[index].digits[3]"
              type="number"
              :focus="true"
            />
          </li>
        </ul>
      </li>
    </ul>
    <BaseButton
      v-if="currentProblem !== numbers.length - 1"
      classModifier="next"
      icon="angle-double-right"
      @click="nextProblem"
      >Next</BaseButton
    >
    <BaseButton
      v-else-if="currentProblem === numbers.length - 1"
      classModifier="create"
      icon="angle-double-right"
      @click="nextProblem"
      >Send</BaseButton
    >
  </main>
</template>

<script>
export default {
  data() {
    return {
      numbers: [
        {
          first: 2345,
          second: 1203,
          result: 3548,
          answer: null,
          digits: [null, null, null, null]
        },
        { first: 1122, second: 6633, result: 7755, answer: null },
        { first: 3829, second: 5140, result: 8969, answer: null }
      ],
      currentProblem: 0
    }
  },
  methods: {
    nextProblem() {
      if (this.currentProblem !== this.numbers.length - 1)
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
