<template>
  <main class="main__view">
    <div>progress bar</div>
    <!-- <ul>
      <li>{{ numbers[0].first }}</li>
      <li>{{ numbers[0].second }}</li>
      <li><input type="text" v-model.number="numbers[0].answer" /></li>
    </ul> -->
    <ul>
      <li>{{ numbers[0].first }}</li>
      <li>{{ numbers[0].second }}</li>
      <li><input type="text" ref="input" /></li>
    </ul>
    <!-- if I iterate I get an array in refs -->
    <ul>
      <li v-for="(number, index) in numbers" :key="index">
        <ul v-if="index === currentProblem">
          <li>{{ numbers[index].first }}</li>
          <li>{{ numbers[index].second }}</li>
          <li><input type="text" v-model.number="numbers[index].answer" /></li>
          <li><input type="number" ref="digitFour" /></li>
          <li><input type="number" ref="digitThree" /></li>
          <li><input type="number" ref="digitTwo" /></li>
          <li><input type="number" ref="digitOne" /></li>
          <li><BaseInput ref="digit1" /></li>
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
        { first: 2345, second: 1203, result: 3548, answer: null },
        { first: 1122, second: 6633, result: 7755, answer: null },
        { first: 3829, second: 5140, result: 8969, answer: null }
      ],
      currentProblem: 0
    }
  },
  methods: {
    focusInput() {
      return this.$refs.digitOne[0].focus()
    },
    nextProblem() {
      if (this.currentProblem !== this.numbers.length - 1)
        return (this.currentProblem += 1)
    }
  },
  // mounted() {
  //   this.$nextTick(() => {
  //     this.focusInput()
  //   })
  // }
  mounted() {
    console.log(this.$refs)
    console.log(this.$refs.input)
    console.log(this.$refs.digitOne[0])
    this.focusInput()
    // this.$nextTick(() => {
    //   this.focusInput()
    // })
  },
  updated() {
    this.focusInput()
  }
}
</script>

<style scoped>
.main__view {
  flex-direction: column;
}
</style>
