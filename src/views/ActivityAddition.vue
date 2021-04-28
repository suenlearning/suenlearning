<template>
  <main class="main__view">
    <h2 class="activity__title">{{ activityTitle }}</h2>
    <div v-if="currentStep === 1">
      <BaseInput v-model.number="student.name" /><BaseButton
        classModifier="next"
        icon="angle-double-right"
        @click="nextStep"
        :disabled="!student.name"
        >Start</BaseButton
      >
    </div>
    <div v-if="currentStep === 2">
      <div>progress bar</div>

      <ul>
        <li
          v-for="(number, index) in singleProblem.first.toString()"
          :key="index"
        >
          {{ number }}
        </li>
      </ul>

      <ul>
        <li
          v-for="(number, index) in singleProblem.second.toString()"
          :key="index"
        >
          {{ number }}
        </li>
      </ul>
      <!-- I need to provide a unique key so the input rerenders when computed singleProblem changes -->
      <div>
        <ul>
          <li
            v-for="(d, i) in activity.numberOfDigits"
            :key="`${singleProblem.id}-${i}`"
          >
            <BaseInput
              v-model.number="singleProblem.answer[i]"
              type="number"
              :reference="i"
              :focus="activity.numberOfDigits - 1 === i ? true : false"
            />
            <div>{{ i }}</div>
            <div>
              {{ activity.numberOfDigits - 1 === i ? 'true' : 'false' }}
            </div>
          </li>
        </ul>
      </div>
      <BaseButton
        v-show="currentProblem !== 0"
        classModifier="next"
        icon="angle-double-left"
        @click="previousProblem"
        >Previous</BaseButton
      >
      <BaseButton
        v-if="currentProblem !== activity.numbers.length - 1"
        classModifier="next"
        icon="angle-double-right"
        @click="nextProblem"
        >Next</BaseButton
      >
      <BaseButton
        v-else-if="currentProblem === activity.numbers.length - 1"
        classModifier="create"
        icon="angle-double-right"
        @click="fakeSubmit"
        >Submit answers</BaseButton
      >
    </div>
    <div v-if="currentStep === 3">
      <ul>
        <li v-for="(n, i) in activity.numbers" :key="`${n.id}-${i}`">
          <p>{{ n.first }}</p>
          <p>{{ n.second }}</p>
          <p>{{ n.result }}</p>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      currentStep: 1,
      currentProblem: 0,
      student: { name: null },
      activity: {
        type: 'addition',
        numberOfDigits: 4,
        regrouping: false,
        numbers: [
          {
            id: 0,
            first: 2345,
            second: 1203,
            result: 3548,
            answer: [null, null, null, null]
          },
          {
            id: 1,
            first: 1122,
            second: 6633,
            result: 7755,
            answer: [null, null, null, null]
          },
          {
            id: 2,
            first: 3829,
            second: 5140,
            result: 8969,
            answer: [null, null, null, null]
          }
        ]
      }
    }
  },
  methods: {
    nextStep() {
      return this.currentStep++
    },
    previousProblem() {
      if (this.currentProblem !== 0) return (this.currentProblem -= 1)
    },
    nextProblem() {
      if (this.currentProblem !== this.activity.numbers.length - 1)
        return (this.currentProblem += 1)
    },
    fakeSubmit() {
      console.log(this.activity.numbers)
      this.currentStep = 3
    }
  },
  computed: {
    singleProblem() {
      return this.activity.numbers[this.currentProblem]
    },
    activityTitle() {
      const withOrWithout = this.activity.regrouping ? 'with' : 'without'
      const digitsWord = this.activity.numberOfDigits === 1 ? 'digit' : 'digits'
      return `${this.activity.numberOfDigits.toString()}-${digitsWord} ${
        this.activity.type
      }
           ${withOrWithout} regrouping`
    }
  }
}
</script>

<style scoped>
/* temporary. adjust classes */
ul {
  display: flex;
  gap: 20px;
}

.main__view {
  flex-direction: column;
}

/* my styles; the above might need to remove */

.activity__title {
  /* 22px */
  font-size: 1.375rem;
}
</style>
