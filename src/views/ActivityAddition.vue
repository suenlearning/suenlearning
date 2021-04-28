<template>
  <main class="main__view">
    <h2 class="activity__title">{{ activityTitle }}</h2>
    <div v-if="currentStep === 1" class="step1__container">
      <BaseInput
        v-model.number="student.name"
        label="Your name"
        :focus="true"
      /><BaseButton
        classModifier="next"
        icon="angle-double-right"
        @click="nextStep"
        :disabled="!student.name"
        >Start</BaseButton
      >
    </div>
    <div v-if="currentStep === 2" class="step2__container">
      <div>progress bar</div>
      <div class="singleEquation">
        <ul class="singleNumber addend addend--first">
          <li
            v-for="(number, index) in singleProblem.first.toString()"
            :key="index"
            class="singleNumber__singleDigit"
          >
            {{ number }}
          </li>
        </ul>
        <p class="operationSign">+</p>
        <ul class="singleNumber addend addend--second">
          <li
            v-for="(number, index) in singleProblem.second.toString()"
            :key="index"
            class="singleNumber__singleDigit"
          >
            {{ number }}
          </li>
        </ul>
        <!-- I need to provide a unique key so the input rerenders when computed singleProblem changes -->

        <ul class="singleNumber result">
          <li
            v-for="(d, i) in activity.numberOfDigits"
            :key="`${singleProblem.id}-${i}`"
            class="singleNumber__singleDigit"
          >
            <BaseInput
              v-model.number="singleProblem.answer[i]"
              type="number"
              :reference="i"
              :focus="activity.numberOfDigits - 1 === i ? true : false"
            />
          </li>
        </ul>
      </div>
      <div>
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
    </div>
    <div v-if="currentStep === 3" class="step1__container">
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
.main__view {
  margin-top: 80px;
  padding: 0 24px;
  display: grid;
  grid-template-rows: auto 1fr;
  justify-items: center;
}

.activity__title {
  padding: 12px 0;
  /* 22px */
  font-size: 1.375rem;
}

/* step 1 - name */
.step1__container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.step1__container .form__options--container {
  width: 100%;
}

/* deep selector */
.step1__container >>> .form__options--input {
  display: block;
  width: 100%;
}

/* step 2 - main activity */
.step2__container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.singleEquation {
  font-size: 1.375rem;
  width: auto;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    'emptySpace1 firstAddend'
    'operationSign secondAddend'
    'emptySpace2 result';
  align-items: center;
  row-gap: 2vw;
}

.addend {
  font-weight: 500;
}
.addend--first {
  grid-area: firstAddend;
}

.addend--second {
  grid-area: secondAddend;
  /* padding-bottom: 2vw; */
  /* border-bottom: 1px solid var(--colorTextMain); */
}

.operationSign {
  grid-area: operationSign;
  padding: 2px 2px 4px;
}

.result {
  grid-area: result;
  padding: 4vw 0;
  border-top: 1px solid var(--colorTextMain);
}

.singleNumber {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2vw;
  justify-items: center;
}
.singleNumber__singleDigit {
}

.result >>> .form__options--input {
  display: block;
  width: 10vw;
  padding: 0.4em 0.2em;
  min-width: 46px;
  box-shadow: 0px 0px 3px 1px var(--colorTextMain);
  font-size: 1.375rem;
  color: var(--colorTextMain);
  text-align: center;
}
</style>
