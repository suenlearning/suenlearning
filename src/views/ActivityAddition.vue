<template>
  <main class="main__view">
    <!-- <p v-for="(digit, index) in number" :key="index">
      {{ digit }} and
      <BaseInput
        v-model.number="number[index]"
        type="number"
        :reference="index"
      />
    </p> -->
    <div>progress bar</div>
    <!-- TODO: find a better way for keys -->
    <ul id="one">
      <li v-for="(number, index) in numbersAsArray" :key="index" :id="index">
        <ul v-if="index === currentProblem" id="two">
          <li v-for="d in numbersAsArray[index].first" :key="d">
            {{ d }}
          </li>
          <li v-for="d in numbersAsArray[index].second" :key="d">
            {{ d }}
          </li>
          <!-- BaseInput needs focus -->
          <li v-for="(d, i) in numbersAsArray[index].digits" :key="d">
            <BaseInput
              v-model.number="numbersAsArray[index].digits[i]"
              type="number"
              :reference="index"
              :focus="
                numbersAsArray[index].digits.length - 1 === i ? true : false
              "
            />
          </li>
        </ul>
      </li>
    </ul>
    <!-- <ul>
      <li v-for="(number, index) in numbers" :key="index">
        <ul v-if="index === currentProblem">
          <li>{{ numbers[index].first }}</li>
          <li>{{ numbers[index].second }}</li>
          <li>
            <ul>
              <li></li>
            </ul>
          </li>
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
    </ul> -->
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
      number: [2, 3, 4, 5],
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
      numbersAsArray: [
        {
          first: [2, 3, 4, 5],
          second: [1, 2, 0, 3],
          result: [3, 5, 4, 8],
          answer: null,
          digits: [null, null, null, null]
        },
        {
          first: [1, 1, 2, 2],
          second: [6, 6, 3, 3],
          result: [7, 7, 5, 5],
          answer: null,
          digits: [null, null, null, null]
        },
        {
          first: [3, 8, 2, 9],
          second: [5, 1, 4, 0],
          result: [8, 9, 6, 9],
          answer: null,
          digits: [null, null, null, null]
        }
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
